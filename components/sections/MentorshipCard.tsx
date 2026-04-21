"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Program } from "@/data/programs"

interface MentorshipCardProps {
  program: Program
}

const durationOverride: Record<string, string> = {
  "future-builder-program": "1 Year",
  "university-program": "6 Months",
}

export function MentorshipCard({ program }: MentorshipCardProps) {
  const duration = durationOverride[program.slug] ?? program.duration

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="h-full"
    >
      <Link href={`/programs/${program.slug}`}>
        <div className="group relative h-full overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 border border-charcoal/8 flex flex-col p-8">

          {/* Hover gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/4 to-gold/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="relative flex flex-col h-full">

            {/* Tag */}
            <div className="mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                1-on-1
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-200">
              {program.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-charcoal/70 leading-relaxed mb-8 flex-grow">
              {program.description}
            </p>

            {/* Duration pill */}
            <div className="flex items-center gap-2 mb-6 p-3 rounded-xl bg-navy/4 w-fit">
              <Clock className="h-4 w-4 text-navy/60" />
              <span className="text-sm font-semibold text-navy">{duration}</span>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-charcoal/10">
              <motion.div whileHover={{ x: 4 }} whileTap={{ x: 2 }} className="inline-block">
                <Button
                  size="sm"
                  className="bg-navy text-ivory hover:bg-navy/90 rounded-full gap-2 px-5"
                >
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