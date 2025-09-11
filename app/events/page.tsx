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
  {
    id: "3",
    title: "MCAT Study Group",
    date: "October 8, 2024",
    time: "6:00 PM",
    location: "Library Study Room 301",
    description:
      "Weekly study group for MCAT preparation with peer tutoring, practice questions, and collaborative learning strategies.",
    category: "Study Group",
  },
  {
    id: "4",
    title: "Medical School Application Workshop",
    date: "October 15, 2024",
    time: "7:00 PM",
    location: "Student Center Room 202",
    description:
      "Get expert guidance on medical school applications, personal statements, and interview preparation from current medical students and admissions counselors.",
    category: "Workshop",
  },
  {
    id: "5",
    title: "Healthcare Professionals Networking Night",
    date: "October 22, 2024",
    time: "6:30 PM",
    location: "Busch Campus Center",
    description:
      "Meet and network with Muslim healthcare professionals from various specialties including cardiology, pediatrics, emergency medicine, and more.",
    category: "Networking",
  },
  {
    id: "6",
    title: "Community Health Fair Volunteer Opportunity",
    date: "November 5, 2024",
    time: "10:00 AM",
    location: "Rutgers Student Center",
    description:
      "Volunteer opportunity to provide health screenings and education to the local community while gaining valuable healthcare experience.",
    category: "Community Service",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-background to-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Events</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Join us for workshops, networking events, study groups, and community gatherings throughout the year
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
