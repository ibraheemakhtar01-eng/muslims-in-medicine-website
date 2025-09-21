import { Navbar } from "@/components/navbar"
import { EventCard } from "@/components/event-card"

const allEvents = [
  {
    id: "1",
    title: "General Body Meeting",
    date: "September 24, 2024",
    time: "7:30 PM",
    location: "Tillet Hall, Livingston Campus",
    description:
      "Join us for our first general body meeting of the semester. Learn about upcoming events, meet fellow members, and discover opportunities to get involved in Muslims in Medicine.",
    category: "Meeting",
  },
  {
    id: "2",
    title: "Heart of Care: What it Means to be a Muslim in Healthcare",
    date: "September 30, 2024",
    time: "7:00 PM",
    location: "Livingston Gathering Lounge",
    description:
      "A collaborative event with Ashrafiyya exploring the intersection of faith and healthcare. Hear from Muslim healthcare professionals about their experiences and insights.",
    category: "Panel Discussion",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-background via-muted/30 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-sans">Events</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty font-serif">
              Join us for meaningful discussions, networking opportunities, and community gatherings that strengthen our
              bonds as Muslim healthcare professionals
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {allEvents.map((event, index) => (
              <div key={event.id} className={`animate-fade-in-up ${index === 1 ? "animate-delay-200" : ""}`}>
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
