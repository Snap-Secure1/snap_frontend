import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/navigation"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20 flex items-center justify-center min-h-screen">
        <div className="text-center px-4">
          <Card className="p-12 max-w-md mx-auto">
            <div className="text-6xl font-bold text-blue-600 mb-4">404</div>
            <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
            <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
            <div className="space-y-4">
              <Link href="/">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600">
                  Go Home
                </Button>
              </Link>
              <div className="flex gap-2">
                <Link href="/services/cctv" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    Our Services
                  </Button>
                </Link>
                <Link href="/#contact" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
