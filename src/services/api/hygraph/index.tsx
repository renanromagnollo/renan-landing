import { TEnvironment } from "@/src/config";
import { IHygraphApi, THygraphSchema } from "@/src/types";
import { RawHygraphProject } from "./raw-hygraph";
import { TProject } from "@/src/domain/project";

export class HygraphAPI implements IHygraphApi {

  private readonly queries: Record<string, string>
  constructor(
    private readonly env: TEnvironment,
  ) {
    this.queries = {
      projects: `
        query Projects($locale: Locale!) {
          projects(
            locales: [$locale, pt]
            first: 20
          ){
            id
            order
            featured
            title
            slug
            subtitle
            projectName
            image {
              url
            }
            technologies {
              name
            }
            text {
              raw
            }
            link
          }
        }
      `,
      projectItem: `
        query ProjectItem($slug: String!, $locale: Locale!) {
          projects(where: {slug: $slug}, locales: [$locale, pt]) {
            id
            order
            featured
            title
            slug
            subtitle
            projectName
            image {
              url
            }
            technologies {
              name
            }
            text {
              raw
            }
            link
          }
      }
      `

    }
  }

  private getQuery(queryName: THygraphSchema): string {
    const query = this.queries[queryName];
    if (!query) {
      throw new Error(`Query ${queryName} not found`);
    }
    return query;
  }

  private async queryHygraph(queryName: THygraphSchema, delay = 1, variables = {}, revalidate = 1): Promise<unknown> {
    try {
      if (delay > 0) {
        await new Promise((resolve) => setTimeout(resolve, delay * 1000));
      }

      const query = this.getQuery(queryName)

      const response = await fetch(this.env.hygraph.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(this.env.hygraph.accessToken && {
            Authorization: `Bearer ${this.env.hygraph.accessToken}`
          }),
        },
        body: JSON.stringify({ query, variables }),
        next: {
          revalidate: revalidate * 60
        },
      });

      const { data, errors } = await response.json();

      if (errors) {
        throw new Error(errors[0].message);
      }

      return data

    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  private mapRawHygraphProject(raw: RawHygraphProject): TProject {
    return {
      id: raw.id,
      order: raw.order,
      featured: raw.featured,
      title: raw.title,
      slug: raw.slug,
      subtitle: raw.subtitle,
      name: raw.projectName,
      image: raw.image.url,
      technologies: raw.technologies,
      text: raw.text.raw,
      link: raw.link
    }
  }

  async queryProjects({ locale, revalidate }: { locale: string, revalidate?: number }): Promise<TProject[]> {
    const { projects } = await this.queryHygraph('projects', 1, { locale }, revalidate) as { projects: RawHygraphProject[] }
    return projects.map(this.mapRawHygraphProject)
  }

  async queryProjectItem({ slug, locale, revalidate }: { slug: string, locale: string, revalidate?: number }): Promise<TProject> {
    console.log(slug)
    const { projects } = await this.queryHygraph('projectItem', 1, { slug, locale }, revalidate) as { projects: RawHygraphProject[] }
    console.log(projects)
    const projectItem = projects[0]
    return this.mapRawHygraphProject(projectItem)
  }


}