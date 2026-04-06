'use client'

import { useMounted, useTranslation } from "@/src/hooks";
import { useTheme } from "next-themes";
import { Logo } from "../_components/logo";
import { ThemeSwitcher } from "../_components/themeswitcher/theme-switcher";
import { AboutMe, ContactSection, Hero, WhatIDo } from "../_components/layout";
import { Projects } from "../_components/layout/projects";

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme()
  const { locale } = useTranslation()

  const mounted = useMounted();

  if (!mounted) return null; // 👈 evita mismatch

  const theme: "dark" | "light" =
    resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 font-sans dark:bg-dark">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16  sm:items-start">
        <div className="flex w-full items-center justify-between px-5">
          <Logo theme={theme} />
          <div>
            <ThemeSwitcher />
            {/* <h5 className="font-cursive">Language: {locale}</h5> */}
          </div>
        </div>
        <Hero />
        <WhatIDo />
        <AboutMe />
        <Projects />
        <ContactSection />
        {/* <h2>Caveat</h2> */}
        {/* <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>Mudar tema</button> */}
      </main>
    </div>
  );
}
