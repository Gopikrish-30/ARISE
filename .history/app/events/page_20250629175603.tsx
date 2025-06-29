"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents: any[] = []

  const pastEvents = [
    {
      title: "Open House – Pavement Engineering Research Group",
      date: "18-19 Jan 2025",
      location: "IIT Palakkad Campus",
      type: "Open House",
      description:
      status: "upcoming",
    },
    {
      title: "Workshop on Computer Vision Applications",
      date: "February 28, 2024",
      location: "Virtual Event",
      type: "Workshop",
      description: "Hands-on workshop covering latest techniques in computer vision and their real-world applications.",
      attendees: "50+",
      status: "upcoming",
    },
  ]

  const pastEvents = [
    {
      title: "Annual Research Symposium 2023",
      date: "December 10-12, 2023",
      location: "IIT Palakkad Campus",
      type: "Symposium",
      description:
        "Our annual research showcase featuring presentations from faculty and students on their latest research findings.",
      attendees: "150+",
      status: "completed",
    },
    {
      title: "Industry-Academia Meet 2023",
      date: "November 20, 2023",
      location: "Hybrid Event",
      type: "Networking",
      description:
        "Bringing together industry leaders and academic researchers to discuss collaboration opportunities.",
      attendees: "100+",
      status: "completed",
    },
    {
      title: "Student Research Presentation Day",
      date: "October 15, 2023",
      location: "Department Auditorium",
      type: "Presentation",
      description:
        "Platform for our research scholars to present their ongoing work and receive feedback from peers and faculty.",
      attendees: "75+",
      status: "completed",
    },
    {
      title: "International Workshop on Robotics",
      date: "September 5-7, 2023",
      location: "IIT Palakkad Campus",
      type: "Workshop",
      description: "Three-day intensive workshop on advanced robotics with hands-on sessions and expert talks.",
      attendees: "80+",
      status: "completed",
    },
  ]

  const handleRegisterEvent = (event: any) => {
    if (event.status === "upcoming") {
      // Open registration form or external registration link
      window.open(`https://iitpkd.ac.in/register/${event.title.toLowerCase().replace(/\s+/g, "-")}`, "_blank")
    }
  }

  const handleEventInquiry = (event: any) => {
    const subject = encodeURIComponent(`Inquiry about ${event.title}`)
    const body = encodeURIComponent(`Dear Team,\n\nI would like to know more about ${event.title}.\n\nBest regards,`)
    window.location.href = `mailto:events@iitpkd.ac.in?subject=${subject}&body=${body}`
  }

  const handleViewEventDetails = (event: any) => {
    window.location.href = `/events/${event.title.toLowerCase().replace(/\s+/g, "-")}`
  }

  const handleAddToCalendar = (event: any) => {
    // Create calendar event
    const startDate = new Date(event.date).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate}/${startDate}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`
    window.open(calendarUrl, "_blank")
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with our latest conferences, workshops, and research events
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className="bg-green-100 text-green-800">{event.type}</Badge>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Upcoming
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.attendees} Expected Attendees</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{event.description}</p>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 mb-2"
                    onClick={() => handleRegisterEvent(event)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Register Now
                  </Button>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" onClick={() => handleEventInquiry(event)}>
                      Inquire
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1" onClick={() => handleAddToCalendar(event)}>
                      Add to Calendar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Events</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary">{event.type}</Badge>
                    <Badge variant="outline" className="text-gray-600">
                      Completed
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">{event.title}</h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.attendees} Attendees</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      className="w-full bg-gray-600 hover:bg-gray-700"
                      onClick={() => handleViewEventDetails(event)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
