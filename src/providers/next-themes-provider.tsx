import { ThemeProvider } from "next-themes"

interface NextThemesProviderProps {
  children: React.ReactNode
}
export function NextThemesProvider({ children }: NextThemesProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}