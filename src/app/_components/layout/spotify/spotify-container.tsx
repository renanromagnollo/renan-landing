'use client'

import Image from "next/image";
import { SpotifyPlayer } from ".";
import { useTranslation } from "@/src/hooks";

export function SpotifyContainer() {

  const t = useTranslation();

  return (
    <div className="w-full flex flex-col gap-5 md:flex-row">

      {/* <div className="relative w-full md:basis-1/3 aspect-square rounded-3xl overflow-hidden">
        <Image
          src='/assets/rnn_art.webp'
          alt='renanromagnollo'
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center scale-150"
          quality={80}
          priority
        />
      </div> */}

      <div className="w-full">
        <div className="mb-6">
          <h4 className="font-cursive leading-tight">
            {t.spotify.title}
          </h4>

          <h4 className="font-cursive text-primary leading-10">
            {t.spotify.text}
          </h4>
        </div>

        <SpotifyPlayer />
      </div>

    </div>
  )
}