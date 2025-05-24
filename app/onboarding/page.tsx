"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, TrendingUp } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface OnboardingData {
  email: string
  name: string
  investmentGoal: string
  riskLevel: string
  preferredCoins: string[]
  experience: string
  connectExchange: boolean
}

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<OnboardingData>({
    email: "",
    name: "",
    investmentGoal: "",
    riskLevel: "",
    preferredCoins: [],
    experience: "",
    connectExchange: false,
  })

  const { t } = useLanguage()

  const totalSteps = 5
  const progress = (step / totalSteps) * 100

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleCoinToggle = (coin: string) => {
    setData((prev) => ({
      ...prev,
      preferredCoins: prev.preferredCoins.includes(coin)
        ? prev.preferredCoins.filter((c) => c !== coin)
        : [...prev.preferredCoins, coin],
    }))
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <TrendingUp className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">{t.onboarding.welcome.title}</h2>
              <p className="text-gray-600">{t.onboarding.welcome.subtitle}</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">{t.onboarding.welcome.name}</Label>
                <Input
                  id="name"
                  value={data.name}
                  onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Nhập tên của bạn"
                />
              </div>

              <div>
                <Label htmlFor="email">{t.onboarding.welcome.email}</Label>
                <Input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">{t.onboarding.goals.title}</h2>
              <p className="text-gray-600">Giúp AI hiểu rõ hơn về định hướng của bạn</p>
            </div>

            <RadioGroup
              value={data.investmentGoal}
              onValueChange={(value) => setData((prev) => ({ ...prev, investmentGoal: value }))}
            >
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="short-term" id="short-term" />
                <Label htmlFor="short-term" className="flex-1 cursor-pointer">
                  <div className="font-medium">{t.onboarding.goals.shortTerm.title}</div>
                  <div className="text-sm text-gray-500">Trading, kiếm lời nhanh trong vài tuần/tháng</div>
                </Label>
              </div>

              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="long-term" id="long-term" />
                <Label htmlFor="long-term" className="flex-1 cursor-pointer">
                  <div className="font-medium">{t.onboarding.goals.longTerm.title}</div>
                  <div className="text-sm text-gray-500">HODL, xây dựng tài sản trong nhiều năm</div>
                </Label>
              </div>

              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="mixed" id="mixed" />
                <Label htmlFor="mixed" className="flex-1 cursor-pointer">
                  <div className="font-medium">{t.onboarding.goals.mixed.title}</div>
                  <div className="text-sm text-gray-500">Vừa trading vừa đầu tư dài hạn</div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Mức độ rủi ro chấp nhận?</h2>
              <p className="text-gray-600">AI sẽ tư vấn phù hợp với khả năng chịu rủi ro của bạn</p>
            </div>

            <RadioGroup
              value={data.riskLevel}
              onValueChange={(value) => setData((prev) => ({ ...prev, riskLevel: value }))}
            >
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="low" id="low" />
                <Label htmlFor="low" className="flex-1 cursor-pointer">
                  <div className="font-medium text-green-600">Thấp</div>
                  <div className="text-sm text-gray-500">Ưu tiên BTC, ETH, stablecoin</div>
                </Label>
              </div>

              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium" className="flex-1 cursor-pointer">
                  <div className="font-medium text-yellow-600">Vừa phải</div>
                  <div className="text-sm text-gray-500">Thêm altcoin top 20, DeFi</div>
                </Label>
              </div>

              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="high" id="high" />
                <Label htmlFor="high" className="flex-1 cursor-pointer">
                  <div className="font-medium text-red-600">Cao</div>
                  <div className="text-sm text-gray-500">Sẵn sàng với memecoin, coin mới</div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Loại coin ưa thích?</h2>
              <p className="text-gray-600">Chọn nhiều loại để AI tư vấn đa dạng hơn</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { id: "BTC", name: "Bitcoin", desc: "Store of value" },
                { id: "ETH", name: "Ethereum", desc: "Smart contracts" },
                { id: "ALTCOIN", name: "Altcoin", desc: "Top 50 coins" },
                { id: "DEFI", name: "DeFi", desc: "Decentralized finance" },
                { id: "STABLECOIN", name: "Stablecoin", desc: "USDT, USDC..." },
                { id: "MEMECOIN", name: "Memecoin", desc: "DOGE, SHIB..." },
              ].map((coin) => (
                <div
                  key={coin.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    data.preferredCoins.includes(coin.id)
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                  onClick={() => handleCoinToggle(coin.id)}
                >
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={data.preferredCoins.includes(coin.id)}
                      onChange={() => handleCoinToggle(coin.id)}
                    />
                    <div>
                      <div className="font-medium">{coin.name}</div>
                      <div className="text-xs text-gray-500">{coin.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Hoàn tất thiết lập</h2>
              <p className="text-gray-600">Tùy chọn kết nối sàn giao dịch để theo dõi portfolio</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 p-4 border rounded-lg">
                <Checkbox
                  checked={data.connectExchange}
                  onCheckedChange={(checked) => setData((prev) => ({ ...prev, connectExchange: !!checked }))}
                />
                <div>
                  <div className="font-medium">Kết nối Binance API</div>
                  <div className="text-sm text-gray-500">Tự động đồng bộ portfolio (tùy chọn)</div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">Hồ sơ của bạn:</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>
                    • Mục tiêu:{" "}
                    {data.investmentGoal === "short-term"
                      ? "Lãi ngắn hạn"
                      : data.investmentGoal === "long-term"
                        ? "Tích sản dài hạn"
                        : "Kết hợp"}
                  </li>
                  <li>
                    • Rủi ro: {data.riskLevel === "low" ? "Thấp" : data.riskLevel === "medium" ? "Vừa phải" : "Cao"}
                  </li>
                  <li>• Coin ưa thích: {data.preferredCoins.join(", ")}</li>
                </ul>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="p-4 lg:p-6">
          <div className="space-y-2">
            <div className="flex justify-between text-xs lg:text-sm text-gray-500">
              <span>
                {t.onboarding.step} {step} / {totalSteps}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>

        <CardContent className="p-4 lg:p-6">
          {renderStep()}

          <div className="flex justify-between mt-6 lg:mt-8">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1}
              size="sm"
              className="text-xs lg:text-sm"
            >
              <ArrowLeft className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
              {t.common.back}
            </Button>

            <Button
              onClick={step === totalSteps ? () => (window.location.href = "/") : handleNext}
              disabled={
                (step === 1 && (!data.name || !data.email)) ||
                (step === 2 && !data.investmentGoal) ||
                (step === 3 && !data.riskLevel) ||
                (step === 4 && data.preferredCoins.length === 0)
              }
              size="sm"
              className="text-xs lg:text-sm"
            >
              {step === totalSteps ? t.common.start : t.common.continue}
              <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 ml-1 lg:ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
