import { Target, Eye } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To conduct world-class research that pushes the boundaries of knowledge in computer science and
              engineering, while nurturing the next generation of researchers and innovators who will shape the future
              of technology.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a globally recognized center of excellence in research and education, contributing to scientific
              advancement and technological innovation that benefits society and addresses the challenges of tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
