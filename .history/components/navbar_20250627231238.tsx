"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="font-bold text-xl text-gray-900">IIT Palakkad</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>

            {/* Team Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
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

            <Link href="/facilities" className="text-gray-700 hover:text-blue-600 transition-colors">
              Facilities
            </Link>

            {/* Research Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Research <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                                        <DropdownMenuItem asChild>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/achievements" className="text-gray-700 hover:text-blue-600 transition-colors">
              Achievement and Awards
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-blue-600 transition-colors">
              Events
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/join-us">Join Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-blue-600 transition-colors">
                Team
              </Link>
              <Link href="/facilities" className="text-gray-700 hover:text-blue-600 transition-colors">
                Facilities
              </Link>
              <Link href="/research" className="text-gray-700 hover:text-blue-600 transition-colors">
                Research
              </Link>
              <Link href="/achievements" className="text-gray-700 hover:text-blue-600 transition-colors">
                Achievement and Awards
              </Link>
              <Link href="/events" className="text-gray-700 hover:text-blue-600 transition-colors">
                Events
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 w-fit">
                <Link href="/join-us">Join Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
