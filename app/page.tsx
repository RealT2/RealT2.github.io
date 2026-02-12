import { Nav } from "@/components/icloud/nav"
import { Hero } from "@/components/icloud/hero"
import { Features } from "@/components/icloud/features"
import { VideoSection } from "@/components/icloud/video-section"
import { Footer } from "@/components/icloud/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Features />
      <VideoSection />
      <Footer />
    </main>
  )
}
