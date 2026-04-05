
export function Hero() {
  return (
    <section className="min-h-[55vh] flex flex-col justify-center max-w-5xl mx-auto">
      <h2 className=" sm:text-5xl leading-tight">
        Desenvolvedor Frontend focado em
        <span className="block text-4xl text-primary">
          performance e escalabilidade
        </span>
      </h2>

      <p className="mt-6 text-lg text-muted-foreground max-w-xl">
        Crio interfaces modernas com React e Next.js, priorizando
        performance, SEO e experiência do usuário.
      </p>

      <div className="mt-8 flex gap-4">
        <a className="px-6 py-3 rounded-xl bg-foreground text-background">
          Ver projetos
        </a>

        <a className="px-6 py-3 rounded-xl border">
          Contato
        </a>
      </div>
    </section>
  )
}