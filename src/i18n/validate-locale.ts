import { notFound } from "next/navigation";

import {
  i18n,
  TLocale,
} from "./config";

export function validateLocale(
  locale: string
): TLocale {
  if (
    !i18n.locales.includes(
      locale as TLocale
    )
  ) {
    notFound();
  }

  return locale as TLocale;
}