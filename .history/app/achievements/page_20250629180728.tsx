"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AchievementsPage() {
  const achievements = [
    {

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Achievements & Awards</h1>
        </div>
      </section>

      {/* Single Achievement Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-6">{achievement.title}</h2>
          <div className="w-64 h-64 mb-6 relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={achievement.imageSrc}
              alt={achievement.imageAlt}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <p className="max-w-3xl text-lg text-gray-700">{achievement.description}</p>
          <p className="mt-4 font-semibold">Ms. Silpa Sekhar G.</p>
          <p>Research Scholar</p>
          <p>Under the guidance of Dr. C.V Veena Venudharan</p>
          <p>Department of Civil Engineering</p>
        </div>
      </section>
    </div>
  )
}
