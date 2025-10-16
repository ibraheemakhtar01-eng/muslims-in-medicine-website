import { Navbar } from "@/components/navbar"
import { TeamCard } from "@/components/team-card"
import { BackgroundPaths } from "@/components/ui/background-paths"

const teamMembers = [
  {
    name: "Zubaida Khan",
    role: "President",
    year: "Class of 2026",
    email: "zk133@scarletmail.rutgers.edu",
    bio: "Leading Muslims in Medicine with passion for community building and supporting students in healthcare fields. Dedicated to creating opportunities for Muslim students to excel in medicine.",
    image: "/team/zubaida-khan.jpeg",
  },
  {
    name: "Ahmed Youssef",
    role: "Vice President",
    year: "Class of 2026",
    email: "ahy22@scarletmail.rutgers.edu",
    bio: "Dedicated to organizing academic workshops and mentorship programs for aspiring healthcare professionals. Focused on creating pathways to success in medical school.",
    image: "/team/ahmed-youssef.jpeg",
  },
  {
    name: "Hoorain Fatima",
    role: "Vice President",
    year: "Class of 2026",
    email: "hf237@scarletmail.rutgers.edu",
    bio: "Focused on community outreach and creating meaningful connections within the Muslim healthcare community. Passionate about health equity and community service.",
    image: "/team/hoorain-fatima.jpeg",
  },
  {
    name: "Ibraheem Akhtar",
    role: "Secretary",
    year: "Class of 2027",
    email: "ia363@scarletmail.rutgers.edu",
    bio: "Maintaining club records and communications. Passionate about mental health advocacy and pursuing psychiatry as a career path.",
    image: "/team/ibraheem-akhtar.jpeg",
  },
  {
    name: "Ayesha Siddiqui",
    role: "Treasurer",
    year: "Class of 2027",
    email: "as4311@scarletmail.rutgers.edu",
    bio: "Managing club finances and coordinating fundraising efforts. Interested in medical device development and healthcare technology innovation.",
    image: "/team/ayesha-siddiqui.jpeg",
  },
  {
    name: "Ammar Khan",
    role: "Events Chair",
    year: "Class of 2028",
    email: "atk95@scarletmail.rutgers.edu",
    bio: "Organizing engaging events and workshops for club members. Focused on sports medicine and creating networking opportunities with healthcare professionals.",
    image: "/team/ammar-khan.jpeg",
  },
  {
    name: "Samreen Ijaz",
    role: "Marketing Chair",
    year: "Class of 2027",
    email: "si331@scarletmail.rutgers.edu",
    bio: "Leading marketing initiatives and social media outreach. Dedicated to spreading awareness about Muslims in Medicine and building our community presence.",
    image: "/team/samreen-ijaz.jpeg",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-br from-white via-blue-50/30 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-sans">Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty font-serif">
              Meet the dedicated students working to build a stronger community and support Muslim students in
              healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <BackgroundPaths title="Meet Our Team" />
      </section>
    </div>
  )
}
