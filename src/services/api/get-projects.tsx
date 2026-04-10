import { buildEnvironment } from "@/src/config";
import { cache } from "react";
import { HygraphAPI } from ".";

export const getProjects = cache(async (locale: string, revalidate?: number) => {
  const api = new HygraphAPI(buildEnvironment())
  return await api.queryProjects({ locale, revalidate })
})

export const getProjectItem = cache(async (slug: string, locale: string, revalidate?: number) => {
  const api = new HygraphAPI(buildEnvironment())
  return await api.queryProjectItem({ slug, locale, revalidate })
})