import { getProjects } from "@/src/app/api";

import { CardProject } from "./card/card-project";

import { TLocale } from "@/src/i18n/config";
import { TDictionary } from "@/src/i18n/types";
import { getProjectsFeatures } from "@/src/app/api/get-projects";

interface ProjectsProps {
  locale: TLocale;
  dictionary: TDictionary
}

export async function Projects({
  locale,
  dictionary
}: ProjectsProps) {
  const projectsFeatures = await getProjectsFeatures(locale, 1);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <header className="mb-16">
        <h3 className="text-primary">
          {dictionary.home.projects.title}
        </h3>

        <p className="text-muted-foreground mt-3 max-w-xl">
          {dictionary.home.projects.subtitle}
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {projectsFeatures
          .filter((project) => project.order !== 2)
          .map((project, index) => (
            <CardProject
              key={index}
              project={project}
              locale={locale}
            />
          ))}
      </div>
    </section>
  );
}

Projects.displayName = "Projects";