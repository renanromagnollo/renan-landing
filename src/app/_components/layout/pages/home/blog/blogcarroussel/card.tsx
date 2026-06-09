import { TBlogFeaturePost } from "@/src/domain";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export function BlogCard({
  blog,
  className,
  locale,
}: {
  blog: TBlogFeaturePost;
  className?: string;
  locale?: "pt" | "en";
}) {

  console.log(blog);
  return (
    <Link href={`/${locale}/blog/${blog.slug}`}>
      <div
        className={clsx(
          "relative w-full h-[550px] shrink-0 shadow-2xl",
          className
        )}
      >
        <div className="absolute z-10 bottom-0 left-0 px-10 w-full h-[30%] bg-black/50">
          <h4 className="pt-5 text-white">{blog.title}</h4>
        </div>

        <Image
          src={blog.image || "https://picsum.photos/800/600"}
          alt={blog.title}
          fill
          className="object-cover object-center"
        />
      </div>
    </Link>
  );
}