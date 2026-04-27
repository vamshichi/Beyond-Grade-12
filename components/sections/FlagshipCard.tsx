"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Program } from "@/data/programs"

interface FlagshipCardProps {
  program: Program
}

export function FlagshipCard({ program }: FlagshipCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Link href={`/programs/${program.slug}`}>
        <div className="group relative overflow-hidden rounded-3xl bg-navy shadow-2xl border border-gold/20">

          {/* Decorative background blobs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 40px)",
            }}
          />

          <div className="relative px-8 py-12 sm:px-12 sm:py-14 lg:flex lg:items-center lg:gap-12">

            {/* Left: copy */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-4 py-1.5 mb-6">
                <Sparkles className="h-3.5 w-3.5 text-gold fill-gold/60" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Flagship
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-ivory sm:text-4xl lg:text-5xl mb-4 group-hover:text-gold transition-colors duration-300">
                {program.title}
              </h3>

              <p className="text-ivory/70 text-lg leading-relaxed max-w-xl mb-8">
                {program.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-sm text-ivory/60">Duration</span>
                  <span className="text-sm font-semibold text-ivory ml-1">{program.duration}</span>
                </div>
                <div className="w-px h-4 bg-ivory/20" />
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-sm text-ivory/60">Format</span>
                  <span className="text-sm font-semibold text-ivory ml-1">Cohort Session</span>
                </div>
              </div>

              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ x: 2 }}
                className="inline-block"
              >
                <Button className="bg-gold text-navy hover:bg-gold/90 rounded-full px-8 py-3 font-semibold gap-2 shadow-lg shadow-gold/20">
                  Explore Program <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>

            {/* Right: decorative stat block */}
           {/* Right: grade info block */}
<div className="hidden lg:flex shrink-0">
  <div className="w-56 h-56 rounded-2xl border border-gold/20 bg-[#1c3d4f] flex items-center justify-center p-6 text-center">
    <p className="text-ivory text-sm font-medium leading-relaxed">
      All High School Students <br />
      <span className="text-gold">(Grade 9–12)</span>
    </p>
  </div>
</div>

          </div>
        </div>
      </Link>
    </motion.div>
  )
}