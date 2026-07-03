"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // 実際にお問い合わせを受け取るために、FormspreeなどのエンドポイントURLを設定してください。
  // 例: "https://formspree.io/f/your_form_id"
  const FORM_ENDPOINT = "https://formspree.io/f/xredwkna" // ★ここに取得したURLを入れます

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // エンドポイントが設定されていない場合は、デモとして成功画面を表示する（元の挙動）
    if (!FORM_ENDPOINT) {
      setIsSubmitted(true)
      return
    }

    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        const data = await response.json()
        if (Object.hasOwn(data, 'errors')) {
          setError(data.errors.map((err: any) => err.message).join(", "))
        } else {
          setError("送信に失敗しました。後でもう一度お試しください。")
        }
      }
    } catch (err) {
      setError("ネットワークエラーが発生しました。通信環境をご確認ください。")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 md:py-24 bg-green-50">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="flex justify-start mb-6">
            <CheckCircle2 className="h-16 w-16 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-green-900 mb-4">お問い合わせありがとうございます</h2>
          <p className="text-green-800 mb-8 text-lg">
            内容を確認の上、担当者より通常2〜3日以内にご連絡いたします。
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-green-600 text-green-700 hover:bg-green-100"
          >
            新しく問い合わせる
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-green-50">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl mb-4">見学・お問い合わせ</h2>
          <p className="text-green-800 text-lg">
            活動の見学や体験は随時受け付けています。お気軽にご連絡ください。
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-green-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
                {error}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">保護者のお名前 <span className="text-red-500">*</span></Label>
                <Input id="name" name="name" placeholder="山田 太郎" required className="border-green-200 focus-visible:ring-green-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス <span className="text-red-500">*</span></Label>
                <Input id="email" name="email" type="email" placeholder="taro@example.com" required className="border-green-200 focus-visible:ring-green-500" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="childAge">お子様の年齢・学年</Label>
                <Input id="childAge" name="childAge" placeholder="小学3年生" className="border-green-200 focus-visible:ring-green-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inquiryType">お問い合わせ種類 <span className="text-red-500">*</span></Label>
                <Select name="inquiryType" required defaultValue="tour">
                  <SelectTrigger className="border-green-200 focus-visible:ring-green-500">
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tour">見学・体験の申し込み</SelectItem>
                    <SelectItem value="join">入隊について</SelectItem>
                    <SelectItem value="question">活動内容への質問</SelectItem>
                    <SelectItem value="other">その他</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">お問い合わせ内容 <span className="text-red-500">*</span></Label>
              <Textarea
                id="message"
                name="message"
                placeholder="見学希望日や、気になることなどをご自由にお書きください。"
                rows={5}
                required
                className="border-green-200 focus-visible:ring-green-500 resize-none"
              />
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6" disabled={isSubmitting}>
              {isSubmitting ? "送信中..." : "送信する"}
            </Button>
            
            <p className="text-xs text-gray-500 mt-4">
              ご入力いただいた個人情報は、お問い合わせ対応のみに使用いたします。
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
