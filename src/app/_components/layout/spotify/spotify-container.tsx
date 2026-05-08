'use client'

import Image from "next/image";
import { SpotifyPlayer } from ".";
import { useTranslation } from "@/src/hooks";


export function SpotifyContainer() {

  const t = useTranslation();
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
        <Image
          src='/assets/rnn_art.webp'
          alt={`renanromagnollo`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center scale-150"
          quality={80}
          priority
        />
      </div>
      <div>
        <div className="mb-6">
          <h4 className="font-cursive leading-tight">
            {t.spotify.title}
          </h4>
          <h4 className="font-cursive text-primary leading-10">{t.spotify.text}</h4>
        </div>
        <SpotifyPlayer />
      </div>
    </div>
  )
}