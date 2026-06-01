import { Users, Medal, Mountain, HeartHandshake } from "lucide-react"

const features = [
{
number: "01",
icon: Users,
title: "仲間と成長する「小グループ活動」",
description:
"異年齢の子どもたちで6〜7人の班を作り、一人ひとりが明確な役割を分担して活動します。協力して課題を乗り越える自治の経験を通じて、協調性や社会性、そして実践的なリーダーシップと責任感を自然に育みます。"
},
{
number: "02",
icon: Medal,
title: "個性と可能性を伸ばす「進歩制度」",
description:
"成長に合わせ、社会人として必要な資質や得意な技能を一つずつ身につけるバッジシステムを採用しています。目標に向かって自発的に努力し、修得して認められる喜びが、子どもたちの大きな自信へとつながります。"
},
{
number: "03",
icon: Mountain,
title: "大自然を教場とした「野外活動」",
description:
"単なる戸外遊びではなく、大自然の中で身体を鍛え、知識や技能を磨きます。自然の神秘に触れることで豊かな感性や強い意志を養い、いざという時に役立つたくましい「生きる力」を体得します。"
},
{
number: "04",
icon: HeartHandshake,
title: "より良き社会人を目指す「奉仕の心」",
description:
"すべての活動の基盤にある「ちかい」と「おきて」の実践を通じて、誠実さや勇気を養います。自分自身を律し、地域社会に奉仕できる能力と、人道主義に基づく思いやりの心を育むことを目的としています。"
},
]

export function FeaturesSection() {
return (




ボーイスカウトで育つ力


私たちは「より良き社会人の育成」を目的とし、子どもたちの自発性を大切にしながら、独自の教育方法で生きる力を育みます。



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