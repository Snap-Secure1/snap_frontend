import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "SnapSecure Technologies - Advanced Security Solutions",
  description:
    "SnapSecure Technologies: Leading CCTV installation, security cameras & networking solutions in Hyderabad. 24/7 monitoring, HD quality, expert service.",
  keywords: "CCTV installation, security cameras, networking, Hyderabad, surveillance systems",
  alternates: {
    canonical: "https://snapsecuretechnologies.com/",
  },
  openGraph: {
    title: "SnapSecure Technologies - Advanced Security Solutions",
    description:
      "Leading CCTV installation, security cameras & networking solutions in Hyderabad. 24/7 monitoring, HD quality, expert service.",
    url: "https://snapsecuretechnologies.com/",
    siteName: "SnapSecure Technologies",
    images: [
      {
        url: "https://snapsecuretechnologies.com//images/social-share.png",
        width: 1200,
        height: 630,
        alt: "SnapSecure Technologies - Professional Security Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapSecure Technologies - Advanced Security Solutions",
    description:
      "Leading CCTV installation, security cameras & networking solutions in Hyderabad. 24/7 monitoring, HD quality, expert service.",
    images: ["https://snapsecuretechnologies.com//images/social-share.png"],
    creator: "@snapsecure",
    site: "@snapsecure",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://snapsecuretechnologies.com//#organization",
      name: "SnapSecure Technologies",
      alternateName: "SnapSecure",
      description: "Leading provider of CCTV installation, security cameras, and networking solutions in Hyderabad.",
      url: "https://snapsecuretechnologies.com/",
      telephone: "+91-9876543210",
      email: "info@snapsecure.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Tech Park Road",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.385,
        longitude: 78.4867,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Hyderabad",
        },
      ],
      openingHours: "Mo-Sa 09:00-18:00",
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Security Solutions",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "CCTV Installation",
              description: "Professional CCTV camera installation and monitoring systems",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Network Solutions",
              description: "Complete networking infrastructure setup and maintenance",
            },
          },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "https://snapsecuretechnologies.com//#cctv-service",
      name: "CCTV Installation & Monitoring",
      description:
        "Professional CCTV camera installation with 24/7 monitoring, HD quality recording, and remote access capabilities.",
      provider: {
        "@id": "https://snapsecuretechnologies.com//#organization",
      },
      areaServed: ["Hyderabad"],
      serviceType: "Security System Installation",
    },
    {
      "@type": "Service",
      "@id": "https://snapsecuretechnologies.com//#networking-service",
      name: "Network Infrastructure Solutions",
      description:
        "Complete networking solutions including LAN/WAN setup, wireless networks, and network security implementation.",
      provider: {
        "@id": "https://snapsecuretechnologies.com//#organization",
      },
      areaServed: ["Hyderabad"],
      serviceType: "Network Installation",
    },
    {
      "@type": "Service",
      "@id": "https://snapsecuretechnologies.com//#biometric-service",
      name: "Biometric Access Control",
      description:
        "Advanced biometric systems for secure access control including fingerprint and facial recognition systems.",
      provider: {
        "@id": "https://snapsecuretechnologies.com//#organization",
      },
      areaServed: ["Hyderabad"],
      serviceType: "Access Control System",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
        />
        <link rel="preload" as="font" href="/fonts/inter-var.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
