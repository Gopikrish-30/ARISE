"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Mail, Calendar, ExternalLink, Phone, MapPin, User } from "lucide-react"

export function ResearchScholarsGrid() {
  const [selectedScholar, setSelectedScholar] = useState<any>(null)

  const phdScholars = [
    {
      name: "Ajeesh K",
      role: "Research Scholar",
      interests: ["Fibre Reinforced Concrete Pavements"],
      joiningDate: "2019",
      expectedCompletion: "2024",
      bio: "Developing autonomous navigation systems for mobile robots in dynamic environments. His work focuses on SLAM algorithms and path planning.",

      email: "101914001@smail.iitpkd.ac.in",
      phone: "+91 9876543210",
      iitProfile: "https://iitpkd.ac.in/people/101914001",
     
    },
    
  ]

  const msScholars = [
    {
      name: "Rahul Gupta",
      role: "MS Scholar",
      interests: ["Robotics", "Control Systems", "Autonomous Navigation"],
      joiningDate: "July 2023",
      expectedCompletion: "June 2025",
      bio: "Developing autonomous navigation systems for mobile robots in dynamic environments. His work focuses on SLAM algorithms and path planning.",
      email: "rahul.gupta@iitpkd.ac.in",
      phone: "+91 9876543212",
      office: "Room 201, Robotics Lab",
      supervisor: "Dr. Priya Sharma",
      iitProfile: "https://iitpkd.ac.in/students/rahul-gupta",
      publications: 2,
      conferences: 4,
    },
    {
      name: "Kavya Nair",
      role: "MS Scholar",
      interests: ["Machine Learning", "Data Mining", "Anomaly Detection"],
      joiningDate: "January 2023",
      expectedCompletion: "December 2024",
      bio: "Research on anomaly detection in large-scale distributed systems. She is developing novel algorithms for real-time anomaly detection.",
      email: "kavya.nair@iitpkd.ac.in",
      phone: "+91 9876543213",
      office: "Room 202, CS Lab",
      supervisor: "Dr. Rajesh Kumar",
      iitProfile: "https://iitpkd.ac.in/students/kavya-nair",
      publications: 1,
      conferences: 3,
    },
  ]

  const interns = [
    {
      name: "Arjun Singh",
      role: "Research Intern",
      interests: ["Computer Vision", "Image Processing", "Autonomous Vehicles"],
      joiningDate: "May 2024",
      duration: "6 months",
      bio: "Summer intern working on object detection algorithms for autonomous vehicles. He is developing real-time detection systems.",
      email: "arjun.singh@iitpkd.ac.in",
      phone: "+91 9876543214",
      office: "Room 101, CV Lab",
      supervisor: "Dr. Rajesh Kumar",
      iitProfile: "https://iitpkd.ac.in/interns/arjun-singh",
      university: "NIT Calicut",
    },
    {
      name: "Meera Krishnan",
      role: "Research Intern",
      interests: ["AI", "Machine Learning", "Healthcare AI"],
      joiningDate: "June 2024",
      duration: "4 months",
      bio: "Undergraduate intern exploring applications of AI in healthcare diagnostics. She is working on diagnostic image analysis.",
      email: "meera.krishnan@iitpkd.ac.in",
      phone: "+91 9876543215",
      office: "Room 102, AI Lab",
      supervisor: "Dr. Veena Venudharan",
      iitProfile: "https://iitpkd.ac.in/interns/meera-krishnan",
      university: "IIIT Hyderabad",
    },
  ]

  const handleEmailClick = (email: string, name: string) => {
    window.location.href = `mailto:${email}?subject=Research Collaboration Inquiry&body=Dear ${name},%0D%0A%0D%0AI am writing to inquire about your research work...`
  }

  const handleProfileClick = (profileUrl: string) => {
    window.open(profileUrl, "_blank")
  }

  const ScholarCard = ({ scholar, showCompletion = true }: { scholar: any; showCompletion?: boolean }) => (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              {scholar.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </div>
          </div>
          <Badge variant="secondary" className="group-hover:bg-blue-100 transition-colors">
            {scholar.role}
          </Badge>
        </div>


        <div className="flex flex-wrap gap-1 mb-4">
          {scholar.interests.slice(0, 2).map((interest: string, idx: number) => (
            <Badge key={idx} variant="outline" className="text-xs hover:bg-blue-50 transition-colors">
              {interest}
            </Badge>
          ))}
          {scholar.interests.length > 2 && (
            <Badge variant="outline" className="text-xs hover:bg-blue-50 transition-colors">
              +{scholar.interests.length - 2} more
            </Badge>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{scholar.bio}</p>

        <div className="space-y-2 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-blue-600" />
            <span>Joined: {scholar.joiningDate}</span>
          </div>
          {showCompletion && scholar.expectedCompletion && (
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-blue-600" />
              <span>Expected: {scholar.expectedCompletion}</span>
            </div>
          )}
          {scholar.duration && (
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-blue-600" />
              <span>Duration: {scholar.duration}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
              onClick={() => handleEmailClick(scholar.email, scholar.name)}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 hover:bg-green-50 hover:border-green-300 transition-all duration-200"
              onClick={() => handleProfileClick(scholar.iitProfile)}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              IIT Profile
            </Button>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="sm"
                className="w-full bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                onClick={() => setSelectedScholar(scholar)}
              >
                <User className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <>
      <Tabs defaultValue="phd" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-8">
          <TabsTrigger value="phd" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            PhD Scholars
          </TabsTrigger>
          <TabsTrigger value="ms" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            MS Scholars
          </TabsTrigger>
          <TabsTrigger value="interns" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Research Interns
          </TabsTrigger>
        </TabsList>

        <TabsContent value="phd">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phdScholars.map((scholar, index) => (
              <ScholarCard key={index} scholar={scholar} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ms">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {msScholars.map((scholar, index) => (
              <ScholarCard key={index} scholar={scholar} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="interns">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interns.map((scholar, index) => (
              <ScholarCard key={index} scholar={scholar} showCompletion={false} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Scholar Details Modal */}
      {selectedScholar && (
        <Dialog open={!!selectedScholar} onOpenChange={() => setSelectedScholar(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-blue-600">{selectedScholar.name}</DialogTitle>
            </DialogHeader>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {selectedScholar.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </div>
                </div>

                <div className="space-y-2">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleProfileClick(selectedScholar.iitProfile)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    IIT Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleEmailClick(selectedScholar.email, selectedScholar.name)}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>

              <div className="md:col-span-2">
                <Badge className="mb-4 bg-blue-100 text-blue-800">{selectedScholar.role}</Badge>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Research Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedScholar.interests.map((interest: string, idx: number) => (
                        <Badge key={idx} variant="outline" className="hover:bg-blue-50">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">About</h4>
                    <p className="text-gray-600 leading-relaxed">{selectedScholar.bio}</p>
                  </div>

                  {selectedScholar.publications && (
                    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{selectedScholar.publications}</div>
                        <div className="text-sm text-gray-600">Publications</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{selectedScholar.conferences}</div>
                        <div className="text-sm text-gray-600">Conferences</div>
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="text-sm">{selectedScholar.email}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="w-4 h-4 mr-2" />
                        <span className="text-sm">{selectedScholar.phone}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{selectedScholar.office}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <User className="w-4 h-4 mr-2" />
                        <span className="text-sm">Supervisor: {selectedScholar.supervisor}</span>
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
