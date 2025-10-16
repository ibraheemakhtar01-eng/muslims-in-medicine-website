"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ExternalLink,
  BookOpen,
  Users,
  Stethoscope,
  GraduationCap,
  Calendar,
  FlaskConical,
  Heart,
  School,
  Microscope,
} from "lucide-react"
import { BackgroundPaths } from "@/components/ui/background-paths"

const rutgersResources = {
  classSchedules: [
    {
      title: "Pre-Med Track Schedule Template",
      description: "4-year course planning template for pre-medical students",
      link: "#",
    },
    {
      title: "Pre-Dental Track Schedule",
      description: "Optimized schedule for dental school prerequisites",
      link: "#",
    },
    {
      title: "Optometry Track Planning",
      description: "Course sequence for optometry school preparation",
      link: "#",
    },
  ],
  classesProfessors: [
    {
      title: "Biology Professors Guide",
      description: "Recommended instructors for General Biology I & II",
      link: "#",
    },
    {
      title: "Chemistry Faculty Reviews",
      description: "Best professors for General and Organic Chemistry",
      link: "#",
    },
    {
      title: "Physics Course Options",
      description: "Physics professors and course difficulty ratings",
      link: "#",
    },
  ],
  easySciences: [
    {
      title: "GPA Booster Science Courses",
      description: "List of manageable science electives for GPA improvement",
      link: "#",
    },
    {
      title: "Summer Science Options",
      description: "Easier science courses available during summer sessions",
      link: "#",
    },
  ],
}

const clinicalResources = {
  general: [
    {
      title: "General Clinical Resources Document",
      description: "Comprehensive guide to clinical opportunities and requirements",
      link: "#",
    },
  ],
  partnered: [
    {
      title: "Sehat Partnership",
      description: "Clinical opportunities through our Sehat partnership",
      link: "#",
    },
    {
      title: "Local Healthcare Partners",
      description: "Network of partnered healthcare organizations",
      link: "#",
    },
  ],
  generalClinical: [
    {
      title: "CPR Training Information",
      description: "Where and how to get CPR certified",
      link: "#",
    },
    {
      title: "Ashrafiyya Clinical Applications",
      description: "Application links and requirements for clinical programs",
      link: "#",
    },
  ],
  shadowing: [
    {
      title: "Physician Shadowing Directory",
      description: "List of doctors available for shadowing with contact information",
      link: "#",
    },
    {
      title: "Shadowing Guidelines",
      description: "How to approach and conduct professional shadowing",
      link: "#",
    },
  ],
  jobs: [
    {
      title: "Current Clinical Job Openings",
      description: "Available clinical positions and internships",
      link: "#",
    },
  ],
}

const researchOpportunities = [
  {
    title: "Rutgers Research Labs Directory",
    description: "Contact information for research labs accepting undergraduates",
    link: "#",
  },
  {
    title: "Research Application Guide",
    description: "Step-by-step guide to getting involved in research",
    link: "#",
  },
  {
    title: "Summer Research Programs",
    description: "External summer research opportunities and REUs",
    link: "#",
  },
]

const medSchoolResources = {
  mcat: [
    {
      title: "Free MCAT Prep Materials",
      description: "PDFs, practice tests, and study guides",
      link: "#",
    },
    {
      title: "MCAT YouTube Channels",
      description: "Curated list of helpful YouTube resources",
      link: "#",
    },
    {
      title: "Free Textbook Links",
      description: "Access to free MCAT preparation textbooks",
      link: "#",
    },
    {
      title: "MCAT Tutoring Contacts",
      description: "Affordable tutoring options from MiM alumni",
      link: "#",
    },
  ],
  applications: [
    {
      title: "Personal Statement Writing Guide",
      description: "Strategies and examples for compelling personal statements",
      link: "#",
    },
    {
      title: "Medical School Application Timeline",
      description: "Month-by-month application preparation guide",
      link: "#",
    },
    {
      title: "Interview Preparation Resources",
      description: "Tips and practice questions for medical school interviews",
      link: "#",
    },
  ],
}

