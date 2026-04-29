import { RichTextContent } from '@graphcms/rich-text-types';

export type RawHygraphProject = {
  id: string;
  order: number;
  featured: boolean;
  title: string;
  slug: string;
  subtitle: string;
  projectName: string;
  image: {
    url: string;
  }
  technologies: {
    name: string;
  }[];
  text: { raw: RichTextContent };
  link: string;
}