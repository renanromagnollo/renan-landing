import { NextRequest, NextResponse } from "next/server"
import { ESupportedLocale, i18n } from "./types"


const LOCALE_COOKIE = "locale"

function hasLocale(pathname: string): boolean {
  return i18n.locales.some(
    (locale) =>
      pathname === `/${locale}` ||
      pathname.startsWith(`/${locale}/`)
  )
}

function getLocaleFromHeader(request: NextRequest): ESupportedLocale {
  const acceptLanguage = request.headers.get("accept-language")

  if (!acceptLanguage) {
    return i18n.defaultLocale
  }

  const preferredLocales = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim().toLowerCase())

  for (const preferred of preferredLocales) {
    const matched = i18n.locales.find(
      (locale) =>
        preferred === locale ||
        preferred.startsWith(`${locale}-`)
    )

    if (matched) {
      return matched
    }
  }

  return i18n.defaultLocale
}

function resolveLocale(request: NextRequest): ESupportedLocale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value

  if (
    cookieLocale &&
    i18n.locales.includes(cookieLocale as ESupportedLocale)
  ) {
    return cookieLocale as ESupportedLocale
  }

  return getLocaleFromHeader(request)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 🔹 Se já tem locale → continua
  if (hasLocale(pathname)) {
    return NextResponse.next()
  }

  const locale = resolveLocale(request)

  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}
