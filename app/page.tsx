import { HeroSection } from "@/components/hero-section"
import { TroopsSection } from "@/components/troops-section"
import { FeaturesSection } from "@/components/features-section"
import { FlowSection } from "@/components/flow-section"
import { FeesSection } from "@/components/fees-section"
import { SNSSection } from "@/components/sns-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TroopsSection />
      <FeaturesSection />
      <FlowSection />
      <FeesSection />
      <SNSSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
