import { TContactFormInput, ISupabaseApi } from "@/src/types";
import { TEnvironment } from "@/src/config";
import { SupabaseClientFactory } from ".";

export class SupabaseAPI implements ISupabaseApi {
  private readonly client

  constructor(env: TEnvironment) {
    this.client = SupabaseClientFactory.create(env)
  }

  async createContact(input: TContactFormInput): Promise<void> {
    const { error } = await this.client.from('contacts').insert([
      {
        name: input.name,
        email: input.email,
        company: input.company ?? null,
        type: input.type,
        message: input.message
      }
    ])

    if (error) {
      throw new Error(error.message)
    }
  }
}