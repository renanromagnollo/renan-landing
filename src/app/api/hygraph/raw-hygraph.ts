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

export type RawHygraphBlogPost = {
  id: string;
  order: number;
  featured: boolean;
  image: {
    url: string
  }
  title: string
  slug: string
  text: {
    raw: RichTextContent
  }
  tags: string[]
  relatedPost: {
    image: {
      url: string
    }
    title: string
    slug: string
    text: {
      raw: RichTextContent
    };
  }
}