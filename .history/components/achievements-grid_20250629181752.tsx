"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Medal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Achievement {
  title: string
  organization: string
  year: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const achievements: Achievement[] = [
  {
    title: "Jury Appreciation Prize",
    organization: "Indian Institute of Technology Madras",
    year: "2025",
    description: "Ms. Silpa Sekhar G., a research scholar, awarded the 'Jury Appreciation Prize' at the All India Research Scholars' Summit 2025.",
    icon: Trophy,
  },
  {
    title: "Best Research Lab Award",
    organization: "IEEE Computer Society",
    year: "2023",
    description: "Recognized for outstanding contributions to artificial intelligence research.",
    icon: Trophy,
  },
  {
    title: "Excellence in Innovation",
    organization: "Department of Science & Technology",
    year: "2023",
    description: "Awarded for breakthrough research in machine learning applications.",
    icon: Award,
  },
  {
    title: "Young Researcher Recognition",
    organization: "ACM India",
    year: "2022",
    description: "Our faculty member received recognition for exceptional research contributions.",
    icon: Medal,
  },
]

export function AchievementsGrid() {
  const handleViewCertificate = (achievement: Achievement) => {
    window.open(`/certificates/${achievement.title.toLowerCase().replace(/\s+/g, "-")}.pdf`, "_blank")
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
