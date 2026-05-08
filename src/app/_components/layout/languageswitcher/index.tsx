"use client";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import { locales } from "@/src/i18n/config";

export function LanguageSwitcher() {
  const pathname = usePathname();

  const router = useRouter();

  const searchParams =
    useSearchParams();

  function handleLocaleChange(
    locale: string
  ) {
    /*
      pathname atual:
      /pt/blog/meu-post
    */

    const segments =
      pathname.split("/");

    /*
      Resultado:
      ["", "pt", "blog", "meu-post"]
    */

    segments[1] = locale;

    /*
      Resultado:
      ["", "en", "blog", "meu-post"]
    */

    const newPathname =
      segments.join("/");

    /*
      Resultado:
      /en/blog/meu-post
    */

    const query =
      searchParams.toString();

    /*
      Preserva:
      ?page=2
    */

    const finalUrl = query
      ? `${newPathname}?${query}`
      : newPathname;

    router.push(finalUrl);
  }

  return (
    <div className="flex items-center gap-2">
      {locales.map((locale) => {
        const isActive =
          pathname.split("/")[1] ===
          locale;

        return (
          <button
            key={locale}
            onClick={() =>
              handleLocaleChange(
                locale
              )
            }
            className={`text-sm transition-opacity ${isActive
              ? "opacity-100"
              : "opacity-50"
              }`}
          >
            {locale === "pt"
              ? "🇧🇷"
              : "🇺🇸"}
          </button>
        );
      })}
    </div>
  );
}