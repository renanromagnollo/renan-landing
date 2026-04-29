import { buildEnvironment } from "@/src/config";
import { cache } from "react";
import { HygraphAPI } from ".";

export const getProjects = cache(
  async (locale: string, revalidate?: number) => {
    try {
      const api = new HygraphAPI(buildEnvironment());
      return await api.queryProjects({ locale, revalidate });
    } catch (error) {
      console.error("getProjects error:", error);
      return [];
    }
  }
);

export const getProjectItem = cache(
  async (slug: string, locale: string, revalidate?: number) => {
    try {
      const api = new HygraphAPI(buildEnvironment());
      return await api.queryProjectItem({ slug, locale, revalidate });
    } catch (error) {
      console.error("getProjectItem error:", error);
      return null;
    }
  }
);