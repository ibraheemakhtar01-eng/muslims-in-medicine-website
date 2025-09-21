import { Button } from "@/components/ui/button"
import { ArrowRight, Stethoscope, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/40 to-secondary/8 py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primary/15 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/15 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-accent/15 blur-xl"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-primary/10 blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="flex justify-center mb-12 animate-scale-in">
            <div className="relative w-48 h-48 rounded-full overflow-hidden bg-white border-4 border-primary/30 shadow-2xl hover-lift ring-4 ring-primary/15 ring-offset-4 ring-offset-background">
              <Image src="/mim-logo-new.png" alt="Muslims in Medicine Logo" fill className="object-contain p-3" />
            </div>
          </div>

          <div className="animate-fade-in-up animate-delay-200">
            <h1 className="text-6xl md:text-8xl font-semibold text-transparent bg-gradient-to-r from-primary via-primary/95 to-primary/85 bg-clip-text mb-4 text-balance font-sans tracking-tight drop-shadow-lg">
              Muslims in Medicine
            </h1>
            <p className="text-2xl md:text-4xl text-secondary font-serif font-medium mb-2">at Rutgers University</p>
            <p className="text-lg md:text-xl text-secondary/90 mb-6 font-serif">Empowering Muslim students</p>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto text-pretty animate-fade-in-up animate-delay-400 font-serif text-opacity-90">
            Building community through healthcare excellence
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in-up animate-delay-600">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-xl hover-lift font-sans font-semibold"
            >
              <Link href="/events">
                Join Our Events <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="shadow-xl bg-card/80 backdrop-blur-sm hover-lift font-sans font-semibold"
            >
              <Link href="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card/90 backdrop-blur-sm p-10 rounded-2xl border border-border text-center hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up animate-delay-300 glass-effect">
            <div className="w-20 h-20 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-8">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-6 font-sans">Connections</h3>
            <p className="text-muted-foreground text-pretty font-serif leading-relaxed">
              Building meaningful relationships within the Muslim healthcare community, fostering lifelong professional
              networks and friendships that support your journey in medicine.
            </p>
          </div>
          <div className="bg-card/90 backdrop-blur-sm p-10 rounded-2xl border border-border text-center hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up animate-delay-500 glass-effect">
            <div className="w-20 h-20 bg-secondary/15 rounded-full flex items-center justify-center mx-auto mb-8">
              <Stethoscope className="h-10 w-10 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-6 font-sans">Guidance & Support</h3>
            <p className="text-muted-foreground text-pretty font-serif leading-relaxed">
              Providing mentorship from experienced Muslim healthcare professionals, academic support, and emotional
              guidance to help navigate the challenges of medical education and career development.
            </p>
          </div>
          <div className="bg-card/90 backdrop-blur-sm p-10 rounded-2xl border border-border text-center hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up animate-delay-700 glass-effect">
            <div className="w-20 h-20 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-8">
              <TrendingUp className="h-10 w-10 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-6 font-sans">Professional Growth</h3>
            <p className="text-muted-foreground text-pretty font-serif leading-relaxed">
              Offering workshops, seminars, and resources focused on career advancement, skill development, and
              leadership opportunities in healthcare fields including medicine, dentistry, pharmacy, and public health.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
