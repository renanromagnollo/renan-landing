import { TService } from "."

interface CardStructuresProps {
  item: TService
}
export function CardStructures({ item }: CardStructuresProps) {

  const Icon = item.icon
  return (
    <div
      className="flex flex-col justify-start items-center p-6 rounded-2xl border border-border transition-all duration-300 bg-background hover:shadow-md hover:-translate-y-1"
    >
      <Icon className="w-8 h-8 mb-4 text-primary" />

      <h6 className="font-medium mb-2 text-center">
        {item.title}
      </h6>

      <p className="text-sm text-center leading-relaxed">
        {item.description}
      </p>
    </div>
  )
}