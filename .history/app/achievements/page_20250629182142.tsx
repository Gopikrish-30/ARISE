"use client"

import Image from "next/image"
import { Recognitions } from "@/components/recognitions"

export default function AchievementsPage() {
  const achievement = {
    title: "Jury Appreciation Prize",
    description: `Ms. Silpa Sekhar G., a research scholar under the guidance of Dr. C.V Veena Venudharan, Department of Civil Engineering, has been awarded the 'Jury Appreciation Prize' for presenting research at the All India Research Scholars' Summit 2025, held from 27th to 30th March, 2025, at the Indian Institute of Technology Madras.`,
    imageSrc: "/Profile Photos/Silpa.jpg",
    imageAlt: "Ms. Silpa Sekhar G.",
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Achievements & Awards</h1>
        </div>
      </section>

      {/* Single Achievement Section */}
      <section className="py-16">
