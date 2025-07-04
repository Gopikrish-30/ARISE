import { Card, CardContent } from "@/components/ui/card"

interface Collaboration {
  name: string
  description: string
  image: string
}

const collaborations: Collaboration[] = []

const sponsoredResearchProjects = [
  {
    title: "Sustainable and resilient environment-friendly solutions for hill road design through a pilot study on Mannarkkad - Chinnathadagam Road",
    role: "Co-PI",
    durationStatus: "Dec 2019 - 2 years (Completed)",
    agency: "Kerala PWD",
  },
  {
    title: "Study on Novocrete Stabilization Technology for Pavement Construction",
    role: "PI",
    durationStatus: "Aug 2021 - 2 years (Completed)",
    agency: "Nisco Builders and Developers Pvt. Ltd.",
  },
  {
    title: "Development of High RAP Mixtures: Laboratory Investigation on the Effect of Bio-Rejuvenators",
    role: "PI",
    durationStatus: "Jun 2022 - 3 years (Ongoing)",
    agency: "SERB",
  },
  {
    title: "Development and upgradation of pavement performance model for flexible pavement",
    role: "Co-PI",
    durationStatus: "Sep 2024 (Approved)",
    agency: "NHAI",
  },
]

const consultancyProjects = [
  {
    title: "Soil Investigation for Existing Soil at Runway Basic Strip - Calicut International Airport",
    role: "Co-PI",
    durationStatus: "Aug 2020 - 1 month (Completed)",
    client: "Airports Authority of India",
  },
  {
    title: "Soil Investigation for Existing Soil at Runway Basic Strip - Calicut International Airport (Phase 2)",
    role: "Co-PI",
    durationStatus: "Sep 2020 - 1 month (Completed)",
    client: "Airports Authority of India",
  },
  {
    title: "Vetting of Cold In-place Recycling on NH 66",
    role: "PI",
    durationStatus: "Oct 2020 - 9 months (Completed)",
    client: "PMR Construction Company",
  },
  {
    title: "Technical review of the counterclaims by IOCL and CoPT for arbitration of the case in connection with Construction of Multi-User liquid Terminal at Puthuvypen, Cochin port",
    role: "Co-PI",
    durationStatus: "Jan 2021 - 2 months (Completed)",
    client: "Indian Oil Corporation Limited",
  },
  {
    title: "Consultancy for Remedial Measures for Distressed Culvert, Runway, and Embankment of Calicut International Airport",
    role: "Co-PI",
    durationStatus: "Mar 2021 - 6 months (Completed)",
    client: "Airports Authority of India",
  },
  {
    title: "Pavement design for roads in Kottoor Elephant Rehabilitation Centre",
    role: "PI",
    durationStatus: "Jul 2021 - 2 months (Completed)",
    client: "Kerala Infrastructure Investment Fund Board",
  },
  {
    title: "Fibre characterisation and flexural toughness testing of fibre-reinforced concrete (FRC) with two types of fibres supplied by CHRYSO India Private Limited.",
    role: "Co-PI",
    durationStatus: "Dec 2023 - 6 months (Completed)",
    client: "CHRYSO India Private Limited, Kolkata, West Bengal",
  },
  {
    title: "Overlay Design and Rehabilitation Measures – NH 544 Chengapalli to Walayar TN/KL Border",
    role: "PI",
    durationStatus: "Jul 2023 - 3 months (Completed)",
    client: "National Highway Authority of India",
  },
  {
    title: "Vetting the Network Survey Vehicle report for Thrissur Expressway Limited",
    role: "PI",
    durationStatus: "Jul 2024 - 1 month (Completed)",
    client: "Thrissur Expressway Limited",
  },
]

function ProjectCard({ title, role, durationStatus, agencyOrClient }: { title: string; role: string; durationStatus: string; agencyOrClient: string }) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-shadow rounded-lg border border-blue-200">
      <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-800"></div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-blue mb-3">{title}</h3>
        <p className="text-black text-sm mb-1"><span className="font-semibold text-blue-700">Role:</span> {role}</p>
        <p className="text-black text-sm mb-1"><span className="font-semibold text-blue-700">Duration & Status:</span> {durationStatus}</p>
        <p className="text-black text-sm"><span className="font-semibold text-blue-700">{agencyOrClient.includes("Authority") || agencyOrClient.includes("Company") || agencyOrClient.includes("Limited") ? "Client" : "Agency"}:</span> {agencyOrClient}</p>
      </CardContent>
    </Card>
  )
}

export function CollaborationsSection() {
  return (
    <section id="collaborations" className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Collaborations</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            We collaborate with leading academic institutions, industry partners, and government agencies to drive impactful research and innovation in pavement engineering and infrastructure development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {collaborations.map((collab, idx) => (
            <Card key={idx} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="h-32 bg-gray-200 relative overflow-hidden flex items-center justify-center">
                <img src={collab.image} alt={collab.name} className="object-contain h-full w-full" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{collab.name}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{collab.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Sponsored Research Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsoredResearchProjects.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                role={project.role}
                durationStatus={project.durationStatus}
                agencyOrClient={project.agency}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Consultancy Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultancyProjects.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                role={project.role}
                durationStatus={project.durationStatus}
                agencyOrClient={project.client}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
