"use client"

import { motion } from "framer-motion"
import { FadeUp } from "@/components/motion"

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
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-ivory/10">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Vision */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <span className="text-gold text-xs font-medium tracking-widest uppercase">
                    Our Vision
                  </span>
                </div>
                <p className="text-lg leading-relaxed text-ivory/80">
                  To create a future where high school students choose their careers and universities with clarity, confidence, and purpose — supported by professionals who have lived it.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <span className="text-gold text-xs font-medium tracking-widest uppercase">
                    Our Mission
                  </span>
                </div>
                <p className="text-lg leading-relaxed text-ivory/80">
                  To guide students through early career exploration and earn university admissions aligned with their strengths, interests, and long-term goals — through real mentorship, not guesswork.
                </p>
              </motion.div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
