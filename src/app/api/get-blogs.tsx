import { cache } from "react"
import { buildEnvironment } from "@/src/config"
import { HygraphAPI } from "."
import { TLocale } from "@/src/i18n/config"
import { getLocale } from "@/src/i18n"

export const getBlogs = cache(
  async (
    locale: TLocale,
    revalidate?: number
  ) => {
    try {
      const api = new HygraphAPI(buildEnvironment())

      const graphLocale = getLocale(locale)

      return await api.queryBlogs({
        locale: graphLocale,
        revalidate,
      })
    } catch (error) {
      console.error("getProjects error:", error)

      return []
    }
  }
)
export const getBlogFeatures = cache(
  async (
    locale: TLocale,
    revalidate?: number
  ) => {
    try {
      const api = new HygraphAPI(buildEnvironment())

      const graphLocale = getLocale(locale)

      console.log("getBlogFeatures locale:", graphLocale)

      const blogFeatures = await api.getBlogFeatures({
        locale: graphLocale,
        revalidate,
      })

      console.log(blogFeatures)

      return blogFeatures
    } catch (error) {
      console.error("getBlogFeatures error:", error)

      return []
    }
  }
)

export const getBlogItem = cache(
  async (
    slug: string,
    locale: TLocale,
    revalidate?: number
  ) => {
    try {
      const api = new HygraphAPI(buildEnvironment())

      const graphLocale = getLocale(locale)

      console.log("getBlogItem locale:", graphLocale)

      return await api.queryBlogItem({
        slug,
        locale: graphLocale,
        revalidate,
      })
    } catch (error) {
      console.error("getProjectItem error:", error)

      return null
    }
  }
)