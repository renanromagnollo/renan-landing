'use client'

import { useTheme } from "next-themes";
import { useMounted } from "@/src/hooks";
import { Logo, ThemeSwitcher } from "..";

export function Header() {

  const { resolvedTheme } = useTheme()

  const theme: "dark" | "light" =
    resolvedTheme === "dark" ? "dark" : "light";

  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <div className="flex flex-col sm:mb-10 w-full items-start justify-between ">
      <div className="self-end">
        <ThemeSwitcher />
      </div>
      <Logo theme={theme} />
    </div>
  )
}