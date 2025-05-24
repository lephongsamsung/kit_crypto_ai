"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, TrendingUp, TrendingDown, Bot, ExternalLink } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface CoinData {
  symbol: string
  name: string
  price: number
  change24h: number
  volume: number
  marketCap: number
  volatility: "low" | "medium" | "high"
  riskLevel: "low" | "medium" | "high"
  socialTrend: "bearish" | "neutral" | "bullish"
}

interface CoinFocusCardProps {
  coinSymbol: string
  onClose: () => void
}

export function CoinFocusCard({ coinSymbol, onClose }: CoinFocusCardProps) {
  const [coinData, setCoinData] = useState<CoinData | null>(null)
  const { t } = useLanguage()

  useEffect(() => {
    // Simulate API call
    const mockData: Record<string, CoinData> = {
      BTC: {
        symbol: "BTC",
        name: "Bitcoin",
        price: 67250,
        change24h: 2.1,
        volume: 28500000000,
        marketCap: 1320000000000,
        volatility: "medium",
        riskLevel: "low",
        socialTrend: "bullish",
      },
      ETH: {
        symbol: "ETH",
        name: "Ethereum",
        price: 3850,
        change24h: 4.3,
        volume: 15200000000,
        marketCap: 462000000000,
        volatility: "medium",
        riskLevel: "medium",
        socialTrend: "bullish",
      },
    }

    setCoinData(mockData[coinSymbol] || mockData["BTC"])
  }, [coinSymbol])

  if (!coinData) return null

  const getVolatilityColor = (level: string) => {
    switch (level) {
      case "low":
        return "bg-green-100 text-green-700"
      case "medium":
        return "bg-yellow-100 text-yellow-700"
      case "high":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getRiskColor = (level: string) => {
    switch (level) {
      case "low":
        return "bg-green-100 text-green-700"
      case "medium":
        return "bg-yellow-100 text-yellow-700"
      case "high":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getSocialTrendColor = (trend: string) => {
    switch (trend) {
      case "bullish":
        return "bg-green-100 text-green-700"
      case "neutral":
        return "bg-gray-100 text-gray-700"
      case "bearish":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <CardHeader className="pb-2 lg:pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2 text-base lg:text-lg">
              <span>{coinData.name}</span>
              <Badge variant="outline" className="text-xs">
                {coinData.symbol}
              </Badge>
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="p-1">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-3 lg:space-y-4 p-3 lg:p-6">
          {/* Price */}
          <div className="text-center p-3 lg:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <p className="text-xl lg:text-2xl font-bold">${coinData.price.toLocaleString()}</p>
            <div className="flex items-center justify-center mt-1">
              {coinData.change24h >= 0 ? (
                <TrendingUp className="h-3 w-3 lg:h-4 lg:w-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 lg:h-4 lg:w-4 text-red-500 mr-1" />
              )}
              <span
                className={`text-xs lg:text-sm font-medium ${coinData.change24h >= 0 ? "text-green-600" : "text-red-600"}`}
              >
                {coinData.change24h >= 0 ? "+" : ""}
                {coinData.change24h}% (24h)
              </span>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="h-24 lg:h-32 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 text-xs lg:text-sm">{t.coins.chartTitle}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4 text-xs lg:text-sm">
            <div>
              <p className="text-gray-600">{t.coins.volume}</p>
              <p className="font-medium">${(coinData.volume / 1000000000).toFixed(1)}B</p>
            </div>
            <div>
              <p className="text-gray-600">{t.coins.marketCap}</p>
              <p className="font-medium">${(coinData.marketCap / 1000000000).toFixed(0)}B</p>
            </div>
          </div>

          {/* Analysis Tags */}
          <div className="space-y-2">
            <p className="text-xs lg:text-sm font-medium text-gray-700">{t.coins.analysis}</p>
            <div className="flex flex-wrap gap-1 lg:gap-2">
              <Badge className={`${getVolatilityColor(coinData.volatility)} text-xs`}>
                {t.coins.volatility}:{" "}
                {coinData.volatility === "low"
                  ? t.coins.low
                  : coinData.volatility === "medium"
                    ? t.coins.medium
                    : t.coins.high}
              </Badge>
              <Badge className={`${getRiskColor(coinData.riskLevel)} text-xs`}>
                {t.coins.riskLevel}:{" "}
                {coinData.riskLevel === "low"
                  ? t.coins.low
                  : coinData.riskLevel === "medium"
                    ? t.coins.medium
                    : t.coins.high}
              </Badge>
              <Badge className={`${getSocialTrendColor(coinData.socialTrend)} text-xs`}>
                {t.coins.socialTrend}:{" "}
                {coinData.socialTrend === "bullish"
                  ? t.coins.bullish
                  : coinData.socialTrend === "neutral"
                    ? t.coins.neutral
                    : t.coins.bearish}
              </Badge>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button className="flex-1 text-xs lg:text-sm" variant="outline" size="sm">
              <Bot className="h-3 w-3 lg:h-4 lg:w-4 mr-2" />
              {t.coins.askAIMore}
            </Button>
            <Button className="flex-1 text-xs lg:text-sm" size="sm">
              <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4 mr-2" />
              {t.coins.details}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
