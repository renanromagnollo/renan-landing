import { cache } from "react";

import { buildEnvironment } from "@/src/config";

import { HygraphAPI } from ".";

import { TLocale } from "@/src/i18n/config";

import { getHygraphLocale } from "@/src/i18n/get-hygraph-locale";

export const getProjects = cache(
  async (
    locale: TLocale,
    revalidate?: number
  ) => {
    try {
      const api = new HygraphAPI(
        buildEnvironment()
      );

      const graphLocale =
        getHygraphLocale(locale);

      return await api.queryProjects({
        locale: graphLocale,
        revalidate,
      });
    } catch (error) {
      console.error(
        "getProjects error:",
        error
      );

      return [];
    }
  }
);

export const getProjectItem = cache(
  async (
    slug: string,
    locale: TLocale,
    revalidate?: number
  ) => {
    try {
      const api = new HygraphAPI(
        buildEnvironment()
      );

      const graphLocale =
        getHygraphLocale(locale);

      return await api.queryProjectItem({
        slug,
        locale: graphLocale,
        revalidate,
      });
    } catch (error) {
      console.error(
        "getProjectItem error:",
        error
      );

      return null;
    }
  }
);