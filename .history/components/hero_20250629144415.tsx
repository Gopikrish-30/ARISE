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

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-5 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/research" aria-label="Explore Our Research">
                    Explore Our Research
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-white/95 backdrop-blur-md text-gray-900 hover:bg-white px-10 py-5 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/join-us" aria-label="Join Our Team">Join Our Team</Link>
                </Button>
              </div>
            </div>

          {/* Right Content - Redesigned Stats Display */}
          <div className={`${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/30 max-w-md mx-auto">
              {/* Header */}
              <div className="mb-10 text-center">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-3">Our Impact</h3>
                <p className="text-gray-600 text-lg">Research achievements and milestones</p>
              </div>

              {/* Stats List */}
              <div className="space-y-8">
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
                      className={`flex items-center p-5 rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-blue-50 ${
                        isActive ? "bg-blue-50 border border-blue-200 shadow-lg" : "border border-transparent"
                      }`}
                      onClick={() => setCurrentStat(index)}
                      aria-label={`View details about ${stat.label}`}
                    >
                      <div className="flex items-center space-x-6 flex-1">
                        <div
                          className={`p-4 rounded-full bg-blue-100 text-blue-600 ${
                            isActive ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
                          } transition-colors duration-300`}
                        >
                          <Icon className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                          <h4
                            className={`font-bold text-lg ${
                              isActive ? "text-blue-700" : "text-gray-900"
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
