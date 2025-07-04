"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { ImageGallery } from "@/components/image-gallery"

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 pt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our journey of innovation, research excellence, and commitment to advancing the frontiers of
            science and technology at IIT Palakkad
          </p>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>Established 2014</span>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The IIT Palakkad was established in 2014 with a vision to advance cutting-edge research in
              engineering and sciences. Starting with a small team of dedicated faculty and students, we have
              grown into a premier research facility known for our contributions to various fields.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-gray-600">A glimpse into our research environment and activities</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <ImageGallery />
          </div>
        </div>
      </section>
      {/* Stats */}
    </div>
  )
}
