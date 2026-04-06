"use client";

import Image from "next/image";

interface Tech {
  name: string;
  iconUrl: string;
  link?: string;
}

const techs: Tech[] = [
  {
    name: "HTML5",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg",
    link: "https://developer.mozilla.org/docs/Web/HTML",
  },
  {
    name: "CSS3",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg",
    link: "https://developer.mozilla.org/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg",
    link: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg",
    link: "https://nextjs.org/",
  },
  {
    name: "Tailwind CSS",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Figma",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg",
    link: "https://www.figma.com/",
  },
  // {
  //   name: "Photoshop",
  //   iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobephotoshop.svg",
  //   link: "https://www.adobe.com/products/photoshop.html",
  // },
  // {
  //   name: "Corel Draw",
  //   iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/coreldraw.svg",
  //   link: "https://www.coreldraw.com/",
  // },
  // Adicione mais conforme desejar
];

export function AboutMe() {
  return (
    <div>

      <section className="w-full flex flex-col md:flex-row justify-center items-center gap-5">
        <div className="flex flex-col items-center text-center">
          <Image
            src={`https://github.com/renanromagnollo.png`}
            alt={`renanromagnollo`}
            width={130}
            height={130}
            className="rounded-full object-cover grayscale"
          />

          <h4 className="mt-5 font-cursive">
            Prazer! Sou o Renan.
          </h4>
        </div>
        <div className="max-w-4xl mx-auto p-6">
          <h4 className="font-cursive text-center mb-6">Tecnologias que domino:</h4>


          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
            {techs.map((tech) => (
              <a
                key={tech.name}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:scale-110 transition-transform duration-200"
              >
                <Image
                  src={tech.iconUrl}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="mb-2"
                />
                <span className="text-sm text-center">{tech.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
