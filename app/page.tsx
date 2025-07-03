import { Hero } from "@/components/hero"
import AboutPage from "./about/page"
import AchievementsPage from "./achievements/page"
import ContactPage from "./contact/page"
import { Activity } from "@/components/activity"
import FacilitiesPage from "./facilities/page"
import JoinUsPage from "./join-us/page"
import ResearchPage from "./research/page"
import TeamPage from "./team/page"
import { ProgramsGrid } from "@/components/programs-grid"
import "../styles/globals.css"
import CollaborationsPage from "./collaborations/page"

export default function HomePage() {
  return (
    <div className="bg-white scroll-smooth">
      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="min-h-screen">
        <AboutPage />
      </section>
      <section id="team" className="min-h-screen">
        <TeamPage />
      </section>
      <section id="facilities" className="min-h-screen">
        <FacilitiesPage />
      </section>
      <section id="research" className="min-h-screen">
        <ResearchPage />
      </section>
      <section id="programs" className="min-h-screen">
        <div className="container mx-auto py-16">
          <ProgramsGrid />
        </div>
      </section>
      <section id="achievements" className="min-h-screen">
        <AchievementsPage />
      </section>
      <section id="collaborations" className="min-h-screen">
        <CollaborationsPage />
      </section>
      <section id="activity" className="min-h-screen">
        <Activity />
      </section>
      <section id="contact" className="min-h-screen">
        <ContactPage />
      </section>
    </div>
  )
}
