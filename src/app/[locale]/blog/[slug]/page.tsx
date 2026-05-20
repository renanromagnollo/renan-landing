import { RichTextHygraph } from "@/src/app/_components/hygraph/rich-text";
import { getBlogItem } from "@/src/app/api";
import { validateLocale } from "@/src/i18n";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageParams = Promise<{
  locale: string;
  slug: string;
}>;

// export const revalidate = 60 * 60;
export const revalidate = 60;

export default async function BlogPage({
  params,
}: {
  params: PageParams;
}) {
  const { locale, slug } = await params;

  if (!slug) notFound();

  const validLocale = validateLocale(locale);

  const blogPost = await getBlogItem(slug, validLocale, revalidate);
  console.log(blogPost)

  if (!blogPost) notFound();

  return (
    <article className="max-w-6xl mx-auto px-6 py-16">

      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-300 mb-4 leading-tight">
            {blogPost.title}
          </h1>

          {/* {blogPost.subtitle && (
            <p className="text-lg text-zinc-500 mb-6">
              {blogPost.subtitle}
            </p>
          )}

          {blogPost.link && (
            <a
              href={blogPost.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition"
            >
              Acessar projeto
            </a>
          )} */}
        </div>

      </section>

      {blogPost.text && (
        <section className="mb-20">
          <div className="prose prose-neutral max-w-5xl mx-auto">
            <RichTextHygraph
              text={blogPost.text}
              className="text-zinc-400 text-justify"
            />
          </div>
        </section>
      )}

      {blogPost.technologies?.length > 0 && (
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-300 mb-8 text-center">
            Tecnologias Utilizadas
          </h2>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {blogPost.technologies.map((tech, index) => (
              <li
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-center text-sm text-zinc-400"
              >
                {tech.name}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-300 mb-8 text-center">
          Diferenciais do Projeto
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h3 className="font-semibold text-zinc-200 mb-2">
              Performance
            </h3>
            <p className="text-sm text-zinc-500">
              Estrutura otimizada para carregamento rápido e excelente experiência.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h3 className="font-semibold text-zinc-200 mb-2">
              Escalabilidade
            </h3>
            <p className="text-sm text-zinc-500">
              Arquitetura preparada para crescimento e evolução do projeto.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h3 className="font-semibold text-zinc-200 mb-2">
              SEO
            </h3>
            <p className="text-sm text-zinc-500">
              Estrutura otimizada para indexação e tráfego orgânico.
            </p>
          </div>
        </div>
      </section>

      {/* 📌 FOOTER */}
      <footer className="text-center mt-20">
        <p className="text-sm text-zinc-500 max-w-md mx-auto">
          Este conteúdo faz parte de um projeto independente, educativo e baseado em consentimento.
        </p>
      </footer>

    </article>
  );
}
