import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/seuuser",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/seulink",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/seuuser",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

        {/* Identidade */}
        <div>
          <h2 className="text-lg font-semibold">Renan Romagnollo</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
            Desenvolvedor Frontend especializado em React e Next.js,
            criando interfaces modernas, performáticas e focadas em conversão.
          </p>
        </div>

        {/* Contato (CTA forte) */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Contato</h3>

          <div className="flex flex-col gap-3 text-sm">

            {/* WhatsApp */}
            <a
              href="https://wa.me/5531982156685?text=Olá%20Renan,%20vi%20seu%20site%20e%20gostaria%20de%20falar%20sobre%20uma%20oportunidade"
              target="_blank"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>

            <a
              href="mailto:renanromagnollo@gmail.com?subject=Oportunidade%20Frontend"
              className="flex items-center gap-2 hover:underline text-zinc-700 dark:text-zinc-300"
            >
              <Mail size={16} />
              renanromagnollo@gmail.com
            </a>

          </div>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Redes</h3>

          <div className="flex gap-5 items-center">

            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                aria-label={item.name}
                className="group"
              >
                <Image
                  width={20}
                  height={20}
                  src={item.icon}
                  alt={item.name}
                  className="w-5 h-5 opacity-80 group-hover:opacity-100 transition"
                />
              </a>
            ))}

          </div>
        </div>
      </div>

      <div className="text-center text-sm text-zinc-500 py-4 border-t border-zinc-200 dark:border-zinc-800">
        © {new Date().getFullYear()} Renan Romagnollo. Todos os direitos reservados.
      </div>
    </footer>
  );
}
