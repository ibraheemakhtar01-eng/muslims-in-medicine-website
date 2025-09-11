import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { EventCard } from "@/components/event-card"
import { TeamCard } from "@/components/team-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Users, BookOpen, Instagram } from "lucide-react"
import Image from "next/image"

const upcomingEvents = [
  {
    id: "1",
    title: "General Body Meeting",
    date: "September 24, 2024",
    time: "7:30 PM",
    location: "Tillet Hall, Livingston Campus",
    description:
      "Join us for our first general body meeting of the semester. Learn about upcoming events, meet fellow members, and discover opportunities to get involved.",
    category: "Meeting",
  },
  {
    id: "2",
    title: "Heart of Care: What it Means to be a Muslim in Healthcare",
    date: "September 30, 2024",
    time: "7:00 PM",
    location: "Livingston Gathering Lounge",
    description:
      "A collaborative event with Ashrafiyya exploring the intersection of faith and healthcare. Hear from Muslim healthcare professionals about their experiences.",
    category: "Panel Discussion",
  },
]

const featuredMembers = [
  {
    name: "Zubaida Khan",
    role: "President",
    year: "Senior",
    major: "Biology",
    bio: "Leading Muslims in Medicine with passion for community building and supporting students in healthcare fields.",
    email: "muslimsinmedicine.rutgers@gmail.com",
    image: "/professional-woman-headshot.png",
  },
  {
    name: "Ahmed Youssef",
    role: "Vice President",
    year: "Junior",
    major: "Pre-Medicine",
    bio: "Dedicated to organizing academic workshops and mentorship programs for aspiring healthcare professionals.",
    email: "muslimsinmedicine.rutgers@gmail.com",
    image: "/professional-man-headshot.png",
  },
  {
    name: "Hoorain Fatima",
    role: "Vice President",
    year: "Junior",
    major: "Public Health",
    bio: "Focused on community outreach and creating meaningful connections within the Muslim healthcare community.",
    email: "muslimsinmedicine.rutgers@gmail.com",
    image: "/professional-woman-headshot.png",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* About Us section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-white border-4 border-primary/20 shadow-lg">
                <Image src="/mim-logo-new.png" alt="Muslims in Medicine Logo" fill className="object-contain p-2" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-sans">About Muslims in Medicine</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty font-serif">
              Established in 2024 at Rutgers University, Muslims in Medicine is dedicated to supporting Muslim students
              pursuing careers in healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2 font-sans">Our Mission</h3>
              <p className="text-muted-foreground text-pretty font-serif">
                To guide and support Muslim students in all healthcare fields including pre-med, dental, pharmacy, and
                other health-related disciplines.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2 font-sans">Community</h3>
              <p className="text-muted-foreground text-pretty font-serif">
                Building a strong network of Muslim healthcare professionals and students who support each other's
                academic and professional growth.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2 font-sans">Resources</h3>
              <p className="text-muted-foreground text-pretty font-serif">
                Providing mentorship, study groups, networking opportunities, and guidance for students navigating their
                healthcare journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-sans">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty font-serif">
              Join us for workshops, networking events, and community gatherings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Team Members */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-sans">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty font-serif">
              Dedicated students working to build a stronger community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/team">Meet Everyone</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white border-2 border-primary/20">
                  <Image src="/mim-logo-new.png" alt="Muslims in Medicine Logo" fill className="object-contain p-1" />
                </div>
                <span className="font-bold text-lg text-card-foreground font-sans">Muslims in Medicine</span>
              </div>
              <p className="text-muted-foreground text-pretty font-serif">
                Empowering Muslim students in healthcare through community, mentorship, and professional development at
                Rutgers University.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-4 font-sans">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/events"
                    className="text-muted-foreground hover:text-primary transition-colors font-serif"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors font-serif">
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-muted-foreground hover:text-primary transition-colors font-serif"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-primary transition-colors font-serif"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-4 font-sans">Contact Info</h3>
              <p className="text-muted-foreground mb-2 font-serif">Rutgers University</p>
              <p className="text-muted-foreground mb-2 font-serif">New Brunswick, NJ</p>
              <p className="text-muted-foreground mb-4 font-serif">muslimsinmedicine.rutgers@gmail.com</p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Instagram className="h-4 w-4 text-white" />
                </div>
                <a
                  href="https://www.instagram.com/mim.rutgers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-medium font-sans"
                >
                  @mim.rutgers
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground font-serif">
              © 2024 Muslims in Medicine at Rutgers University. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