const dentalSchoolResources = {
  dat: [
    {
      title: "DAT Prep Materials",
      description: "Study guides and practice tests for the Dental Admission Test",
      link: "#",
    },
    {
      title: "DAT Study Schedule Template",
      description: "Structured study plan for DAT preparation",
      link: "#",
    },
  ],
  applications: [
    {
      title: "Dental School Application Guide",
      description: "Specific tips and requirements for dental school applications",
      link: "#",
    },
    {
      title: "Dental Shadowing Opportunities",
      description: "Connect with dentists for shadowing experiences",
      link: "#",
    },
  ],
}

const islamicResources = {
  library: [
    {
      title: "Islamic Medical Ethics Library",
      description: "Books and articles on Islamic perspectives in healthcare",
      link: "#",
    },
    {
      title: "Health Ethics in Islam",
      description: "Scholarly resources on medical decision-making in Islam",
      link: "#",
    },
    {
      title: "Islamic Bioethics Journal",
      description: "Academic journal on Islamic bioethics and medical ethics",
      link: "#",
    },
  ],
  scholars: [
    {
      title: "Ask a Scholar Platform",
      description: "Connect with Islamic scholars for medical ethics questions",
      link: "#",
    },
    {
      title: "Muslim Physician Network",
      description: "Directory of Muslim doctors available for consultation",
      link: "#",
    },
    {
      title: "IMANA Resources",
      description: "Islamic Medical Association of North America resources",
      link: "https://www.imana.org",
    },
  ],
}

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("rutgers")

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-br from-white via-blue-50/30 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-sans">Resources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty font-serif">
              Comprehensive resources to support your journey in healthcare and medical education
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="rutgers" className="flex items-center gap-2">
                <School className="h-4 w-4" />
                <span className="hidden sm:inline">Rutgers</span>
              </TabsTrigger>
              <TabsTrigger value="clinical" className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4" />
                <span className="hidden sm:inline">Clinical</span>
              </TabsTrigger>
              <TabsTrigger value="research" className="flex items-center gap-2">
                <Microscope className="h-4 w-4" />
                <span className="hidden sm:inline">Research</span>
              </TabsTrigger>
              <TabsTrigger value="medschool" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span className="hidden sm:inline">Med School</span>
              </TabsTrigger>
              <TabsTrigger value="dental" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Dental</span>
              </TabsTrigger>
              <TabsTrigger value="islamic" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Islamic</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="rutgers" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Class Schedules
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {rutgersResources.classSchedules.map((item, index) => (
                      <div
                        key={index}
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
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Classes & Professors
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {rutgersResources.classesProfessors.map((item, index) => (
                      <div
                        key={index}
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
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FlaskConical className="h-5 w-5 text-primary" />
                      Easy Science Classes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {rutgersResources.easySciences.map((item, index) => (
                      <div
                        key={index}
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
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="clinical" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>General Clinical Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {clinicalResources.general.map((item, index) => (
                      <div
                        key={index}
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
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Partnered Organizations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {clinicalResources.partnered.map((item, index) => (
                      <div
                        key={index}
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
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Clinical Applications & Training</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {clinicalResources.generalClinical.map((item, index) => (
                      <div
                        key={index}
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
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Shadowing Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {clinicalResources.shadowing.map((item, index) => (
                      <div
                        key={index}
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
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Job Openings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {clinicalResources.jobs.map((item, index) => (
                    <div
                      key={index}
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
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Microscope className="h-5 w-5 text-primary" />
                    Research Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {researchOpportunities.map((item, index) => (
                    <div
                      key={index}
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
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="medschool" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>MCAT Preparation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {medSchoolResources.mcat.map((item, index) => (
                      <div
                        key={index}
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
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Medical School Applications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {medSchoolResources.applications.map((item, index) => (
                      <div
                        key={index}
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
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="dental" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>DAT Preparation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {dentalSchoolResources.dat.map((item, index) => (
                      <div
                        key={index}
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
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Dental School Applications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {dentalSchoolResources.applications.map((item, index) => (
                      <div
                        key={index}
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
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="islamic" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Islamic Medical Library</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {islamicResources.library.map((item, index) => (
                      <div
                        key={index}
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
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Scholars & Consultation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {islamicResources.scholars.map((item, index) => (
                      <div
                        key={index}
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
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="relative">
        <BackgroundPaths title="Explore Resources" />
      </section>
    </div>
  )
}
