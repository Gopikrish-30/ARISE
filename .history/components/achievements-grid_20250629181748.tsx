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
