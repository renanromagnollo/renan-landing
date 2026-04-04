'use client'

import { useTranslation } from "@/src/hooks";

export default function Home() {

  const { locale } = useTranslation()
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-cursive">Language: {locale}</h1>
        <h2>Caveat</h2>

      </main>
    </div>
  );
}
