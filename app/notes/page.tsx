"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import { Search, BookOpen, Download, Tag, Calendar, Bot, Star, Sparkles } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface ChatHistory {
  id: string
  date: Date
  title: string
  summary: string
  tags: string[]
  isImportant: boolean
  keyInsights: string[]
}

interface LearningNote {
  id: string
  date: Date
  concept: string
  explanation: string
  example: string
  tags: string[]
  source: "ai" | "research"
}

export default function NotesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const { t } = useLanguage()

  const [chatHistory] = useState<ChatHistory[]>([
    {
      id: "1",
      date: new Date("2024-01-15"),
      title: "Phân tích BTC và chiến lược DCA",
      summary:
        "AI tư vấn về việc DCA Bitcoin trong bối cảnh thị trường sideway. Đề xuất chia nhỏ số tiền đầu tư trong 4 tuần.",
      tags: ["BTC", "DCA", "Strategy"],
      isImportant: true,
      keyInsights: [
        "DCA hiệu quả trong thị trường sideway",
        "Mức support mạnh tại $65,000",
        "Nên giữ 30% cash để mua dip",
      ],
    },
    {
      id: "2",
      date: new Date("2024-01-14"),
      title: "Đánh giá rủi ro altcoin portfolio",
      summary: "Phân tích tỷ trọng altcoin trong danh mục. AI khuyên giảm exposure với memecoin và tăng ETH.",
      tags: ["Risk", "Portfolio", "ETH", "Altcoin"],
      isImportant: false,
      keyInsights: [
        "Tỷ trọng altcoin quá cao (60%)",
        "ETH có tiềm năng tăng trưởng ổn định",
        "Memecoin nên giới hạn dưới 5%",
      ],
    },
    {
      id: "3",
      date: new Date("2024-01-13"),
      title: "Tìm hiểu về Layer 2 và Arbitrum",
      summary:
        "Cuộc trò chuyện về công nghệ Layer 2, so sánh Arbitrum vs Optimism. AI giải thích cách hoạt động và tiềm năng.",
      tags: ["Layer2", "ARB", "Technology"],
      isImportant: true,
      keyInsights: [
        "Layer 2 giải quyết vấn đề scalability của Ethereum",
        "Arbitrum có TVL cao nhất trong các L2",
        "Phí giao dịch giảm 90% so với mainnet",
      ],
    },
  ])

  const [learningNotes] = useState<LearningNote[]>([
    {
      id: "1",
      date: new Date("2024-01-15"),
      concept: "Dollar Cost Averaging (DCA)",
      explanation:
        "Chiến lược đầu tư định kỳ với số tiền cố định, bất kể giá cả thị trường. Giúp giảm thiểu rủi ro timing và tận dụng volatility.",
      example: "Thay vì đầu tư $1000 một lần, bạn đầu tư $250 mỗi tuần trong 4 tuần.",
      tags: ["Strategy", "Risk Management"],
      source: "ai",
    },
    {
      id: "2",
      date: new Date("2024-01-14"),
      concept: "Support và Resistance",
      explanation:
        "Support là mức giá mà tài sản khó giảm xuống dưới. Resistance là mức giá khó vượt lên trên. Đây là các mức tâm lý quan trọng.",
      example: "BTC có support mạnh tại $65,000 và resistance tại $70,000",
      tags: ["Technical Analysis", "BTC"],
      source: "ai",
    },
    {
      id: "3",
      date: new Date("2024-01-13"),
      concept: "Total Value Locked (TVL)",
      explanation:
        "Tổng giá trị tài sản được khóa trong một protocol DeFi. Chỉ số này phản ánh mức độ tin tưởng và sử dụng của người dùng.",
      example: "Arbitrum có TVL $2.5B, cho thấy nhiều người dùng tin tưởng và sử dụng",
      tags: ["DeFi", "Metrics"],
      source: "ai",
    },
  ])

  const allTags = Array.from(
    new Set([...chatHistory.flatMap((chat) => chat.tags), ...learningNotes.flatMap((note) => note.tags)]),
  )

  const filteredChatHistory = chatHistory.filter((chat) => {
    const matchesSearch =
      chat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chat.summary.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = !selectedTag || chat.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  const filteredLearningNotes = learningNotes.filter((note) => {
    const matchesSearch =
      note.concept.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.explanation.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = !selectedTag || note.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

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
            <BookOpen className="h-8 w-8 text-cyan-400" />
            {t.notes.title}
          </h1>
          <p className="text-white/70">{t.notes.subtitle}</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6 bg-gradient-to-br from-slate-800/80 to-purple-800/80 backdrop-blur-xl border-white/10">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-cyan-400" />
                <Input
                  placeholder={t.notes.search}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400/50 focus:ring-cyan-400/20"
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={selectedTag === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(null)}
                  className={
                    selectedTag === null
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                      : "bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:text-white"
                  }
                >
                  {t.common.all}
                </Button>
                {allTags.slice(0, 5).map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    className={
                      selectedTag === tag
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:text-white"
                    }
                  >
                    {tag}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                className="bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                {t.notes.exportPDF}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="history" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 border-white/10">
            <TabsTrigger
              value="history"
              className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white text-white/70"
            >
              <Bot className="h-4 w-4" />
              {t.notes.tabs.history}
            </TabsTrigger>
            <TabsTrigger
              value="learning"
              className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white text-white/70"
            >
              <BookOpen className="h-4 w-4" />
              {t.notes.tabs.learning}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-4">
            {filteredChatHistory.map((chat) => (
              <Card
                key={chat.id}
                className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-slate-800/80 to-purple-800/80 backdrop-blur-xl border-white/10 hover:border-cyan-400/30 group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-lg text-white group-hover:text-cyan-300 transition-colors">
                          {chat.title}
                        </CardTitle>
                        {chat.isImportant && <Star className="h-4 w-4 text-yellow-400 fill-current" />}
                        <Sparkles className="h-4 w-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <Calendar className="h-4 w-4" />
                        {chat.date.toLocaleDateString("vi-VN")}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-white/80">{chat.summary}</p>

                  {chat.keyInsights.length > 0 && (
                    <div>
                      <h4 className="font-medium text-sm text-cyan-300 mb-2">{t.notes.keyInsights}:</h4>
                      <ul className="space-y-1">
                        {chat.keyInsights.map((insight, index) => (
                          <li key={index} className="text-sm text-white/70 flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            {insight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {chat.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="text-xs bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/30"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="learning" className="space-y-4">
            {filteredLearningNotes.map((note) => (
              <Card
                key={note.id}
                className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-slate-800/80 to-purple-800/80 backdrop-blur-xl border-white/10 hover:border-purple-400/30 group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors flex items-center gap-2">
                      {note.concept}
                      <Sparkles className="h-4 w-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Calendar className="h-4 w-4" />
                      {note.date.toLocaleDateString("vi-VN")}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-purple-300 mb-1">{t.notes.explanation}:</h4>
                    <p className="text-white/80 text-sm">{note.explanation}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-blue-300 mb-1">{t.notes.example}:</h4>
                    <p className="text-white/70 text-sm italic">{note.example}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {note.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-400/30"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Badge
                      className={`text-xs ${
                        note.source === "ai"
                          ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/30"
                          : "bg-white/10 text-white/70 border-white/20"
                      }`}
                    >
                      {note.source === "ai" ? t.notes.aiAdvisor : t.notes.selfResearch}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
