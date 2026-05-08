import { getDictionary } from "@/src/i18n/get-dictionary";
import {
  AboutMe,
  ContactSection,
  Footer,
  Header,
  Hero,
  Structures,
} from "../_components/layout";

import { Projects } from "../_components/layout/pages/home/projects";

import { validateLocale } from "@/src/i18n/validate-locale";

type HomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Home({
  params,
}: HomeProps) {
  const { locale } = await params;

  const validLocale = validateLocale(locale);

  const dictionary = await getDictionary(validLocale);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 font-sans">
      <main className="flex flex-col w-full gap-5 py-16 md:py-24">
        <Header />

        <Hero />

        <Structures />

        <AboutMe />

        <Projects
          locale={validLocale}
          dictionary={dictionary}
        />

        <ContactSection />

        <Footer />
      </main>
    </div>
  );
}