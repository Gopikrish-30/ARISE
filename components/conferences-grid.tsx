"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Presentation } from "lucide-react"

export function ConferencesGrid() {
  const conferences = [
    {
      title: "Novel Approaches in Computer Vision for Autonomous Systems",
      authors: "R Kumar, A Patel, S Reddy",
      conference: "International Conference on Computer Vision (ICCV)",
      year: "2024",
      location: "Paris, France",
      type: "Oral Presentation",
      abstract:
        "This paper presents innovative computer vision techniques for improving autonomous system performance in challenging environments.",
      presentationUrl: "https://example.com/presentation1",
      slidesUrl: "https://example.com/slides1.pdf",
      conferenceUrl: "https://example.com/conference1",
    },
    {
      title: "Reinforcement Learning for Robotic Manipulation",
      authors: "P Sharma, R Gupta",
      conference: "IEEE International Conference on Robotics and Automation (ICRA)",
      year: "2024",
      location: "London, UK",
      type: "Poster",
      abstract:
        "We demonstrate how reinforcement learning can be effectively applied to complex robotic manipulation tasks.",
      presentationUrl: "https://example.com/presentation2",
      slidesUrl: "https://example.com/slides2.pdf",
      conferenceUrl: "https://example.com/conference2",
    },
    {
      title: "Sustainable Pavement Materials: A Comprehensive Study",
      authors: "V Venudharan, K Bhavinlal",
      conference: "International Conference on Transportation Engineering",
      year: "2023",
      location: "Singapore",
      type: "Keynote",
      abstract:
        "Comprehensive analysis of sustainable materials for pavement construction and their long-term performance.",
      presentationUrl: "https://example.com/presentation3",
      slidesUrl: "https://example.com/slides3.pdf",
      conferenceUrl: "https://example.com/conference3",
    },
  ]

  const handleViewPresentation = (conference: any) => {
    window.open(conference.presentationUrl || "#", "_blank")
  }

  const handleDownloadSlides = (conference: any) => {
    const link = document.createElement("a")
    link.href = conference.slidesUrl || "#"
    link.download = `${conference.title.replace(/[^a-z0-9]/gi, "_")}_slides.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewConference = (conference: any) => {
    window.open(conference.conferenceUrl || "#", "_blank")
  }

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Presentation className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Conference Publications</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our research presented at leading international conferences and symposiums
        </p>
      </div>

      {/* Conferences List */}
      <div className="grid md:grid-cols-2 gap-6">
        {conferences.map((conference, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <Presentation className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex gap-2">
                  <Badge variant="outline">{conference.year}</Badge>
                  <Badge className="bg-green-100 text-green-800">{conference.type}</Badge>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{conference.title}</h3>

              <div className="space-y-2 mb-4 text-sm">
                <p>
                  <span className="font-medium text-gray-700">Authors:</span> {conference.authors}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Conference:</span> {conference.conference}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Location:</span> {conference.location}
                </p>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">{conference.abstract}</p>

              <div className="flex gap-3">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                  onClick={() => handleViewPresentation(conference)}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Presentation
                </Button>

                <Button variant="outline" onClick={() => handleDownloadSlides(conference)}>
                  Download Slides
                </Button>

                <Button variant="outline" onClick={() => handleViewConference(conference)}>
                  Conference Site
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
