import { TProject } from "@/src/domain"
import Image from "next/image"

interface FeaturedProjectProps {
  project: TProject
}
export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <div className="mb-12">
      <div className="cursor-pointer group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

        {/* IMAGEM */}
        <div className="relative w-full h-[420px] overflow-hidden">
          <Image
            src={project?.image}
            alt={`${project?.title} preview`}
            fill
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* CONTEÚDO SOBREPOSTO */}
        <div className="absolute bottom-0 p-8 text-white">
          <h3 className="text-2xl font-semibold">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-white/80 max-w-md">
            {project.subtitle}
          </p>

          <div className="mt-4 flex gap-2 flex-wrap">
            {project.technologies && project?.technologies.map((tech) => (
              <span
                key={tech.name}
                className="text-xs bg-white/10 px-2 py-1 rounded-md"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}