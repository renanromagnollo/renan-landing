'use client'

import { TranslationProvider } from "../context"
import { TDictionary } from "../i18n/types"
import { NextThemesProvider } from "./next-themes-provider"

interface ProvidersProps {
  children: React.ReactNode
  dictionary: TDictionary
}

export function Providers({ dictionary, children }: ProvidersProps) {
  // const dictionary = await getDictionary(locale)
  return (
    <NextThemesProvider>
      <TranslationProvider dictionary={dictionary}>
        {children}
      </TranslationProvider>
    </NextThemesProvider>
  )
}