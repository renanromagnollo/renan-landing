"use client"

import Switch from "react-switch"
import { useTheme } from "next-themes"
import { useMounted } from "@/src/hooks"

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()

  const mounted = useMounted();

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark"

  return (
    <Switch
      checked={isDark}
      onChange={(checked) =>
        setTheme(checked ? "dark" : "light")
      }
      offColor="#3D3D3D"
      onColor="#D1D1D1"
      onHandleColor="#0D99FF"
      offHandleColor="#0D99FF"
      // handleDiameter={50}
      // checkedHandleIcon="#0D99FF"
      uncheckedIcon={false}
      checkedIcon={false}
      height={18}
      width={35}

    />
  )
}
