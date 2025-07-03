"use client"

import { Card, CardContent } from "@/components/ui/card"

const collaborations = [
	{
		name: "IIT Madras",
		description:
			"Joint research on sustainable pavement materials and advanced testing methods.",
		image: "/placeholder.svg?height=120&width=240&text=IIT+Madras",
	},
	{
		name: "NHAI",
		description:
			"Collaboration for field trials and implementation of innovative pavement solutions.",
		image: "/placeholder.svg?height=120&width=240&text=NHAI",
	},
	{
		name: "Industry Partner X",
		description:
			"Industry-academia partnership for technology transfer and pilot projects.",
		image: "/placeholder.svg?height=120&width=240&text=Industry+Partner+X",
	},
	// Add more collaborators as needed
]

export default function CollaborationsPage() {
	return (
		<div className="bg-white min-h-screen py-16">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						Collaborations
					</h1>
					<p className="text-xl max-w-3xl mx-auto text-gray-700">
						We collaborate with leading academic institutions, industry partners,
						and government agencies to drive impactful research and innovation in
						pavement engineering and infrastructure development.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{collaborations.map((collab, idx) => (
						<Card
							key={idx}
							className="overflow-hidden group hover:shadow-lg transition-shadow"
						>
							<div className="h-32 bg-gray-200 relative overflow-hidden flex items-center justify-center">
								<img
									src={collab.image}
									alt={collab.name}
									className="object-contain h-full w-full"
								/>
							</div>
							<CardContent className="p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-2">
									{collab.name}
								</h3>
								<p className="text-gray-600 text-sm line-clamp-2">
									{collab.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}
