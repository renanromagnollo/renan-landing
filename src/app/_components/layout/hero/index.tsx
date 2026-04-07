type HeroProps = {
  onScrollToProjects: () => void
}

export function Hero({ onScrollToProjects }: HeroProps) {
  return (
    <section className="min-h-[55vh] flex flex-col justify-center max-w-5xl mx-auto">
      <h2 className=" sm:text-5xl leading-tight">
        Desenvolvimento Frontend focado em
        <span className="block text-4xl text-primary">
          performance e escalabilidade.
        </span>
      </h2>

      <p className="mt-6 text-muted-foreground max-w-xl">
        Crio interfaces modernas, priorizando performance, SEO e experiência do usuário.
      </p>

      <div className="mt-8 flex gap-4">
        <button onClick={onScrollToProjects} className="px-6 py-3 rounded-xl bg-foreground text-background">
          Projetos
        </button>

        <a className="px-6 py-3 rounded-xl border">
          Contato
        </a>
      </div>
    </section>
  )
}