import Image from "next/image";

export function Me() {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={`https://github.com/renanromagnollo.png`}
        alt={`renanromagnollo`}
        width={130}
        height={130}
        className="rounded-full object-cover grayscale"
      />
      <h4 className="mt-5 font-cursive">
        Olá! Esse sou eu...
      </h4>
    </div>
  )
}