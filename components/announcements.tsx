"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Announcements() {
  const announcements = [
    {
      title: "New Research Grant Awarded",
      description: "Our department has been awarded a ₹2 crore research grant for AI in healthcare applications.",
      date: "January 15, 2024",
      type: "Funding",
      urgent: false,
    },
    {
      title: "International Conference Presentation",
      description: "Dr. Smith will present our latest research findings at ICML 2024 in Vienna.",
      date: "January 10, 2024",
      type: "Conference",
      urgent: false,
    },
    {
      title: "PhD Admissions Open",
      description: "Applications are now open for PhD admissions in Computer Science for the upcoming semester.",
      date: "January 5, 2024",
      type: "Admissions",
      urgent: true,
    },
  ]

  const handleAnnouncementClick = (announcement: any) => {
    switch (announcement.type) {
      case "Funding":
        window.location.href = "/research"
        break
      case "Conference":
        window.location.href = "/achievements"
        break
      case "Admissions":
        window.location.href = "/join-us"
        break
      default:
        window.location.href = "/about"
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Announcements</h2>
          <p className="text-gray-600">Stay updated with our latest news and developments</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {announcements.map((announcement, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => handleAnnouncementClick(announcement)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Bell className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div className="flex gap-2">
                    <Badge variant="secondary">{announcement.type}</Badge>
                    {announcement.urgent && <Badge className="bg-red-100 text-red-800">Urgent</Badge>}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">{announcement.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{announcement.description}</p>

                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {announcement.date}
                </div>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="sm"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleAnnouncementClick(announcement)
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
