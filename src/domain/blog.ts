import { RichTextContent } from "@graphcms/rich-text-types";

export type TBlogPost = {
  id: string;
  order: number;
  featured: boolean;
  image: string;
  title: string;
  slug: string;
  text: RichTextContent;
  tags?: string[];
  relatedPost?: TRelatedBlogPost
};
export type TBlogFeaturePost = {
  id: string;
  order: number;
  image: string;
  title: string;
  slug: string;
  tags?: string[];
};

export type TRelatedBlogPost = {
  image: string;
  title: string;
  slug: string;
  text: RichTextContent
}

export type THomeBlogPost = {
  image: string;
  title: string;
  slug: string;
};

export type TBlogCardProps = {
  blog: THomeBlogPost
  locale: 'pt' | 'en'
  variant?: 'home' | 'list'
}