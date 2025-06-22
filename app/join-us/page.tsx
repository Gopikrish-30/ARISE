"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, GraduationCap, Briefcase, Calendar } from "lucide-react"

export default function JoinUsPage() {
  const positions = [
    {
      title: "PhD Research Scholar",
      type: "Full-time",
      department: "Computer Science",
      description:
        "Seeking motivated PhD candidates to work on cutting-edge research in machine learning and artificial intelligence.",
      requirements: ["M.Tech/M.E. in relevant field", "Strong programming skills", "Research experience preferred"],
      deadline: "March 31, 2024",
      icon: GraduationCap,
    },
    {
      title: "Postdoctoral Researcher",
      type: "Full-time",
      department: "Robotics",
      description: "Postdoc position available for research in autonomous robotics and human-robot interaction.",
      requirements: [
        "PhD in Robotics/Computer Science",
        "Publications in top-tier venues",
        "3+ years research experience",
      ],
      deadline: "April 15, 2024",
      icon: Briefcase,
    },
    {
      title: "Research Intern",
      type: "Internship",
      department: "Computer Vision",
      description: "Summer internship opportunity for undergraduate students interested in computer vision research.",
      requirements: ["B.Tech 3rd/4th year", "Strong academic record", "Programming skills in Python/C++"],
      deadline: "February 28, 2024",
      icon: Users,
    },
    {
      title: "MS Research Scholar",
      type: "Full-time",
      department: "Machine Learning",
      description: "MS by Research position in machine learning with focus on deep learning applications.",
      requirements: ["B.Tech in relevant field", "GATE qualification", "Interest in research"],
      deadline: "May 30, 2024",
      icon: GraduationCap,
    },
  ]

  const handleApplyPosition = (position: any) => {
    // Navigate to application form or external application link
    window.open(`https://iitpkd.ac.in/apply/${position.title.toLowerCase().replace(/\s+/g, "-")}`, "_blank")
  }

  const handlePositionInquiry = (position: any) => {
    const subject = encodeURIComponent(`Inquiry about ${position.title} Position`)
    const body = encodeURIComponent(
      `Dear Hiring Team,\n\nI am interested in the ${position.title} position and would like to know more details.\n\nBest regards,`,
    )
    window.location.href = `mailto:careers@iitpkd.ac.in?subject=${subject}&body=${body}`
  }

  const handleDownloadJD = (position: any) => {
    // Download job description PDF
    const link = document.createElement("a")
    link.href = `/job-descriptions/${position.title.toLowerCase().replace(/\s+/g, "-")}.pdf`
    link.download = `${position.title}_Job_Description.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Be part of our innovative research community and contribute to cutting-edge discoveries
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Our Research Lab?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of being part of our dynamic research environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "World-Class Research",
                description: "Work on cutting-edge projects with international impact",
                icon: "🔬",
              },
              {
                title: "Expert Mentorship",
                description: "Learn from renowned faculty and industry experts",
                icon: "👨‍🏫",
              },
              {
                title: "State-of-Art Facilities",
                description: "Access to latest equipment and computing resources",
                icon: "🏢",
              },
              {
                title: "Global Collaborations",
                description: "Opportunities to work with international partners",
                icon: "🌍",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center cursor-pointer hover:shadow-lg transition-shadow group"
                onClick={() => {
                  switch (benefit.title) {
                    case "World-Class Research":
                      window.location.href = "/research"
                      break
                    case "Expert Mentorship":
                      window.location.href = "/team"
                      break
                    case "State-of-Art Facilities":
                      window.location.href = "/facilities"
                      break
                    case "Global Collaborations":
                      window.location.href = "/achievements"
                      break
                  }
                }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600">Current opportunities to join our research team</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <position.icon className="w-8 h-8 text-blue-600" />
                    <Badge variant="outline">{position.type}</Badge>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                  <Badge variant="secondary" className="mb-4">
                    {position.department}
                  </Badge>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{position.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">Application Deadline: {position.deadline}</span>
                  </div>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 mb-2"
                    onClick={() => handleApplyPosition(position)}
                  >
                    Apply Now
                  </Button>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => handlePositionInquiry(position)}
                    >
                      Inquire
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1" onClick={() => handleDownloadJD(position)}>
                      Download JD
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-gray-600">Simple steps to join our research team</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Submit Application",
                description: "Complete the online application form with required documents",
              },
              {
                step: "2",
                title: "Initial Review",
                description: "Our team reviews your application and qualifications",
              },
              { step: "3", title: "Interview", description: "Selected candidates are invited for technical interview" },
              { step: "4", title: "Final Decision", description: "Successful candidates receive offer letters" },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
