"use client";

import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: "job",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Dados do formulário:", form);

    alert("Mensagem enviada com sucesso!");
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
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Seu email"
            className="p-3 rounded-lg border dark:bg-zinc-800"
            onChange={handleChange}
            required
          />
        </div>

        <input
          name="company"
          placeholder="Empresa (opcional)"
          className="w-full p-3 rounded-lg border dark:bg-zinc-800"
          onChange={handleChange}
        />

        <select
          name="type"
          className="w-full p-3 rounded-lg border dark:bg-zinc-800"
          onChange={handleChange}
        >
          <option value="job">Oportunidade de trabalho</option>
          <option value="freelance">Freelance</option>
          <option value="partnership">Parceria</option>
        </select>

        <textarea
          name="message"
          placeholder="Fale um pouco sobre a oportunidade ou projeto..."
          className="w-full p-3 rounded-lg border h-32 dark:bg-zinc-800"
          onChange={handleChange}
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
