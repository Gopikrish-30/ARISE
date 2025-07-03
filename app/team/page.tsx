import { FacultyGrid } from "@/components/faculty-grid"
import { ResearchScholarsGrid } from "@/components/research-scholars-grid"

export default function TeamPage() {
	return (
		<div className="bg-white min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
					<p className="text-xl max-w-3xl mx-auto">
						Meet our dedicated faculty members and brilliant research scholars
						driving innovation and excellence
					</p>
				</div>
			</section>

			{/* Team Section - All in one */}
			<section className="py-16">
				<div className="container mx-auto px-4 space-y-16">
					<div>
						<h2 className="text-2xl font-bold text-gray-900 mb-6">Faculty</h2>
						<FacultyGrid />
					</div>
					<div>
						<h2 className="text-2xl font-bold text-gray-900 mb-6">
							Research Scholars
						</h2>
						<ResearchScholarsGrid />
					</div>
				</div>
			</section>
		</div>
	)
}
