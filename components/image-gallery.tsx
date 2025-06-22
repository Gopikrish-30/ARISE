"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function ImageGallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Gallery images - you can easily add more images here
  const galleryImages = [
    {
      src: "/placeholder.svg?height=600&width=1000&text=Research+Lab+Overview",
      alt: "Research Lab Overview",
      title: "State-of-the-Art Research Laboratory",
      description: "Our modern research facility equipped with cutting-edge technology and collaborative spaces.",
    },
    {
      src: "/placeholder.svg?height=600&width=1000&text=Team+Collaboration",
      alt: "Team Collaboration",
      title: "Collaborative Research Environment",
      description: "Faculty and students working together on innovative research projects.",
    },
    {
      src: "/placeholder.svg?height=600&width=1000&text=Advanced+Equipment",
      alt: "Advanced Equipment",
      title: "Advanced Research Equipment",
      description: "High-performance computing clusters and specialized research instruments.",
    },
    {
      src: "/placeholder.svg?height=600&width=1000&text=Conference+Presentation",
      alt: "Conference Presentation",
      title: "International Conference Presentations",
      description: "Our researchers presenting findings at prestigious international conferences.",
    },
    {
      src: "/placeholder.svg?height=600&width=1000&text=Student+Research",
      alt: "Student Research",
      title: "Student Research Activities",
      description: "Graduate students conducting cutting-edge research in various domains.",
    },
    {
      src: "/placeholder.svg?height=600&width=1000&text=Industry+Partnership",
      alt: "Industry Partnership",
      title: "Industry Collaborations",
      description: "Partnerships with leading industry players for real-world applications.",
    },
    {
      src: "/placeholder.svg?height=600&width=1000&text=Awards+Recognition",
      alt: "Awards Recognition",
      title: "Awards and Recognition",
      description: "Celebrating achievements and recognition from the research community.",
    },
    {
      src: "/placeholder.svg?height=600&width=1000&text=Campus+Life",
      alt: "Campus Life",
      title: "Campus Research Environment",
      description: "Beautiful campus setting that inspires innovation and creativity.",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlay, galleryImages.length])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToImage = (index: number) => {
    setCurrentImage(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }

  const openFullscreen = () => {
    setIsFullscreen(true)
  }

  const closeFullscreen = () => {
    setIsFullscreen(false)
  }

  return (
    <>
      {/* Main Gallery */}
      <div className="relative">
        {/* Main Image Display */}
        <div className="relative bg-gray-200 rounded-lg h-96 md:h-[500px] overflow-hidden group">
          <img
            src={galleryImages[currentImage].src || "/placeholder.svg"}
            alt={galleryImages[currentImage].alt}
            className="w-full h-full object-cover transition-transform duration-500"
          />

          {/* Overlay with image info */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{galleryImages[currentImage].title}</h3>
              <p className="text-gray-200 text-sm">{galleryImages[currentImage].description}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Control Buttons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="sm"
              variant="secondary"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
              onClick={toggleAutoPlay}
            >
              {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
              onClick={openFullscreen}
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
            {currentImage + 1} / {galleryImages.length}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                index === currentImage
                  ? "border-blue-600 scale-110 shadow-lg"
                  : "border-gray-300 hover:border-gray-400 hover:scale-105"
              }`}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImage ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Gallery Info */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <span>Auto-play: {isAutoPlay ? "On" : "Off"}</span>
            <span>•</span>
            <span>{galleryImages.length} Images</span>
            <span>•</span>
            <button onClick={toggleAutoPlay} className="text-blue-600 hover:text-blue-700 font-medium">
              {isAutoPlay ? "Pause" : "Play"} Slideshow
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-7xl w-full h-full max-h-screen p-0 bg-black">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={galleryImages[currentImage].src || "/placeholder.svg"}
              alt={galleryImages[currentImage].alt}
              className="max-w-full max-h-full object-contain"
            />

            {/* Fullscreen Controls */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Fullscreen Image Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h3 className="text-2xl font-bold mb-2">{galleryImages[currentImage].title}</h3>
              <p className="text-gray-200">{galleryImages[currentImage].description}</p>
              <div className="mt-2 text-sm text-gray-300">
                {currentImage + 1} of {galleryImages.length}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
