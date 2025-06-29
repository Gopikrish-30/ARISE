import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PublicationsGrid } from "@/components/publications-grid"
import { ConferencesGrid } from "@/components/conferences-grid"
import { BookChaptersGrid } from "@/components/book-chapters-grid"
import { ProgramsGrid } from "@/components/programs-grid"

export default function ResearchPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our cutting-edge research publications, conferences, and programs in pavement engineering
          </p>
        </div>
      </section>

      {/* Research Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="publications" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-2xl mx-auto mb-12">
        </div>
      </section>
    </div>
  )
}
