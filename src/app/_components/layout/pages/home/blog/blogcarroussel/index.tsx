"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { BlogCard } from "./card";
import { TBlogFeaturePost } from "@/src/domain";

export function BlogCarroussel({
  blogs,
  locale,
}: {
  blogs: TBlogFeaturePost[];
  locale: "pt" | "en";
}) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 0.6,
        startDelay: 1000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  if (!blogs?.length) return null;

  const duplicatedBlogs = [...blogs, ...blogs];


  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pb-30 bg-background overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 pl-6 pr-6">
          {duplicatedBlogs.map((blog, index) => (
            <div
              key={`${blog.slug}-${index}`}
              className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_40%] lg:flex-[0_0_30%]"
            >
              <BlogCard blog={blog} locale={locale} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}