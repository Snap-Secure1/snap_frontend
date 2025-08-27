export async function GET() {
    const robotsTxt = `User-agent: *
  Allow: /
  
  # Block admin and private areas
  Disallow: /admin/
  Disallow: /api/
  Disallow: /_next/
  Disallow: /private/
  
  # Sitemap location
  Sitemap: https://snapsecuretechnologies.com//sitemap.xml
  
  # Crawl-delay for politeness
  Crawl-delay: 1`
  
    return new Response(robotsTxt, {
      headers: {
        "Content-Type": "text/plain",
      },
    })
  }
  