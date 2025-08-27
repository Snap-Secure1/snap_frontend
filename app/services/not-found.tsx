import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/navigation"

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20 flex items-center justify-center min-h-screen">
        <div className="text-center px-4">
          <Card className="p-12 max-w-md mx-auto">
            <div className="text-4xl mb-4">🔧</div>
            <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The service you're looking for doesn't exist. Check out our available services below.
            </p>
            <div className="space-y-4">
              <Link href="/services/cctv">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600">
                  CCTV Installation
                </Button>
              </Link>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/services/networking">
                  <Button variant="outline" className="w-full text-xs bg-transparent">
                    Networking
                  </Button>
                </Link>
                <Link href="/services/biometric">
                  <Button variant="outline" className="w-full text-xs bg-transparent">
                    Biometric
                  </Button>
                </Link>
              </div>
              <Link href="/">
                <Button variant="ghost" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
