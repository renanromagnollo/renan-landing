import { getBlogFeatures } from "@/src/app/api";


import { TLocale } from "@/src/i18n/config";
import { TDictionary } from "@/src/i18n/types";
import { BlogCarroussel } from "./blogcarroussel";

interface BlogFeaturesProps {
  locale: TLocale;
  dictionary: TDictionary
}

export async function BlogFeatures({
  locale,
  dictionary
}: BlogFeaturesProps) {
  const blogFeatures = await getBlogFeatures(locale, 1);

  return (
    <BlogCarroussel
      blogs={blogFeatures}
      locale={locale}
    />
  )
}
