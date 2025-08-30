import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Wireless CCTV Systems - SnapSecure Technologies",
  description: "Cable-free security camera installations with mobile apps, cloud storage, and remote management.",
}

const data = {
  slug: "wireless",
  title: "Wireless CCTV Systems",
  subtitle: "Cable-free security installations with advanced wireless technology",
  image: "/wireless_cctv.avif",
  features: [
    "WiFi-enabled camera systems",
    "Battery-powered options available",
    "Mobile app integration",
    "Cloud storage capabilities",
    "Easy installation and setup",
    "Scalable system design",
    "Remote configuration and management",
    "Weather-resistant housings",
  ],
  description:
    "Our wireless CCTV systems provide flexible, cable-free installation with remote monitoring. Easy to set up, scalable, and integrated with mobile apps for convenient access anywhere.",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPath={`/services/${data.slug}`} />
      <header className="bg-gradient-to-br from-blue-600 to-emerald-500 text-white pt-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
              <p className="text-xl opacity-90 mb-6">{data.subtitle}</p>
              <p className="text-lg opacity-80">{data.description}</p>
            </div>
            <div className="relative">
              <img
                src={data.image || "/placeholder.svg?height=400&width=600&query=service+hero"}
                alt={data.title}
                className="rounded-2xl shadow-2xl"
                loading="lazy"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </header>
      <main className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Complete Solutions</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our {data.title.toLowerCase()} provide comprehensive solutions designed to meet your specific requirements
              with professional installation and ongoing support. We use only the latest technology and
              industry-standard practices to ensure maximum security and reliability.
            </p>
            <div className="space-y-4 mb-12" role="list" aria-label="Service features">
              {data.features.map((feature, index) => (
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
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Why Choose Our {data.title}?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Professional Installation",
                  "24/7 Technical Support",
                  "Warranty Coverage",
                  "Competitive Pricing",
                ].map((label, i) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{i + 1}</span>
                    </div>
                    <span className="text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <aside className="lg:col-span-1">
            <Card className="p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Get a Quote</h3>
              <p className="text-muted-foreground mb-6">
                Interested in this service? Contact us for a free consultation and customized quote.
              </p>
              <Link href="/#contact">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600">
                  Get Free Quote
                </Button>
              </Link>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  )
}
