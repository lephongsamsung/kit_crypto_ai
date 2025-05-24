"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Navigation } from "@/components/navigation"
import { Bot, Settings, Trash2, Download, RefreshCw } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface AISettings {
  advisingStyle: "simple" | "detailed" | "professional"
  responseLength: "short" | "medium" | "long"
  focusArea: "technical" | "news" | "psychology" | "balanced"
  riskWarnings: boolean
  marketUpdates: boolean
  learningMode: boolean
  confidenceThreshold: number
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<AISettings>({
    advisingStyle: "detailed",
    responseLength: "medium",
    focusArea: "balanced",
    riskWarnings: true,
    marketUpdates: true,
    learningMode: true,
    confidenceThreshold: 70,
  })

  const [hasChanges, setHasChanges] = useState(false)

  const { t } = useLanguage()

  const updateSetting = <K extends keyof AISettings>(key: K, value: AISettings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
    setHasChanges(true)
  }

  const handleSave = () => {
    // Save settings logic here
    setHasChanges(false)
    // Show success message
  }

  const handleReset = () => {
    setSettings({
      advisingStyle: "detailed",
      responseLength: "medium",
      focusArea: "balanced",
      riskWarnings: true,
      marketUpdates: true,
      learningMode: true,
      confidenceThreshold: 70,
    })
    setHasChanges(true)
  }

  const handleExportData = () => {
    // Export user data logic
    console.log("Exporting user data...")
  }

  const handleDeleteData = () => {
    // Delete user data logic
    if (confirm("Bạn có chắc chắn muốn xóa tất cả dữ liệu? Hành động này không thể hoàn tác.")) {
      console.log("Deleting user data...")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.settings.title}</h1>
          <p className="text-gray-600">{t.settings.subtitle}</p>
        </div>

        <div className="space-y-6">
          {/* AI Personality */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                {t.settings.advisingStyle.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium">{t.settings.advisingStyle.title}</Label>
                <RadioGroup
                  value={settings.advisingStyle}
                  onValueChange={(value: "simple" | "detailed" | "professional") =>
                    updateSetting("advisingStyle", value)
                  }
                  className="mt-3"
                >
                  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="simple" id="simple" />
                    <Label htmlFor="simple" className="flex-1 cursor-pointer">
                      <div className="font-medium">{t.settings.advisingStyle.simple.title}</div>
                      <div className="text-sm text-gray-500">Giải thích dễ hiểu, phù hợp người mới</div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="detailed" id="detailed" />
                    <Label htmlFor="detailed" className="flex-1 cursor-pointer">
                      <div className="font-medium">{t.settings.advisingStyle.detailed.title}</div>
                      <div className="text-sm text-gray-500">Giải thích sâu với ví dụ cụ thể</div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="professional" id="professional" />
                    <Label htmlFor="professional" className="flex-1 cursor-pointer">
                      <div className="font-medium">{t.settings.advisingStyle.professional.title}</div>
                      <div className="text-sm text-gray-500">Phong cách trader chuyên nghiệp</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-medium">Độ dài phản hồi</Label>
                <RadioGroup
                  value={settings.responseLength}
                  onValueChange={(value: "short" | "medium" | "long") => updateSetting("responseLength", value)}
                  className="mt-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="short" id="short" />
                    <Label htmlFor="short">Ngắn gọn (1-2 câu)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">Vừa phải (1 đoạn)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="long" id="long" />
                    <Label htmlFor="long">Chi tiết (nhiều đoạn)</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Focus Areas */}
          <Card>
            <CardHeader>
              <CardTitle>Lĩnh vực tập trung</CardTitle>
            </CardHeader>
            <CardContent>
              <Label className="text-base font-medium">AI nên nghiêng về</Label>
              <RadioGroup
                value={settings.focusArea}
                onValueChange={(value: "technical" | "news" | "psychology" | "balanced") =>
                  updateSetting("focusArea", value)
                }
                className="mt-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="technical" id="technical" />
                  <Label htmlFor="technical">Phân tích kỹ thuật (charts, indicators)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="news" id="news" />
                  <Label htmlFor="news">Tin tức & sự kiện thị trường</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="psychology" id="psychology" />
                  <Label htmlFor="psychology">Tâm lý thị trường & risk management</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="balanced" id="balanced" />
                  <Label htmlFor="balanced">Cân bằng tất cả</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Notifications & Features */}
          <Card>
            <CardHeader>
              <CardTitle>Tính năng & thông báo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Cảnh báo rủi ro</Label>
                  <p className="text-sm text-gray-500">AI sẽ nhắc nhở về rủi ro khi cần</p>
                </div>
                <Switch
                  checked={settings.riskWarnings}
                  onCheckedChange={(checked) => updateSetting("riskWarnings", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Cập nhật thị trường</Label>
                  <p className="text-sm text-gray-500">Nhận thông tin thị trường định kỳ</p>
                </div>
                <Switch
                  checked={settings.marketUpdates}
                  onCheckedChange={(checked) => updateSetting("marketUpdates", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Chế độ học tập</Label>
                  <p className="text-sm text-gray-500">AI sẽ giải thích thuật ngữ và khái niệm</p>
                </div>
                <Switch
                  checked={settings.learningMode}
                  onCheckedChange={(checked) => updateSetting("learningMode", checked)}
                />
              </div>

              <div>
                <Label className="text-base font-medium">Ngưỡng tin cậy AI</Label>
                <p className="text-sm text-gray-500 mb-3">
                  AI chỉ đưa ra lời khuyên khi độ tin cậy ≥ {settings.confidenceThreshold}%
                </p>
                <Slider
                  value={[settings.confidenceThreshold]}
                  onValueChange={([value]) => updateSetting("confidenceThreshold", value)}
                  max={100}
                  min={50}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Quản lý dữ liệu
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <Label className="text-base font-medium">Xuất dữ liệu</Label>
                  <p className="text-sm text-gray-500">Tải về tất cả dữ liệu cá nhân</p>
                </div>
                <Button variant="outline" onClick={handleExportData}>
                  <Download className="h-4 w-4 mr-2" />
                  Xuất
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <Label className="text-base font-medium">Reset kiến thức AI</Label>
                  <p className="text-sm text-gray-500">Xóa lịch sử học tập, bắt đầu lại</p>
                </div>
                <Button variant="outline" onClick={handleReset}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>

              <Separator />

              <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
                <div>
                  <Label className="text-base font-medium text-red-700">Xóa tất cả dữ liệu</Label>
                  <p className="text-sm text-red-600">Hành động này không thể hoàn tác</p>
                </div>
                <Button variant="destructive" onClick={handleDeleteData}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Xóa
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={handleReset}>
              Khôi phục mặc định
            </Button>
            <Button onClick={handleSave} disabled={!hasChanges}>
              {hasChanges ? t.settings.saveChanges : t.settings.saved}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
