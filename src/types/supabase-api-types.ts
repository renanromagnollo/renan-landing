export type TContactFormInput = {
  name: string
  email: string
  company?: string
  type: 'job' | 'freelance' | 'partnership'
  message: string
}

export interface ISupabaseApi {
  createContact(data: TContactFormInput): Promise<void>
}