import { TEnvironment } from "@/src/config";
import { IHygraphApi, THygraphSchema } from "@/src/types";
import { RawHygraphProject } from "./raw-hygraph";
import { TProject } from "@/src/domain/project";

export class HygraphAPI implements IHygraphApi {
  private readonly queries: Record<string, string>;

  constructor(private readonly env: TEnvironment) {
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
      `,
    };
  }

  private getQuery(queryName: THygraphSchema): string {
    const query = this.queries[queryName];
    if (!query) {
      throw new Error(`Query ${queryName} not found`);
    }
    return query;
  }

  private async queryHygraph<T>(
    queryName: THygraphSchema,
    delay = 0,
    variables = {},
    revalidate = 1
  ): Promise<T> {
    try {
      if (delay > 0) {
        await new Promise((resolve) => setTimeout(resolve, delay * 1000));
      }

      const query = this.getQuery(queryName);

      const response = await fetch(this.env.hygraph.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(this.env.hygraph.accessToken && {
            Authorization: `Bearer ${this.env.hygraph.accessToken}`,
          }),
        },
        body: JSON.stringify({ query, variables }),
        next: {
          revalidate: (revalidate ?? 1) * 60,
        },
      });

      const json = await response.json();

      if (!response.ok || json.errors) {
        throw new Error(json?.errors?.[0]?.message || "Hygraph error");
      }

      return json.data as T;
    } catch (error) {
      console.error("Error fetching data:", error);
      return {} as T
    }
  }

  private mapRawHygraphProject(raw?: RawHygraphProject): TProject {
    return {
      id: raw?.id ?? crypto.randomUUID(),
      order: raw?.order ?? 0,
      featured: raw?.featured ?? false,
      title: raw?.title ?? "",
      slug: raw?.slug ?? "",
      subtitle: raw?.subtitle ?? "",
      name: raw?.projectName ?? "",
      image: raw?.image?.url ?? "",
      technologies: raw?.technologies ?? [],
      text: raw?.text?.raw ?? null,
      link: raw?.link ?? "",
    };
  }

  async queryProjects({
    locale,
    revalidate,
  }: {
    locale: string;
    revalidate?: number;
  }): Promise<TProject[]> {

    const data = await this.queryHygraph<{
      projects: RawHygraphProject[]
    }>(
      "projects",
      0,
      { locale },
      revalidate
    );

    const projects = data.projects ?? [];

    return projects
      .filter(Boolean)
      .map((p) => this.mapRawHygraphProject(p));
  }

  async queryProjectItem({
    slug,
    locale,
    revalidate,
  }: {
    slug: string;
    locale: string;
    revalidate?: number;
  }): Promise<TProject | null> {
    const data = await this.queryHygraph<{
      projects: RawHygraphProject[]
    }>(
      "projectItem",
      0,
      { slug, locale },
      revalidate
    );

    const projectItem = data.projects?.[0]

    if (!projectItem) {
      return null
    }

    return this.mapRawHygraphProject(projectItem);
  }
}
