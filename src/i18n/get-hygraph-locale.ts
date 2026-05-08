import {
  ESupportedLocale,
  TLocale,
} from "./config";

export function getHygraphLocale(
  locale: TLocale
) {
  switch (locale) {
    case ESupportedLocale.PT:
      return "pt";

    case ESupportedLocale.EN:
      return "en";

    default:
      return "en";
  }
}