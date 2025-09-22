import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Users, Stethoscope, GraduationCap } from "lucide-react"

const resources = [
  {
    category: "Medical School Preparation",
    icon: GraduationCap,
    items: [
      {
        title: "AAMC Official Guide",
        description: "Comprehensive guide to medical school admissions process",
        link: "https://www.aamc.org/students/applying",
      },
      {
        title: "MCAT Prep Resources",
        description: "Free and paid resources for MCAT preparation",
        link: "https://www.aamc.org/students/applying/mcat",
      },
      {
        title: "Personal Statement Guide",
        description: "Tips and examples for writing compelling personal statements",
        link: "#",
      },
    ],
  },
  {
    category: "Islamic Resources in Healthcare",
    icon: BookOpen,
    items: [
      {
        title: "Islamic Medical Association of North America",
        description: "Professional organization for Muslim healthcare providers",
        link: "https://www.imana.org",
      },
      {
        title: "Bioethics in Islam",
        description: "Resources on Islamic perspectives in medical ethics",
        link: "#",
      },
      {
        title: "Prayer and Healthcare Guidelines",
        description: "Guidance for maintaining Islamic practices in healthcare settings",
        link: "#",
      },
    ],
  },
  {
    category: "Research Opportunities",
    icon: Stethoscope,
    items: [
      {
        title: "Rutgers Research Portal",
        description: "Find research opportunities at Rutgers University",
        link: "https://research.rutgers.edu",
      },
      {
        title: "NIH Summer Programs",
        description: "National Institutes of Health summer research programs",
        link: "https://www.training.nih.gov/programs/sip",
      },
      {
        title: "Local Hospital Volunteering",
        description: "Volunteer opportunities at nearby hospitals and clinics",
        link: "#",
      },
    ],
  },
  {
    category: "Professional Development",
    icon: Users,
    items: [
      {
        title: "Healthcare Leadership Programs",
        description: "Leadership development opportunities for healthcare students",
        link: "#",
      },
      {
        title: "Medical Conferences",
        description: "Upcoming medical conferences and symposiums",
        link: "#",
      },
      {
        title: "Networking Events",
        description: "Professional networking opportunities in healthcare",
        link: "#",
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-background via-muted/30 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-sans">Resources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty font-serif">
              Curated resources to support your journey in healthcare and medical education
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resources.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-card-foreground">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="font-semibold text-card-foreground mb-1">{item.title}</h4>
                              <p className="text-muted-foreground text-sm text-pretty">{item.description}</p>
                            </div>
                            <Button variant="ghost" size="sm" asChild className="ml-2">
                              <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
