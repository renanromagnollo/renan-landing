'use client'

import {
  Zap,
  Layers,
  Link2,
  Search,
  BarChart3,
  Database,
  LucideIcon
} from "lucide-react";
import { CardStructures } from "./card-structures";
import { useTranslation } from "@/src/hooks";

export type TService = {
  icon: LucideIcon;
  title: string;
  description: string;
};



export function Structures() {

  const t = useTranslation()

  const services: TService[] = [
    {
      icon: Zap,
      title: t.home.structures.features.performance.title,
      description: t.home.structures.features.performance.subtitle,
    },
    {
      icon: Layers,
      title: t.home.structures.features.architecture.title,
      description: t.home.structures.features.architecture.subtitle,
    },
    {
      icon: Link2,
      title: t.home.structures.features.integrations.title,
      description: t.home.structures.features.integrations.subtitle,
    },
    {
      icon: Search,
      title: t.home.structures.features.seo.title,
      description: t.home.structures.features.seo.subtitle,
    },
    {
      icon: BarChart3,
      title: t.home.structures.features.data.title,
      description: t.home.structures.features.data.subtitle,
    },
    {
      icon: Database,
      title: t.home.structures.features.scalability.title,
      description: t.home.structures.features.scalability.subtitle,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6">
      <header className="mb-12">
        {/* <h4 className="text-primary">
          O que eu entrego:
        </h4> */}
        <p className="text-muted-foreground mt-2">
          {t.home.structures.subtitle}
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, index) => <CardStructures key={index} item={item} />)}
      </div>
    </section>
  );
}
