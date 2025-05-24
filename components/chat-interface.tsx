"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, Bot } from "lucide-react"
import { ChatMessage } from "@/components/chat-message"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
  suggestions?: string[]
  coinMentions?: string[]
}

interface ChatInterfaceProps {
  onCoinMention: (coin: string) => void
  onPortfolioRequest: () => void
}

export function ChatInterface({ onCoinMention, onPortfolioRequest }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content:
        "Chào bạn! Tôi là AI advisor của bạn. Danh mục hôm nay biến động +3.2%. Bạn có muốn tôi phân tích không?",
      timestamp: new Date(),
      suggestions: ["Phân tích danh mục", "Tin tức thị trường", "Coin nào đáng chú ý?"],
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(content)
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

  const generateAIResponse = (userInput: string): Message => {
    const lowerInput = userInput.toLowerCase()

    if (lowerInput.includes("danh mục") || lowerInput.includes("portfolio")) {
      setTimeout(() => onPortfolioRequest(), 1000)
      return {
        id: Date.now().toString(),
        type: "ai",
        content:
          "Tôi thấy danh mục của bạn đang có hiệu suất tốt! BTC tăng 2.1%, ETH tăng 4.3%. Tuy nhiên, tỷ trọng altcoin hơi cao so với mức rủi ro bạn đã chọn. Bạn có muốn tôi đề xuất điều chỉnh không?",
        timestamp: new Date(),
        suggestions: ["Điều chỉnh tỷ trọng", "Phân tích rủi ro", "Lịch sử giao dịch"],
        coinMentions: ["BTC", "ETH"],
      }
    }

    if (lowerInput.includes("btc") || lowerInput.includes("bitcoin")) {
      return {
        id: Date.now().toString(),
        type: "ai",
        content:
          "Bitcoin hiện đang trong xu hướng tăng ngắn hạn. Giá đã vượt qua resistance $67,000. Theo phân tích kỹ thuật, RSI ở mức 58 - vẫn còn room để tăng. Tuy nhiên, hãy chú ý mức $70,000 - đây là vùng kháng cự mạnh.",
        timestamp: new Date(),
        suggestions: ["Xem biểu đồ BTC", "So sánh với ETH", "Tin tức Bitcoin"],
        coinMentions: ["BTC"],
      }
    }

    return {
      id: Date.now().toString(),
      type: "ai",
      content:
        "Tôi hiểu câu hỏi của bạn. Dựa trên hồ sơ đầu tư và tình hình thị trường hiện tại, tôi khuyên bạn nên theo dõi các chỉ báo kỹ thuật và tin tức macro. Bạn có muốn tôi giải thích chi tiết hơn không?",
      timestamp: new Date(),
      suggestions: ["Giải thích chi tiết", "Phân tích kỹ thuật", "Tin tức thị trường"],
    }
  }

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="flex-1 flex flex-col p-0">
        {/* Chat Header */}
        <div className="p-4 border-b bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <Bot className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">AI Crypto Advisor</h3>
              <p className="text-sm text-gray-600">Đồng hành cùng bạn trong đầu tư</p>
            </div>
            <div className="ml-auto">
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                Online
              </Badge>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              onSuggestionClick={handleSendMessage}
              onCoinClick={onCoinMention}
            />
          ))}

          {isTyping && (
            <div className="flex items-center space-x-2 text-gray-500">
              <Bot className="h-4 w-4" />
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-gray-50">
          <div className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Hỏi AI về crypto, danh mục, hoặc chiến lược đầu tư..."
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
              className="flex-1"
            />
            <Button onClick={() => handleSendMessage(inputValue)} disabled={!inputValue.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
