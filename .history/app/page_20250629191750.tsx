import { Hero } from "@/components/hero"
import { About } from "@/components/about"

export default function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <About />
      <MissionVision />
      <Activities />
    </div>
  )
}
