"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Users, BookOpen, Award, TrendingUp, ChevronDown } from "lucide-react"

export function Hero() {
  const [currentStat, setCurrentStat] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    { icon: Users, number: "25+", label: "Research Students" },
    { icon: BookOpen, number: "75+", label: "Publications" },
    { icon: Award, number: "15+", label: "Awards" },
    { icon: TrendingUp, number: "10+", label: "Years of Excellence" },
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Using placeholder */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/public/images/hero.jpg?height=1080&width=1920&text=IIT+Palakkad+Campus')`,
          }}
        />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium shadow-sm">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                Pavement Engineering Research
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                  Advancing
                  <span className="block text-blue-400">Pavement Engineering</span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-100 font-normal mt-2">
                    at IIT Palakkad
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-100 leading-relaxed max-w-2xl drop-shadow-md">
                Leading research in sustainable pavement materials, design optimization, and infrastructure resilience.
                Building the roads of tomorrow through innovative civil engineering solutions.
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

            {/* Right Content - Clean Stats Display */}
            <div className={`${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Impact</h3>
                  <p className="text-gray-600">Research achievements and milestones</p>
                </div>

                {/* Stats List */}
                <div className="space-y-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    const isActive = index === currentStat

                    // Define navigation paths for each stat
                    const getStatLink = (label: string) => {
                      switch (label) {
                        case "Research Students":
                          return "/team/scholars"
                        case "Publications":
                          return "/research/journals"
                        case "Awards":
                          return "/achievements"
                        case "Years of Excellence":
                          return "/about"
                        default:
                          return "/about"
                      }
                    }

                    return (
                      <Link
                        key={index}
                        href={getStatLink(stat.label)}
                        className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-blue-50 ${
                          isActive ? "bg-blue-50 border border-blue-100" : ""
                        }`}
                        onClick={() => setCurrentStat(index)}
                      >
                        <div className="flex items-center space-x-4 flex-1">
                          <div
                            className={`w-2 h-2 rounded-full ${isActive ? "bg-blue-600" : "bg-gray-300"} transition-colors duration-300`}
                          />
                          <div className="flex-1">
                            <h4
                              className={`font-semibold ${isActive ? "text-blue-600" : "text-gray-900"} transition-colors duration-300`}
                            >
                              {stat.label}
                            </h4>
                            <p className="text-gray-600 text-sm">Excellence in pavement engineering research</p>
                          </div>
                          <div
                            className={`text-2xl font-bold ${isActive ? "text-blue-600" : "text-gray-400"} transition-colors duration-300`}
                          >
                            {stat.number}
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>

                {/* Active Indicator */}
                <div className="flex justify-center mt-8 space-x-2">
                  {stats.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStat(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentStat ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
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
