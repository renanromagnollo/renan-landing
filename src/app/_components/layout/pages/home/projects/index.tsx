import { getProjects } from "@/src/services/api";
import { CardProject } from "./card/card-project";

export async function Projects({ params }: { params: Promise<{ locale: string }> }) {

  const { locale } = await params
  const graphLocale = locale === 'pt' ? 'pt' : 'en'

  const projects = await getProjects(graphLocale, 1)

  // const featuredProject = projects.find(project => project.order === 0)

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <header className="mb-16">
        <h3 className="text-primary">
          Projetos em destaque
        </h3>

        <p className="text-muted-foreground mt-3 max-w-xl">
          Alguns dos projetos onde foquei em performance, arquitetura e experiência do usuário.
        </p>
      </header>

      {/* {featuredProject && <FeaturedProject project={featuredProject} />} */}

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.filter(project => project.order !== 2).map((project, index) => (
          <CardProject key={index} project={project} locale={locale} />
        ))}
      </div>
    </section>


  )
}

Projects.displayName = 'Projects'
