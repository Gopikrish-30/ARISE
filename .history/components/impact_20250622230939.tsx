import { Users, BookOpen, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export function Impact() {
  const stats = [
    {
      icon: Users,
      number: "25+",
      label: "Research Students",
    },
    {
      icon: BookOpen,
      number: "75+",
      label: "Publications",
    },
    {
      icon: Award,
      number: "15+",
      label: "Awards",
    },
    {
      icon: TrendingUp,
      number: "10+",
      label: "Years of Excellence",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">Numbers that reflect our commitment to excellence</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Users, number: "25+", label: "Research Students", link: "/team/scholars" },
            { icon: BookOpen, number: "75+", label: "Publications", link: "/research/journals" },
            { icon: Award, number: "15+", label: "Awards", link: "/achievements" },
            { icon: TrendingUp, number: "10+", label: "Years of Excellence", link: "/about" },
          ].map((stat, index) => (
            <Link
              key={index}
              href={stat.link}
              className="text-center group hover:scale-105 transition-transform duration-200"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-200 group-hover:text-white transition-colors" />
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-white transition-colors">
                {stat.number}
              </div>
              <div className="text-blue-200 group-hover:text-blue-100 transition-colors">{stat.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
