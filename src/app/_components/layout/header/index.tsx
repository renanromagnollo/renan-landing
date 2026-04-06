import { useTheme } from "next-themes";
import { Logo } from "../../logo";
import { ThemeSwitcher } from "../../themeswitcher/theme-switcher";

export function Header() {

  const { resolvedTheme } = useTheme()

  const theme: "dark" | "light" =
    resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div className="flex flex-col sm:mb-10 w-full items-start justify-between ">
      <div className="self-end">
        <ThemeSwitcher />
      </div>
      <Logo theme={theme} />
    </div>
  )
}