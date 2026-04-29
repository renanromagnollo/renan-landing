
// import { useTheme } from "next-themes";
// import { Logo } from "../_components/logo";
import { AboutMe, ContactSection, Footer, Header, Hero, WhatIDo } from "../_components/layout";
import { Projects } from "../_components/layout/pages/home/projects";
// import { useRef } from "react";

export type HomeProps = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: HomeProps) {
  // const { resolvedTheme } = useTheme()
  // const { locale } = useTranslation()

  // const { locale = 'pt' } = await params

  // const graphLocale = locale === 'pt' ? 'pt' : 'en'

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 font-sans">
      <main className="flex flex-col w-full gap-5 py-16 md:py-24">
        <Header />
        <Hero />
        <WhatIDo />
        <AboutMe />
        <Projects params={params} />
        <ContactSection />
        <Footer />
        {/* <h2>Caveat</h2> */}
        {/* <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>Mudar tema</button> */}
      </main>
    </div>
  );
}
