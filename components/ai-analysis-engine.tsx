"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, AlertTriangle, TrendingUp, Calculator, Shield } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface CoinAnalysis {
  symbol: string
  name: string
  fundamentalScore: number
  technicalScore: number
  riskScore: number
  overallScore: number
  violations: string[]
  recommendations: string[]
  checklist: { item: string; status: "pass" | "fail" | "warning" }[]
}

interface UserFormulas {
  fundamentalRules: Array<{ name: string; weight: number; isActive: boolean }>
  technicalIndicators: Array<{ name: string; weight: number; isActive: boolean }>
  riskRules: Array<{ name: string; maxAllocation: number; isActive: boolean }>
}

interface AIAnalysisEngineProps {
  coinSymbol: string
  userFormulas: UserFormulas
  onAnalysisComplete: (analysis: CoinAnalysis) => void
}

export function AIAnalysisEngine({ coinSymbol, userFormulas, onAnalysisComplete }: AIAnalysisEngineProps) {
  const [analysis, setAnalysis] = useState<CoinAnalysis | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const { t } = useLanguage()

  const analyzeCoin = async () => {
    setIsAnalyzing(true)

    // Simulate AI analysis based on user's formulas
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const mockAnalysis: CoinAnalysis = {
      symbol: coinSymbol,
      name: coinSymbol === "BTC" ? "Bitcoin" : "Ethereum",
      fundamentalScore: calculateFundamentalScore(coinSymbol, userFormulas.fundamentalRules),
      technicalScore: calculateTechnicalScore(coinSymbol, userFormulas.technicalIndicators),
      riskScore: calculateRiskScore(coinSymbol, userFormulas.riskRules),
      overallScore: 0,
      violations: checkViolations(coinSymbol, userFormulas),
      recommendations: generateRecommendations(coinSymbol, userFormulas),
      checklist: generateChecklist(coinSymbol),
    }

    // Calculate overall score
    mockAnalysis.overallScore = Math.round(
      mockAnalysis.fundamentalScore * 0.4 + mockAnalysis.technicalScore * 0.4 + mockAnalysis.riskScore * 0.2,
    )

    setAnalysis(mockAnalysis)
    onAnalysisComplete(mockAnalysis)
    setIsAnalyzing(false)
  }

  const calculateFundamentalScore = (symbol: string, rules: any[]) => {
    // Mock calculation based on user's fundamental rules
    const scores = {
      BTC: { "Market Cap": 95, "Team & Development": 90, "Use Case": 85, Tokenomics: 80 },
      ETH: { "Market Cap": 90, "Team & Development": 95, "Use Case": 90, Tokenomics: 85 },
    }

    const coinScores = scores[symbol as keyof typeof scores] || scores.BTC
    let totalScore = 0
    let totalWeight = 0

    rules.forEach((rule) => {
      if (rule.isActive) {
        const score = coinScores[rule.name as keyof typeof coinScores] || 70
        totalScore += score * (rule.weight / 100)
        totalWeight += rule.weight
      }
    })

    return Math.round(totalWeight > 0 ? (totalScore / totalWeight) * 100 : 70)
  }

  const calculateTechnicalScore = (symbol: string, indicators: any[]) => {
    // Mock technical analysis
    const signals = {
      BTC: { RSI: 65, MACD: "bullish", "Support/Resistance": "strong support", Volume: "increasing" },
      ETH: { RSI: 45, MACD: "bearish", "Support/Resistance": "near resistance", Volume: "decreasing" },
    }

    const coinSignals = signals[symbol as keyof typeof signals] || signals.BTC
    let score = 0
    let activeIndicators = 0

    indicators.forEach((indicator) => {
      if (indicator.isActive) {
        // Simple scoring logic
        if (indicator.name === "RSI") {
          const rsi = coinSignals.RSI as number
          score += rsi > 30 && rsi < 70 ? 80 : 60
        } else if (indicator.name === "MACD") {
          score += coinSignals.MACD === "bullish" ? 85 : 45
        } else {
          score += 70 // Default score for other indicators
        }
        activeIndicators++
      }
    })

    return activeIndicators > 0 ? Math.round(score / activeIndicators) : 70
  }

  const calculateRiskScore = (symbol: string, rules: any[]) => {
    // Risk score - higher is better (lower risk)
    const riskFactors = {
      BTC: { volatility: 0.6, correlation: 0.8, liquidity: 0.9 },
      ETH: { volatility: 0.7, correlation: 0.7, liquidity: 0.85 },
    }

    const factors = riskFactors[symbol as keyof typeof riskFactors] || riskFactors.BTC
    return Math.round((factors.volatility + factors.correlation + factors.liquidity) * 33.33)
  }

  const checkViolations = (symbol: string, formulas: UserFormulas) => {
    const violations: string[] = []

    // Check risk rule violations
    formulas.riskRules.forEach((rule) => {
      if (rule.isActive) {
        if (rule.name === "Single Coin Limit" && rule.maxAllocation < 15) {
          violations.push(`${symbol} có thể vượt giới hạn ${rule.maxAllocation}% cho 1 coin`)
        }
        if (rule.name === "Memecoin Limit" && ["DOGE", "SHIB"].includes(symbol)) {
          violations.push(`${symbol} là memecoin, cần tuân thủ giới hạn ${rule.maxAllocation}%`)
        }
      }
    })

    return violations
  }

  const generateRecommendations = (symbol: string, formulas: UserFormulas) => {
    const recommendations: string[] = []

    if (symbol === "BTC") {
      recommendations.push("Phù hợp cho DCA dài hạn theo quy tắc của bạn")
      recommendations.push("Có thể tăng tỷ trọng lên 25-30% dựa trên risk rules")
    } else if (symbol === "ETH") {
      recommendations.push("Technical signals hỗn hợp, chờ breakout rõ ràng")
      recommendations.push("Fundamental mạnh, phù hợp hold dài hạn")
    }

    return recommendations
  }

  const generateChecklist = (symbol: string) => {
    return [
      { item: "Đọc whitepaper", status: "pass" as const },
      { item: "Kiểm tra team & advisors", status: "pass" as const },
      { item: "Phân tích competitors", status: "warning" as const },
      { item: "Xác định entry point", status: "fail" as const },
      { item: "Tính toán position size", status: "pass" as const },
    ]
  }

  useEffect(() => {
    if (coinSymbol) {
      analyzeCoin()
    }
  }, [coinSymbol])

  if (!analysis) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            {isAnalyzing ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p>
                  {t.analysis.analyzing} {coinSymbol} theo công thức của bạn...
                </p>
              </div>
            ) : (
              <Button onClick={analyzeCoin}>Phân tích {coinSymbol}</Button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBg = (score: number) => {
    if (score >= 80) return "bg-green-100"
    if (score >= 60) return "bg-yellow-100"
    return "bg-red-100"
  }

  return (
    <div className="space-y-4">
      {/* Overall Score */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>
              {t.analysis.analyzing}: {analysis.name}
            </span>
            <Badge className={`${getScoreBg(analysis.overallScore)} ${getScoreColor(analysis.overallScore)}`}>
              {analysis.overallScore}/100
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <Calculator className="h-6 w-6 mx-auto mb-2 text-blue-600" />
              <p className="text-sm text-gray-600">{t.analysis.fundamental}</p>
              <p className={`text-lg font-bold ${getScoreColor(analysis.fundamentalScore)}`}>
                {analysis.fundamentalScore}
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-6 w-6 mx-auto mb-2 text-purple-600" />
              <p className="text-sm text-gray-600">{t.analysis.technical}</p>
              <p className={`text-lg font-bold ${getScoreColor(analysis.technicalScore)}`}>{analysis.technicalScore}</p>
            </div>
            <div className="text-center">
              <Shield className="h-6 w-6 mx-auto mb-2 text-green-600" />
              <p className="text-sm text-gray-600">{t.analysis.risk}</p>
              <p className={`text-lg font-bold ${getScoreColor(analysis.riskScore)}`}>{analysis.riskScore}</p>
            </div>
          </div>

          <Progress value={analysis.overallScore} className="h-3" />
        </CardContent>
      </Card>

      {/* Violations */}
      {analysis.violations.length > 0 && (
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>{t.analysis.ruleViolations}:</strong>
            <ul className="mt-2 space-y-1">
              {analysis.violations.map((violation, index) => (
                <li key={index} className="text-sm">
                  • {violation}
                </li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t.analysis.recommendations}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {analysis.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{rec}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Checklist Status */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t.analysis.checklist}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {analysis.checklist.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-2 border rounded">
                <span className="text-sm">{item.item}</span>
                <div className="flex items-center gap-2">
                  {item.status === "pass" && <CheckCircle className="h-4 w-4 text-green-500" />}
                  {item.status === "fail" && <XCircle className="h-4 w-4 text-red-500" />}
                  {item.status === "warning" && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                  <Badge
                    variant={
                      item.status === "pass" ? "default" : item.status === "warning" ? "secondary" : "destructive"
                    }
                    className="text-xs"
                  >
                    {item.status === "pass"
                      ? t.analysis.pass
                      : item.status === "warning"
                        ? t.analysis.needsReview
                        : t.analysis.notCompleted}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
