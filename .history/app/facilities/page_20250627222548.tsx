"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"
import { useState } from "react"

export default function FacilitiesPage() {
  const facilities = [
    {
      title: "High-Performance Computing Cluster",
      description: "State-of-the-art computing cluster for machine learning and AI research.",
      image: "/placeholder.svg?height=250&width=400&text=HPC+Cluster",
      externalLink: "https://hpc.example.com",
      contact: "hpc-support@iitpkd.ac.in",
      location: "Building A, Room 101",
    },
    
  ]

  const categories = ["All", "Computing", "Imaging", "Vision", "Electronics", "Robotics"]

  const [activeFilter, setActiveFilter] = useState("All")

  const handleFilterClick = (category: string) => {
    setActiveFilter(category)
    // Filter facilities based on category
  }

  const handleViewDetails = (facility: any) => {
    // Navigate to detailed facility page or open modal
    window.location.href = `/facilities/${facility.title.toLowerCase().replace(/\s+/g, "-")}`
  }

  const handleBookFacility = (facility: any) => {
    // Open booking form or navigate to booking page
    const subject = encodeURIComponent(`Facility Booking Request - ${facility.title}`)
    const body = encodeURIComponent(
      `I would like to book the ${facility.title} facility.\n\nDetails:\n- Purpose: \n- Date: \n- Duration: \n\nBest regards,`,
    )
    window.location.href = `mailto:facilities@iitpkd.ac.in?subject=${subject}&body=${body}`
  }

  const filteredFacilities =
    activeFilter === "All" ? facilities : facilities.filter((facility) => facility.category === activeFilter)

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Facilities</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our state-of-the-art research equipment and laboratory facilities
          </p>
        </div>
      </section>

      {/* Facilities Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === activeFilter ? "default" : "outline"}
                className={category === activeFilter ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50"}
                onClick={() => handleFilterClick(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Facilities Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredFacilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <img
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{facility.category}</Badge>
                  </div>
                </div>

                  <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                      <p className="text-gray-600 mb-4">{facility.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Specifications</h4>
                        <ul className="space-y-1">
                          {facility.specs.map((spec, specIndex) => (
                            <li key={specIndex} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Applications</h4>
                        <div className="flex flex-wrap gap-2">
                          {facility.applications.map((app, appIndex) => (
                            <Badge key={appIndex} variant="outline" className="text-xs">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">External Website</h4>
                        <a
                          href={facility.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline break-all"
                        >
                          {facility.externalLink}
                        </a>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
                        <p className="text-gray-600 break-all">{facility.contact}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                        <p className="text-gray-600">{facility.location}</p>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 mb-2"
                        onClick={() => handleViewDetails(facility)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full hover:bg-green-50 hover:border-green-300"
                        onClick={() => handleBookFacility(facility)}
                      >
                        Book Facility
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
