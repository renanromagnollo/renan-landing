
import { TContactFormInput } from "@/src/types";

export async function createContact(input: TContactFormInput) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    const error = await res.json();

    throw new Error(error.error || "Erro ao enviar");
  }
}