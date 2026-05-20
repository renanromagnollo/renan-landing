
import { TEnvironment } from "@/src/config";
import { IHygraphApi, THygraphSchema } from "@/src/types";
import { RawHygraphBlogPost, RawHygraphProject } from "./raw-hygraph";
import { TProject } from "@/src/domain/project";
import { TBlogPost } from "@/src/domain";

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
      blogPost: `
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
      blogs: `
        query BlogPosts($locale: Locale!) {
          blogs(
            locales: [$locale, pt]
            orderBy: createdAt_DESC
            first: 40
          ) {
            image {
              url
            }
            title
            slug
            tags
            text {
              raw
            }
            relatedPost {
              image {
                url
              }
              title
              slug
            }
          }
        }
      `,
      blogFeatures: `
        query BlogFeatures($locale: Locale!) {
          blogs(
            where: { featured: true }
            locales: [$locale, pt]
            orderBy: createdAt_DESC
            first: 20
          ) {
            id
            image { url }
            title
            slug
            tags
            text { raw }
            relatedPost {
              image { url }
              title
              slug
              text { raw }
            }
          }
        }
      `,
      // blogFeatures: `
      //   query BlogFeatures($locale: Locale!) {
      //     blogs(
      //       where: { featured: true }
      //       locales: [$locale, pt]
      //       orderBy: position_ASC
      //       first: 20
      //     ) {
      //       image {
      //         url
      //       }
      //       title
      //       slug
      //       tags
      //       text {
      //         raw
      //       }
      //         relatedPost {
      //         image {
      //           url
      //         }
      //         title
      //         slug
      //       }
      //     }
      //   }
      // `,
      blogItem: `
        query BlogItem($slug: String!, $locale: Locale!) {
          blogs(where: {slug: $slug}, locales: [$locale, pt]) {
            id
            order
            featured
            image {
              url
            }
            title
            slug
            text {
              raw
            }
            tags
          }
        }
      `,
    };
  }

  private getQuery(queryName: THygraphSchema): string {
    const query = this.queries[queryName];
    if (!query) throw new Error(`Query ${queryName} not found`);
    return query;
  }

  async getBlogFeatures({
    locale,
    revalidate,
  }: {
    locale: string;
    revalidate?: number;
  }): Promise<TBlogPost[]> {
    const data = await this.queryHygraph<{
      blogs: RawHygraphBlogPost[];
    }>("blogFeatures", 0, { locale }, revalidate);

    const blogs = data.blogs ?? [];

    console.log("[HYGRAPH] blogs received:", blogs.length);

    return blogs.map((b) => this.mapRawHygraphBlogPost(b));
  }

  private async queryHygraph<T>(
    queryName: THygraphSchema,
    delay = 0,
    variables = {},
    revalidate = 1
  ): Promise<T> {
    if (delay > 0) {
      await new Promise((r) => setTimeout(r, delay * 1000));
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
        revalidate,
      },
    });

    const json = await response.json();

    if (!response.ok || json.errors) {
      console.error("[HYGRAPH ERROR]", json.errors);
      throw new Error(json?.errors?.[0]?.message || "Hygraph error");
    }

    return json.data as T;
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

  private mapRawHygraphBlogPost(raw: RawHygraphBlogPost): TBlogPost {
    return {
      id: raw?.id ?? crypto.randomUUID(),
      order: raw?.order ?? 0,
      featured: raw?.featured ?? false,
      image: raw.image?.url ?? '',
      title: raw.title ?? '',
      slug: raw.slug ?? '',
      tags: raw.tags ?? [],
      text: raw.text.raw,
      relatedPost: {
        image: raw.relatedPost?.image?.url ?? '',
        title: raw.relatedPost?.title ?? '',
        slug: raw.relatedPost?.slug ?? '',
        text: raw.relatedPost?.text?.raw
      }
    }
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
      "projects",
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
  async queryBlogs({
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

  async queryBlogItem({
    slug,
    locale,
    revalidate,
  }: {
    slug: string;
    locale: string;
    revalidate?: number;
  }): Promise<TBlogPost | null> {
    const { blogs } = await this.queryHygraph<{ blogs: RawHygraphBlogPost[] }>(
      "blogItem", 0, { slug, locale }, revalidate
    );
    const blogPost = blogs?.[0]

    if (!blogPost) {
      return null
    }

    return this.mapRawHygraphBlogPost(blogPost);
  }
}
