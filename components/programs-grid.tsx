"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ExternalLink, Clock, Target, Mail, Phone } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export function ProgramsGrid() {
  const programs = [
    {
      title: "Advanced Pavement Materials Workshop",
      type: "Workshop",
      duration: "3 Days",
      date: "March 15-17, 2024",
      location: "IIT Palakkad Campus",
      participants: "50+",
      status: "upcoming",
      registrationUrl: "https://iitpkd.ac.in/register/pavement-materials-workshop",
      contactEmail: "workshop@iitpkd.ac.in",
      contactPhone: "+91 4923 226 150",
      description:
        "Comprehensive workshop on sustainable pavement materials, covering bio-modifiers, recycled materials, and performance evaluation techniques.",
      objectives: [
        "Understanding sustainable pavement materials",
        "Hands-on laboratory testing",
        "Performance evaluation methods",
        "Industry best practices",
      ],
      targetAudience: "Researchers, Industry Professionals, Graduate Students",
      fee: "₹15,000",
    },
    {
      title: "Pavement Design Optimization Program",
      type: "Training Program",
      duration: "5 Days",
      date: "April 20-24, 2024",
      location: "Hybrid (Online + Campus)",
      participants: "30+",
      status: "upcoming",
      registrationUrl: "https://iitpkd.ac.in/register/pavement-design-program",
      contactEmail: "training@iitpkd.ac.in",
      contactPhone: "+91 4923 226 151",
      description:
        "Intensive training program focusing on modern pavement design methodologies, software tools, and optimization techniques.",
      objectives: [
        "Mechanistic-empirical design principles",
        "Software tools for pavement design",
        "Life cycle cost analysis",
        "Maintenance and rehabilitation strategies",
      ],
      targetAudience: "Highway Engineers, Consultants, Government Officials",
      fee: "₹25,000",
    },
    {
      title: "Infrastructure Resilience Symposium",
      type: "Symposium",
      duration: "2 Days",
      date: "December 10-11, 2023",
      location: "IIT Palakkad Campus",
      participants: "100+",
      status: "completed",
      registrationUrl: "https://iitpkd.ac.in/events/infrastructure-resilience-2023",
      contactEmail: "symposium@iitpkd.ac.in",
      contactPhone: "+91 4923 226 152",
      description:
        "International symposium on building resilient transportation infrastructure in the face of climate change and extreme weather events.",
      objectives: [
        "Climate-resilient pavement design",
        "Disaster-resistant infrastructure",
        "Sustainable construction practices",
        "Policy and regulatory frameworks",
      ],
      targetAudience: "Researchers, Policymakers, Industry Leaders",
      fee: "₹8,000",
    },
  ]

  const upcomingPrograms = programs.filter((program) => program.status === "upcoming")
  const completedPrograms = programs.filter((program) => program.status === "completed")

  const handleRegistration = (program: any) => {
    if (program.status === "upcoming") {
      window.open(program.registrationUrl, "_blank", "noopener,noreferrer")
    } else {
      window.open(program.registrationUrl, "_blank", "noopener,noreferrer")
    }
  }

  const handleContactEmail = (email: string, programTitle: string) => {
    const subject = encodeURIComponent(`Inquiry about ${programTitle}`)
    const body = encodeURIComponent(
      `Dear Team,\n\nI would like to know more about the ${programTitle}.\n\nBest regards,`,
    )
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  const handleContactPhone = (phone: string) => {
    window.location.href = `tel:${phone}`
  }

  const handleShareProgram = async (program: any) => {
    const shareData = {
      title: program.title,
      text: `${program.description}`,
      url: program.registrationUrl,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(`${program.title}\n${program.description}\n${program.registrationUrl}`)
        toast({
          title: "Program Details Copied",
          description: "Program information has been copied to clipboard",
        })
      }
    } catch (err) {
      console.error("Error sharing:", err)
    }
  }

  const ProgramCard = ({ program }: { program: any }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <Badge
              variant={program.status === "upcoming" ? "default" : "secondary"}
              className="bg-blue-100 text-blue-800"
            >
              {program.type}
            </Badge>
          </div>
          <Badge
            variant="outline"
            className={program.status === "upcoming" ? "text-green-600 border-green-600" : "text-gray-600"}
          >
            {program.status === "upcoming" ? "Upcoming" : "Completed"}
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>

        <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{program.date}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span>{program.duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{program.location}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-gray-600">
              <Users className="w-4 h-4 mr-2" />
              <span>{program.participants} Participants</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Target className="w-4 h-4 mr-2" />
              <span>{program.targetAudience}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="font-semibold">Fee: {program.fee}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{program.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Key Objectives</h4>
          <ul className="space-y-1">
            {program.objectives.slice(0, 3).map((objective, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                {objective}
              </li>
            ))}
            {program.objectives.length > 3 && (
              <li className="text-sm text-gray-500 italic">+{program.objectives.length - 3} more objectives</li>
            )}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Contact Information</h4>
          <div className="flex flex-col gap-1">
            <button
              onClick={() => handleContactEmail(program.contactEmail, program.title)}
              className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-3 h-3 mr-2" />
              {program.contactEmail}
            </button>
            <button
              onClick={() => handleContactPhone(program.contactPhone)}
              className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-3 h-3 mr-2" />
              {program.contactPhone}
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            className={`flex-1 ${
              program.status === "upcoming" ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 hover:bg-gray-700"
            }`}
            onClick={() => handleRegistration(program)}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            {program.status === "upcoming" ? "Register Now" : "View Details"}
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleShareProgram(program)} className="hover:bg-blue-50">
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Calendar className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Research Programs</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Training programs, workshops, and symposiums designed to advance knowledge in pavement engineering
        </p>
      </div>

      {/* Upcoming Programs */}
      {upcomingPrograms.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Programs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingPrograms.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </div>
      )}

      {/* Completed Programs */}
      {completedPrograms.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Past Programs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {completedPrograms.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
