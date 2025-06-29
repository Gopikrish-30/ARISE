"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"
import { useState } from "react"

export default function FacilitiesPage() {
  const facilities = [
    {
      title: "Albedometer",
      description: "This device is used to measure the reflection of light from earth's surface. It consists of two pyranometers, one facing up towards the sky and one facing down towards the surface for its setup.",
      image: "/facilities/Albedometer_0.jpg?height=250&width=400&text=HPC+Cluster",
      externalLink: "https://iitpkd.ac.in/facilities/albedometer",
      contact: "jthin@iitpkd.ac.in | 04923226470",
      location: "Workshop - 8",
    },

    {
      title: "Asphalt Concrete Mixer",
      description: "It Used for Mixing Bituminous Materials in the Laboratory.",
      image: "/facilities/Asphalt-concrete-mixer.jpg?height=250&width=400&text=HPC+Cluster",
      externalLink: "https://iitpkd.ac.in/facilities/asphalt-concrete-mixer",
      contact: "jthin@iitpkd.ac.in | 04923226470",
      location: "Casting Yard",
    },

    {
      title: "Asphalt Saw",
      description: "This saw can be used to cut concrete, asphalt and rock cores, and irregular rock samples in order to obtain geometrically defined samples.",
      image: "/facilities/Asphalt saw.jpg?height=250&width=400&text=HPC+Cluster",
      externalLink: "https://iitpkd.ac.in/facilities/asphalt-saw",
      contact: "jthin@iitpkd.ac.in | 04923226470",
      location: "Near Casting Yard",
    },

    {
      title: "Rolling Thin Film Oven",
      description: "It is used for measuring the effect of heat and air on a moving film of semi-solid bituminous materials",
      image: "/facilities/RTFO.jpg?height=250&width=400&text=HPC+Cluster",
      externalLink: "https://iitpkd.ac.in/facilities/rolling-thin-film-oven",
      contact: "jthin@iitpkd.ac.in | 04923226470",
      location: "Casting Yard",
    },

    {
      title: "Oven",
      description: "It can be used for soil, aggregates and asphalt testing, It has stainless steel internal and external lining, fast heat up, easy to read digital control and forced convection airflow for uniform temperature throughout the oven chamber.",
      image: "/facilities/Hot Air Oven.jpg?height=250&width=400&text=HPC+Cluster",
      externalLink: "https://iitpkd.ac.in/facilities/oven",
      contact: "jthin@iitpkd.ac.in | 04923226470",
      location: "Casting - Yard",
    },
    
    {
      title: "Rotational Viscometer",
      description: "It is Used to measure viscosity by analyzing the torque required to rotate a spindle submerged in a fluid at a constant speed",
      image: "/facilities/Ro.jpg?height=250&width=400&text=HPC+Cluster",
      externalLink: "https://iitpkd.ac.in/facilities/pressure-ageing-vessel",
      contact: "jthin@iitpkd.ac.in | 04923226470",
      location: "Casting - Yard",
    },

  
  ]

  // Removed categories and filtering as per user request


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

  const filteredFacilities = facilities

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
          

          {/* Facilities Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredFacilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <a href={facility.image || "/placeholder.svg"} target="_blank" rel="noopener noreferrer">
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                </div>

                  <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                      <p className="text-gray-600 mb-4">{facility.description}</p>


                      
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
