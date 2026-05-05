import { buildEnvironment } from "@/src/config";
import { TContactFormInput } from "@/src/types";
import { SupabaseAPI } from ".";

export async function createContact(input: TContactFormInput) {
  const api = new SupabaseAPI(buildEnvironment());
  await api.createContact(input);
}