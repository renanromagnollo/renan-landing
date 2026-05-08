import { getDictionary } from "@/src/i18n/get-dictionary";
import {
  AboutMe,
  ContactSection,
  Footer,
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
    <>
      {/* <Header /> */}

      <Hero />

      <Structures />

      <AboutMe />

      <Projects
        locale={validLocale}
        dictionary={dictionary}
      />

      <ContactSection />

      <Footer />
    </>
  );
}