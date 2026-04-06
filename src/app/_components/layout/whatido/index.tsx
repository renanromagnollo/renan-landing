import {
  Zap,
  Layers,
  Link2,
  Search,
  BarChart3,
  Database,
  LucideIcon
} from "lucide-react";
import { CardWhatIDo } from "./card-whatido";

export type TService = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: TService[] = [
  {
    icon: Zap,
    title: "Performance",
    description:
      "Aplicações rápidas com Core Web Vitals otimizados e excelente experiência do usuário.",
  },
  {
    icon: Layers,
    title: "Arquitetura",
    description:
      "Frontend escalável com Next.js, pensado para crescer sem virar bagunça.",
  },
  {
    icon: Link2,
    title: "Integrações",
    description:
      "Conexão eficiente com APIs REST e GraphQL, com tratamento robusto de dados.",
  },
  {
    icon: Search,
    title: "SEO Técnico",
    description:
      "Estrutura otimizada para indexação, performance e visibilidade orgânica.",
  },
  {
    icon: BarChart3,
    title: "Dados",
    description:
      "Gerenciamento inteligente de estado e cache com React Query.",
  },
  {
    icon: Database,
    title: "Escalabilidade",
    description:
      "Estratégias para aplicações sustentáveis e de fácil manutenção.",
  },
];

export function WhatIDo() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <header className="mb-12">
        {/* <h4 className="text-primary">
          O que eu entrego:
        </h4> */}
        <p className="text-muted-foreground mt-2">
          Mais do que código — soluções pensadas para performance, escala e resultado.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, index) => <CardWhatIDo key={index} item={item} />)}
      </div>
    </section>
  );
}
