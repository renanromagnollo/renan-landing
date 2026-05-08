import "server-only";

import {
  ESupportedLocale,
  TLocale,
} from "./config";

import { TDictionary } from "./types";

const dictionaries: Record<
  TLocale,
  () => Promise<TDictionary>
> = {
  [ESupportedLocale.PT]: () =>
    import("./lang/pt.json").then(
      (module) => module.default
    ),

  [ESupportedLocale.EN]: () =>
    import("./lang/en.json").then(
      (module) => module.default
    ),
};

export async function getDictionary(
  locale: TLocale
): Promise<TDictionary> {
  const loader = dictionaries[locale];

  if (!loader) {
    throw new Error(
      `No dictionary found for locale: ${locale}`
    );
  }

  return loader();
}