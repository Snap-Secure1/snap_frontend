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
  title: "Best CCTV Installation in Miyapur, Hyderabad ",
  description:
    "Best CCTV Installation in Miyapur, Hyderabad. Secure your home & office with expert, reliable & affordable surveillance solutions for complete safety. ",
  keywords: "CCTV Installation In Hyderabad, CCTV Installation Near Me Hyderabad, CCTV Installation In Miyapur, CCTV Installation In Telangana, CCTV Installation In Andhra Pradesh, Security Camera Installation In Hyderabad, CCTV Setup Services In Hyderabad, CCTV Installers In Hyderabad, Home CCTV Installation In Hyderabad, Office CCTV Installation In Hyderabad, Best CCTV Service In Hyderabad, Budget CCTV Installation In Hyderabad, Quality CCTV Installation In Hyderabad, CCTV Installation Services Hyderabad, CCTV Installation Services In Hyderabad, CCTV Installation Services In Miyapur, CCTV Installation Near Me In Hyderabad, CCTV Camera Installation In Hyderabad, CCTV Camera Installation Services Hyderabad, CCTV Camera Installation Services Hyderabad Telangana, CCTV Camera Installation Services In Hyderabad, CCTV Installation Cost In Hyderabad, Camera Installation Hyderabad, Security Camera Installation Hyderabad",
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
    google: "zb_fUA8runT0CJM8uJawpwM-qZlvvlR50-X0Balb5DQ",
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

        {/* ✅ Google Analytics (GA4) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9TH84MYC1E"
        ></script>
        <script>
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9TH84MYC1E');
            `,
          }}
        </script>

         {/* ✅ New Google Analytics (G-FXJMF5FYY3) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FXJMF5FYY3"
        ></script>
        <script>
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FXJMF5FYY3');
            `,
          }}
        </script>

        {/* ✅ New Google Analytics (G-FXJMF5FYY3) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9R1P89B9LL"
        ></script>
        <script>
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9R1P89B9LL');
            `,
          }}
        </script>

        {/* ✅ Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MLHN2DQT');
            `,
          }}
        />

      </head>
      <body className="font-sans antialiased">
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MLHN2DQT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  )
}
