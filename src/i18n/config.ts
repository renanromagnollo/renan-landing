export enum ESupportedLocale {
  PT = 'pt',
  EN = 'en'
}

export const locales = [
  ESupportedLocale.PT,
  ESupportedLocale.EN
]

export const i18n = {
  defaultLocale: ESupportedLocale.EN,
  locales
} as const

export type TLocale = (typeof i18n.locales)[number]