import { TBlogFeaturePost, TBlogPost, TProject } from "../domain"

export type THygraphSchema = 'informations' | 'projects' | 'technologies' | 'blogs' | 'projectItem' | 'blogItem' | 'blogFeatures'

export interface IHygraphApi {
  // getInformations({ locale, revalidate }: { locale: string, revalidate: number }): Promise<any>
  queryProjects({ locale, revalidate }: { locale: string, revalidate: number }): Promise<TProject[]>
  queryProjectItem({ slug, locale, revalidate }: { slug: string, locale: string, revalidate: number }): Promise<TProject | null>
  queryBlogs({ locale, revalidate }: { locale: string, revalidate: number }): Promise<TProject[]>
  queryBlogItem({ slug, locale, revalidate }: { slug: string, locale: string, revalidate: number }): Promise<TBlogPost | null>
  getBlogFeatures({ locale, revalidate }: { locale: string, revalidate?: number }): Promise<TBlogFeaturePost[]>

  // getTechnologies({ locale, revalidate }: { locale: string, revalidate: number }): Promise<any>
  // getBlogs({ locale, revalidate }: { locale: string, revalidate: number }): Promise<any>
}