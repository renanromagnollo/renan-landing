import { cn } from "@/src/utils";
import { tv, VariantProps } from "tailwind-variants";

const cursive = tv({
  base: 'font-cursive text-5xl',
  variants: {
    color: {
      primaryDefault: 'text-primary-default',
      primaryLight: 'text-primary-light',
      secondaryDefault: 'text-secondary-default',
      lightDefault: 'text-light-default',
    },
    size: {
      sm: "text-sm",
      md: "text-3xl",
      lg: "text-5xl",
      xl: "text-6xl",
    },
    font: {
      caveat: 'font-caveat',
    },
  },
  defaultVariants: {
    color: "lightDefault",
    size: "lg",
    font: "caveat"
  }
})

type CursiveVariants = VariantProps<typeof cursive>

interface CursiveTextProps extends CursiveVariants {
  children: React.ReactNode
}

export function CursiveText({ font, color, size, children, className }: CursiveTextProps & { className?: string }) {
  return <p className={cn(cursive({ font, color, size }), className)}>{children}</p>
}