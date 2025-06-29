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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">Numbers that reflect our commitment to excellence</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
