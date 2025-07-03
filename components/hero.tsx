"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

export function Hero() {
  const images = [
    "/images/hero2.jpg?height=1080&width=1920&text=IIT+Palakkad+Campus",
    "/images/hero.jpg?height=1080&width=1920&text=IIT+Palakkad+Campus",
    "/images/hero1.jpg?height=1080&width=1920&text=IIT+Palakkad+Campus",
    "/images/hero3.jpg?height=1080&width=1920&text=IIT+Palakkad+Campus",
    "/images/hero4.jpg?height=1080&width=1920&text=IIT+Palakkad+Campus",
  ]
  const [currentImage, setCurrentImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Sliding */}
      <div className="absolute inset-0 z-0 transition-all duration-700">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${idx === currentImage ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                  ASPIRE
                  <span className="block text-blue-300 text-lg md:text-xl lg:text-2xl">
                    CENTER FOR ADVANCING SUSTAINABLE PAVEMENT INNOVATION AND RESEARCH
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-100 font-normal mt-2">
                    at IIT Palakkad
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-2xl text-gray-100 leading-relaxed max-w-2xl drop-shadow-md">
                ASPIRE is dedicated to pioneering research in sustainable pavement materials, advanced design optimization, and infrastructure resilience.
                We strive to build the future of transportation infrastructure through innovative civil engineering solutions and collaborative excellence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => {
                    const el = document.getElementById("research");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Explore Our Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <a
                    href="https://resap.iitpkd.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Our Team
                  </a>
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
      </div>

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
