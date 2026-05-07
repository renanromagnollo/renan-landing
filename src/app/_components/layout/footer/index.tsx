import { Mail, MessageCircle } from "lucide-react";
import { Icon } from "../icons";
import Link from "next/link";
import { Spotify } from "../spotify";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold">Renan Romagnollo</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
            Desenvolvedor Frontend especializado em interfaces modernas, performáticas e focadas em conversão.
          </p>
        </div>

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
              className="flex items-center gap-2 hover:underline text-dark dark:text-light"
            >
              <Mail size={20} />
              renanromagnollo@gmail.com
            </a>

          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4">Redes</h3>

          <div className="flex gap-5 items-center">
            <Link href='https://github.com/renanromagnollo' target="_blank" title="GitHub">
              <Icon name="github" />
            </Link>
            <Link href='https://www.linkedin.com/in/renanromagnollo/' target="_blank" title="Linkedin">
              <Icon name="linkedin" />
            </Link>
            <Link href='https://www.instagram.com/renanromagnollo/' target="_blank" title="Instagram">
              <Icon name="instagram" />
            </Link>
          </div>
        </div>


      </div>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
          <Image
            src='/assets/rnn_art.webp'
            alt={`renanromagnollo`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center scale-150"
            quality={90}
            priority
          />
        </div>
        <div>
          <div className="mb-6">
            <h4 className="font-cursive leading-tight">
              Quer melhorar seu foco e produtividade?
            </h4>
            <h4 className="font-cursive text-primary leading-10">Utilize fones de ouvido e ouça a minha playlist para reduzir distrações e manter sua concentração...</h4>
          </div>
          <Spotify />
        </div>
      </div>



      <div className="text-center text-sm text-zinc-500 py-4 border-t border-zinc-200 dark:border-zinc-800">
        © {new Date().getFullYear()} Renan Romagnollo. Todos os direitos reservados.
      </div>
    </footer>
  );
}
