"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Activities() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const activities = [
    {
      title: "Research Excellence",
      description: "Conducting world-class research in pavement engineering and sustainable materials",
      image: "/placeholder.svg?height=400&width=600&text=Research+Excellence",
    },
    {
      title: "Student Mentorship",
      description: "Guiding the next generation of researchers and innovators in civil engineering",
      image: "/placeholder.svg?height=400&width=600&text=Student+Mentorship",
    },
    {
      title: "Industry Collaboration",
      description: "Partnering with industry leaders for real-world pavement engineering applications",
      image: "/placeholder.svg?height=400&width=600&text=Industry+Collaboration",
    },
    {
      title: "Global Outreach",
      description: "Participating in international conferences and research collaborations",
      image: "/placeholder.svg?height=400&width=600&text=Global+Outreach",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activities.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, activities.length])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % activities.length)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handleActivityClick = (activityTitle: string) => {
    switch (activityTitle) {
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
      default:
        window.location.href = "/about"
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Activities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the diverse range of activities that drive our research excellence and innovation
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Enhanced Carousel with Images */}
            <div className="relative group">
              <div className="bg-white rounded-2xl h-96 overflow-hidden relative shadow-lg">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={activities[currentSlide].image || "/placeholder.svg"}
                    alt={activities[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-4">{activities[currentSlide].title}</h3>
                    <p className="text-gray-200 text-lg">{activities[currentSlide].description}</p>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {activities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index)
                      setIsAutoPlaying(false)
                      setTimeout(() => setIsAutoPlaying(true), 10000)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Clean Activities List */}
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 border hover:shadow-md ${
                    index === currentSlide
                      ? "border-blue-200 bg-blue-50 shadow-sm"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => {
                    setCurrentSlide(index)
                    setIsAutoPlaying(false)
                    setTimeout(() => setIsAutoPlaying(true), 10000)
                    handleActivityClick(activity.title)
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      />
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                            index === currentSlide ? "text-blue-600" : "text-gray-900"
                          }`}
                        >
                          {activity.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{activity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
