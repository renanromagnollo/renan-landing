import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
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


export function Projects() {
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
      <div className="mb-12">
        <div className="cursor-pointer group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

          {/* IMAGEM */}
          <div className="relative w-full h-[420px] overflow-hidden">
            <Image
              src={projects[0].image}
              alt={`${projects[0].title} preview`}
              fill
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* CONTEÚDO SOBREPOSTO */}
          <div className="absolute bottom-0 p-8 text-white">
            <h3 className="text-2xl font-semibold">
              {projects[0].title}
            </h3>

            <p className="mt-2 text-sm text-white/80 max-w-md">
              {projects[0].description}
            </p>

            <div className="mt-4 flex gap-2 flex-wrap">
              {projects[0].tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-white/10 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* GRID SECUNDÁRIO */}
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.slice(1).map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {/* IMAGEM */}
            <div className="cursor-pointer relative w-full h-52 overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>

            {/* TEXTO */}
            <div className="p-6">
              <h3 className="text-lg font-medium">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground mt-2">
                {project.description}
              </p>

              <div className="mt-4 flex gap-2 flex-wrap">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs border px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


  )
}