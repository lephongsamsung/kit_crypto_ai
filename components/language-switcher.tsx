"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Language } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const languages = [
    { code: "vi" as Language, name: "Tiếng Việt", flag: "🇻🇳" },
    { code: "en" as Language, name: "English", flag: "🇺🇸" },
  ]

  const currentLang = languages.find((lang) => lang.code === currentLanguage)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="w-8 h-8 p-0 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
        >
          <span className="text-lg">{currentLang?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-black/90 backdrop-blur-xl border-white/20 text-white min-w-[140px]"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => onLanguageChange(language.code)}
            className={`cursor-pointer hover:bg-white/10 transition-colors ${
              currentLanguage === language.code ? "bg-blue-500/20" : ""
            }`}
          >
            <span className="mr-2 text-base">{language.flag}</span>
            <span className="text-sm">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
