"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Using placeholder */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero2.jpg?height=1080&width=1920&text=IIT+Palakkad+Campus')`,
          }}
        />
        {/* Darker overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              {/* Badge */}
              {/* Removed Pavement Engineering Research badge as per request */}

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                  ASPIRE
                  <span className="block text-blue-300 text-base md:text-lg lg:text-xl">
                    Advancing Sustainable Pavement Innovation and Research Ensemble
                  </span>
                  <span className="block text-xl md:text-2xl lg:text-3xl text-gray-100 font-normal mt-2">
                    at IIT Palakkad
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-100 leading-relaxed max-w-2xl drop-shadow-md">
                ASPIRE is dedicated to pioneering research in sustainable pavement materials, advanced design optimization, and infrastructure resilience.
    <span className="block text-blue-300 text-base md:text-lg lg:text-xl">
      Advancing Sustainable Pavement Innovation and Research Ensemble
    </span>
    <span className="block text-xl md:text-2xl lg:text-3xl text-gray-100 font-normal mt-2">
      at IIT Palakkad
    </span>
  </p>
</div>

              {/* Description */}
              <p className="text-xl text-gray-100 leading-relaxed max-w-2xl drop-shadow-md">
                ASPIRE is dedicated to pioneering research in sustainable pavement materials, advanced design optimization, and infrastructure resilience.
                We strive to build the future of transportation infrastructure through innovative civil engineering solutions and collaborative excellence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Link href="/research">
                    Explore Our Research
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Link href="/join-us">Join Our Team</Link>
                </Button>
              </div>
            </div>

          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm drop-shadow-md">Scroll to explore</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </span>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.3s forwards;
        }
      `}</style>
    </section>
  )
}
