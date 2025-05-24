"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, User, Sparkles } from "lucide-react"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
  suggestions?: string[]
  coinMentions?: string[]
}

interface ChatMessageProps {
  message: Message
  onSuggestionClick: (suggestion: string) => void
  onCoinClick: (coin: string) => void
}

export function ChatMessage({ message, onSuggestionClick, onCoinClick }: ChatMessageProps) {
  const isAI = message.type === "ai"

  return (
    <div className={`flex ${isAI ? "justify-start" : "justify-end"}`}>
      <div className={`flex max-w-[85%] lg:max-w-[80%] ${isAI ? "flex-row" : "flex-row-reverse"}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 ${isAI ? "mr-3 lg:mr-4" : "ml-3 lg:ml-4"}`}>
          <div
            className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center relative ${
              isAI ? "bg-gradient-to-r from-cyan-500 to-blue-500" : "bg-gradient-to-r from-purple-500 to-pink-500"
            }`}
          >
            {isAI && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-md opacity-50 animate-pulse"></div>
            )}
            {isAI ? (
              <Bot className="h-4 w-4 lg:h-5 lg:w-5 text-white relative z-10" />
            ) : (
              <User className="h-4 w-4 lg:h-5 lg:w-5 text-white relative z-10" />
            )}
          </div>
        </div>

        {/* Message Content */}
        <div className={`flex flex-col ${isAI ? "items-start" : "items-end"}`}>
          <div
            className={`rounded-2xl px-4 py-3 lg:px-5 lg:py-4 relative backdrop-blur-sm ${
              isAI
                ? "bg-gradient-to-br from-slate-800/80 to-purple-800/80 border border-white/10 text-white"
                : "bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
            }`}
          >
            {isAI && (
              <div className="absolute top-2 right-2">
                <Sparkles className="h-3 w-3 text-cyan-400 animate-pulse" />
              </div>
            )}
            <p className="text-sm lg:text-base whitespace-pre-wrap leading-relaxed">{message.content}</p>
          </div>

          {/* Coin Mentions */}
          {isAI && message.coinMentions && message.coinMentions.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {message.coinMentions.map((coin) => (
                <Badge
                  key={coin}
                  variant="outline"
                  className="cursor-pointer hover:bg-cyan-500/20 border-cyan-400/30 text-cyan-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 text-xs px-3 py-1"
                  onClick={() => onCoinClick(coin)}
                >
                  {coin}
                </Badge>
              ))}
            </div>
          )}

          {/* Suggestions */}
          {isAI && message.suggestions && message.suggestions.length > 0 && (
            <div className="flex flex-wrap gap-2 lg:gap-3 mt-3 lg:mt-4 max-w-full">
              {message.suggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs lg:text-sm h-7 lg:h-8 px-3 lg:px-4 whitespace-nowrap bg-white/5 border-white/20 text-white/90 hover:bg-white/10 hover:border-cyan-400/50 hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  onClick={() => onSuggestionClick(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          )}

          {/* Timestamp */}
          <span className="text-xs text-white/50 mt-2 font-mono">
            {message.timestamp.toLocaleTimeString("vi-VN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
    </div>
  )
}
