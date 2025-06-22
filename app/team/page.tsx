import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FacultyGrid } from "@/components/faculty-grid"
import { ResearchScholarsGrid } from "@/components/research-scholars-grid"

export default function TeamPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet our dedicated faculty members and brilliant research scholars driving innovation and excellence
          </p>
        </div>
      </section>

      {/* Team Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="faculty" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="scholars">Research Scholars</TabsTrigger>
            </TabsList>

            <TabsContent value="faculty">
              <FacultyGrid />
            </TabsContent>

            <TabsContent value="scholars">
              <ResearchScholarsGrid />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
