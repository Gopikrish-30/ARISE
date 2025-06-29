"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AchievementsPage() {
  const achievements = [
    {
      title: "Jury Appreciation Prize",
      description:
        "Ms. Silpa Sekhar G., a research scholar under the guidance of Dr. C.V Veena Venudharan, Department of Civil Engineering, has been awarded the 'Jury Appreciation Prize' for presenting research at the All India Research Scholars' Summit 2025, held from 27th to 30th March, 2025, at the Indian Institute of Technology Madras.",
      year: "2025",
      category: "Research Recognition",
      icon: Award,
      imageSrc: "/Profile Photos/Silpa.jpg",
      imageAlt: "Ms. Silpa Sekhar G.",
      extraDetails: [
        "Research Scholar",
        "Under the guidance of Dr. C.V Veena Venudharan",
        "Department of Civil Engineering",
      ],
    },
  ]

              src={achievement.imageSrc}
              alt={achievement.imageAlt}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <p className="max-w-3xl text-lg text-gray-700">{achievement.description}</p>
          <p className="mt-4 font-semibold">Ms. Silpa Sekhar G.</p>
          <p>Research Scholar</p>
          <p>Under the guidance of Dr. C.V Veena Venudharan</p>
          <p>Department of Civil Engineering</p>
        </div>
      </section>
    </div>
  )
}
