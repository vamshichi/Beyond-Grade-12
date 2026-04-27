"use client"

import { motion } from "framer-motion"
import { FadeUp } from "@/components/motion"
import { Eye, Target } from "lucide-react"

export function VisionMissionSection() {
  return (
    <section className="bg-navy py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-ivory/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Main Quote */}
        <FadeUp className="text-center mb-16 lg:mb-20">
          <p className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-relaxed text-ivory">
            &ldquo;We are building a future where every high school student walks into adulthood with{" "}
            <span className="text-gold">clarity, confidence, and purpose</span> — not confusion, pressure, and regret.&rdquo;
          </p>
        </FadeUp>

        {/* Vision & Mission Container */}
        <FadeUp delay={0.2} className="mt-12 lg:mt-16">
  <div className="bg-transparent">
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

      {/* Vision Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center">
            <Eye className="w-6 h-6 text-navy" />
          </div>
          <span className="text-xs font-medium tracking-widest text-navy uppercase">
            Our Vision
          </span>
        </div>

        <h3 className="font-serif text-2xl font-bold text-navy mb-4">
          Clarity. Confidence. Purpose.
        </h3>

        <p className="text-charcoal/70 leading-relaxed">
          To create a future where high school students choose their careers and universities
          with clarity, confidence, and purpose — supported by professionals who have lived it.
        </p>
      </motion.div>

      {/* Mission Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
            <Target className="w-6 h-6 text-gold" />
          </div>
          <span className="text-xs font-medium tracking-widest text-gold uppercase">
            Our Mission
          </span>
        </div>

        <h3 className="font-serif text-2xl font-bold text-navy mb-4">
          Real Mentorship. Real Direction.
        </h3>

        <p className="text-charcoal/70 leading-relaxed">
          To guide students through early career exploration and earn university admissions
          aligned with their strengths, interests, and long-term goals — through real mentorship, not guesswork.
        </p>
      </motion.div>

    </div>
  </div>
</FadeUp>
      </div>
    </section>
  )
}
