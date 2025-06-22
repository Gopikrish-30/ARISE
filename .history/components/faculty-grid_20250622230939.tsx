"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Mail, ExternalLink, Phone, MapPin, Calendar } from "lucide-react"

export function FacultyGrid() {
  const [selectedFaculty, setSelectedFaculty] = useState<any>(null)

  const faculty = [
    {
      name: "Dr. Veena Venudharan",
      title: "Assistant Professor - Civil Engineering & ESSENCE",
      image: "/placeholder.svg?height=300&width=300",
      interests: [
        "Pavement material",
        "Pavement design",
        "maintenance and rehabilitation",
        "Sustainable pavements",
        "Pavement Management Systems",
      ],
      bio: "Before joining IIT Palakkad as a faculty, Dr. Veena Venudharan worked as Research Manager in the Transportation Infra Business of Larsen and Toubro Construction. Dr. Veena was involved in the development of a Research Center which focused on Pavement Materials. Other responsibilities included technical audits of projects, practice of new technologies and troubleshooting at the site. Prior to that, she served as Project Associate at IIT Madras and IIT Kharagpur. She holds a Ph.D. in the area of Pavement Engineering from the Indian Institute of Technology Kharagpur. Her Master is in Transportation Engineering, also from IIT Kharagpur. She holds a Bachelor degree in civil engineering from the College of Engineering Trivandrum, University of Kerala.",
      email: "veena@iitpkd.ac.in",
      phone: "+91 4923 226 100",
      office: "Room 301, Academic Block A",
      joiningDate: "August 2018",
      education: [
        "Ph.D. in Pavement Engineering, IIT Kharagpur",
        "M.Tech in Transportation Engineering, IIT Kharagpur",
        "B.Tech in Civil Engineering, CET Trivandrum",
      ],
      profile: "https://iitpkd.ac.in/faculty/veena",
    },
    {
      name: "Dr. Rajesh Kumar",
      title: "Professor - Civil Engineering",
      image: "/placeholder.svg?height=300&width=300",
      interests: ["Structural Engineering", "Concrete Technology", "Infrastructure Materials", "Sustainability"],
      bio: "Dr. Rajesh Kumar is a renowned researcher in the field of structural engineering with over 15 years of experience. He has published extensively in top-tier conferences and journals. His research focuses on developing sustainable construction materials and innovative structural systems. He has supervised over 20 PhD students and has received multiple awards for his contributions to civil engineering research.",
      email: "rajesh@iitpkd.ac.in",
      phone: "+91 4923 226 101",
      office: "Room 205, Civil Engineering Block",
      joiningDate: "January 2015",
      education: [
        "Ph.D. in Structural Engineering, IIT Delhi",
        "M.Tech in Structural Engineering, IIT Bombay",
        "B.Tech in Civil Engineering, NIT Trichy",
      ],
      profile: "https://iitpkd.ac.in/faculty/rajesh",
    },
    {
      name: "Dr. Priya Sharma",
      title: "Associate Professor - Transportation Engineering",
      image: "/placeholder.svg?height=300&width=300",
      interests: ["Traffic Engineering", "Transportation Planning", "Smart Transportation", "Urban Mobility"],
      bio: "Dr. Priya Sharma specializes in transportation engineering and has led several projects in developing intelligent transportation systems. She has extensive experience in traffic management and has published over 50 research papers in international journals and conferences. Her work has been recognized with several prestigious awards.",
      email: "priya@iitpkd.ac.in",
      phone: "+91 4923 226 102",
      office: "Room 108, Transportation Lab",
      joiningDate: "March 2017",
      education: [
        "Ph.D. in Transportation Engineering, IIT Kanpur",
        "M.Tech in Transportation Engineering, IIT Madras",
        "B.Tech in Civil Engineering, BITS Pilani",
      ],
      profile: "https://iitpkd.ac.in/faculty/priya",
    },
  ]

  const handleEmailClick = (email: string, name: string) => {
    const subject = encodeURIComponent("Research Inquiry")
    const body = encodeURIComponent(
      `Dear ${name},\n\nI am writing to inquire about your research work and potential collaboration opportunities.\n\nBest regards,`,
    )
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  const handlePhoneClick = (phone: string) => {
    window.location.href = `tel:${phone}`
  }

  const handleProfileClick = (profileUrl: string) => {
    window.open(profileUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {faculty.map((member, index) => (
          <Card
            key={index}
            className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
          >
            <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Badge className="bg-white/90 text-blue-600">{member.title.split(" - ")[0]}</Badge>
              </div>
            </div>

            <CardContent className="p-6">
              <Badge className="mb-3 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
                {member.title.split(" - ")[1]}
              </Badge>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{member.title}</p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  {member.interests.slice(0, 2).map((interest, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs hover:bg-blue-50 transition-colors">
                      {interest}
                    </Badge>
                  ))}
                  {member.interests.length > 2 && (
                    <Badge variant="outline" className="text-xs hover:bg-blue-50 transition-colors">
                      +{member.interests.length - 2} more
                    </Badge>
                  )}
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">{member.bio}</p>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                  onClick={() => handleEmailClick(member.email, member.name)}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                      onClick={() => setSelectedFaculty(member)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Profile
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Faculty Profile Modal */}
      {selectedFaculty && (
        <Dialog open={!!selectedFaculty} onOpenChange={() => setSelectedFaculty(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-blue-600">{selectedFaculty.name}</DialogTitle>
            </DialogHeader>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg h-64 flex items-center justify-center mb-4">
                  <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    {selectedFaculty.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleProfileClick(selectedFaculty.profile)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    IIT Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleEmailClick(selectedFaculty.email, selectedFaculty.name)}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => handlePhoneClick(selectedFaculty.phone)}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                </div>
              </div>

              <div className="md:col-span-2">
                <Badge className="mb-4 bg-blue-100 text-blue-800">{selectedFaculty.title}</Badge>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Research Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedFaculty.interests.map((interest: string, idx: number) => (
                        <Badge key={idx} variant="outline" className="hover:bg-blue-50">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Biography</h4>
                    <p className="text-gray-600 leading-relaxed">{selectedFaculty.bio}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                    <ul className="space-y-1">
                      {selectedFaculty.education.map((edu: string, idx: number) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        <button
                          className="text-sm hover:text-blue-600 transition-colors"
                          onClick={() => handleEmailClick(selectedFaculty.email, selectedFaculty.name)}
                        >
                          {selectedFaculty.email}
                        </button>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="w-4 h-4 mr-2" />
                        <button
                          className="text-sm hover:text-blue-600 transition-colors"
                          onClick={() => handlePhoneClick(selectedFaculty.phone)}
                        >
                          {selectedFaculty.phone}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{selectedFaculty.office}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">Joined: {selectedFaculty.joiningDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
