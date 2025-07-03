"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Award, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageGallery } from "@/components/image-gallery"
import Link from "next/link"

export default function AboutPage() {
  const handleHighlightClick = (highlight: any) => {
    // Navigate based on highlight type
    switch (highlight.badge) {
      case "2018":
      case "2020":
        window.location.href = "/facilities"
        break
      case "2019":
      case "2022":
        window.location.href = "/team"
        break
      case "2021":
      case "2023":
        window.location.href = "/achievements"
        break
      default:
        window.location.href = "/research"
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 pt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Research Lab</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our journey of innovation, research excellence, and commitment to advancing the frontiers of
            science and technology at IIT Palakkad
          </p>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>Established 2014</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The IIT Palakkad Research Lab was established in 2014 with a vision to advance cutting-edge research in
              computer science and engineering. Starting with a small team of dedicated faculty and students, we have
              grown into a premier research facility known for our contributions to artificial intelligence, machine
              learning, and robotics.
            </p>
          </div>
        </div>
      </section>

      {/* Lab Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lab Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Capturing moments of innovation, collaboration, and excellence in our research journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "State-of-the-Art Research Facility",
                description:
                  "Our modern laboratory equipped with cutting-edge computing infrastructure, high-performance servers, and specialized equipment designed to support advanced AI and machine learning research.",
                badge: "2018",
                image: "/placeholder.svg?height=200&width=400&text=Research+Facility",
              },
              {
                title: "Collaborative Research Environment",
                description:
                  "Team members working together in our open collaborative spaces, fostering innovation through interdisciplinary research and knowledge sharing among researchers from diverse backgrounds.",
                badge: "2019",
                image: "/placeholder.svg?height=200&width=400&text=Team+Collaboration",
              },
              {
                title: "Advanced Robotics Laboratory",
                description:
                  "Our robotics division featuring autonomous robotic arms, and cutting-edge sensors for developing next-generation robotic solutions for real-world applications.",
                badge: "2020",
                image: "/placeholder.svg?height=200&width=400&text=Robotics+Lab",
              },
              {
                title: "International Conference Presentations",
                description:
                  "Our researchers presenting groundbreaking findings at international conferences, sharing knowledge with the global research community and establishing valuable collaborations.",
                badge: "2021",
                image: "/placeholder.svg?height=200&width=400&text=Conference+Presentation",
              },
              {
                title: "Student Research Showcase",
                description:
                  "Annual research showcase where our talented students present their innovative applications of their research in AI, machine learning, and computer vision.",
                badge: "2022",
                image: "/placeholder.svg?height=200&width=400&text=Student+Showcase",
              },
              {
                title: "Industry Partnership Workshop",
                description:
                  "Collaborative workshops with industry partners, bridging the gap between academic research and real-world applications, ensuring our research addresses real-world challenges and opportunities.",
                badge: "2023",
                image: "/placeholder.svg?height=200&width=400&text=Industry+Partnership",
              },
            ].map((highlight, index) => (
              <Card
                key={index}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
                onClick={() => handleHighlightClick(highlight)}
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    src={highlight.image || "/placeholder.svg"}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {highlight.badge}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                </CardContent>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Activities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Activities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the diverse range of activities that drive our research excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Research Excellence",
                description: "Conducting world-class research in AI, ML, and robotics",
                image: "/placeholder.svg?height=150&width=300&text=Research+Excellence",
              },
              {
                title: "Student Mentorship",
                description: "Guiding the next generation of researchers and innovators",
                image: "/placeholder.svg?height=150&width=300&text=Student+Mentorship",
              },
              {
                title: "Industry Collaboration",
                description: "Partnering with industry leaders for real-world applications",
                image: "/placeholder.svg?height=150&width=300&text=Industry+Collaboration",
              },
              {
                title: "Global Outreach",
                description: "Participating in international conferences and collaborations",
                image: "/placeholder.svg?height=150&width=300&text=Global+Outreach",
              },
            ].map((activity, index) => (
              <Card
                key={index}
                className="text-center cursor-pointer hover:shadow-lg transition-shadow group overflow-hidden"
                onClick={() => {
                  switch (activity.title) {
                    case "Research Excellence":
                      window.location.href = "/research"
                      break
                    case "Student Mentorship":
                      window.location.href = "/team"
                      break
                    case "Industry Collaboration":
                      window.location.href = "/about"
                      break
                    case "Global Outreach":
                      window.location.href = "/achievements"
                      break
                  }
                }}
              >
                <div className="h-32 bg-gray-200 overflow-hidden">
                  <img
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 text-sm">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Interactive Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-gray-600">A glimpse into our research environment and activities</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <ImageGallery />
          </div>
        </div>
      </section>

      {/* Stats */}
    </div>
  )
}
