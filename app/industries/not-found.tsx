import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/navigation"

export default function IndustryNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20 flex items-center justify-center min-h-screen">
        <div className="text-center px-4">
          <Card className="p-12 max-w-md mx-auto">
            <div className="text-4xl mb-4">🏢</div>
            <h1 className="text-2xl font-bold mb-4">Industry Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The industry you're looking for doesn't exist. Check out the industries we serve below.
            </p>
            <div className="space-y-4">
              <Link href="/industries/commercial">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600">
                  Commercial Security
                </Button>
              </Link>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/industries/residential">
                  <Button variant="outline" className="w-full text-xs bg-transparent">
                    Residential
                  </Button>
                </Link>
                <Link href="/industries/industrial">
                  <Button variant="outline" className="w-full text-xs bg-transparent">
                    Industrial
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
