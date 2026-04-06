import { getDictionary } from "@/src/dictionary/get-dictionary"
import { Providers } from "@/src/providers"
import { i18n, TLocale } from "@/src/types"
import { notFound } from "next/navigation"

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params

  if (!i18n.locales.includes(locale as TLocale)) {
    notFound()
  }
  const dictionary = await getDictionary(locale as TLocale)

  return (
    <Providers dictionary={dictionary}>
      {children}
    </Providers>
  )
}