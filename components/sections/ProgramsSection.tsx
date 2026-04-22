"use client"

import { motion } from "framer-motion"
import { Star, Crown, Users } from "lucide-react"
import { FlagshipCard } from "./FlagshipCard"
import { MentorshipCard } from "./MentorshipCard"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion"
import { programs } from "@/data/programs"

export function ProgramsSection() {
  const flagship = programs.find((p) => p.tag === "Flagship")!
  const mentorship = programs.filter((p) => p.tag !== "Flagship")

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

  {/* NEW HEADING */}
  <h3 className="mt-10 text-2xl sm:text-2xl font-semibold tracking-wide text-gold uppercase">
    For All High School Students (Grade 9–12)
  </h3>
</FadeUp>

        {/* ── Flagship Program ── */}
        <FadeUp className="mb-6">
          <div className="flex items-center gap-2 mb-6">
            <Crown className="h-5 w-5 text-gold fill-gold/30" />
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">
              Flagship Program
            </span>
          </div>
          <FlagshipCard program={flagship} />
        </FadeUp>

        {/* ── Exclusive 1-on-1 Mentorship Programs ── */}
        <FadeUp className="mt-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-charcoal/20 to-transparent" />
            <div className="flex items-center gap-2 px-4">
              <Users className="h-5 w-5 text-navy" />
              <h3 className="font-serif text-2xl font-bold text-navy sm:text-3xl whitespace-nowrap">
                Increase the font of this and make it more attractive
              </h3>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-charcoal/20 to-transparent" />
          </div>

          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {mentorship.map((program) => (
              <StaggerItem key={program.slug}>
                <MentorshipCard program={program} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeUp>

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