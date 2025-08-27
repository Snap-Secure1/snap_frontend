"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const serviceData = {
  cctv: "CCTV Installation & Services",
  networking: "Network Infrastructure",
  laptop: "Computer Sales & Services",
  drone: "Drone Camera Solutions",
  biometric: "Biometric Access Control",
  wireless: "Wireless CCTV Systems",
  solar: "Solar-Powered CCTV",
  maintenance: "Maintenance & Support",
}

const industryData = {
  residential: "Residential",
  commercial: "Commercial",
  industrial: "Industrial",
  corporate: "Corporate",
  educational: "Educational",
  healthcare: "Healthcare",
  agriculture: "Agriculture",
}

interface NavigationProps {
  currentPath?: string
}

export default function Navigation({ currentPath = "/" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (currentPath !== "/") {
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/98 backdrop-blur-md shadow-lg" : "bg-white/95 backdrop-blur-md"
      } border-b border-border`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3" aria-label="SnapSecure Technologies - Go to homepage">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <Image
                src="/logo.jpeg"
                alt="SnapSecure Technologies Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-blue-600">SnapSecure</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Navigate to About section"
            >
              About
            </button>
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-foreground hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
                aria-expanded="false"
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                role="menu"
              >
                {Object.entries(serviceData).map(([key, title]) => (
                  <Link
                    key={key}
                    href={`/services/${key}`}
                    className="block w-full text-left px-4 py-3 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg focus:outline-none focus:bg-muted"
                    role="menuitem"
                    aria-label={`View details for ${title}`}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-foreground hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
                aria-expanded="false"
                aria-haspopup="true"
                aria-label="Industries menu"
              >
                Industries <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                role="menu"
              >
                {Object.entries(industryData).map(([key, title]) => (
                  <Link
                    key={key}
                    href={`/industries/${key}`}
                    className="block w-full text-left px-4 py-3 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg focus:outline-none focus:bg-muted"
                    role="menuitem"
                    aria-label={`View details for ${title}`}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Navigate to Contact section"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Get quote - navigate to contact form"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white" role="menu" aria-label="Mobile navigation menu">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 focus:outline-none focus:bg-muted rounded px-2"
                role="menuitem"
                aria-label="Navigate to About section"
              >
                About
              </button>
              <div className="space-y-2">
                <div className="font-medium py-2">Services</div>
                {Object.entries(serviceData).map(([key, title]) => (
                  <Link
                    key={key}
                    href={`/services/${key}`}
                    className="block w-full text-left py-2 pl-4 text-muted-foreground hover:text-foreground focus:outline-none focus:text-foreground focus:bg-muted rounded px-2"
                    role="menuitem"
                    aria-label={`View details for ${title}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {title}
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <div className="font-medium py-2">Industries</div>
                {Object.entries(industryData).map(([key, title]) => (
                  <Link
                    key={key}
                    href={`/industries/${key}`}
                    className="block w-full text-left py-2 pl-4 text-muted-foreground hover:text-foreground focus:outline-none focus:text-foreground focus:bg-muted rounded px-2"
                    role="menuitem"
                    aria-label={`View details for ${title}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {title}
                  </Link>
                ))}
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 focus:outline-none focus:bg-muted rounded px-2"
                role="menuitem"
                aria-label="Navigate to Contact section"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
