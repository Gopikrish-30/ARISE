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
