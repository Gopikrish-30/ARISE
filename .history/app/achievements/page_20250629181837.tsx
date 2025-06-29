"use client"

import { AchievementsGrid } from "@/components/achievements-grid"

export default function AchievementsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Achievements & Awards</h1>
        </div>
      </section>

      {/* Achievements Grid Section */}
      <AchievementsGrid />
    </div>
  )
}
