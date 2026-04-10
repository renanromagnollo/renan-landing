import { getProjects } from "@/src/services/api";
import Image from "next/image";
import { FeaturedProject } from "./featured-project";
import { CardProject } from "./card/card-project";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Site para Salão",
    description:
      "Site institucional com foco em tráfego orgânico e SEO.",
    image: "/assets/mocks/mock-sabrina.webp",
    tech: ["Next.js", "Supabase", "Tailwind"],
  },
  {
    title: "Blog com SEO e Afiliados",
    description:
      "Plataforma de conteúdo com foco em tráfego orgânico e monetização.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    tech: ["Next.js", "SEO"],
  },
  {
    title: "Dashboard de Dados",
    description:
      "Visualização e análise de dados com foco em performance e UX.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    tech: ["React", "Charts"],
  },
];

export async function Projects({ locale }: { locale: string }) {

  const projects = await getProjects(locale, 1)

  console.log(projects)
  const featuredProject = projects.find(project => project.order === 0)
  console.log(featuredProject)


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

      {/* PROJETO PRINCIPAL */}
      {/* {featuredProject && <FeaturedProject project={featuredProject} />} */}

      {/* GRID SECUNDÁRIO */}
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.filter(project => project.order !== 2).map((project, index) => (
          <CardProject key={index} project={project} locale={locale} />
        ))}
      </div>
    </section>


  )
}

Projects.displayName = 'Projects'
