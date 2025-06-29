"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Medal } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Recognitions() {
  const recognitions = [
    // Recognitions data removed as per user request
  ]

  const handleRecognitionClick = (recognition: any) => {
    // Navigate to achievements page with specific recognition
    window.location.href = "/achievements"
  }

  const handleViewCertificate = (recognition: any) => {
    // Open certificate or award details
    window.open(`/certificates/${recognition.title.toLowerCase().replace(/\s+/g, "-")}.pdf`, "_blank")
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
      year: "2022",
      description: "Our faculty member received recognition for exceptional research contributions.",
      icon: Medal,
    },
  ]

  const handleRecognitionClick = (recognition: any) => {
    // Navigate to achievements page with specific recognition
    window.location.href = "/achievements"
  }

  const handleViewCertificate = (recognition: any) => {
    // Open certificate or award details
    window.open(`/certificates/${recognition.title.toLowerCase().replace(/\s+/g, "-")}.pdf`, "_blank")
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recognitions</h2>
          <p className="text-gray-600">Celebrating our achievements and accolades</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recognitions.map((recognition, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => handleRecognitionClick(recognition)}
            >
              <CardContent className="p-8">
                <recognition.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <Badge className="mb-4">{recognition.year}</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{recognition.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{recognition.organization}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{recognition.description}</p>
                <div className="mt-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="sm"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleViewCertificate(recognition)
                    }}
                  >
                    View Certificate
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleRecognitionClick(recognition)
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
