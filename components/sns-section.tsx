import { Instagram, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SNSSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            最近の活動
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Instagramで活動の様子を公開しています。
            <br />
            どんな雰囲気の活動なのか、ぜひご覧ください。
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Instagram Card */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center justify-start gap-2 mb-6">
              <Instagram className="h-8 w-8 text-pink-500" />
              <h3 className="text-2xl font-bold text-foreground">@bs_osaka63</h3>
            </div>
            
            <div className="aspect-video bg-muted rounded-xl mb-6 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
                <div className="text-white">
                  <Instagram className="h-16 w-16 mb-4" />
                  <p className="text-lg font-medium">活動写真を公開中！</p>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">
              キャンプ、ハイキング、奉仕活動など、
              <br />
              スカウトたちの元気な姿をお届けしています。
            </p>
            
            <Button
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:opacity-90 text-white px-8"
              asChild
            >
              <a
                href="https://www.instagram.com/bs_osaka63/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Instagram className="h-5 w-5" />
                Instagramを見る
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
