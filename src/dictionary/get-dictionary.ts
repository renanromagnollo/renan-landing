'server only'

import { TDictionary, TLocale, ESupportedLocale } from '../types'

const dictionaries: Record<TLocale, () => Promise<TDictionary>> = {
  [ESupportedLocale.PT]: () => import('./lang/pt.json').then((m) => m.default as TDictionary),
  [ESupportedLocale.EN]: () => import('./lang/en.json').then((m) => m.default as TDictionary),
}

export async function getDictionary(locale: TLocale) {
  const loader = dictionaries[locale]
  if (!loader) {
    if (!loader) throw new Error(`No dictionary for locale: ${locale}`)
  }
  return loader()
}