"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Instagram } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white border-2 border-primary/20">
              <Image src="/mim-logo-new.png" alt="Muslims in Medicine Logo" fill className="object-contain p-1" />
            </div>
            <span className="font-bold text-xl text-foreground font-sans">Muslims in Medicine</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium font-sans"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/mim.rutgers/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-pink-600 text-white px-3 py-2 rounded-full hover:bg-pink-700 transition-colors duration-200 font-medium shadow-md"
            >
              <Instagram className="h-4 w-4" />
              <span className="font-sans">Follow Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-card-foreground hover:text-primary transition-colors duration-200 font-medium font-sans"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://www.instagram.com/mim.rutgers/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 mx-3 my-2 bg-pink-600 text-white px-3 py-2 rounded-full hover:bg-pink-700 transition-colors duration-200 font-medium shadow-md"
                onClick={() => setIsOpen(false)}
              >
                <Instagram className="h-4 w-4" />
                <span className="font-sans">Follow Us</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
