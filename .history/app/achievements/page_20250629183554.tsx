"use client"

import Image from "next/image"

const achievements = [
  {
    title: "Jury Appreciation Prize",
    description: `Ms. Silpa Sekhar G., a research scholar under the guidance of Dr. C.V Veena Venudharan, Department of Civil Engineering, has been awarded the 'Jury Appreciation Prize' for presenting research at the All India Research Scholars' Summit 2025, held from 27th to 30th March, 2025, at the Indian Institute of Technology Madras.`,
    imageSrc: "/Profile Photos/Silpa.jpg",
    imageAlt: "Ms. Silpa Sekhar G.",
    personName: "Ms. Silpa Sekhar G.",
    role: "Research Scholar",
    guidance: "Under the guidance of Dr. C.V Veena Venudharan",
    department: "Department of Civil Engineering",
  },
  // Add more achievements here as needed
]

export default function AchievementsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Achievements & Awards</h1>
        </div>
      </section>

      {/* Achievements Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-6"
            >
              <div className="w-48 h-48 relative rounded-lg overflow-hidden mb-6 shadow-md">
          <p>Under the guidance of Dr. C.V Veena Venudharan</p>
          <p>Department of Civil Engineering</p>
        </div>
      </section>
    </div>
  )
}
