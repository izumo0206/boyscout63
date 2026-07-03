import { Mail, FileText, ClipboardList } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "お問い合わせ",
    description: "入団希望または体験入隊希望の旨をご連絡ください",
    icon: Mail,
    details: [
      "タイトル欄に「入団希望」または「体験入隊希望」とご記入",
      "お子様のお名前（漢字・ふりがな）・学校名・学年・年齢を記入",
      "団委員または隊のリーダーよりご連絡いたします",
    ],
  },
  {
    number: "02",
    title: "体験入隊",
    description: "実際の活動に参加して雰囲気を体験いただけます",
    icon: ClipboardList,
    details: [
      "随時受け付けております。お気軽にご参加ください。",
      "就学直前の1月以降であれば、年齢や時期は問いません。",
      "先ずは体験入隊で活動の雰囲気に慣れて、隊員たちと仲良くなりましょう。",
      "当日の服装や必要な持ち物等は、隊長からご案内差しあげます。",
      "活動内容に応じ費用が発生した場合は、当日実費のご負担をお願いします。",
      "体験入隊でのご参加は3回までとし、原則保護者同伴をお願いしています。",
      "是非お友達もご一緒にご参加ください。",
      "なお、活動時の保険等は年間を通じて加入しており、体験入隊時は対象外となりますので、ご自身で傷害保険等へのご加入をご検討ください。",
    ],
  },
  {
    number: "03",
    title: "入団手続き",
    description: "入団を希望される場合は所定の手続きを行います",
    icon: FileText,
    details: [
      "「入団申込書」の提出",
      "「健康調査票」の提出",
      "制服・備品の購入",
    ],
  },
]

export function FlowSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            入団までの流れ
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            見学・体験入隊は随時受け付けています。お気軽にお問い合わせください。
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-0">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-8 bg-border hidden md:block" />
              )}

              <div className="flex gap-6">
                {/* Number circle */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-secondary-foreground">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-card rounded-2xl p-6 border border-border mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="text-primary mt-0.5">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4 md:hidden">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
