"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { ProgramCard } from "./ProgramCard"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion"
import { programs } from "@/data/programs"

export function ProgramsSection() {
  return (
    <section id="programs" className="bg-charcoal/5 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-gold fill-gold" />
            <span className="text-sm font-medium text-gold">Our Programs</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Pathways to
            <span className="text-gold"> Success</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            Choose the program that fits your journey. Each program is designed with 
            expert mentorship and personalized guidance to help you achieve your goals.
          </p>
        </FadeUp>

        {/* Cards Grid */}
        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <StaggerItem key={program.slug}>
              <ProgramCard program={program} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeUp className="mt-16 text-center">
          <p className="text-charcoal/70 mb-4">
            Not sure which program is right for you?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-ivory hover:bg-navy/90 transition-colors font-medium"
          >
            Book a Free Consultation
          </motion.button>
        </FadeUp>
      </div>
    </section>
  )
}
