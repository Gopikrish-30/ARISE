"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

const socialLinks = {
  facebook: "https://facebook.com/iitpalakkad",
  twitter: "https://twitter.com/iitpalakkad",
  linkedin: "https://linkedin.com/school/iit-palakkad",
  email: "mailto:info@iitpkd.ac.in",
}

export function Footer() {
  const handleSocialClick = (platform: keyof typeof socialLinks) => {
    if (platform === "email") {
      window.location.href = socialLinks.email
    } else {
      window.open(socialLinks[platform], "_blank", "noopener,noreferrer")
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-16">
          {/* About */}
          <div className="flex flex-col h-full justify-between">
            <h3 className="text-lg font-bold mb-4">IIT Palakkad</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Advancing the frontiers of science and technology through innovative research at IIT Palakkad.
            </p>
            <div className="flex space-x-4 mt-auto">
              <Facebook
                className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
                onClick={() => handleSocialClick("facebook")}
              />
              <Twitter
                className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
                onClick={() => handleSocialClick("twitter")}
              />
              <Linkedin
                className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
                onClick={() => handleSocialClick("linkedin")}
              />
              <Mail
                className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
                onClick={() => handleSocialClick("email")}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col h-full justify-between items-center">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 mb-auto">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-white text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-300 hover:text-white text-sm">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-gray-300 hover:text-white text-sm">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-gray-300 hover:text-white text-sm">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="text-gray-300 hover:text-white text-sm">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col h-full justify-between items-end">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-1 text-sm text-gray-300 mb-auto">
              <div className="flex items-center gap-2">
                <span className="text-orange-500 text-lg">📍</span>
                <span className="font-semibold text-white">INDIAN INSTITUTE OF TECHNOLOGY PALAKKAD</span>
              </div>
              <div className="ml-6">Kanjikode | Palakkad | Kerala - 678623</div>
              <div className="flex items-center gap-2 ml-6 mt-1">
                <span className="text-gray-400">☎</span>
                <a href="tel:+914912092001" className="hover:text-white transition-colors cursor-pointer">0491 209 2001 (Office)</a>
                <span className="mx-1">|</span>
                <span className="text-gray-400">✉</span>
                <a href="mailto:info@iitpkd.ac.in" className="hover:text-white transition-colors cursor-pointer">info@iitpkd.ac.in</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} IIT Palakkad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
