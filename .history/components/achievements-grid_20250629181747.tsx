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
