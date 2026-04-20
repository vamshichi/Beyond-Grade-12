"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Program } from "@/data/programs"

interface ProgramCardProps {
  program: Program
}

export function ProgramCard({ program }: ProgramCardProps) {
  const tagColors: Record<string, string> = {
    Flagship: "bg-blue-100 text-blue-700",
    "1-on-1": "bg-emerald-100 text-emerald-700",
    Advanced: "bg-amber-100 text-amber-700"
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="h-full"
    >
      <Link href={`/programs/${program.slug}`}>
        <div className="group relative h-full overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-charcoal/5 flex flex-col p-8">
          {/* Background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative flex flex-col h-full">
            {/* Tag */}
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${tagColors[program.tag] || "bg-navy/10 text-navy"}`}>
                {program.tag}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
              {program.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-charcoal/70 mb-6 flex-grow">
              {program.description}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-3 mb-6 py-4 border-t border-b border-charcoal/10">
              <div>
                <span className="text-xs text-charcoal/60 block mb-1">Duration</span>
                <span className="font-semibold text-navy">{program.duration}</span>
              </div>
              <div>
                <span className="text-xs text-charcoal/60 block mb-1">Sessions</span>
                <span className="font-semibold text-navy">{program.sessions}</span>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between pt-4">
              <div>
                <span className="text-xs text-charcoal/60 block mb-1">Starting at</span>
                <span className="text-2xl font-bold text-gold">{program.price}</span>
              </div>
              <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ x: 2 }}
              >
                <Button
                  size="sm"
                  className="bg-navy text-ivory hover:bg-navy/90 rounded-full gap-2"
                  asChild
                >
                  <span>View <ArrowRight className="w-4 h-4" /></span>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
