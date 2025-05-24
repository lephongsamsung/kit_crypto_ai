"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Navigation } from "@/components/navigation"
import { Calendar, TrendingUp, MessageCircle, BookOpen, Target, Award, Brain, Clock, Sparkles } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface TimelineEvent {
  id: string
  date: Date
  type: "chat" | "learning" | "analysis" | "milestone"
  title: string
  description: string
  coins?: string[]
  importance: "low" | "medium" | "high"
}

interface WeeklySummary {
  week: string
  totalChats: number
  coinsResearched: string[]
  topTopics: string[]
  learningPoints: number
}

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<"week" | "month">("week")
  const { t } = useLanguage()

  const [stats] = useState({
    totalInteractions: 127,
    aiQuestions: 89,
    coinsResearched: 23,
    learningPoints: 45,
    streakDays: 12,
    portfolioAnalyses: 8,
  })

  const [timeline] = useState<TimelineEvent[]>([
    {
      id: "1",
      date: new Date("2024-01-15"),
      type: "analysis",
      title: "AI phân tích portfolio",
      description: "Đề xuất giảm tỷ trọng altcoin từ 60% xuống 40%",
      coins: ["BTC", "ETH", "ADA"],
      importance: "high",
    },
    {
      id: "2",
      date: new Date("2024-01-14"),
      type: "learning",
      title: "Học về DCA strategy",
      description: "Hiểu rõ cách áp dụng Dollar Cost Averaging hiệu quả",
      importance: "medium",
    },
    {
      id: "3",
      date: new Date("2024-01-13"),
      type: "chat",
      title: "Hỏi về Layer 2 solutions",
      description: "Tìm hiểu Arbitrum vs Optimism, so sánh TVL và ecosystem",
      coins: ["ARB", "OP"],
      importance: "medium",
    },
    {
      id: "4",
      date: new Date("2024-01-12"),
      type: "milestone",
      title: "Đạt 100 tương tác với AI",
      description: "Hoàn thành mốc 100 câu hỏi đầu tiên",
      importance: "high",
    },
    {
      id: "5",
      date: new Date("2024-01-11"),
      type: "analysis",
      title: "Phân tích xu hướng memecoin",
      description: "AI cảnh báo về rủi ro cao của SHIB và DOGE",
      coins: ["SHIB", "DOGE"],
      importance: "medium",
    },
  ])

  const [weeklySummaries] = useState<WeeklySummary[]>([
    {
      week: "15-21/01/2024",
      totalChats: 23,
      coinsResearched: ["BTC", "ETH", "ARB", "OP", "ADA"],
      topTopics: ["DCA Strategy", "Layer 2", "Portfolio Risk"],
      learningPoints: 12,
    },
    {
      week: "08-14/01/2024",
      totalChats: 31,
      coinsResearched: ["SHIB", "DOGE", "SOL", "AVAX"],
      topTopics: ["Memecoin Analysis", "Solana Ecosystem", "Risk Management"],
      learningPoints: 15,
    },
    {
      week: "01-07/01/2024",
      totalChats: 18,
      coinsResearched: ["BTC", "ETH", "BNB"],
      topTopics: ["Market Analysis", "Bitcoin Trends", "Binance Ecosystem"],
      learningPoints: 8,
    },
  ])

  const getEventIcon = (type: string) => {
    switch (type) {
      case "chat":
        return <MessageCircle className="h-4 w-4" />
      case "learning":
        return <BookOpen className="h-4 w-4" />
      case "analysis":
        return <TrendingUp className="h-4 w-4" />
      case "milestone":
        return <Award className="h-4 w-4" />
      default:
        return <Calendar className="h-4 w-4" />
    }
  }

  const getEventColor = (type: string) => {
    switch (type) {
      case "chat":
        return "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-400/30"
      case "learning":
        return "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-400/30"
      case "analysis":
        return "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-400/30"
      case "milestone":
        return "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-400/30"
      default:
        return "bg-white/10 text-white/70 border-white/20"
    }
  }

  const getImportanceBadge = (importance: string) => {
    switch (importance) {
      case "high":
        return (
          <Badge className="bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 border-red-400/30">
            Quan trọng
          </Badge>
        )
      case "medium":
        return (
          <Badge className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-400/30">
            Trung bình
          </Badge>
        )
      case "low":
        return <Badge className="bg-white/10 text-white/70 border-white/20">Thấp</Badge>
      default:
        return null
    }
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

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <Navigation />

      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-cyan-400" />
            {t.dashboard.title}
          </h1>
          <p className="text-white/70">{t.dashboard.subtitle}</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-slate-800/80 to-blue-800/80 backdrop-blur-xl border-white/10 hover:border-blue-400/30 transition-all duration-300 group">
            <CardContent className="p-4 text-center">
              <MessageCircle className="h-8 w-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-2xl font-bold text-white">{stats.totalInteractions}</p>
              <p className="text-sm text-white/60">{t.dashboard.stats.interactions}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/80 to-purple-800/80 backdrop-blur-xl border-white/10 hover:border-purple-400/30 transition-all duration-300 group">
            <CardContent className="p-4 text-center">
              <Brain className="h-8 w-8 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-2xl font-bold text-white">{stats.aiQuestions}</p>
              <p className="text-sm text-white/60">{t.dashboard.stats.aiQuestions}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/80 to-green-800/80 backdrop-blur-xl border-white/10 hover:border-green-400/30 transition-all duration-300 group">
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-2xl font-bold text-white">{stats.coinsResearched}</p>
              <p className="text-sm text-white/60">{t.dashboard.stats.coinsResearched}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/80 to-orange-800/80 backdrop-blur-xl border-white/10 hover:border-orange-400/30 transition-all duration-300 group">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-8 w-8 text-orange-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-2xl font-bold text-white">{stats.learningPoints}</p>
              <p className="text-sm text-white/60">{t.dashboard.stats.learningPoints}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/80 to-red-800/80 backdrop-blur-xl border-white/10 hover:border-red-400/30 transition-all duration-300 group">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-red-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-2xl font-bold text-white">{stats.streakDays}</p>
              <p className="text-sm text-white/60">{t.dashboard.stats.streakDays}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/80 to-indigo-800/80 backdrop-blur-xl border-white/10 hover:border-indigo-400/30 transition-all duration-300 group">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-indigo-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-2xl font-bold text-white">{stats.portfolioAnalyses}</p>
              <p className="text-sm text-white/60">{t.dashboard.stats.analyses}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-slate-800/80 to-purple-800/80 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5 text-cyan-400" />
                  {t.dashboard.timeline.title}
                  <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timeline.map((event, index) => (
                    <div key={event.id} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div
                          className={`p-2 rounded-full ${getEventColor(event.type)} group-hover:scale-110 transition-transform`}
                        >
                          {getEventIcon(event.type)}
                        </div>
                        {index < timeline.length - 1 && <div className="w-px h-8 bg-white/20 mt-2"></div>}
                      </div>

                      <div className="flex-1 pb-4">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                            {event.title}
                          </h4>
                          <div className="flex items-center gap-2">
                            {getImportanceBadge(event.importance)}
                            <span className="text-xs text-white/50 font-mono">
                              {event.date.toLocaleDateString("vi-VN")}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm text-white/70 mb-2">{event.description}</p>

                        {event.coins && (
                          <div className="flex flex-wrap gap-1">
                            {event.coins.map((coin) => (
                              <Badge
                                key={coin}
                                className="text-xs bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/30"
                              >
                                {coin}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Summaries */}
          <div>
            <Card className="bg-gradient-to-br from-slate-800/80 to-purple-800/80 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  {t.dashboard.weeklySummary}
                  <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {weeklySummaries.map((summary, index) => (
                  <div
                    key={index}
                    className="p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-white">{summary.week}</h4>
                      <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-400/30">
                        {summary.totalChats} chats
                      </Badge>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-white/70">Coins nghiên cứu:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {summary.coinsResearched.map((coin) => (
                            <Badge
                              key={coin}
                              className="text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-400/30"
                            >
                              {coin}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-white/70">Chủ đề chính:</span>
                        <ul className="mt-1 space-y-1">
                          {summary.topTopics.map((topic, i) => (
                            <li key={i} className="text-xs text-white/60">
                              • {topic}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-white/70">Điểm học tập:</span>
                        <div className="flex items-center gap-2">
                          <Progress value={(summary.learningPoints / 20) * 100} className="w-16 h-2 bg-white/10" />
                          <span className="text-sm font-medium text-white">{summary.learningPoints}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
