"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"

const organisedActivities = [
  {
    title: "Open House – Pavement Engineering Research Group",
    date: "18-19 Jan 2025",
    location: "IIT Palakkad Campus",
    type: "Open House",
    description:
      "An open house session was organized by the Pavement Engineering Research Group to showcase ongoing research, laboratory capabilities, and current projects to prospective students, collaborators, and industry professionals.",
  },
  {
    title: "CE Research Reception 12: “The Pavement Dilemma: Finding the Right Fit”",
    date: "Wednesday, 19 February 2025",
    location: "IIT Palakkad Campus",
    type: "Research Reception",
    description:
      "As part of the CE Research Reception series, the twelfth edition featured research scholars from the Pavement Engineering group, presenting key challenges and solutions in selecting appropriate pavement strategies for Indian conditions.",
  },
]

const conductedActivities = [
  {
    title: "Science Quest 2025",
    date: "25 May 2025",
    location: "IIT Palakkad Campus",
    type: "Exhibition",
    description:
      "The Pavement Engineering Research Group participated in Science Quest 2025, demonstrating the use of MERLIN (Machine for Evaluating Roughness Using Low-cost Instrumentation) for pavement surface roughness evaluation. The session engaged students and visitors in interactive learning about pavement condition monitoring.",
  },
  {
    title: "Workshop Series for PWD Engineering",
    date: "26–27 May 2025",
    location: "IIT Palakkad Campus",
    type: "Workshop",
    description:
      "A focused workshop Series was conducted for engineers from the Kerala Public Works Department (PWD), emphasizing modern practices in flexible pavement design, material characterization, and performance evaluation.",
  },
]

export function Activity() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Activity</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with our latest organised and conducted activities
          </p>
        </div>
      </section>

      {/* Organised Activities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Organised</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {organisedActivities.map((activity, index) => (
              <Card key={index} className="overflow-hidden border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{activity.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{activity.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conducted Activities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Conducted</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {conductedActivities.map((activity, index) => (
              <Card key={index} className="overflow-hidden group">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{activity.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{activity.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{activity.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
