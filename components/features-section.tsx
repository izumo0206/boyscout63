import { Brain, HeartHandshake, Sparkles, Mountain } from "lucide-react"

const features = [
  {
    number: "01",
    icon: Brain,
    title: "考える力が育つ",
    description:
      "自然の中では思い通りにならないことばかり。「どうしよう？」と考えるきっかけがたくさんあります。班活動を通じて自分で考え、自分のことは自分でする力が身につきます。",
  },
  {
    number: "02",
    icon: HeartHandshake,
    title: "仲間との協力を学ぶ",
    description:
      "みんなでルールを作って仲良く遊び、チームで課題に取り組む体験を通じて、コミュニケーション能力や協調性、思いやりの心が自然と育まれます。",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "挑戦する心と自己肯定感",
    description:
      "キャンプやハイキングなど、普段できない体験を通じて「できた！」という成功体験を積み重ね、自己肯定感を高め、新しいことに挑戦する勇気を育てます。",
  },
  {
    number: "04",
    icon: Mountain,
    title: "他の人の役に立つ喜び",
    description:
      "奉仕活動なども積極的に行い、自分のことをするだけでなく、他の人の役に立つ喜びを学びます。リーダーシップや社会性も身につきます。",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ボーイスカウトは、世界174の国と地域で展開される世界最大の青少年教育運動です。
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ボーイスカウトの目的は、青少年がその自発性を大切にしながら、グループでの活動や野外での体験を通じて、「自立した良き市民」として成長することを助けることにあります。
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`flex flex-col md:flex-row items-start gap-6 p-6 md:p-8 rounded-2xl ${
                index % 2 === 0 ? "bg-card" : "bg-background"
              } border border-border`}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-2xl font-bold text-secondary-foreground">
                    {feature.number}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
