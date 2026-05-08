'use client'

import { useTranslation } from "@/src/hooks"


export function Hero() {

  const t = useTranslation()
  console.log(t)

  return (
    <section className="min-h-[55vh] flex flex-col justify-center max-w-5xl mx-auto">
      <h2 className=" sm:text-5xl leading-tight">
        {t.home.hero.titleA}
        <span className="block text-4xl text-primary">
          {t.home.hero.titleB}
        </span>
      </h2>

      <p className="mt-6 text-muted-foreground max-w-xl">
        {t.home.hero.subtitle}
      </p>

      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 rounded-xl bg-foreground text-background">
          Projetos
        </button>

        <a className="px-6 py-3 rounded-xl border">
          Contato
        </a>
      </div>
    </section>
  )
}