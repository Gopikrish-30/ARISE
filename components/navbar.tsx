"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  const [activeSection, setActiveSection] = useState("hero")
  const [researchDropdownOpen, setResearchDropdownOpen] = useState(false)
  const [mobileResearchDropdownOpen, setMobileResearchDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isHome) return

    const sections = ["hero", "about", "team", "facilities", "research", "achievements", "collaborations", "activity", "contact"]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      let closestSection = sections[0]
      let minDistance = Number.POSITIVE_INFINITY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const distance = Math.abs(offsetTop - scrollPosition)
          if (distance < minDistance) {
            minDistance = distance
            closestSection = section
          }
        }
      }
      setActiveSection(closestSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isHome])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setResearchDropdownOpen(false)
      }
    }
    if (researchDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [researchDropdownOpen])

  // Dropdown hover/focus delay logic
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setResearchDropdownOpen(true)
  }
  const handleDropdownMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setResearchDropdownOpen(false), 150)
  }

  const linkClass = (sectionId: string) =>
    `text-gray-700 hover:text-blue-600 transition-colors ${activeSection === sectionId ? "text-blue-600 font-semibold" : ""}`

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/logotext.png" alt="IIT Palakkad Logo" className="w-28 h-28 object-contain" />
            {/* Removed IIT Palakkad text as per request */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {isHome ? (
              <>
                <a href="#hero" className={linkClass("hero") + " text-base px-2"}>Home</a>
                <a href="#about" className={linkClass("about") + " text-base px-2"}>About</a>
                <a href="#team" className={linkClass("team") + " text-base px-2"}>Team</a>
                <a href="#facilities" className={linkClass("facilities") + " text-base px-2"}>Facilities</a>
                <div
                  className="relative px-2"
                  ref={dropdownRef}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <button
                    className={linkClass("research") + " flex items-center focus:outline-none text-base"}
                    onClick={() => setResearchDropdownOpen((open) => !open)}
                    aria-expanded={researchDropdownOpen}
                    aria-haspopup="true"
                    tabIndex={0}
                  >
                    Research
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div
                    className={`absolute left-0 mt-2 w-32 bg-white border rounded shadow-lg transition-opacity z-20 ${researchDropdownOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                    role="menu"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <a href="#research" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 text-base" onClick={() => setResearchDropdownOpen(false)}>Publications</a>
                    <a href="#programs" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 text-base">Programs</a>
                  </div>
                </div>
                <a href="#achievements" className={linkClass("achievements") + " text-base px-2"}>Achievements & Awards</a>
                <a href="#collaborations" className={linkClass("collaborations") + " text-base px-2"}>Collaborations</a>
                <a href="#activity" className={linkClass("activity") + " text-base px-2"}>Activities</a>
                <a href="#contact" className={linkClass("contact") + " text-base px-2"}>Contact</a>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 py-1 px-3 text-base ml-2">
                  <a href="https://resap.iitpkd.ac.in/" target="_blank" rel="noopener noreferrer">Join Us</a>
                </Button>
              </>
            ) : (
              <>
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors text-base px-2">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors text-base px-2">About</Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-colors text-base px-2">
                    Team <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href="/team">All Team</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/team/faculty">Faculty</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/team/scholars">Research Scholars</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link href="/facilities" className="text-gray-700 hover:text-blue-600 transition-colors text-base px-2">Facilities</Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-colors text-base px-2">
                    Research <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href="/research">Publications</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/research/programs">Programs</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link href="/achievements" className="text-gray-700 hover:text-blue-600 transition-colors text-base px-2">Achievement and Awards</Link>
                <Link href="/activity" className="text-gray-700 hover:text-blue-600 transition-colors text-base px-2">Activities</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors text-base px-2">Contact</Link>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 py-1 px-3 text-base ml-2">
                  <Link href="https://resap.iitpkd.ac.in/" target="_blank" rel="noopener noreferrer">Join Us</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-2 border-t">
            <div className="flex flex-col space-y-2">
              {isHome ? (
                <>
                  <a href="#hero" className={linkClass("hero") + " text-sm"}>Home</a>
                  <a href="#about" className={linkClass("about") + " text-sm"}>About</a>
                  <a href="#team" className={linkClass("team") + " text-sm"}>Team</a>
                  <a href="#facilities" className={linkClass("facilities") + " text-sm"}>Facilities</a>
                  <div className="relative">
                    <button
                      className={linkClass("research") + " flex items-center focus:outline-none w-full justify-between text-sm"}
                      onClick={() => setMobileResearchDropdownOpen((open) => !open)}
                      aria-expanded={mobileResearchDropdownOpen}
                      aria-haspopup="true"
                    >
                      Research
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${mobileResearchDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileResearchDropdownOpen && (
                      <div className="mt-1 w-full bg-white border rounded shadow-lg z-20">
                        <a href="#research" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 text-sm">Publications</a>
                        <a href="#programs" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 text-sm">Programs</a>
                      </div>
                    )}
                  </div>
                  <a href="#achievements" className={linkClass("achievements") + " text-sm"}>Achievement and Awards</a>
                  <a href="#collaborations" className={linkClass("collaborations") + " text-sm"}>Collaborations</a>
                  <a href="#activity" className={linkClass("activity") + " text-sm"}>Activities</a>
                  <a href="#contact" className={linkClass("contact") + " text-sm"}>Contact</a>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 w-fit py-1 px-3 text-sm">
                    <a href="https://resap.iitpkd.ac.in/" target="_blank" rel="noopener noreferrer">Join Us</a>
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                    Home
                  </Link>
                  <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                    About
                  </Link>
                </>
              )}
              <Link href="/team" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                Team
              </Link>
              <Link href="/facilities" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                Facilities
              </Link>
              <Link href="/research" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                Research
              </Link>
              <Link href="/achievements" className={linkClass("achievements") + " text-sm"}>
                Achievement and Awards
              </Link>
              <a href="#activity" className={linkClass("activity") + " text-sm"}>
                Activities
              </a>
              <Link href="/contact" className={linkClass("contact") + " text-sm"}>
                Contact
              </Link>
              <Link
                href={isHome ? "#collaborations" : "/#collaborations"}
                className={`text-base font-medium transition-colors duration-200 hover:text-blue-600 ${activeSection === "collaborations" ? "text-blue-600" : "text-gray-700"}`}
                onClick={() => setIsOpen(false)}
              >
                Collaborations
              </Link>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 w-fit py-1 px-3 text-sm">
                <Link href="https://resap.iitpkd.ac.in/" target="_blank" rel="noopener noreferrer">Join Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
