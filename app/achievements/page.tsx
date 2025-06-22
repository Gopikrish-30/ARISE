"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Medal, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AchievementsPage() {
  const achievements = [
    {
      title: "Best Paper Award",
      description:
        "Received the best paper award at the International Conference on Machine Learning for groundbreaking research in neural networks.",
      year: "2023",
      category: "Research Excellence",
      icon: Award,
    },
    {
      title: "Young Researcher Award",
      description:
        "Dr. Smith received the Young Researcher Award from the IEEE Computer Society for outstanding contributions to AI research.",
      year: "2023",
      category: "Individual Recognition",
      icon: Trophy,
    },
    {
      title: "Innovation Grant",
      description:
        "Secured a ₹50 lakh research grant from the Department of Science and Technology for developing AI-powered healthcare solutions.",
      year: "2022",
      category: "Funding",
      icon: Medal,
    },
    {
      title: "Patent Filed",
      description:
        "Successfully filed a patent for 'Autonomous Navigation System for Mobile Robots in Dynamic Environments'.",
      year: "2022",
      category: "Intellectual Property",
      icon: Star,
    },
    {
      title: "International Collaboration",
      description:
        "Established research collaboration with MIT for joint research in quantum machine learning applications.",
      year: "2022",
      category: "Collaboration",
      icon: Award,
    },
    {
      title: "Student Achievement",
      description:
        "Our PhD student won the Best Thesis Award at the National Conference on Computer Vision and Pattern Recognition.",
      year: "2021",
      category: "Student Recognition",
      icon: Trophy,
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
                  <div className="flex items-start justify-between mb-4">
                    <achievement.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <Badge variant="outline">{achievement.year}</Badge>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {achievement.category}
                  </Badge>
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "25+", label: "Awards Received", icon: Award, link: "/achievements" },
              { number: "15+", label: "Patents Filed", icon: Medal, link: "/research" },
              { number: "100+", label: "Publications", icon: Star, link: "/research/journals" },
              { number: "₹2Cr+", label: "Research Funding", icon: Trophy, link: "/research" },
            ].map((stat, index) => (
              <Link
                key={index}
                href={stat.link}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              >
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors">{stat.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
