"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/blue-watercolor-bg.jpg"
            alt="Blue watercolor background"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-blue-50/40 to-white/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-[320px] h-[115px] sm:w-[450px] sm:h-[160px] md:w-[580px] md:h-[210px]">
              <Image
                src="/bismillah-calligraphy.png"
                alt="Bismillah ir-Rahman ir-Rahim"
                fill
                className="object-contain drop-shadow-sm"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-800 mb-16 tracking-wide"
            style={{ fontFamily: "var(--font-charm)" }}
          >
            Welcome to Muslims in Medicine
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 shadow-xl hover-lift font-sans font-semibold text-lg px-8 py-6 border border-gray-300"
            >
              <Link href="/events">Join Our Events</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 shadow-xl hover-lift font-sans font-semibold text-lg px-8 py-6 border border-gray-300"
            >
              <Link href="/team">Meet Our Team</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-10">
              <div className="relative w-36 h-36 rounded-full overflow-hidden bg-white border-4 border-primary/30 shadow-2xl">
                <Image src="/mim-logo-new.png" alt="Muslims in Medicine Logo" fill className="object-contain p-3" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-sans">Our Mission</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-serif text-pretty max-w-4xl mx-auto">
              Empowering Muslim students in healthcare through connections, professional growth, guidance and support.
              We create a vibrant community that bridges faith and professional aspirations, welcoming students from all
              healthcare disciplines including pre-medicine, dentistry, pharmacy, nursing, and public health.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
