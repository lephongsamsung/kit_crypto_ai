"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Navigation } from "@/components/navigation"
import { Plus, Edit, Trash2, Calculator, TrendingUp, Shield, CheckSquare, Save } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface FundamentalRule {
  id: string
  name: string
  description: string
  weight: number
  isActive: boolean
}

interface TechnicalIndicator {
  id: string
  name: string
  type: "buy" | "sell" | "neutral"
  condition: string
  weight: number
  isActive: boolean
}

interface RiskRule {
  id: string
  name: string
  description: string
  maxAllocation: number
  isActive: boolean
}

interface InvestmentChecklist {
  id: string
  category: "research" | "entry" | "exit" | "risk"
  item: string
  isRequired: boolean
}

export default function FormulasPage() {
  const [activeTab, setActiveTab] = useState("fundamental")
  const [isEditing, setIsEditing] = useState<string | null>(null)
  const { t } = useLanguage()

  // Fundamental Analysis Rules
  const [fundamentalRules, setFundamentalRules] = useState<FundamentalRule[]>([
    {
      id: "1",
      name: "Market Cap",
      description: "Chỉ đầu tư coin có market cap > $1B",
      weight: 25,
      isActive: true,
    },
    {
      id: "2",
      name: "Team & Development",
      description: "Team có kinh nghiệm, GitHub active, roadmap rõ ràng",
      weight: 30,
      isActive: true,
    },
    {
      id: "3",
      name: "Use Case",
      description: "Có utility thực tế, giải quyết vấn đề cụ thể",
      weight: 25,
      isActive: true,
    },
    {
      id: "4",
      name: "Tokenomics",
      description: "Supply hợp lý, không có unlock lớn sắp tới",
      weight: 20,
      isActive: true,
    },
  ])

  // Technical Analysis Indicators
  const [technicalIndicators, setTechnicalIndicators] = useState<TechnicalIndicator[]>([
    {
      id: "1",
      name: "RSI",
      type: "buy",
      condition: "RSI < 30 (oversold)",
      weight: 20,
      isActive: true,
    },
    {
      id: "2",
      name: "MACD",
      type: "buy",
      condition: "MACD cross above signal line",
      weight: 25,
      isActive: true,
    },
    {
      id: "3",
      name: "Support/Resistance",
      type: "buy",
      condition: "Giá bounce từ support mạnh",
      weight: 30,
      isActive: true,
    },
    {
      id: "4",
      name: "Volume",
      type: "buy",
      condition: "Volume tăng khi breakout",
      weight: 25,
      isActive: true,
    },
  ])

  // Risk Management Rules
  const [riskRules, setRiskRules] = useState<RiskRule[]>([
    {
      id: "1",
      name: "Single Coin Limit",
      description: "Không đầu tư quá 20% vào 1 coin",
      maxAllocation: 20,
      isActive: true,
    },
    {
      id: "2",
      name: "Altcoin Limit",
      description: "Tổng altcoin không quá 60%",
      maxAllocation: 60,
      isActive: true,
    },
    {
      id: "3",
      name: "Memecoin Limit",
      description: "Memecoin không quá 5%",
      maxAllocation: 5,
      isActive: true,
    },
    {
      id: "4",
      name: "Stop Loss",
      description: "Luôn đặt stop loss -15%",
      maxAllocation: 15,
      isActive: true,
    },
  ])

  // Investment Checklist
  const [checklist, setChecklist] = useState<InvestmentChecklist[]>([
    { id: "1", category: "research", item: "Đọc whitepaper", isRequired: true },
    { id: "2", category: "research", item: "Kiểm tra team & advisors", isRequired: true },
    { id: "3", category: "research", item: "Phân tích competitors", isRequired: false },
    { id: "4", category: "entry", item: "Xác định entry point", isRequired: true },
    { id: "5", category: "entry", item: "Tính toán position size", isRequired: true },
    { id: "6", category: "exit", item: "Đặt take profit levels", isRequired: true },
    { id: "7", category: "exit", item: "Đặt stop loss", isRequired: true },
    { id: "8", category: "risk", item: "Kiểm tra correlation với BTC", isRequired: false },
  ])

  const [newRule, setNewRule] = useState({
    name: "",
    description: "",
    weight: 20,
    condition: "",
    maxAllocation: 10,
  })

  const addFundamentalRule = () => {
    if (newRule.name && newRule.description) {
      const rule: FundamentalRule = {
        id: Date.now().toString(),
        name: newRule.name,
        description: newRule.description,
        weight: newRule.weight,
        isActive: true,
      }
      setFundamentalRules([...fundamentalRules, rule])
      setNewRule({ name: "", description: "", weight: 20, condition: "", maxAllocation: 10 })
    }
  }

  const addTechnicalIndicator = () => {
    if (newRule.name && newRule.condition) {
      const indicator: TechnicalIndicator = {
        id: Date.now().toString(),
        name: newRule.name,
        type: "buy",
        condition: newRule.condition,
        weight: newRule.weight,
        isActive: true,
      }
      setTechnicalIndicators([...technicalIndicators, indicator])
      setNewRule({ name: "", description: "", weight: 20, condition: "", maxAllocation: 10 })
    }
  }

  const addRiskRule = () => {
    if (newRule.name && newRule.description) {
      const rule: RiskRule = {
        id: Date.now().toString(),
        name: newRule.name,
        description: newRule.description,
        maxAllocation: newRule.maxAllocation,
        isActive: true,
      }
      setRiskRules([...riskRules, rule])
      setNewRule({ name: "", description: "", weight: 20, condition: "", maxAllocation: 10 })
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "buy":
        return "bg-green-100 text-green-700"
      case "sell":
        return "bg-red-100 text-red-700"
      case "neutral":
        return "bg-gray-100 text-gray-700"
      default:
        return "bg-blue-100 text-blue-700"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "research":
        return "🔍"
      case "entry":
        return "📈"
      case "exit":
        return "📉"
      case "risk":
        return "🛡️"
      default:
        return "📋"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{t.formulas.title}</h1>
          <p className="text-sm lg:text-base text-gray-600">{t.formulas.subtitle}</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 lg:space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
            <TabsTrigger value="fundamental" className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm p-2 lg:p-3">
              <Calculator className="h-3 w-3 lg:h-4 lg:w-4" />
              <span className="hidden sm:inline">{t.formulas.tabs.fundamental}</span>
              <span className="sm:hidden">Cơ bản</span>
            </TabsTrigger>
            <TabsTrigger value="technical" className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm p-2 lg:p-3">
              <TrendingUp className="h-3 w-3 lg:h-4 lg:w-4" />
              <span className="hidden sm:inline">{t.formulas.tabs.technical}</span>
              <span className="sm:hidden">Kỹ thuật</span>
            </TabsTrigger>
            <TabsTrigger value="risk" className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm p-2 lg:p-3">
              <Shield className="h-3 w-3 lg:h-4 lg:w-4" />
              <span className="hidden sm:inline">{t.formulas.tabs.risk}</span>
              <span className="sm:hidden">Rủi ro</span>
            </TabsTrigger>
            <TabsTrigger value="checklist" className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm p-2 lg:p-3">
              <CheckSquare className="h-3 w-3 lg:h-4 lg:w-4" />
              <span className="hidden sm:inline">{t.formulas.tabs.checklist}</span>
              <span className="sm:hidden">Check</span>
            </TabsTrigger>
          </TabsList>

          {/* Fundamental Analysis */}
          <TabsContent value="fundamental" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{t.formulas.fundamental.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {fundamentalRules.map((rule) => (
                  <div key={rule.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-medium">{rule.name}</h4>
                        <Badge variant="outline">{rule.weight}%</Badge>
                        <Switch
                          checked={rule.isActive}
                          onCheckedChange={(checked) => {
                            setFundamentalRules(
                              fundamentalRules.map((r) => (r.id === rule.id ? { ...r, isActive: checked } : r)),
                            )
                          }}
                        />
                      </div>
                      <p className="text-sm text-gray-600">{rule.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Add New Rule */}
                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label>Tên quy tắc</Label>
                      <Input
                        value={newRule.name}
                        onChange={(e) => setNewRule({ ...newRule, name: e.target.value })}
                        placeholder="VD: Community & Ecosystem"
                      />
                    </div>
                    <div>
                      <Label>Trọng số (%)</Label>
                      <Slider
                        value={[newRule.weight]}
                        onValueChange={([value]) => setNewRule({ ...newRule, weight: value })}
                        max={50}
                        min={5}
                        step={5}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <Label>Mô tả chi tiết</Label>
                    <Textarea
                      value={newRule.description}
                      onChange={(e) => setNewRule({ ...newRule, description: e.target.value })}
                      placeholder="VD: Community active, partnerships mạnh, ecosystem phát triển"
                    />
                  </div>
                  <Button onClick={addFundamentalRule}>
                    <Plus className="h-4 w-4 mr-2" />
                    {t.formulas.fundamental.addRule}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Technical Analysis */}
          <TabsContent value="technical" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Chỉ báo kỹ thuật</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {technicalIndicators.map((indicator) => (
                  <div key={indicator.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-medium">{indicator.name}</h4>
                        <Badge className={getTypeColor(indicator.type)}>
                          {indicator.type === "buy" ? "Mua" : indicator.type === "sell" ? "Bán" : "Trung tính"}
                        </Badge>
                        <Badge variant="outline">{indicator.weight}%</Badge>
                        <Switch
                          checked={indicator.isActive}
                          onCheckedChange={(checked) => {
                            setTechnicalIndicators(
                              technicalIndicators.map((i) => (i.id === indicator.id ? { ...i, isActive: checked } : i)),
                            )
                          }}
                        />
                      </div>
                      <p className="text-sm text-gray-600">{indicator.condition}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Add New Indicator */}
                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label>Tên chỉ báo</Label>
                      <Input
                        value={newRule.name}
                        onChange={(e) => setNewRule({ ...newRule, name: e.target.value })}
                        placeholder="VD: Bollinger Bands"
                      />
                    </div>
                    <div>
                      <Label>Trọng số (%)</Label>
                      <Slider
                        value={[newRule.weight]}
                        onValueChange={([value]) => setNewRule({ ...newRule, weight: value })}
                        max={50}
                        min={5}
                        step={5}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <Label>Điều kiện</Label>
                    <Textarea
                      value={newRule.condition}
                      onChange={(e) => setNewRule({ ...newRule, condition: e.target.value })}
                      placeholder="VD: Giá chạm lower band và RSI < 30"
                    />
                  </div>
                  <Button onClick={addTechnicalIndicator}>
                    <Plus className="h-4 w-4 mr-2" />
                    Thêm chỉ báo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Risk Management */}
          <TabsContent value="risk" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Quy tắc quản lý rủi ro</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {riskRules.map((rule) => (
                  <div key={rule.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-medium">{rule.name}</h4>
                        <Badge variant="outline">Max {rule.maxAllocation}%</Badge>
                        <Switch
                          checked={rule.isActive}
                          onCheckedChange={(checked) => {
                            setRiskRules(riskRules.map((r) => (r.id === rule.id ? { ...r, isActive: checked } : r)))
                          }}
                        />
                      </div>
                      <p className="text-sm text-gray-600">{rule.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Add New Risk Rule */}
                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label>Tên quy tắc</Label>
                      <Input
                        value={newRule.name}
                        onChange={(e) => setNewRule({ ...newRule, name: e.target.value })}
                        placeholder="VD: New Coin Limit"
                      />
                    </div>
                    <div>
                      <Label>Giới hạn (%)</Label>
                      <Slider
                        value={[newRule.maxAllocation]}
                        onValueChange={([value]) => setNewRule({ ...newRule, maxAllocation: value })}
                        max={100}
                        min={1}
                        step={1}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <Label>Mô tả</Label>
                    <Textarea
                      value={newRule.description}
                      onChange={(e) => setNewRule({ ...newRule, description: e.target.value })}
                      placeholder="VD: Coin mới ra mắt < 6 tháng không quá 3%"
                    />
                  </div>
                  <Button onClick={addRiskRule}>
                    <Plus className="h-4 w-4 mr-2" />
                    Thêm quy tắc
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Investment Checklist */}
          <TabsContent value="checklist" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Checklist đầu tư</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["research", "entry", "exit", "risk"].map((category) => (
                    <div key={category}>
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <span>{getCategoryIcon(category)}</span>
                        {category === "research"
                          ? "Nghiên cứu"
                          : category === "entry"
                            ? "Vào lệnh"
                            : category === "exit"
                              ? "Thoát lệnh"
                              : "Quản lý rủi ro"}
                      </h4>
                      <div className="space-y-2">
                        {checklist
                          .filter((item) => item.category === category)
                          .map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-2 border rounded">
                              <div className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  checked={item.isRequired}
                                  onChange={(e) => {
                                    setChecklist(
                                      checklist.map((c) =>
                                        c.id === item.id ? { ...c, isRequired: e.target.checked } : c,
                                      ),
                                    )
                                  }}
                                  className="rounded"
                                />
                                <span className="text-sm">{item.item}</span>
                              </div>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <div className="flex justify-center lg:justify-end mt-6">
          <Button size="sm" lg:size="lg" className="w-full lg:w-auto">
            <Save className="h-4 w-4 mr-2" />
            {t.formulas.saveFormula}
          </Button>
        </div>
      </div>
    </div>
  )
}
