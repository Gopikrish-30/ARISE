import { PublicationsGrid } from "@/components/publications-grid"

export default function JournalsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Journal Publications</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Peer-reviewed journal articles showcasing our research contributions in pavement engineering
          </p>
        </div>
      </section>

      {/* Publications Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <PublicationsGrid />
        </div>
      </section>
    </div>
  )
}
