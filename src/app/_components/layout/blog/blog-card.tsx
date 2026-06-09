'use client'

import { TBlogCardProps } from "@/src/domain"
import Image from "next/image"
import Link from "next/link"

export function BlogCard({
  blog,
  locale,
  variant = "home",
}: TBlogCardProps) {

  const href = `/${locale}/blog/${blog.slug}`

  return (
    <article
      className={`
        group relative overflow-hidden rounded-2xl
        bg-zinc-900/60 border border-zinc-800
        transition-all duration-300
        hover:border-zinc-700 hover:scale-[1.01]
        ${variant === "home" ? "h-[420px]" : "h-auto"}
      `}
    >

      {/* IMAGE */}
      <Link href={href} className="block relative w-full h-[55%]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </Link>

      {/* CONTENT */}
      <div className="p-5 flex flex-col gap-3">

        {/* TITLE */}
        <Link href={href}>
          <h3
            className={`
              font-semibold text-zinc-100 leading-snug
              group-hover:text-white transition-colors
              ${variant === "home" ? "text-lg" : "text-xl"}
            `}
          >
            {blog.title}
          </h3>
        </Link>


        {/* CTA */}
        <Link
          href={href}
          className="mt-auto text-sm text-zinc-400 hover:text-white transition"
        >
          Ler artigo →
        </Link>
      </div>
    </article>
  )
}