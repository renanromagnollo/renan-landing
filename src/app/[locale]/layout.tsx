import { i18n, TLocale } from "@/src/i18n/config"
import { getDictionary } from "@/src/i18n/get-dictionary"
import { Providers } from "@/src/providers"
import { notFound } from "next/navigation"
import { Header } from "../_components/layout"

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
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 font-sans">
        <main className="flex flex-col w-full gap-5 py-16 md:py-24">
          <Header locale={locale as TLocale} />

          {children}
        </main>
      </div>
    </Providers>
  )
}