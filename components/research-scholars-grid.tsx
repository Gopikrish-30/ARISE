"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Mail, Calendar, ExternalLink, Phone, MapPin, User, Linkedin, Globe } from 'lucide-react'

export function ResearchScholarsGrid() {
  const [selectedScholar, setSelectedScholar] = useState<any>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const phdScholars = [
    {
      name: "Ajeesh K",
      role: "Research Scholar",
      image: "/Profile Photos/Ajeesh K.jpg",
      interests: ["Fibre Reinforced Concrete Pavements"],
      joiningDate: "2019",
      expectedCompletion: "2024",
      bio: "",
      email: "101914001@smail.iitpkd.ac.in",
      iitProfile: "https://iitpkd.ac.in/people/101914001",
      linkedin: "https://linkedin.com/in/ajeesh-k-example",
      website: "https://ajeeshk.example.com",
    },
    {
      name: "Bhavinlal K",
      role: "Research Scholar",
      image: "/Profile Photos/Bhavin.jpg",
      interests: ["Asphalt modification", "Rheology", "Tribology", "Life cycle assessment"],
      joiningDate: "2021",
      expectedCompletion: "",
      bio: "",
      email: "102104003@smail.iitpkd.ac.in",
      iitProfile: "",
      linkedin: "https://linkedin.com/in/bhavinlal-k-example",
      website: "",
    },
    {
      name: "Arun Sagar K M",
      role: "Research Scholar",
      image: "/Profile Photos/Arun_.jpg",
      interests: ["Pavement Recycling", "Sustainable Pavement System"],
      joiningDate: "2021",
      expectedCompletion: "",
      bio: "",
      email: "arunsagarkm@gmail.com",
      iitProfile: "",
      linkedin: "",
      website: "",
    },
    {
      name: "Vilas Sankar K P",
      role: "Research Scholar",
      image: "/Profile Photos/vilas.jpg",
      interests: ["Sustainable Concrete Materials"],
      joiningDate: "2023",
      expectedCompletion: "",
      bio: "",
      email: "162314002@smail.iitpkd.ac.in",
      iitProfile: "",
      linkedin: "",
      website: "",
    },
    {
      name: "Silpa Sekhar G",
      role: "Research Scholar",
      image: "/Profile Photos/Silpa.jpg",
      interests: ["Pavement Management System"],
      joiningDate: "2023",
      expectedCompletion: "",
      bio: "",
      email: "102314011@smail.iitpkd.ac.in",
      iitProfile: "",
      linkedin: "",
      website: "",
    },
    {
      name: "Issac J",
      role: "Research Scholar",
      image: "/placeholder.svg?height=300&width=300&text=Issac+J",
      interests: ["Pavement geotechnics", "Geogrid", "Soil stabilization"],
      joiningDate: "2024",
      expectedCompletion: "",
      bio: "",
      email: "102404007@smail.iitpkd.ac.in",
      iitProfile: "",
      linkedin: "",
      website: "",
    },
    {
      name: "Saneesh Sabu",
      role: "Research Scholar",
      image: "/Profile Photos/Saneesh.jpeg",
      interests: ["Sustainable Pavement Materials", "Bituminous Mix Design", "Performance Characterization"],
      joiningDate: "2025",
      expectedCompletion: "",
      bio: "",
      email: "102504010@smail.iitpkd.ac.in",
      iitProfile: "",
      linkedin: "",
      website: "",
    },
  ]

  const msScholars = [
    {
      name: "Sudeshna Purkayastha",
      role: "MS Scholar",
      image: "/placeholder.svg?height=300&width=300&text=Sudeshna+Purkayastha",
      interests: ["Pavement subgrade stabilization"],
      joiningDate: "2022",
      expectedCompletion: "2025",
      bio: "",
      email: "purkayasthasudeshna265@gmail.com",
      iitProfile: "https://iitpkd.ac.in/people/102203002",
      linkedin: "",
      website: "",
    },
    {
      name: "Anandlal M",
      role: "MS Scholar",
      image: "/placeholder.svg?height=300&width=300&text=Anandlal+M",
      interests: ["Carbonated RAC in pavement construction"],
      joiningDate: "2022",
      expectedCompletion: "",
      bio: "",
      email: "anandlal@iitpkd.ac.in",
      iitProfile: "https://iitpkd.ac.in/people/102203001",
      linkedin: "",
      website: "",
    },
  ]

  const interns: any[] = []

  const handleEmailClick = (email: string, name: string) => {
    window.location.href = `mailto:${email}?subject=Research Collaboration Inquiry&body=Dear ${name},%0D%0A%0D%0AI am writing to inquire about your research work...`
  }

  const handleProfileClick = (profileUrl: string) => {
    window.open(profileUrl, "_blank")
  }

  const handleViewDetails = (scholar: any) => {
    setSelectedScholar(scholar)
    setDialogOpen(true)
  }

  const ScholarCard = ({ scholar, showCompletion = true }: { scholar: any; showCompletion?: boolean }) => (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
      {/* Image Section */}
      <div className="h-48 bg-white relative overflow-hidden">
        <img
          src={scholar.image || "/placeholder.svg?height=300&width=300&text=Scholar"}
          alt={scholar.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Badge className="bg-white/90 text-blue-600">{scholar.role}</Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <Badge variant="secondary" className="group-hover:bg-blue-100 transition-colors">
            {scholar.role}
          </Badge>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {scholar.name}
        </h3>

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
          
          {scholar.duration && (
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-blue-600" />
              <span>Duration: {scholar.duration}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600">
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
          <div className="flex flex-col gap-2">
            <Button
              size="sm"
              className="w-full bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
              onClick={() => handleViewDetails(scholar)}
            >
              <User className="w-4 h-4 mr-2" />
              View Details
            </Button>
          </div>
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
            {phdScholars.map((scholar: any, index: number) => (
              <ScholarCard key={scholar.email || scholar.name || index} scholar={scholar} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ms">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {msScholars.map((scholar: any, index: number) => (
              <ScholarCard key={scholar.email || scholar.name || index} scholar={scholar} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="interns">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interns.map((scholar: any, index: number) => (
              <ScholarCard key={scholar.email || scholar.name || index} scholar={scholar} showCompletion={false} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
      {/* Single Dialog always rendered, controlled by dialogOpen */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedScholar && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-blue-600">{selectedScholar.name}</DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="bg-white rounded-lg h-48 overflow-hidden mb-4">
                    <img
                      src={selectedScholar.image || "/placeholder.svg?height=300&width=300&text=Scholar"}
                      alt={selectedScholar.name}
                      className="w-full h-full object-contain"
                    />
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
                        {/* Social links below email */}
                        <div className="flex flex-col gap-1 mt-2">
                          <span className="text-xs text-gray-500">Social Links</span>
                          <div className="flex gap-2">
                            <Button size="icon" variant="ghost" className={`rounded-full ${selectedScholar.linkedin ? 'bg-blue-100 hover:bg-blue-200' : 'bg-gray-100 cursor-not-allowed'}`} onClick={() => selectedScholar.linkedin && window.open(selectedScholar.linkedin, '_blank')} title="LinkedIn" disabled={!selectedScholar.linkedin}>
                              <Linkedin className={`w-5 h-5 ${selectedScholar.linkedin ? 'text-blue-700' : 'text-gray-400'}`} />
                            </Button>
                            <Button size="icon" variant="ghost" className={`rounded-full ${selectedScholar.website ? 'bg-gray-100 hover:bg-gray-200' : 'bg-gray-100 cursor-not-allowed'}`} onClick={() => selectedScholar.website && window.open(selectedScholar.website, '_blank')} title="Personal Website" disabled={!selectedScholar.website}>
                              <Globe className={`w-5 h-5 ${selectedScholar.website ? 'text-gray-700' : 'text-gray-400'}`} />
                            </Button>
                          </div>
                        </div>
                        {selectedScholar.phone && (
                          <div className="flex items-center text-gray-600">
                            <Phone className="w-4 h-4 mr-2" />
                            <span className="text-sm">{selectedScholar.phone}</span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        {selectedScholar.office && (
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm">{selectedScholar.office}</span>
                          </div>
                        )}
                        {selectedScholar.supervisor && (
                          <div className="flex items-center text-gray-600">
                            <User className="w-4 h-4 mr-2" />
                            <span className="text-sm">Supervisor: {selectedScholar.supervisor}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}