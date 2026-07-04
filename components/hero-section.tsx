"use client"

import { Button } from "@/components/ui/button"
import { TreePine, Tent, Users, ChevronDown, Star, Megaphone } from "lucide-react"

export function HeroSection() {
  const scrollToTroops = () => {
    document.getElementById("troops")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-primary text-primary-foreground">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 opacity-20">
          <TreePine className="h-24 w-24" />
        </div>
        <div className="absolute top-20 right-20 opacity-20">
          <Tent className="h-20 w-20" />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-20">
          <TreePine className="h-32 w-32" />
        </div>
        <div className="absolute bottom-10 right-1/3 opacity-20">
          <Users className="h-16 w-16" />
        </div>
        <div className="absolute top-1/3 right-10 opacity-20">
          <Star className="h-12 w-12" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-left">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/50 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
            </span>
            <Megaphone className="h-3.5 w-3.5 flex-shrink-0" />
            ビーバースカウト隊 体験入隊受付中
          </span>
        </div>

        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight whitespace-nowrap">
          日本ボーイスカウト大阪第63団
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mb-10 opacity-90 leading-relaxed">
          大阪市生野区・平野区を中心に活動しています。
          <br className="hidden md:block" />
          自然の中で「考える力」「協力する心」「挑戦する勇気」を育てます
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-start items-start sm:items-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg rounded-full shadow-lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            体験入隊に申し込む
          </Button>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-full shadow-md"
            onClick={scrollToTroops}
          >
            各隊の紹介を見る
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToTroops}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="スクロールダウン"
      >
        <ChevronDown className="h-10 w-10 opacity-70" />
      </button>
    </section>
  )
}
