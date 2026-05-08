'use client'

import { useTheme } from "next-themes";
import { useMounted } from "@/src/hooks";
import { Logo, ThemeSwitcher } from "..";
import { LanguageSwitcher } from "../languageswitcher";

export function Header() {

  const { resolvedTheme } = useTheme()

  const theme: "dark" | "light" =
    resolvedTheme === "dark" ? "dark" : "light";

  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <div className="flex flex-col sm:mb-10 w-full items-start justify-between">
      <div className="flex self-end gap-5">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
      <Logo theme={theme} />
    </div>
  )
}