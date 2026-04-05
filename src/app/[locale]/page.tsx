'use client'

import { useMounted, useTranslation } from "@/src/hooks";
import { useTheme } from "next-themes";
import { Logo } from "../_components/logo";

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme()
  const { locale } = useTranslation()

  const mounted = useMounted();

  if (!mounted) return null; // 👈 evita mismatch

  const theme: "dark" | "light" =
    resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Logo theme={theme} />
        <h1 className="text-3xl font-cursive">Language: {locale}</h1>
        <h2>Caveat</h2>
        <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>Mudar tema</button>
      </main>
    </div>
  );
}
