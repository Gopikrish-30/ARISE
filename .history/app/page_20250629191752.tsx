import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MissionVision } from "@/components/mission-vision"
import { Activities } from "@/components/activities"
import { Impact } from "@/components/impact"

export default function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <About />
      <MissionVision />
      <Activities />
      <Impact />
    </div>
  )
}
