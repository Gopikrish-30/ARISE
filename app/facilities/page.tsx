"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function FacilitiesPage() {
  const facilities = [
    // Bitumen - Binder
    {
      title: "Penetrometer",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "binder",
    },
    {
      title: "Ring and Ball Apparatus",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "binder",
    },
    {
      title: "Ductilometer",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "binder",
    },
    {
      title: "Saybolt Viscometer",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "binder",
    },
    {
      title: "Capillary Viscometer",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "binder",
    },
    {
      title: "Rotational Viscometer",
      description: "It is Used to measure viscosity by analyzing the torque required to rotate a spindle submerged in a fluid at a constant speed",
      image: "/facilities/Rotational Viscometer.jpg",
      section: "bitumen",
      bitumenType: "binder",
    },
    {
      title: "Cleveland Open Cup Apparatus",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "binder",
    },
    {
      title: "Asphalt Homogenizer",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "binder",
    },
    {
      title: "Rolling Thin Film Oven",
      description: "It is used for measuring the effect of heat and air on a moving film of semi-solid bituminous materials",
      image: "/facilities/RTFO.jpg",
      section: "bitumen",
      bitumenType: "binder",
    },
    {
      title: "Pressure Aging Vessel",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "binder",
    },
    {
      title: "Rotary Evaporator",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "binder",
    },
    {
      title: "Dynamic Shear Rheometer",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "binder",
    },
    // Bitumen - Mix
    {
      title: "Rice Apparatus",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "mix",
    },
    {
      title: "Sand Equivalent Test Apparatus",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "mix",
    },
    {
      title: "Asphalt Mixer",
      description: "It Used for Mixing Bituminous Materials in the Laboratory.",
      image: "/facilities/Asphalt-concrete-mixer.jpg",
      section: "bitumen",
      bitumenType: "mix",
    },
    {
      title: "Marshall Compactor",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "mix",
    },
    {
      title: "Multispeed Compression Tester",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "mix",
    },
    {
      title: "Centrifuge Extractor",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "mix",
    },
    {
      title: "Superpave Gyratory Compactor",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "mix",
    },
    {
      title: "Dynamic Testing System 30 kN",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "mix",
    },
    {
      title: "Hamburg Wheel Tracker",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "bitumen",
      bitumenType: "mix",
    },
    // Cement
    {
      title: "Concrete Mixer",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "cement",
    },
    {
      title: "Universal Testing Machine",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "cement",
    },
    // Evaluation
    {
      title: "MERLIN",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "evaluation",
    },
    {
      title: "Dynamic Cone Penetrometer",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "evaluation",
    },
    {
      title: "Bump Integrator",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "evaluation",
    },
    {
      title: "Benkelman Beam",
      description: "Description coming soon.",
      image: "/placeholder.svg",
      section: "evaluation",
    },
    // Add more facilities and assign to 'cement', 'bitumen', or 'evaluation' as needed
  ]

  const facilitiesBySection = (section: string) => facilities.filter(f => f.section === section)

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

      {/* Facilities Content with Dropdown Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="materials" className="w-full">
            <TabsList className="mb-6 flex gap-2">
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="evaluation">Evaluation</TabsTrigger>
            </TabsList>
            <TabsContent value="materials">
              <Tabs defaultValue="bitumen" className="w-full">
                <TabsList className="mb-6 flex gap-2">
                  <TabsTrigger value="cement">Cement</TabsTrigger>
                  <TabsTrigger value="bitumen">Bitumen</TabsTrigger>
                </TabsList>
                <TabsContent value="cement">
                  <div className="grid md:grid-cols-2 gap-8">
                    {facilitiesBySection("cement").length === 0 ? (
                      <div className="col-span-2 text-center text-gray-600 py-12">No cement-related facilities yet.</div>
                    ) : (
                      facilitiesBySection("cement").map((facility, index) => (
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
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                            <p className="text-gray-600 mb-2 line-clamp-2">{facility.description}</p>
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="bitumen">
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-blue-700 mb-4">A. Binder</h4>
                    <div className="grid md:grid-cols-2 gap-8">
                      {facilitiesBySection("bitumen").filter(f => f.bitumenType === "binder").length === 0 ? (
                        <div className="col-span-2 text-center text-gray-600 py-12">No binder-related facilities yet.</div>
                      ) : (
                        facilitiesBySection("bitumen").filter(f => f.bitumenType === "binder").map((facility, index) => (
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
                            <CardContent className="p-6">
                              <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                              <p className="text-gray-600 mb-2 line-clamp-2">{facility.description}</p>
                            </CardContent>
                          </Card>
                        ))
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-700 mb-4">B. Mix</h4>
                    <div className="grid md:grid-cols-2 gap-8">
                      {facilitiesBySection("bitumen").filter(f => f.bitumenType === "mix").length === 0 ? (
                        <div className="col-span-2 text-center text-gray-600 py-12">No mix-related facilities yet.</div>
                      ) : (
                        facilitiesBySection("bitumen").filter(f => f.bitumenType === "mix").map((facility, index) => (
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
                            <CardContent className="p-6">
                              <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                              <p className="text-gray-600 mb-2 line-clamp-2">{facility.description}</p>
                            </CardContent>
                          </Card>
                        ))
                      )}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </TabsContent>
            <TabsContent value="evaluation">
              <div className="grid md:grid-cols-2 gap-8">
                {facilitiesBySection("evaluation").length === 0 ? (
                  <div className="col-span-2 text-center text-gray-600 py-12">No evaluation-related facilities yet.</div>
                ) : (
                  facilitiesBySection("evaluation").map((facility, index) => (
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
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                        <p className="text-gray-600 mb-2 line-clamp-2">{facility.description}</p>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
