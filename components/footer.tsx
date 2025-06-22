"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const handleSocialClick = (platform: string) => {
    const socialLinks = {
      facebook: "https://facebook.com/iitpalakkad",
      twitter: "https://twitter.com/iitpalakkad",
      linkedin: "https://linkedin.com/school/iit-palakkad",
      email: "mailto:info@iitpkd.ac.in",
    }

    if (platform === "email") {
      window.location.href = socialLinks.email
    } else {
      window.open(socialLinks[platform], "_blank", "noopener,noreferrer")
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">IIT Palakkad</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Advancing the frontiers of science and technology through innovative research at IIT Palakkad.
            </p>
            <div className="flex space-x-4">
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
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
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

          {/* Research Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4">Research Areas</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300 text-sm">Machine Learning</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Computer Vision</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Natural Language Processing</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Robotics</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Artificial Intelligence</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Indian Institute of Technology Palakkad</p>
              <p>Kozhippara, Palakkad - 678623</p>
              <button
                onClick={() => (window.location.href = "tel:+914923226100")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                +91 4923 226 100
              </button>
              <button
                onClick={() => (window.location.href = "mailto:research@iitpkd.ac.in")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                research@iitpkd.ac.in
              </button>
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
