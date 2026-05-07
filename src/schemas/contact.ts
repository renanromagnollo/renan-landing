// src/schemas/contact.ts

import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  company: z.string().optional(),
  type: z.enum(["job", "freelance", "partnership"]),
  message: z.string().min(10),

  website: z.string().optional(), // honeypot
});

export type TContactFormInput = z.infer<typeof contactSchema>;