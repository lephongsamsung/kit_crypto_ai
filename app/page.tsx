"use client"

import { useState } from "react"
import { SmartChatInterface } from "@/components/smart-chat-interface"
import { MiniPortfolio } from "@/components/mini-portfolio"
import { Navigation } from "@/components/navigation"
import { CoinFocusCard } from "@/components/coin-focus-card"
import { AIAnalysisEngine } from "@/components/ai-analysis-engine"

export default function HomePage() {
  const [selectedCoin, setSelectedCoin] = useState<string | null>(null)
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [showAnalysis, setShowAnalysis] = useState(false)

  // Mock user formulas
  const userFormulas = {
    fundamentalRules: [
      { name: "Market Cap", weight: 25, isActive: true },
      { name: "Team & Development", weight: 30, isActive: true },
      { name: "Use Case", weight: 25, isActive: true },
      { name: "Tokenomics", weight: 20, isActive: true },
    ],
    technicalIndicators: [
      { name: "RSI", weight: 20, isActive: true },
      { name: "MACD", weight: 25, isActive: true },
      { name: "Support/Resistance", weight: 30, isActive: true },
      { name: "Volume", weight: 25, isActive: true },
    ],
    riskRules: [
      { name: "Single Coin Limit", maxAllocation: 20, isActive: true },
      { name: "Altcoin Limit", maxAllocation: 60, isActive: true },
      { name: "Memecoin Limit", maxAllocation: 5, isActive: true },
    ],
  }

  const handleCoinMention = (coin: string) => {
    setSelectedCoin(coin)
    setShowAnalysis(true)
  }

  const handleAnalysisComplete = (analysis: any) => {
    console.log("Analysis completed:", analysis)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <Navigation />

      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 min-h-[calc(100vh-120px)]">
          {/* Main Chat Interface */}
          <div className="order-1 lg:col-span-3 h-[60vh] lg:h-auto">
            <SmartChatInterface onCoinMention={handleCoinMention} onPortfolioRequest={() => setShowPortfolio(true)} />
          </div>

          {/* Sidebar */}
          <div className="order-2 lg:col-span-1 space-y-6">
            <MiniPortfolio isExpanded={showPortfolio} onToggle={() => setShowPortfolio(!showPortfolio)} />

            {/* AI Analysis Panel */}
            {showAnalysis && selectedCoin && (
              <div className="lg:block">
                <AIAnalysisEngine
                  coinSymbol={selectedCoin}
                  userFormulas={userFormulas}
                  onAnalysisComplete={handleAnalysisComplete}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Coin Focus Card Modal */}
      {selectedCoin && <CoinFocusCard coinSymbol={selectedCoin} onClose={() => setSelectedCoin(null)} />}
    </div>
  )
}
