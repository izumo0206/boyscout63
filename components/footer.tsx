import { Compass, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Compass className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold">ボーイスカウト大阪第63団</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              大阪市生野区・平野区を中心に活動するボーイスカウト団です。
              自然の中で「考える力」「協力する心」「挑戦する勇気」を育てます。
            </p>
          </div>

          {/* Activity Area */}
          <div>
            <h3 className="text-lg font-bold mb-4">活動エリア</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <span>大阪市生野区</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <span>大阪市平野区</span>
              </li>
            </ul>
          </div>

          {/* SNS */}
          <div>
            <h3 className="text-lg font-bold mb-4">SNS</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/bs_osaka63/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-sm opacity-80">
              @bs_osaka63
              <br />
              活動の様子を配信中！
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              &copy; 2023 ボーイスカウト大阪第63団
            </p>
            <div className="text-sm opacity-60 text-center md:text-right">
              <p>
                このホームページ上のスカウト運動に関する事項は、
                <br className="md:hidden" />
                ボーイスカウト日本連盟ホームページ掲載「ボーイスカウト関係のホームページ開設」に沿って掲載しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
