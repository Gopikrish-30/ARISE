import { ProgramsGrid } from "@/components/programs-grid"

export default function ProgramsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Training programs, workshops, and symposiums in pavement engineering
          </p>
        </div>
      </section>

      {/* Programs Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ProgramsGrid />
        </div>
      </section>
    </div>
  )
}
