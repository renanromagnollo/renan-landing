'use client'

import { useMounted } from "@/src/hooks";
import { useTheme } from "next-themes";
import { Logo } from "../_components/logo";
import { AboutMe, ContactSection, Footer, Header, Hero, WhatIDo } from "../_components/layout";
import { Projects } from "../_components/layout/projects";
import { useRef } from "react";

export default function Home() {
  // const { resolvedTheme } = useTheme()
  // const { locale } = useTranslation()
  const projectsRef = useRef<HTMLDivElement | null>(null)

  const mounted = useMounted();

  if (!mounted) return null;

  function handleScroll() {
    if (!projectsRef.current) return;

    const top = projectsRef.current.offsetTop;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }
  // const theme: "dark" | "light" =
  //   resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 font-sans">
      <main className="flex flex-col w-full gap-5 py-16 md:py-24">
        <Header />
        <Hero onScrollToProjects={handleScroll} />
        <WhatIDo />
        <AboutMe />
        <Projects ref={projectsRef} />
        <ContactSection />
        <Footer />
        {/* <h2>Caveat</h2> */}
        {/* <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>Mudar tema</button> */}
      </main>
    </div>
  );
}
