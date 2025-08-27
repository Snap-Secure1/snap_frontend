  import { notFound } from "next/navigation"
  import { Button } from "@/components/ui/button"
  import { Card } from "@/components/ui/card"
  import Navigation from "@/components/navigation"
  import Link from "next/link"
  

  const serviceData = {
    cctv: {
      title: "CCTV Installation & Services",
      subtitle: "Professional high-definition security camera systems with advanced monitoring capabilities",
      image: "/cctv_installation.avif",
      features: [
        "4K Ultra HD camera systems",
        "Night vision and infrared capabilities",
        "Remote monitoring via mobile apps",
        "Cloud storage and local DVR options",
        "Motion detection and alerts",
        "Professional installation and setup",
        "24/7 technical support",
        "System maintenance and upgrades",
      ],
      description:
      "Our CCTV installation and services provide reliable surveillance with advanced HD cameras, remote monitoring, motion detection, and 24/7 technical support. Perfect for both residential and commercial properties.",


    },
    networking: {
      title: "Network Infrastructure",
      subtitle: "Complete networking solutions for secure and reliable connectivity",
      image: "/network_infrastructure.avif",
      features: [
        "LAN and WAN network design",
        "Router and switch configuration",
        "Firewall setup and security",
        "WiFi network installation",
        "Network monitoring and management",
        "VPN setup for remote access",
        "Network troubleshooting and support",
        "Performance optimization",
      ],
      description:
        "We design and implement secure and efficient network infrastructures, including LAN/WAN setups, WiFi, VPN, and firewall systems. Ensure your business stays connected with our optimized solutions.",

    },
    laptop: {
      title: "Computer Sales & Services",
      subtitle: "Comprehensive computer solutions including sales, repair, and maintenance",
      image: "/computer_sales_And_Services.jpg",
      features: [
        "New laptop and desktop sales",
        "Hardware repair and replacement",
        "Software installation and updates",
        "Data recovery services",
        "System optimization and cleanup",
        "Virus removal and security setup",
        "Warranty support and service",
        "Custom system builds",
      ],
      description:
        "From new laptop and desktop sales to repair and maintenance, we provide complete computer solutions. Our services include hardware replacement, software setup, virus removal, and system optimization.",

    },
    drone: {
      title: "Drone Camera Solutions",
      subtitle: "Advanced aerial surveillance and monitoring with professional drone systems",
      image: "/drone_service.avif",
      features: [
        "4K aerial camera systems",
        "GPS tracking and navigation",
        "Real-time video streaming",
        "Automated patrol routes",
        "Night vision capabilities",
        "Weather-resistant designs",
        "Professional pilot services",
        "Data analysis and reporting",
      ],
      description:
        "Enhance your security and monitoring with advanced drone solutions. We provide GPS-enabled drones with 4K video, real-time streaming, automated patrols, and professional pilot services.",

    },
    biometric: {
      title: "Biometric Access Control",
      subtitle: "Advanced biometric security systems for secure access management",
      image: "/biometric.avif",
      features: [
        "Fingerprint recognition systems",
        "Facial recognition technology",
        "RFID card access control",
        "Multi-factor authentication",
        "Time and attendance tracking",
        "Access logs and reporting",
        "Integration with existing systems",
        "Mobile app management",
      ],
      description:
        "Secure your premises with state-of-the-art biometric systems. We offer fingerprint, facial recognition, and RFID solutions for controlled access, attendance management, and seamless integration.",
    },
    wireless: {
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

    },
    solar: {
      title: "Solar-Powered CCTV",
      subtitle: "Eco-friendly surveillance systems powered by renewable solar energy",
      image: "/solarpanel_cctv.avif",
      features: [
        "Solar panel power systems",
        "Battery backup for 24/7 operation",
        "Weather-resistant components",
        "Wireless connectivity options",
        "Low maintenance requirements",
        "Environmentally friendly operation",
        "Cost-effective long-term solution",
        "Remote monitoring capabilities",
      ],
      description:
        "Go green with solar-powered CCTV solutions. Designed for continuous surveillance with battery backup, these eco-friendly systems are cost-effective and ideal for outdoor security needs.",

    },
    maintenance: {
      title: "Maintenance & Support",
      subtitle: "Comprehensive maintenance packages with ongoing technical support",
      image: "/maintenance_and_support.avif",
      features: [
        "Regular system health checks",
        "Preventive maintenance schedules",
        "24/7 technical support hotline",
        "Emergency repair services",
        "System updates and upgrades",
        "Performance optimization",
        "Replacement parts and components",
        "Annual service contracts",
      ],
      description:
      "Ensure your security systems run smoothly with our maintenance and support services. We provide preventive checks, upgrades, emergency repairs, and 24/7 technical assistance.",

    },
  }

  interface ServicePageProps {
    params: {
      service: string
    }
  }

  export async function generateStaticParams() {
    return Object.keys(serviceData).map((service) => ({
      service,
    }))
  }

  export async function generateMetadata({ params }: ServicePageProps) {
    const service = serviceData[params.service as keyof typeof serviceData]

    if (!service) {
      return {
        title: "Service Not Found - SnapSecure Technologies",
      }
    }

    return {
      title: `${service.title} - SnapSecure Technologies`,
      description: `${service.subtitle} Professional security solutions in Hyderabad with expert installation and 24/7 support.`,
    }
  }

  export default function ServicePage({ params }: ServicePageProps) {
    const service = serviceData[params.service as keyof typeof serviceData]

    if (!service) {
      notFound()
    }

    return (
      <div className="min-h-screen bg-background">
        <Navigation currentPath={`/services/${params.service}`} />

        {/* Hero Section */}
        <header className="bg-gradient-to-br from-blue-600 to-emerald-500 text-white pt-20">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
                <p className="text-xl opacity-90 mb-6">{service.subtitle}</p>
                <p className="text-lg opacity-80">{service.description}</p>
              </div>
              <div className="relative">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
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

              <h2 className="text-3xl font-bold mb-6">Complete Solutions</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our {service.title.toLowerCase()} provide comprehensive solutions designed to meet your specific
                requirements with professional installation and ongoing support. We use only the latest technology and
                industry-standard practices to ensure maximum security and reliability.
              </p>

              <div className="space-y-4 mb-12" role="list" aria-label="Service features">
                {service.features.map((feature: string, index: number) => (
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
                <h3 className="text-xl font-semibold mb-4">Why Choose Our {service.title}?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span className="text-sm">Professional Installation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span className="text-sm">24/7 Technical Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span className="text-sm">Warranty Coverage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <span className="text-sm">Competitive Pricing</span>
                  </div>
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

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Related Services</h3>
                <div className="space-y-3">
                  {Object.entries(serviceData)
                    .filter(([key]) => key !== params.service)
                    .slice(0, 3)
                    .map(([key, relatedService]) => (
                      <Link
                        key={key}
                        href={`/services/${key}`}
                        className="block p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="font-medium text-sm">{relatedService.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {relatedService.subtitle.slice(0, 60)}...
                        </div>
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
