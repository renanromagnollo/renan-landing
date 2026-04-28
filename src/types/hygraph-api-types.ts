import { TProject } from "../domain/project"

export type THygraphSchema = 'informations' | 'projects' | 'technologies' | 'blogs' | 'projectItem'

export interface IHygraphApi {
  // getInformations({ locale, revalidate }: { locale: string, revalidate: number }): Promise<any>
  queryProjects({ locale, revalidate }: { locale: string, revalidate: number }): Promise<TProject[]>
  queryProjectItem({ slug, locale, revalidate }: { slug: string, locale: string, revalidate: number }): Promise<TProject | null>
  // getTechnologies({ locale, revalidate }: { locale: string, revalidate: number }): Promise<any>
  // getBlogs({ locale, revalidate }: { locale: string, revalidate: number }): Promise<any>
}