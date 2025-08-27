import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Link from "next/link"

const industryData = {
  residential: {
    title: "Residential Security Solutions",
    subtitle: "Comprehensive home security systems for modern families",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    features: [
      "Home CCTV camera systems",
      "Smart doorbell cameras",
      "Motion sensor lighting",
      "Alarm system integration",
      "Mobile app monitoring",
      "Night vision capabilities",
      "Weather-resistant equipment",
      "Professional installation",
    ],
    description:
      "Protect your family and property with our advanced residential security solutions. We understand that your home is your sanctuary, and our tailored security systems provide peace of mind with cutting-edge technology designed specifically for residential properties.",
    benefits: [
      "24/7 home monitoring and surveillance",
      "Instant alerts for suspicious activity",
      "Remote access via smartphone apps",
      "Integration with smart home systems",
      "Deterrent effect on potential intruders",
      "Insurance premium reductions",
    ],
  },
  commercial: {
    title: "Commercial Security Solutions",
    subtitle: "Professional security systems for businesses and retail establishments",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    features: [
      "Multi-camera surveillance systems",
      "Access control systems",
      "Point-of-sale monitoring",
      "Employee time tracking",
      "Remote monitoring services",
      "Integration with existing systems",
      "Scalable solutions",
      "24/7 support services",
    ],
    description:
      "Secure your business operations with our comprehensive commercial security solutions. From retail stores to office buildings, we provide scalable security systems that protect your assets, employees, and customers while ensuring business continuity.",
    benefits: [
      "Theft prevention and loss reduction",
      "Employee productivity monitoring",
      "Customer safety assurance",
      "Compliance with security regulations",
      "Evidence collection for incidents",
      "Remote business monitoring capabilities",
    ],
  },
  corporate: {
    title: "Corporate Security Solutions",
    subtitle: "Enterprise-level security systems for corporate offices and headquarters",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
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
  },
  educational: {
    title: "Educational Security Solutions",
    subtitle: "Safe and secure environments for schools and educational institutions",
    image: "/educational_institute.avif",
    features: [
      "Classroom and hallway monitoring",
      "Playground and outdoor area coverage",
      "Emergency response integration",
      "Visitor management systems",
      "Bus loading zone monitoring",
      "After-hours security coverage",
      "Integration with PA systems",
      "Privacy-compliant solutions",
    ],
    description:
      "Create a safe learning environment with our specialized educational security solutions. We understand the unique challenges of educational institutions and provide systems that balance security needs with privacy requirements and educational objectives.",
    benefits: [
      "Student and staff safety assurance",
      "Incident prevention and response",
      "Campus-wide security coordination",
      "Emergency notification integration",
      "Visitor screening and tracking",
      "After-hours facility protection",
    ],
  },
  healthcare: {
    title: "Healthcare Security Solutions",
    subtitle: "Specialized security systems for hospitals and medical facilities",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    features: [
      "Patient area monitoring",
      "Pharmacy and drug storage security",
      "Emergency department coverage",
      "Parking area surveillance",
      "Access control for restricted areas",
      "HIPAA-compliant solutions",
      "Integration with nurse call systems",
      "Visitor management systems",
    ],
    description:
      "Protect patients, staff, and sensitive medical information with our healthcare-specific security solutions. Our systems comply with HIPAA regulations while providing comprehensive security coverage for medical facilities of all sizes.",
    benefits: [
      "Patient and staff safety",
      "Controlled substance protection",
      "HIPAA compliance assurance",
      "Emergency response coordination",
      "Visitor access management",
      "Medical equipment security",
    ],
  },
  agriculture: {
    title: "Agricultural Security Solutions",
    subtitle: "Farm and agricultural property monitoring with specialized rural solutions",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    features: [
      "Large area perimeter monitoring",
      "Livestock monitoring systems",
      "Equipment and machinery protection",
      "Solar-powered camera options",
      "Weather-resistant installations",
      "Wireless connectivity solutions",
      "Mobile monitoring capabilities",
      "Theft prevention systems",
    ],
    description:
      "Protect your agricultural investments with specialized security solutions designed for rural environments. Our systems provide reliable monitoring across large areas while withstanding harsh weather conditions and operating independently of traditional power sources.",
    benefits: [
      "Livestock and crop protection",
      "Equipment theft prevention",
      "Remote area monitoring",
      "Weather-resistant operation",
      "Solar-powered sustainability",
      "Mobile connectivity solutions",
    ],
  },
}

interface IndustryPageProps {
  params: {
    industry: string
  }
}

export async function generateStaticParams() {
  return Object.keys(industryData).map((industry) => ({
    industry,
  }))
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const industry = industryData[params.industry as keyof typeof industryData]

  if (!industry) {
    return {
      title: "Industry Not Found - SnapSecure Technologies",
    }
  }

  return {
    title: `${industry.title} - SnapSecure Technologies`,
    description: `${industry.subtitle} Professional security solutions in Hyderabad with expert installation and 24/7 support.`,
  }
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = industryData[params.industry as keyof typeof industryData]

  if (!industry) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPath={`/industries/${params.industry}`} />

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-600 to-emerald-500 text-white pt-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{industry.title}</h1>
              <p className="text-xl opacity-90 mb-6">{industry.subtitle}</p>
              <p className="text-lg opacity-80">{industry.description}</p>
            </div>
            <div className="relative">
              <img
                src={industry.image || "/placeholder.svg"}
                alt={industry.title}
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
              Our {industry.title.toLowerCase()} are designed to meet the unique security challenges of your industry
              with specialized equipment and expertise tailored to your specific operational requirements.
            </p>

            <div className="space-y-4 mb-12" role="list" aria-label="Industry features">
              {industry.features.map((feature: string, index: number) => (
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
                {industry.benefits.map((benefit: string, index: number) => (
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
                With years of experience serving the {params.industry} sector, our team understands the specific
                challenges and requirements of your industry. We provide customized solutions that not only meet your
                security needs but also comply with industry regulations and standards.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <Card className="p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Get Industry-Specific Quote</h3>
              <p className="text-muted-foreground mb-6">
                Contact us for a customized security assessment and quote tailored to your {params.industry} needs.
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
                {Object.entries(industryData)
                  .filter(([key]) => key !== params.industry)
                  .slice(0, 3)
                  .map(([key, relatedIndustry]) => (
                    <Link
                      key={key}
                      href={`/industries/${key}`}
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
