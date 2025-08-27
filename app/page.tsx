"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navigation from "@/components/navigation"
import Link from "next/link"
import { ArrowUp } from "lucide-react"
import Image from "next/image"

const serviceData = {
  cctv: {
    title: "CCTV Installation & Services",
    subtitle: "Professional high-definition security camera systems with advanced monitoring capabilities",
    image: "/cctv_installation.jpg",
  },
  networking: {
    title: "Network Infrastructure",
    subtitle: "Complete networking solutions for secure and reliable connectivity",
    image: "/network_infrastructure.jpg",
  },
  laptop: {
    title: "Computer Sales & Services",
    subtitle: "Comprehensive computer solutions including sales, repair, and maintenance",
    image: "/computer_sales_And_Services.jpg",
  },
  drone: {
    title: "Drone Camera Solutions",
    subtitle: "Advanced aerial surveillance and monitoring with professional drone systems",
    image: "/drone_service.jpg",
  },
  biometric: {
    title: "Biometric Access Control",
    subtitle: "Advanced biometric security systems for secure access management",
    image: "/biometric.jpg",
  },
  wireless: {
    title: "Wireless CCTV Systems",
    subtitle: "Cable-free security installations with advanced wireless technology",
    image: "/wireless_cctv.jpg",
  },
  solar: {
    title: "Solar-Powered CCTV",
    subtitle: "Eco-friendly surveillance systems powered by renewable solar energy",
    image: "/solarpanel_cctv.jpg",
  },
  maintenance: {
    title: "Maintenance & Support",
    subtitle: "Comprehensive maintenance packages with ongoing technical support",
    image: "/maintenance_and_support.jpg",
  },
}

const industryData = {
  residential: {
    title: "Residential Security Solutions",
    subtitle: "Comprehensive home security systems for modern families",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80",
  },
  commercial: {
    title: "Commercial Security Solutions",
    subtitle: "Professional security systems for businesses and retail establishments",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
  },
  corporate: {
    title: "Corporate Security Solutions",
    subtitle: "Enterprise-level security systems for corporate offices and headquarters",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
  },
  educational: {
    title: "Educational Security Solutions",
    subtitle: "Safe and secure environments for schools and educational institutions",
    image: "/educational_institute.jpg",
  },
  healthcare: {
    title: "Healthcare Security Solutions",
    subtitle: "Specialized security systems for hospitals and medical facilities",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
  },
  agriculture: {
    title: "Agricultural Security Solutions",
    subtitle: "Farm and agricultural property monitoring with specialized rural solutions",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80",
  },
}

