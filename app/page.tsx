import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Instagram, Mail, MessageSquare, HelpCircle, Stethoscope, Activity, Microscope } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navbar />
      <HeroSection />

      {/* About Us section - More thorough */}
      <section className="py-20 bg-gradient-to-r from-muted/20 via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex justify-center mb-8">
              <div className="relative w-28 h-28 rounded-full overflow-hidden bg-white border-4 border-primary/30 shadow-2xl">
                <Image src="/mim-logo-new.png" alt="Muslims in Medicine Logo" fill className="object-contain p-2" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans">About Muslims in Medicine</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground font-serif leading-relaxed">
              <p className="text-pretty">
                Muslims in Medicine (MiM) at Rutgers University is a vibrant student organization founded in 2024 with a
                clear mission: to support and empower Muslim students pursuing careers in healthcare. We create a
                supportive community that bridges faith and professional aspirations.
              </p>
              <p className="text-pretty">
                Our organization welcomes students from all healthcare disciplines, including pre-medicine, dentistry,
                pharmacy, nursing, public health, and any health-related field. Through mentorship programs,
                professional development workshops, and networking events, MiM provides the resources necessary for
                academic success and career advancement while maintaining Islamic values.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2 font-sans">Medical Excellence</h3>
              <p className="text-muted-foreground text-pretty font-serif text-sm">
                Supporting pre-med students with MCAT prep, application guidance, and clinical experience opportunities.
              </p>
            </div>

            <div className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2 font-sans">Healthcare Diversity</h3>
              <p className="text-muted-foreground text-pretty font-serif text-sm">
                Embracing all healthcare fields including dentistry, pharmacy, nursing, and public health.
              </p>
            </div>

            <div className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2 font-sans">Community Impact</h3>
              <p className="text-muted-foreground text-pretty font-serif text-sm">
                Organizing health fairs and community service to give back while gaining valuable experience.
              </p>
            </div>

            <div className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2 font-sans">Research & Innovation</h3>
              <p className="text-muted-foreground text-pretty font-serif text-sm">
                Connecting students with research opportunities and encouraging innovation in healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans">Questions & Feedback</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty font-serif">
              Have questions about our club, suggestions for events, or ideas for website improvements? We'd love to
              hear from you!
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-8 shadow-xl animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-card-foreground font-sans mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3 text-muted-foreground font-serif">
                  <p className="text-pretty">• What healthcare fields does MiM support?</p>
                  <p className="text-pretty">• How can I get involved in club activities?</p>
                  <p className="text-pretty">• Are there mentorship opportunities available?</p>
                  <p className="text-pretty">• What events do you host throughout the year?</p>
                  <p className="text-pretty">• How can I connect with Muslim healthcare professionals?</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-card-foreground font-sans mb-4">Share Your Thoughts</h3>
                <div className="space-y-3 text-muted-foreground font-serif">
                  <p className="text-pretty">• Suggest new events or workshops</p>
                  <p className="text-pretty">• Request website features or improvements</p>
                  <p className="text-pretty">• Share feedback about club activities</p>
                  <p className="text-pretty">• Ask questions about healthcare careers</p>
                  <p className="text-pretty">• Connect with our leadership team</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <span className="text-lg font-semibold text-card-foreground font-sans">Get in Touch</span>
              </div>
              <p className="text-muted-foreground mb-6 font-serif">
                Send us your questions, suggestions, or feedback and we'll get back to you soon!
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
                <a href="mailto:muslimsinmedicine.rutgers@gmail.com?subject=Question/Feedback for MiM">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Send Us Your Questions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-card/80 to-muted/40 backdrop-blur-sm border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white border-2 border-primary/30 shadow-lg">
                  <Image src="/mim-logo-new.png" alt="Muslims in Medicine Logo" fill className="object-contain p-1" />
                </div>
                <span className="font-semibold text-lg text-card-foreground font-sans">Muslims in Medicine</span>
              </div>
              <p className="text-muted-foreground text-pretty font-serif leading-relaxed text-sm">
                Empowering Muslim students in healthcare through community, mentorship, and professional development at
                Rutgers University.
              </p>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <h3 className="font-semibold text-card-foreground mb-4 font-sans text-base">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/events"
                    className="text-muted-foreground hover:text-primary transition-colors font-serif text-sm"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-muted-foreground hover:text-primary transition-colors font-serif text-sm"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-muted-foreground hover:text-primary transition-colors font-serif text-sm"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-primary transition-colors font-serif text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in-up animate-delay-400">
              <h3 className="font-semibold text-card-foreground mb-4 font-sans text-base">Contact Info</h3>
              <p className="text-muted-foreground mb-1 font-serif text-sm">Rutgers University</p>
              <p className="text-muted-foreground mb-1 font-serif text-sm">New Brunswick, NJ</p>
              <p className="text-muted-foreground mb-4 font-serif text-sm">muslimsinmedicine.rutgers@gmail.com</p>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                  <Instagram className="h-4 w-4 text-white" />
                </div>
                <a
                  href="https://www.instagram.com/mim.rutgers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-medium font-sans text-sm"
                >
                  @mim.rutgers
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center">
            <p className="text-muted-foreground font-serif text-xs">
              © 2025 Muslims in Medicine at Rutgers University. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
