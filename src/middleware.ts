import { NextRequest, NextResponse } from "next/server";
import { ESupportedLocale, i18n } from "./i18n/config";


const LOCALE_COOKIE = "locale";

function extractLocale(
  pathname: string
): ESupportedLocale | undefined {
  return i18n.locales.find(
    (locale) =>
      pathname === `/${locale}` ||
      pathname.startsWith(`/${locale}/`)
  );
}

function getLocaleFromHeader(
  request: NextRequest
): ESupportedLocale {
  const acceptLanguage =
    request.headers.get("accept-language");

  if (!acceptLanguage) {
    return i18n.defaultLocale;
  }

  const preferredLocales = acceptLanguage
    .split(",")
    .map((lang) =>
      lang.split(";")[0].trim().toLowerCase()
    );

  for (const preferred of preferredLocales) {
    const matched = i18n.locales.find((locale) => {
      const normalizedLocale =
        locale.toLowerCase();

      return (
        preferred === normalizedLocale ||
        preferred.startsWith(
          `${normalizedLocale}-`
        )
      );
    });

    if (matched) {
      return matched;
    }
  }

  return i18n.defaultLocale;
}

function getLocaleFromCookie(
  request: NextRequest
): ESupportedLocale | null {
  const locale =
    request.cookies.get(LOCALE_COOKIE)?.value;

  if (!locale) {
    return null;
  }

  if (
    i18n.locales.includes(
      locale as ESupportedLocale
    )
  ) {
    return locale as ESupportedLocale;
  }

  return null;
}

function resolveLocale(
  request: NextRequest
): ESupportedLocale {
  const cookieLocale =
    getLocaleFromCookie(request);

  if (cookieLocale) {
    return cookieLocale;
  }

  return getLocaleFromHeader(request);
}

function setLocaleCookie(
  response: NextResponse,
  locale: ESupportedLocale
) {
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    sameSite: "lax",
    secure:
      process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 365, // 1 ano
  });
}

export function middleware(
  request: NextRequest
) {
  const { pathname } = request.nextUrl;

  // ✅ Ignora assets públicos explicitamente
  if (
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml")
  ) {
    return NextResponse.next();
  }

  // ✅ Locale já existe na URL
  const pathnameLocale =
    extractLocale(pathname);

  if (pathnameLocale) {
    const response = NextResponse.next();

    setLocaleCookie(
      response,
      pathnameLocale
    );

    return response;
  }

  // ✅ Resolve locale automaticamente
  const locale = resolveLocale(request);

  const url = request.nextUrl.clone();

  url.pathname = `/${locale}${pathname}`;

  const response =
    NextResponse.redirect(url);

  setLocaleCookie(response, locale);

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next|.*\\..*).*)",
  ],
};