"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Send, Bot, AlertTriangle, Calculator, TrendingUp, Sparkles, Zap } from "lucide-react"
import { ChatMessage } from "@/components/chat-message"
import { useLanguage } from "@/hooks/use-language"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
  suggestions?: string[]
  coinMentions?: string[]
  analysis?: any
  ruleViolations?: string[]
}

interface SmartChatInterfaceProps {
  onCoinMention: (coin: string) => void
  onPortfolioRequest: () => void
}

export function SmartChatInterface({ onCoinMention, onPortfolioRequest }: SmartChatInterfaceProps) {
  const { t } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: t.home.welcomeMessage,
      timestamp: new Date(),
      suggestions: [
        t.home.suggestions.analyzeBTC,
        t.home.suggestions.analyzeETH,
        t.home.suggestions.checkPortfolio,
        t.home.suggestions.suggestCoins,
      ],
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [userFormulas] = useState({
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
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Update welcome message when language changes
  useEffect(() => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === "1"
          ? {
              ...msg,
              content: t.home.welcomeMessage,
              suggestions: [
                t.home.suggestions.analyzeBTC,
                t.home.suggestions.analyzeETH,
                t.home.suggestions.checkPortfolio,
                t.home.suggestions.suggestCoins,
              ],
            }
          : msg,
      ),
    )
  }, [t])

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response with formula integration
    setTimeout(() => {
      const aiResponse = generateSmartAIResponse(content)
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)

      // Handle coin mentions
      if (aiResponse.coinMentions) {
        aiResponse.coinMentions.forEach((coin) => {
          setTimeout(() => onCoinMention(coin), 500)
        })
      }
    }, 1500)
  }

  const generateSmartAIResponse = (userInput: string): Message => {
    const lowerInput = userInput.toLowerCase()

    if (
      lowerInput.includes("btc") ||
      lowerInput.includes("bitcoin") ||
      lowerInput.includes(t.home.suggestions.analyzeBTC.toLowerCase())
    ) {
      return {
        id: Date.now().toString(),
        type: "ai",
        content: `Based on your investment formula, I analyzed Bitcoin:

**${t.analysis.overallScore}: 82/100** ⭐

🔍 **${t.analysis.fundamental} (85/100):**
- Market Cap: 95/100 (Rank #1, $1.3T)
- Team & Development: 90/100 (Strong core team, active GitHub)
- Use Case: 85/100 (Store of value, payment)
- Tokenomics: 80/100 (Fixed supply 21M)

📈 **${t.analysis.technical} (78/100):**
- RSI: 65 (Neutral zone)
- MACD: Bullish crossover
- Support/Resistance: Strong support at $65,000
- Volume: Slightly increasing

⚠️ **Warning:** According to your "Single Coin Limit" rule, BTC should not exceed 20% of portfolio.

**Recommendation:** BTC fits your formula. Consider DCA with 15-20% portfolio allocation.`,
        timestamp: new Date(),
        suggestions: ["View detailed analysis", "Compare with ETH", "Calculate position size"],
        coinMentions: ["BTC"],
        ruleViolations: [],
      }
    }

    return {
      id: Date.now().toString(),
      type: "ai",
      content: `I understand your question. Based on the personal investment formula you've set up, I will analyze and provide advice that fits your:

• **Analysis style:** ${userFormulas.fundamentalRules.length} fundamental rules + ${userFormulas.technicalIndicators.length} technical indicators
• **Risk management:** ${userFormulas.riskRules.length} protection rules
• **Priority weights:** Fundamental analysis focusing on team & use case

Which specific coin would you like me to analyze?`,
      timestamp: new Date(),
      suggestions: [
        t.home.suggestions.analyzeBTC,
        t.home.suggestions.analyzeETH,
        "Find new coins",
        t.home.suggestions.checkPortfolio,
      ],
    }
  }

  return (
    <Card className="h-full flex flex-col relative overflow-hidden bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl border-white/10">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-blue-500/5 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

      <CardContent className="flex-1 flex flex-col p-0 relative z-10">
        {/* Chat Header */}
        <div className="p-4 lg:p-6 border-b border-white/10 bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm">
          <div className="flex items-center space-x-3 lg:space-x-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md opacity-75 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-cyan-400 to-blue-500 p-2 lg:p-3 rounded-full">
                <Bot className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-white text-base lg:text-lg flex items-center gap-2">
                AI Crypto Advisor
                <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
              </h3>
              <p className="text-sm lg:text-base text-cyan-300/80 font-mono">{t.home.subtitle}</p>
            </div>
            <div className="flex gap-2 lg:gap-3 flex-shrink-0">
              <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/30 text-xs px-2 lg:px-3 py-1">
                <Calculator className="h-3 w-3 mr-1" />
                <span className="hidden sm:inline">
                  {userFormulas.fundamentalRules.filter((r) => r.isActive).length} rules
                </span>
                <span className="sm:hidden">{userFormulas.fundamentalRules.filter((r) => r.isActive).length}</span>
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-400/30 text-xs px-2 lg:px-3 py-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span className="hidden sm:inline">
                  {userFormulas.technicalIndicators.filter((i) => i.isActive).length} indicators
                </span>
                <span className="sm:hidden">{userFormulas.technicalIndicators.filter((i) => i.isActive).length}</span>
              </Badge>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4 lg:space-y-6 custom-scrollbar">
          {messages.map((message) => (
            <div key={message.id}>
              <ChatMessage message={message} onSuggestionClick={handleSendMessage} onCoinClick={onCoinMention} />

              {/* Rule Violations Alert */}
              {message.ruleViolations && message.ruleViolations.length > 0 && (
                <Alert className="mt-3 bg-red-500/10 border-red-400/30 backdrop-blur-sm">
                  <AlertTriangle className="h-4 w-4 text-red-400" />
                  <AlertDescription className="text-red-300">
                    <strong>{t.analysis.ruleViolations}</strong>
                    <ul className="mt-2 space-y-1">
                      {message.ruleViolations.map((violation, index) => (
                        <li key={index} className="text-sm">
                          • {violation}
                        </li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center space-x-3 text-cyan-300/80">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-sm animate-pulse"></div>
                <Bot className="h-5 w-5 relative z-10" />
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
              <span className="text-sm lg:text-base font-mono">{t.home.chat.analyzing}</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 lg:p-6 border-t border-white/10 bg-gradient-to-r from-slate-800/30 to-purple-800/30 backdrop-blur-sm">
          <div className="flex space-x-3 relative">
            <div className="flex-1 relative">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={t.home.chat.placeholder}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400/50 focus:ring-cyan-400/20 backdrop-blur-sm pr-12"
              />
              <Zap className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-cyan-400/50" />
            </div>
            <Button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim()}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
        }
      `}</style>
    </Card>
  )
}
