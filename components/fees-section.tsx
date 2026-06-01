import { CheckCircle2, Gift, Shirt, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const fees = [
  {
    category: "入団時の費用",
    items: [
      { label: "入団金", value: "5,000円", note: "スカウト1名ごと（3人目以上は免除）" },
    ],
  },
  {
    category: "毎年必要となる費用",
    items: [
      { label: "育成会費（1名）", value: "15,000円", note: "前期10,000円、後期5,000円" },
      { label: "育成会費（2名）", value: "20,000円", note: "前期10,000円、後期10,000円" },
      { label: "育成会費（3名）", value: "25,000円", note: "前期15,000円、後期10,000円" },
      { label: "登録費", value: "7,000円", note: "保険料900円を含む" },
    ],
  },
  {
    category: "毎月必要となる費用",
    items: [
      { label: "各隊活動費", value: "3,000円/月", note: "カブスカウト隊・ボーイスカウト隊" },
    ],
  },
]

const uniformCosts = [
  { troop: "ビーバースカウト隊", cost: "約7,000円" },
  { troop: "カブスカウト隊", cost: "約14,000円" },
  { troop: "ボーイスカウト隊", cost: "約15,000円" },
]

export function FeesSection() {
  return (
    <section id="fees" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            活動費用について
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            いただいた費用の範囲内に収まるよう、質素な運営を心がけています。
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Fees by category */}
          {fees.map((feeCategory) => (
            <Card key={feeCategory.category} className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  {feeCategory.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {feeCategory.items.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <span className="font-medium text-foreground">{item.label}</span>
                          <span className="text-lg font-bold text-primary">{item.value}</span>
                        </div>
                        {item.note && (
                          <p className="text-sm text-muted-foreground">{item.note}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          {/* Uniform costs */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Shirt className="h-5 w-5 text-primary" />
                制服購入費用の目安
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-4">
                {uniformCosts.map((item) => (
                  <div
                    key={item.troop}
                    className="bg-background rounded-lg p-4 text-center"
                  >
                    <p className="text-sm text-muted-foreground mb-1">{item.troop}</p>
                    <p className="text-xl font-bold text-primary">{item.cost}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                ※ボーイ隊以上はローバー隊まで共通です。
                先輩や兄姉から譲り受けた物をお使いいただいてもかまいません。
              </p>
            </CardContent>
          </Card>

          {/* Free trial */}
          <Card className="border-secondary border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Gift className="h-6 w-6 text-secondary" />
                体験入隊は無料です
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                まずは体験入隊で活動の雰囲気を感じてみてください。
                服装は動きやすい服装でお越しいただければOKです。
                体験時は保険の対象外となりますので、必要に応じて市販の野外活動保険のご利用をご検討ください。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
