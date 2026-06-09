import { MetadataRoute } from "next";
import { getBlogs, getProjects } from "./api";
import { locales } from "../i18n/config";


export default async function sitemap():
  Promise<MetadataRoute.Sitemap> {

  // const locales = ["pt", "en"];

  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {

    // const projects =
    //   await hygraphApi.queryProjects({
    //     locale,
    //     revalidate: 3600,
    //   });
    const projects = await getProjects(locale, 3600);

    // const blogs =
    //   await hygraphApi.queryBlogs({
    //     locale,
    //     revalidate: 3600,
    //   });
    const blogs = await getBlogs(locale, 3600);

    routes.push(
      {
        url: `https://renanromagnollo.com/${locale}`,
        lastModified: new Date(),
      },

      {
        url: `https://renanromagnollo.com/${locale}/projects`,
        lastModified: new Date(),
      },

      {
        url: `https://renanromagnollo.com/${locale}/blog`,
        lastModified: new Date(),
      }
    );

    routes.push(
      ...projects.map((project) => ({
        url: `https://renanromagnollo.com/${locale}/projects/${project.slug}`,
        lastModified: new Date(project.updatedAt),
      }))
    );

    routes.push(
      ...blogs.map((blog) => ({
        url: `https://renanromagnollo.com/${locale}/blog/${blog.slug}`,
        lastModified: new Date(blog.updatedAt),
      }))
    );
  }

  return routes;
}