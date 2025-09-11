import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, BookOpen } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Muslims in Medicine
            <span className="block text-primary">at Rutgers University</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Empowering Muslim students in healthcare through community, mentorship, and professional development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/events">
                Join Our Events <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Community</h3>
            <p className="text-muted-foreground text-pretty">
              Building a supportive network of Muslim healthcare professionals and students
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Mentorship</h3>
            <p className="text-muted-foreground text-pretty">
              Connecting students with experienced professionals for guidance and support
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Education</h3>
            <p className="text-muted-foreground text-pretty">
              Providing resources and opportunities for academic and professional growth
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
