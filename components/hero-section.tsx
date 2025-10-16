"use client"

import { Button } from "@/components/ui/button"
import { Stethoscope, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Blue watercolor background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/blue-watercolor-bg.jpg"
            alt="Blue watercolor background"
            fill
            className="object-cover opacity-90"
            priority
          />
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-blue-100/30 to-blue-50/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Bismillah Calligraphy */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-[280px] h-[100px] sm:w-[400px] sm:h-[140px] md:w-[500px] md:h-[180px]">
              <Image
                src="/bismillah-calligraphy.png"
                alt="Bismillah ir-Rahman ir-Rahim"
                fill
                className="object-contain drop-shadow-sm"
                priority
              />
            </div>
          </motion.div>

          {/* Welcome text in Charm font */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-800 mb-16 tracking-wide"
            style={{ fontFamily: "var(--font-charm)" }}
          >
            Welcome to Muslims in Medicine
          </motion.h1>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-xl hover-lift font-sans font-semibold text-lg px-8 py-6"
            >
              <Link href="/events">Join Our Events</Link>
            </Button>
            <Button
              asChild
              variant="default"
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-xl hover-lift font-sans font-semibold text-lg px-8 py-6"
            >
              <Link href="/team">Meet Our Team</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card/95 backdrop-blur-sm p-10 rounded-2xl border-2 border-border text-center hover:shadow-2xl transition-all duration-500 hover-lift"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6 font-sans">Connections</h3>
              <p className="text-muted-foreground text-pretty font-serif leading-relaxed">
                Building meaningful relationships within the Muslim healthcare community, fostering lifelong
                professional networks and friendships that support your journey in medicine.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card/95 backdrop-blur-sm p-10 rounded-2xl border-2 border-border text-center hover:shadow-2xl transition-all duration-500 hover-lift"
            >
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Stethoscope className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6 font-sans">Guidance & Support</h3>
              <p className="text-muted-foreground text-pretty font-serif leading-relaxed">
                Providing mentorship from experienced Muslim healthcare professionals, academic support, and emotional
                guidance to help navigate the challenges of medical education and career development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card/95 backdrop-blur-sm p-10 rounded-2xl border-2 border-border text-center hover:shadow-2xl transition-all duration-500 hover-lift"
            >
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <TrendingUp className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6 font-sans">Professional Growth</h3>
              <p className="text-muted-foreground text-pretty font-serif leading-relaxed">
                Offering workshops, seminars, and resources focused on career advancement, skill development, and
                leadership opportunities in healthcare fields including medicine, dentistry, pharmacy, and public
                health.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
