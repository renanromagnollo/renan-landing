'use client'

import { useTheme } from "next-themes";
import { useMounted } from "@/src/hooks";
import { Logo, ThemeSwitcher } from "..";
import { LanguageSwitcher } from "../languageswitcher";
import Link from "next/link";
import { TLocale } from "@/src/i18n/config";
import { usePathname } from "next/navigation";


type HeaderProps = {
  locale: TLocale
}
export function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme()

  const mounted = useMounted();

  if (!mounted) return null;

  const theme: "dark" | "light" =
    resolvedTheme === "dark" ? "dark" : "light";

  const isHome =
    pathname === `/${locale}` ||
    pathname === `/${locale}/`;

  return (
    <header
      className="
        w-full
        border-b border-black/10 dark:border-white/10
        pb-6
        px-[10vw]
        sm:mb-10
      "
    >

      <div className="flex flex-col md:flex-row-reverse sm:mb-10 w-full items-start justify-between">
        <div className="flex self-end gap-5">
          {isHome && <LanguageSwitcher />}
          <ThemeSwitcher />
        </div>
        <Link
          href={`/${locale}`}>
          <Logo theme={theme} className="w-[360px] h-auto" />
        </Link>
      </div>
    </header>
  )
}