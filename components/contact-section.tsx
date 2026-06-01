"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle2 } from "lucide-react"

const inquiryTypes = [
  "入団希望",
  "体験入隊希望",
  "見学希望",
  "その他のお問い合わせ",
]

const grades = [
  "年長",
  "小学1年生",
  "小学2年生",
  "小学3年生",
  "小学4年生",
  "小学5年生",
  "小学6年生",
  "中学1年生",
  "中学2年生",
  "中学3年生",
  "高校1年生",
  "高校2年生",
  "高校3年生",
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Demo: just show success state
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10 text-secondary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              お問い合わせありがとうございます！
            </h2>
            <p className="text-lg opacity-90 mb-6">
              ご入力いただいた内容を確認後、
              <br />
              団委員または担当リーダーより折り返しご連絡いたします。
            </p>
            <Button
              variant="secondary"
              onClick={() => setSubmitted(false)}
              className="px-8"
            >
              別の問い合わせをする
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            見学・体験 受付中
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            お問い合わせ
          </h2>
          <p className="opacity-90 max-w-2xl mx-auto">
            見学・体験入隊のお申し込み、入団に関するご質問など、
            <br />
            お気軽にお問い合わせください。
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-foreground">お問い合わせフォーム</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="inquiryType" className="text-foreground">お問い合わせ種別 *</Label>
                <Select required>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    {inquiryTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="parentName" className="text-foreground">保護者氏名 *</Label>
                  <Input
                    id="parentName"
                    placeholder="山田 太郎"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="childName" className="text-foreground">お子様の名前 *</Label>
                  <Input
                    id="childName"
                    placeholder="山田 花子（やまだ はなこ）"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="school" className="text-foreground">学校名</Label>
                  <Input
                    id="school"
                    placeholder="○○小学校"
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="childGrade" className="text-foreground">お子様の学年 *</Label>
                  <Select required>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      {grades.map((grade) => (
                        <SelectItem key={grade} value={grade}>
                          {grade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">メールアドレス *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">お問い合わせ内容</Label>
                <Textarea
                  id="message"
                  placeholder="ご質問やご要望がありましたらお書きください"
                  rows={4}
                  className="bg-background"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                <Send className="h-5 w-5 mr-2" />
                送信する
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                ※ 送信後、担当者より折り返しご連絡いたします。
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
