import { ResearchScholarsGrid } from "@/components/research-scholars-grid"

export default function ScholarsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Scholars</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet our brilliant research scholars contributing to cutting-edge pavement engineering research
          </p>
        </div>
      </section>

      {/* Scholars Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ResearchScholarsGrid />
        </div>
      </section>
    </div>
  )
}
