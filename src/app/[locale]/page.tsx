
// import { useTheme } from "next-themes";
// import { Logo } from "../_components/logo";
import { AboutMe, ContactSection, Footer, Header, Hero, WhatIDo } from "../_components/layout";
import { Projects } from "../_components/layout/projects";
// import { useRef } from "react";

export type HomeProps = {
  params: { locale: string }
}

export default function Home({ params }: HomeProps) {
  // const { resolvedTheme } = useTheme()
  // const { locale } = useTranslation()

  const resolvedParams = params

  const locale = resolvedParams?.locale ?? 'pt'
  const graphLocale = locale === 'pt' ? 'pt' : 'en'

  // const projectsRef = useRef<HTMLDivElement | null>(null)

  // const mounted = useMounted();

  // if (!mounted) return null;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 font-sans">
      <main className="flex flex-col w-full gap-5 py-16 md:py-24">
        <Header />
        <Hero />
        <WhatIDo />
        <AboutMe />
        <Projects locale={graphLocale} />
        <ContactSection />
        <Footer />
        {/* <h2>Caveat</h2> */}
        {/* <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>Mudar tema</button> */}
      </main>
    </div>
  );
}
