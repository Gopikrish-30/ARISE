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
      link: "/about",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
