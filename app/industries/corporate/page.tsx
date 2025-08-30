import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Link from "next/link"

const industryData = {
  title: "Corporate Security Solutions",
  subtitle: "Enterprise-level security systems for corporate offices and headquarters",
  image: "/corporate.avif",
  features: [
    "Multi-building surveillance networks",
    "Advanced access control systems",
    "Visitor management systems",
    "Integration with HR systems",
    "Conference room monitoring",
    "Parking area surveillance",
    "Central monitoring stations",
    "Compliance reporting features",
  ],
  description:
    "Enhance your corporate security posture with enterprise-grade solutions that protect sensitive information, employees, and facilities. Our corporate security systems integrate seamlessly with existing IT infrastructure and business processes.",
  benefits: [
    "Intellectual property protection",
    "Employee safety and security",
    "Visitor tracking and management",
    "Compliance with corporate policies",
    "Multi-location centralized monitoring",
    "Integration with business systems",
  ],
}

const relatedIndustries = [
  {
    key: "commercial",
    title: "Commercial Security Solutions",
    subtitle: "Professional security systems for businesses and retail establishments",
  },
  {
    key: "educational",
    title: "Educational Security Solutions",
    subtitle: "Safe and secure environments for schools and educational institutions",
  },
  {
    key: "healthcare",
    title: "Healthcare Security Solutions",
    subtitle: "Specialized security systems for hospitals and medical facilities",
  },
]

export const metadata = {
  title: `${industryData.title} - SnapSecure Technologies`,
  description: `${industryData.subtitle} Professional security solutions in Hyderabad with expert installation and 24/7 support.`,
}

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPath="/industries/corporate" />

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-600 to-emerald-500 text-white pt-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{industryData.title}</h1>
              <p className="text-xl opacity-90 mb-6">{industryData.subtitle}</p>
              <p className="text-lg opacity-80">{industryData.description}</p>
            </div>
            <div className="relative">
              <img
                src={industryData.image || "/placeholder.svg"}
                alt={industryData.title}
                className="rounded-2xl shadow-2xl"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Specialized Security Features</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our {industryData.title.toLowerCase()} are designed to meet the unique security challenges of your
              industry with specialized equipment and expertise tailored to your specific operational requirements.
            </p>

            <div className="space-y-4 mb-12" role="list" aria-label="Industry features">
              {industryData.features.map((feature: string, index: number) => (
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

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {industryData.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Industry Expertise</h3>
              <p className="text-muted-foreground">
                With years of experience serving the corporate sector, our team understands the specific challenges and
                requirements of your industry. We provide customized solutions that not only meet your security needs
                but also comply with industry regulations and standards.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <Card className="p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Get Industry-Specific Quote</h3>
              <p className="text-muted-foreground mb-6">
                Contact us for a customized security assessment and quote tailored to your corporate needs.
              </p>
              <Link href="/#contact">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600">
                  Get Free Consultation
                </Button>
              </Link>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Other Industries</h3>
              <div className="space-y-3">
                {relatedIndustries.map((relatedIndustry) => (
                  <Link
                    key={relatedIndustry.key}
                    href={`/industries/${relatedIndustry.key}`}
                    className="block p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="font-medium text-sm">{relatedIndustry.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{relatedIndustry.subtitle}</div>
                  </Link>
                ))}
              </div>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  )
}
