"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, ChevronUp, ChevronDown, Bot, Wallet, Zap } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface PortfolioItem {
  symbol: string
  name: string
  amount: number
  value: number
  change24h: number
  percentage: number
}

interface MiniPortfolioProps {
  isExpanded: boolean
  onToggle: () => void
}

export function MiniPortfolio({ isExpanded, onToggle }: MiniPortfolioProps) {
  const { t } = useLanguage()
  const [portfolio] = useState<PortfolioItem[]>([
    { symbol: "BTC", name: "Bitcoin", amount: 0.5, value: 33500, change24h: 2.1, percentage: 45 },
    { symbol: "ETH", name: "Ethereum", amount: 8.2, value: 24600, change24h: 4.3, percentage: 33 },
    { symbol: "ADA", name: "Cardano", amount: 5000, value: 12000, change24h: -1.2, percentage: 16 },
    { symbol: "DOT", name: "Polkadot", amount: 200, value: 4500, change24h: 0.8, percentage: 6 },
  ])

  const totalValue = portfolio.reduce((sum, item) => sum + item.value, 0)
  const totalChange = portfolio.reduce((sum, item) => sum + (item.value * item.change24h) / 100, 0)
  const totalChangePercent = (totalChange / totalValue) * 100

  return (
    <Card className="h-fit relative overflow-hidden bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl border-white/10">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>

      <CardHeader className="pb-3 lg:pb-4 relative z-10">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base lg:text-lg text-white flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400/30 rounded-lg blur-sm animate-pulse"></div>
              <Wallet className="h-5 w-5 text-green-400 relative z-10" />
            </div>
            {t.home.portfolio.title}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="p-2 hover:bg-white/10 transition-all duration-300 rounded-lg text-white/80 hover:text-white"
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 lg:space-y-5 p-4 lg:p-6 relative z-10">
        {/* Total Value */}
        <div className="text-center p-4 lg:p-5 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl border border-white/10 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-blue-400/5 animate-pulse"></div>
          <p className="text-xs lg:text-sm text-white/70 font-mono relative z-10">{t.home.portfolio.totalValue}</p>
          <p className="text-2xl lg:text-3xl font-bold text-white relative z-10 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            ${totalValue.toLocaleString()}
          </p>
          <div className="flex items-center justify-center mt-2 relative z-10">
            {totalChangePercent >= 0 ? (
              <TrendingUp className="h-4 w-4 lg:h-5 lg:w-5 text-green-400 mr-2" />
            ) : (
              <TrendingDown className="h-4 w-4 lg:h-5 lg:w-5 text-red-400 mr-2" />
            )}
            <span
              className={`text-sm lg:text-base font-bold ${
                totalChangePercent >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {totalChangePercent >= 0 ? "+" : ""}
              {totalChangePercent.toFixed(2)}%
            </span>
          </div>
        </div>

        {/* Holdings */}
        {isExpanded && (
          <div className="space-y-3 lg:space-y-4">
            {portfolio.map((item) => (
              <div
                key={item.symbol}
                className="flex items-center justify-between p-3 lg:p-4 bg-gradient-to-r from-slate-800/50 to-purple-800/50 rounded-xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm lg:text-base text-white truncate">{item.symbol}</span>
                    <span className="text-sm lg:text-base text-white font-mono">${item.value.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white/60 truncate font-mono">
                      {item.amount} {item.symbol}
                    </span>
                    <Badge
                      className={`text-xs px-2 py-1 ${
                        item.change24h >= 0
                          ? "bg-green-500/20 text-green-400 border-green-400/30"
                          : "bg-red-500/20 text-red-400 border-red-400/30"
                      }`}
                    >
                      {item.change24h >= 0 ? "+" : ""}
                      {item.change24h}%
                    </Badge>
                  </div>
                  <div className="relative">
                    <Progress value={item.percentage} className="mt-2 h-2 bg-white/10" />
                    <div
                      className="absolute top-0 left-0 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* AI Analysis Button */}
        <Button className="w-full text-sm lg:text-base bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white border-0 transition-all duration-300 hover:scale-105 group">
          <div className="flex items-center justify-center gap-2">
            <Bot className="h-4 w-4 lg:h-5 lg:w-5 group-hover:animate-pulse" />
            <span className="font-medium">{t.home.portfolio.analyzeWithAI}</span>
            <Zap className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-300 group-hover:animate-pulse" />
          </div>
        </Button>
      </CardContent>
    </Card>
  )
}
