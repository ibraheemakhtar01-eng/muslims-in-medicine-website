"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  year: string
  email: string
  bio: string
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
          </CardContent>
        </Card>

        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 border-border bg-primary/5">
          <CardContent className="p-6 flex flex-col justify-center items-center text-center h-full">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">{member.name}</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href={`mailto:${member.email}`}
                  className="text-primary hover:text-primary/80 transition-colors text-sm"
                >
                  {member.email}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
