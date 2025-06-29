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
            backgroundImage: `url('/images/hero2.jpg?height=1080&width=1920&text=IIT+Palakkad+Campus')`,
          }}
        />
      {/* Enhanced gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            {/* Left Content */}
            <div className={`space-y-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-xl">
                  ASPIRE
                  <span className="block text-blue-400 text-lg md:text-xl lg:text-2xl mt-2">
                    Advancing Excellence in Sustainable Pavement Innovation and Research
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-200 font-light mt-3">
                    at IIT Palakkad
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-2xl text-gray-200 leading-relaxed max-w-3xl drop-shadow-lg">
                ASPIRE is dedicated to pioneering research in sustainable pavement materials, advanced design optimization, and infrastructure resilience.
                We strive to build the future of transportation infrastructure through innovative civil engineering solutions and collaborative excellence.
              </p>

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
