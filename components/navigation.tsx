"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Settings, BookOpen, TrendingUp, User, Calculator, Zap, Home } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <nav className="relative border-b border-white/10 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-xl sticky top-0 z-50">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 animate-pulse"></div>

      {/* Glowing border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-75 animate-pulse group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t.home.title}
              </h1>
              <div className="text-xs text-cyan-300/70 font-mono">AI-POWERED CRYPTO ADVISOR</div>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Home Button - Always visible */}
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-cyan-400/30 rounded-lg backdrop-blur-sm"
            >
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline font-medium">Chat</span>
              </Link>
            </Button>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-cyan-400/30 rounded-lg backdrop-blur-sm"
              >
                <Link href="/notes" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="font-medium">{t.nav.notes}</span>
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-purple-400/30 rounded-lg backdrop-blur-sm"
              >
                <Link href="/dashboard" className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-medium">{t.nav.dashboard}</span>
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-blue-400/30 rounded-lg backdrop-blur-sm"
              >
                <Link href="/formulas" className="flex items-center gap-2">
                  <Calculator className="h-4 w-4" />
                  <span className="font-medium">{t.nav.formulas}</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Navigation Icons */}
            <div className="sm:hidden flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-10 h-10 p-0 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-lg"
              >
                <Link href="/notes">
                  <BookOpen className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-10 h-10 p-0 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-lg"
              >
                <Link href="/dashboard">
                  <TrendingUp className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-10 h-10 p-0 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-lg"
              >
                <Link href="/formulas">
                  <Calculator className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative group hover:bg-white/10 transition-all duration-300 rounded-lg border border-transparent hover:border-white/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Avatar className="h-6 w-6 lg:h-7 lg:w-7 mr-2 relative z-10 ring-2 ring-cyan-400/30">
                    <AvatarImage src="/placeholder.svg?height=28&width=28" />
                    <AvatarFallback className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold">
                      AI
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline text-white/90 font-medium relative z-10">{t.nav.account}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-black/90 backdrop-blur-xl border-white/20 text-white min-w-[160px]"
              >
                <DropdownMenuItem asChild className="hover:bg-white/10 transition-colors cursor-pointer">
                  <Link href="/onboarding" className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-cyan-400" />
                    <span>{t.nav.profile}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-white/10 transition-colors cursor-pointer">
                  <Link href="/settings" className="flex items-center">
                    <Settings className="h-4 w-4 mr-2 text-purple-400" />
                    <span>{t.nav.settings}</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