export default function SnapSecurePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("[DEBUG] handleSubmit called")
    const form = e.currentTarget;
    console.log("[debug] checking : ", form)
    const formData = new FormData(e.currentTarget)

    console.log("[DEBUG] formData captured:", formData)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone_number: formData.get("phone"),
      message: formData.get("message"),
    }
    console.log("[DEBUG] data object prepared:", data)
  
    if (!data.name || !data.email || !data.phone_number) {
      console.log("[DEBUG] Missing required fields")
      alert("Please fill in all required fields")
      return
    }
  
    setIsSubmitting(true)
    console.log("[DEBUG] setIsSubmitting(true)")
  
    try {
      console.log("[DEBUG] Sending fetch request...")
      const response = await fetch("https://snapsecure-backend-hj6p.onrender.com/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })
      console.log("[DEBUG] fetch completed, response:", response)
  
      const text = await response.text()
      console.log("[DEBUG] response text:", text)
  
      if (!response.ok) {
        console.log("[DEBUG] response.ok is false")
        throw new Error(`Server responded with ${response.status}: ${text}`)
      }
  
      let responseData: any = { message: "Enquiry submitted successfully" }
      try {
        if (text) {
          responseData = JSON.parse(text)
          console.log("[DEBUG] JSON parsed successfully:", responseData)
        } else {
          console.log("[DEBUG] Empty response text, using default message")
        }
      } catch (parseError) {
        console.warn("[DEBUG] JSON parse failed, using text:", text, parseError)
        responseData = { message: text || "Enquiry submitted successfully" }
      }
  
      console.log("[DEBUG] Success responseData:", responseData)
  
      // ✅ Use captured form reference
      console.log("[DEBUG] About to reset form:", form)
      form.reset()
      console.log("[DEBUG] Form reset successful")
  
      setShowSuccess(true)
      console.log("[DEBUG] showSuccess set to true")
      setTimeout(() => {
        setShowSuccess(false)
        console.log("[DEBUG] showSuccess reset to false after timeout")
      }, 5000)
  
    } catch (error) {
      console.error("[DEBUG] Error submitting enquiry:", error)
      alert("Error: Please try again.")
    } finally {
      setIsSubmitting(false)
      console.log("[DEBUG] setIsSubmitting(false)")
    }
  }
  
    
  
  

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-emerald-500 text-white pt-20" role="banner">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Advanced Security Solutions for Modern Businesses
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Protect what matters most with our comprehensive CCTV, networking, and security technology solutions.
                Trusted by businesses across Hyderabad.
              </p>
              <div className="flex flex-wrap gap-3 mb-8" role="list" aria-label="Key features">
                {["24/7 Monitoring", "HD Quality", "Remote Access", "Expert Installation"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
                    role="listitem"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Contact Us</h2>
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="bg-muted"
                    aria-describedby="name-error"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className="bg-muted"
                    aria-describedby="email-error"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="bg-muted"
                    aria-describedby="phone-error"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Tell us about your security needs
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your security needs"
                    rows={4}
                    className="bg-muted"
                    aria-describedby="message-help"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-describedby={showSuccess ? "success-message" : undefined}
                >
                  {isSubmitting ? "Sending..." : "Contact Us"}
                </Button>
                {showSuccess && (
                  <div
                    id="success-message"
                    className="bg-emerald-500 text-white p-4 rounded-lg text-center font-medium"
                    role="alert"
                    aria-live="polite"
                  >
                    Thank you! We'll contact you within 24 hours.
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Leading Security Technology Provider</h2>
              <p className="text-lg text-muted-foreground mb-6">
                SnapSecure Technologies is a cutting-edge startup delivering advanced CCTV and surveillance solutions
                across Hyderabad. We combine innovative technology with expert installation to provide comprehensive
                security systems.
              </p>
              <div className="space-y-4 mb-8" role="list" aria-label="Company features">
                {[
                  "High-definition 4K CCTV systems",
                  "Cloud-based remote monitoring",
                  "Custom security configurations",
                  "Professional installation & support",
                  "24/7 technical assistance",
                  "Scalable enterprise solutions",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3" role="listitem">
                    <div
                      className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground">
                Our certified technicians ensure seamless integration and professional installation, giving you complete
                peace of mind with round-the-clock security coverage.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Professional CCTV installation technician working on security camera system"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SnapSecure?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our certified professionals deliver exceptional security solutions with guaranteed quality and ongoing
              support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏆",
                title: "Certified Experts",
                description:
                  "Our team consists of trained and certified security professionals with years of experience in installation and maintenance.",
              },
              {
                icon: "🔧",
                title: "Complete Solutions",
                description:
                  "From initial consultation to ongoing support, we provide end-to-end security and IT infrastructure solutions.",
              },
              {
                icon: "📍",
                title: "Local Presence",
                description: "Serving Hyderabad with rapid response times and dedicated local support teams.",
              },
              {
                icon: "💰",
                title: "Affordable & Scalable",
                description:
                  "Budget-friendly solutions that grow with your needs, from small homes to large enterprise installations.",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive security and technology solutions tailored to your specific needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.entries(serviceData).map(([key, service]) => (
              <Link key={key} href={`/services/${key}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                  {/* Image instead of Icon */}
                  <div className="aspect-video relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{service.subtitle}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industry" className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored security solutions for every sector and property type
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.entries(industryData).map(([key, industry]) => (
              <Link key={key} href={`/industries/${key}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                  <div className="aspect-video relative">
                    <img
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{industry.subtitle}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16" role="contentinfo">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-8" aria-hidden="true"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-4" aria-hidden="true">
                  📍
                </div>
                <h3 className="font-semibold mb-2">Address</h3>
                <address className="text-sm opacity-90 not-italic">
                  Plot No. 411, Flat No. 402, 4th Floor
                  <br />
                  Sree Nivasam, Matrusri Nagar Colony
                  <br />
                  Miyapur, Hyderabad, Telangana 500049
                </address>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-4" aria-hidden="true">
                  📧
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm opacity-90">
                  <Button
                    variant="link"
                    className="text-white hover:text-amber-300 p-0 h-auto font-normal text-sm"
                    onClick={() => {
                      const form = document.getElementById("contact-form")
                      if (form) form.scrollIntoView({ behavior: "smooth" })
                    }}
                    aria-label="Use contact form to send us an email"
                  >
                    Use Contact Form Above
                  </Button>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-4" aria-hidden="true">
                  📞
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <div className="text-sm opacity-90">
                  <a href="tel:+918074386363" className="hover:text-amber-300 transition-colors block">
                    +91 8074386363
                  </a>
                  <a href="tel:04031796316" className="hover:text-amber-300 transition-colors block">
                    040-3179 6316
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-4 mb-8" role="list" aria-label="Social media links">
            {[
              { icon: "📘", label: "Facebook", href: "#" },
              { icon: "🐦", label: "Twitter", href: "#" },
              { icon: "💼", label: "LinkedIn", href: "#" },
              { icon: "📷", label: "Instagram", href: "#" },
              { icon: "📺", label: "YouTube", href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label={`Visit our ${social.label} page`}
                role="listitem"
              >
                <span aria-hidden="true">{social.icon}</span>
              </a>
            ))}
          </div>

          <div className="text-center pt-8 border-t border-white/20">
            <p className="text-white/70">© 2025 SnapSecure Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-5 h-5" aria-hidden="true" />
          <span className="sr-only">Scroll to top</span>
        </Button>
      )}
    </div>
  )
}
