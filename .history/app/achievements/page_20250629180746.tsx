"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AchievementsPage() {
  const achievements = [
    {
      title: "Jury Appreciation Prize",
      description:
        "Ms. Silpa Sekhar G., a research scholar under the guidance of Dr. C.V Veena Venudharan, Department of Civil Engineering, has been awarded the 'Jury Appreciation Prize' for presenting research at the All India Research Scholars' Summit 2025, held from 27th to 30th March, 2025, at the Indian Institute of Technology Madras.",
      year: "2025",
      category: "Research Recognition",
      icon: Award,
      imageSrc: "/Profile Photos/Silpa.jpg",
      imageAlt: "Ms. Silpa Sekhar G.",
      extraDetails: [
        "Research Scholar",
        "Under the guidance of Dr. C.V Veena Venudharan",
        "Department of Civil Engineering",
      ],
    },
  ]

  const handleAchievementClick = (achievement: any) => {
    // Navigate to detailed achievement page
    window.location.href = `/achievements/${achievement.title.toLowerCase().replace(/\s+/g, "-")}`
  }

  const handleViewCertificate = (achievement: any) => {
    // Open certificate or award document
    window.open(`/certificates/${achievement.title.toLowerCase().replace(/\s+/g, "-")}.pdf`, "_blank")
  }

  const handleShareAchievement = async (achievement: any) => {
    const shareData = {
      title: achievement.title,
      text: achievement.description,
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(`${achievement.title}\n${achievement.description}`)
        // Show toast notification
      }
    } catch (err) {
      console.error("Error sharing:", err)
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Achievements & Awards</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Celebrating our milestones, recognitions, and contributions to the research community
          </p>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => handleAchievementClick(achievement)}
              >
                <CardContent className="p-6">
                  {achievement.imageSrc && (
                    <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={achievement.imageSrc}
                        alt={achievement.imageAlt || achievement.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <achievement.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <Badge variant="outline">{achievement.year}</Badge>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {achievement.category}
                  </Badge>
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                  {achievement.extraDetails && (
                    <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                      {achievement.extraDetails.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  )}
                  {/* Add action buttons */}
                  <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleViewCertificate(achievement)
                      }}
                    >
                      View Certificate
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleShareAchievement(achievement)
                      }}
                    >
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
