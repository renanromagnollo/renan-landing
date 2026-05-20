import { THomeBlogPost } from "@/src/domain"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll";
import { BlogCard } from ".";
import { TLocale } from "@/src/i18n/config";

type Props = {
  posts: THomeBlogPost[]
  locale: TLocale
}

export function HomeBlogCarousel({ posts, locale }: Props) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 0.6,
        startDelay: 2000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ]
  )

  return (
    <section className="w-full bg-zinc-950 py-24">

      {/* HEADER EDITORIAL */}
      <div className="px-6 md:px-20 mb-10">
        <h2 className="text-zinc-400 text-4xl md:text-6xl">
          Últimos artigos
        </h2>

        <p className="text-zinc-500 mt-2 max-w-xl">
          Insights, ideias e conteúdos sobre desenvolvimento, produto e tecnologia.
        </p>
      </div>

      {/* CAROUSEL */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-6 px-6 md:px-20">

          {posts.map((post, index) => (
            <div
              key={post.slug}
              className={`
                flex-[0_0_85%]
                sm:flex-[0_0_60%]
                md:flex-[0_0_40%]
                lg:flex-[0_0_28%]
                ${index === 0 ? "md:pl-0" : ""}
              `}
            >
              <BlogCard
                locale={locale}
                blog={post}
                variant="home"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}