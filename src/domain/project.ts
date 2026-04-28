import { RichTextContent } from "@graphcms/rich-text-types";

export type TProject = {
  id: string;
  order: number;
  featured: boolean;
  title: string;
  slug: string;
  subtitle: string;
  name: string;
  image: string;
  technologies: { name: string }[];
  text: RichTextContent | null;
  link: string;
}