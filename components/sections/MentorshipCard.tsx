"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Program } from "@/data/programs"

interface MentorshipCardProps {
  program: Program
}

const durationOverride: Record<string, string> = {
  "future-builder-program": "1 Year",
  "university-program": "6 Months",
}

const gradeTagMap: Record<string, string> = {
  "future-builder-program": "Uniquely Designed For (Grade 9–11)",
  "university-program": "Purely (Grade 12)",
}

export function MentorshipCard({ program }: MentorshipCardProps) {
  const duration = durationOverride[program.slug] ?? program.duration

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="h-full"
    >
      <Link href={`/programs/${program.slug}`}>
        <div className="group relative h-full overflow-hidden rounded-3xl bg-navy shadow-2xl border border-gold/20 flex flex-col">

          {/* Glow blobs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 40px)",
            }}
          />

          <div className="relative flex flex-col h-full px-8 py-10">

            {/* Tag */}
            {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-4 py-1.5 w-fit">
              <Sparkles className="h-3.5 w-3.5 text-gold fill-gold/60" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                1-on-1 Mentorship
              </span>
            </div> */}

            {/* Title */}
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory mb-4 group-hover:text-gold transition-colors duration-300">
              {program.title}
            </h3>

            {/* Description */}
            <p className="text-ivory/70 text-sm leading-relaxed mb-6">
              {program.description}
            </p>

            {/* Highlights */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                <span className="text-xs text-ivory/70">
                  Personalized mentorship roadmap
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                <span className="text-xs text-ivory/70">
                  Real-world project & expert guidance
                </span>
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-2 mb-8 p-3 rounded-xl bg-white/5 border border-gold/10 w-fit">
              <Clock className="h-4 w-4 text-gold" />
              <span className="text-sm font-semibold text-ivory">{duration}</span>
            </div>

            {/* ✅ ADD HERE */}
            <div className="mb-4">
              <div className="bg-[#1c3d4f] text-center py-2 px-3 rounded-lg border border-gold/20">
                <p className="text-xs text-ivory font-medium leading-snug">
                  {program.slug === "future-builder"
                    ? "Uniquely Designed For (Grade 9–11)"
                    : "Purely (Grade 12)"}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-auto">
              <motion.div whileHover={{ x: 4 }} whileTap={{ x: 2 }} className="inline-block">
                <Button className="bg-gold text-navy hover:bg-gold/90 rounded-full px-6 py-2 font-semibold gap-2 shadow-lg shadow-gold/20">
                  View Program <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>

          </div>
        </div>
      </Link>
    </motion.div>
  )
}