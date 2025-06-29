import { Users, BookOpen, TrendingUp } from "lucide-react"
import Link from "next/link"

export function Impact() {
  const stats = [
    {
      icon: Users,
      number: "Total 9",
      label: "Research Scholars",
      link: "/team/scholars",
    },
    {
      icon: BookOpen,
      number: "25+",
      label: "Journals",
      link: "/research/journals",
    },
    {
      icon: TrendingUp,
      number: "5+",
      label: "Years",
