import { ConferencesGrid } from "@/components/conferences-grid"

export default function ConferencesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Conference Publications</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Research presented at leading international conferences and symposiums
          </p>
        </div>
      </section>

      {/* Conferences Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ConferencesGrid />
        </div>
      </section>
    </div>
  )
}
