"use client";

import { createContact } from "@/src/app/api";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

export function ContactSection() {
  const startTime = useRef<number>(0);

  useEffect(() => {
    startTime.current = Date.now();
  }, []);

  async function handleSubmit(
    e: React.SubmitEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    // ⏱️ Delay humano
    const timeSpent = Date.now() - startTime.current;

    if (timeSpent < 2000) {
      toast.warning("Envio muito rápido");
      return;
    }

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: (formData.get("company") as string) || "",
      type: formData.get("type") as
        | "job"
        | "freelance"
        | "partnership",
      message: formData.get("message") as string,
      website: (formData.get("website") as string) || "",
    };

    try {
      await createContact(data);

      toast.success("Mensagem enviada com sucesso!");

      form.reset();
    } catch (error) {
      console.error(error);

      toast.error("Erro ao enviar mensagem");
    }
  }

  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">
          Vamos trabalhar juntos?
        </h2>
        <p className="text-gray-500">
          Estou disponível para oportunidades como Frontend Developer (React / Next.js),
          freelances ou projetos sob demanda.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Seu nome"
            className="p-3 rounded-lg border dark:bg-dark"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Seu email"
            className="p-3 rounded-lg border dark:bg-zinc-800"
            required
          />
        </div>

        {/* Honeypot */}
        <input type="text" name="website" className="hidden" />

        <input
          name="company"
          placeholder="Empresa (opcional)"
          className="w-full p-3 rounded-lg border dark:bg-zinc-800"
        />

        <select
          name="type"
          className="w-full p-3 rounded-lg border dark:bg-zinc-800"
        >
          <option value="job">Oportunidade de trabalho</option>
          <option value="freelance">Freelance</option>
          <option value="partnership">Parceria</option>
        </select>

        <textarea
          name="message"
          placeholder="Fale um pouco sobre a oportunidade ou projeto..."
          className="w-full p-3 rounded-lg border h-32 dark:bg-zinc-800"
          required
        />

        <button
          type="submit"
          className="w-full p-3 rounded-lg bg-black text-white hover:opacity-90 transition"
        >
          Enviar mensagem
        </button>
      </form>

      <div className="mt-10 text-center text-sm text-gray-400">
        Quer deixar uma sugestão? Fique à vontade 🙂
      </div>
    </section>
  );
}