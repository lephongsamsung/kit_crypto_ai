import type React from "react"
import { LanguageProvider } from "@/hooks/use-language"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
