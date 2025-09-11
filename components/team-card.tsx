"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  year: string
  major: string
  bio: string
  email?: string
  linkedin?: string
  image: string
}

interface TeamCardProps {
  member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="relative h-80 w-full perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Front of card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden border-border hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6 flex flex-col items-center text-center h-full">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mb-4 flex items-center justify-center">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">{member.name}</h3>
            <Badge variant="secondary" className="mb-2">
              {member.role}
            </Badge>
            <p className="text-muted-foreground text-sm">{member.year}</p>
            <p className="text-muted-foreground text-sm">{member.major}</p>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 border-border bg-primary/5">
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">{member.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{member.bio}</p>
            </div>
            <div className="flex gap-2 mt-4">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                </a>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
