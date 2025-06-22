import Link from "next/link"

export function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-30" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
              About Our Research Lab
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Pioneering the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Pavement Engineering
              </span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Our Pavement Engineering Research Lab at IIT Palakkad is dedicated to advancing sustainable
                infrastructure through innovative materials, design methodologies, and construction technologies that
                address the challenges of modern transportation systems.
              </p>

              <p className="text-gray-600 leading-relaxed">
                We focus on developing eco-friendly pavement solutions, optimizing material performance, and creating
                resilient infrastructure that can withstand diverse climatic conditions while minimizing environmental
                impact. Our research bridges the gap between laboratory innovations and real-world applications.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <Link
                  href="/research"
                  className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-200"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Research Projects</div>
                </Link>
                <Link
                  href="/about"
                  className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all duration-200"
                >
                  <div className="text-3xl font-bold text-purple-600 mb-1">25+</div>
                  <div className="text-sm text-gray-600">Industry Partners</div>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100 shadow-lg">
                <div className="space-y-4">
                  <Link
                    href="/research"
                    className="flex items-center space-x-3 hover:bg-white/50 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                      Sustainable Pavement Materials
                    </span>
                  </Link>
                  <Link
                    href="/research"
                    className="flex items-center space-x-3 hover:bg-white/50 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium hover:text-purple-600 transition-colors">
                      Pavement Design & Analysis
                    </span>
                  </Link>
                  <Link
                    href="/facilities"
                    className="flex items-center space-x-3 hover:bg-white/50 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium hover:text-green-600 transition-colors">
                      Infrastructure Resilience
                    </span>
                  </Link>
                  <Link
                    href="/research"
                    className="flex items-center space-x-3 hover:bg-white/50 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium hover:text-orange-600 transition-colors">
                      Material Characterization
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
