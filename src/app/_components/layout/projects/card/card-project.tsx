import { TProject } from "@/src/domain";
import Image from "next/image";
import Link from "next/link";

interface CardProjectProps {
  project: TProject
  locale: string
}
export function CardProject({ project, locale }: CardProjectProps) {
  return (
    <Link href={`/${locale}/projects/${project.slug}`}>
      <div
        className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      >
        <div className="cursor-pointer relative w-full h-52 overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-lg font-medium">
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground mt-2">
            {project.subtitle}
          </p>

          <div className="mt-4 flex gap-2 flex-wrap">
            {project.technologies && project.technologies.map((tech) => (
              <span
                key={tech.name}
                className="text-xs border px-2 py-1 rounded-md"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>

  )
}