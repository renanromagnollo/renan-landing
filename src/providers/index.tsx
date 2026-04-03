'use client'

import { TranslationProvider } from "../context"
import { TDictionary } from "../types"

interface ProvidersProps {
  children: React.ReactNode
  dictionary: TDictionary
}

export function Providers({ dictionary, children }: ProvidersProps) {
  // const dictionary = await getDictionary(locale)
  return (
    <TranslationProvider dictionary={dictionary}>
      {children}
    </TranslationProvider>
  )
}