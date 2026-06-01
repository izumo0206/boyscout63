import { Users, Star, Compass } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TroopInfo {
  name: string
  target: string
  description: string
  activities: string[]
  status?: "recruiting" | "active"
}

const troops: TroopInfo[] = [
  {
    name: "ビーバースカウト隊",
    target: "小学1年生〜2年生",
    description:
      "集団での行動に慣れながら仲間と仲よく遊ぶこと、自然に親しむこと、楽しみや喜びを分かち合うことなどを目標に、さまざまなことに挑戦します。",
    activities: ["自然遊び", "工作", "歌・ゲーム", "野外活動"],
    status: "recruiting",
  },
  {
    name: "カブスカウト隊",
    target: "小学3年生〜5年生",
    description:
      "自分で考え自分のことは自分でする、みんなでルールを作って仲良く遊ぶ、自然や社会と触れ合う。これらを通じて自立心や想像力を養います。",
    activities: ["ハイキング", "キャンプ", "奉仕活動", "技能訓練"],
    status: "active",
  },
  {
    name: "ボーイスカウト隊",
    target: "小学6年生〜中学3年生",
    description:
      "キャンプやハイキングなどの野外活動を通じて、それぞれが役割を持って行動し、リーダーシップや協調性、社会性を身に着けます。奉仕活動なども積極的に行い、自分のことをするだけでなく、他の人の役に立つ喜びを学びます。",
    activities: ["キャンプ", "サイクリング", "夜間ハイク", "釣り", "アイススケート"],
    status: "active",
  },
  {
    name: "ベンチャースカウト隊",
    target: "高校1年生〜18歳",
    description:
      "「高度な野外活動」への挑戦のほか、関心をもったさまざまな課題や問題について個人やチームで考えて行動していきます。",
    activities: ["高度な野外活動", "社会貢献", "自主企画プロジェクト"],
    status: "active",
  },
]

function StatusBadge({ status }: { status?: TroopInfo["status"] }) {
  if (status === "recruiting") {
    return (
      <Badge className="bg-secondary text-secondary-foreground">
        体験入隊受付中
      </Badge>
    )
  }
  return (
    <Badge className="bg-primary text-primary-foreground">
      活動中
    </Badge>
  )
}

export function TroopsSection() {
  return (
    <section id="troops" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Compass className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              各隊の紹介
            </h2>
            <Compass className="h-8 w-8 text-primary" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ボーイスカウト大阪第63団では、年齢に応じた4つの隊で活動しています。
            <br />
            お子様の成長に合わせたプログラムをご用意しています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {troops.map((troop) => (
            <Card
              key={troop.name}
              className={`hover:shadow-lg transition-shadow duration-300 border-border ${
                troop.status === "recruiting" ? "border-secondary border-2" : ""
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {troop.name}
                    </CardTitle>
                    <p className="text-sm text-primary font-medium mt-1">
                      【{troop.target}】
                    </p>
                  </div>
                  <StatusBadge status={troop.status} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p className="text-muted-foreground leading-relaxed">
                  {troop.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {troop.activities.map((activity) => (
                    <span
                      key={activity}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs"
                    >
                      <Star className="h-3 w-3 text-secondary" />
                      {activity}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional note */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    入隊について
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    63団では毎年4月から新年度が始まりますが、年度の途中でも入団に支障はありません。
                    また見学や体験は、学年や時期を問わずに行っておりますので、お気軽にお問い合わせください。
                    <br />
                    <span className="text-foreground font-medium">
                      ※幼稚園年長の9月から仮入隊可能です。
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
