'use client'

import { TDictionary } from "@/src/types";
import { createContext } from "react";

export const TranslationContext = createContext<TDictionary | null>(null);

export const TranslationProvider = ({
  children,
  dictionary
}: Readonly<{
  children: React.ReactNode;
  dictionary: TDictionary;
}>) => {
  return (
    <TranslationContext.Provider value={dictionary}>
      {children}
    </TranslationContext.Provider>
  )
} 