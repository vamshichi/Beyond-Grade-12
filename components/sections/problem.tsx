"use client"

import { motion } from "framer-motion"
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion"

const truths = [
  {
    title: "Truth 01",
    heading: "You don’t lack ambition.",
    highlight: "You lack someone real enough to tell you the truth.",
    description:
      "The drive is there. The questions are there. What’s missing is someone willing to sit across from you and give you the unfiltered, uncomfortable, real truth about what a career actually looks like — not the brochure version.",
    quote:
      "Everyone around you is supportive. Almost nobody is being real with you.",
  },
  {
    title: "Truth 02",
    heading: "Everyone has an opinion about your future.",
    highlight: "Nobody has a roadmap.",
    description:
      "Parents, teachers, relatives — opinions come from every direction. But opinions without real-world experience are just noise. What you need is a clear, strategic plan built around who you actually are.",
    quote:
      "Advice is everywhere. A real roadmap is almost impossible to find.",
  },
  {
    title: "Truth 03",
    heading: "You were told to follow your passion —",
    highlight: "by people who never helped you find it.",
    description:
      "School counsellors are stretched thin. Being told to ‘follow your passion’ without helping you discover it is not guidance — it’s just placeholder advice.",
    quote:
      "400 students. 1 counsellor. 20 minutes a year.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-32 bg-ivory overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-5xl">
  <FadeUp>
    <span className="text-charcoal/40 text-sm tracking-widest uppercase">
      The Hard Truth
    </span>
  </FadeUp>

  <FadeUp delay={0.1}>
    <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-6xl font-semibold text-navy leading-tight">
      Twelve years of school.
      <br />
      Not one real conversation
      <br />
      about your{" "}
      <span className="text-gold">future career.</span>
    </h2>
  </FadeUp>

  <FadeUp delay={0.2}>
    <p className="mt-8 text-lg text-charcoal/70 max-w-3xl leading-relaxed">
      The most important decision of your life is being made with the least
      amount of real guidance.{" "}
      <span className="font-semibold text-navy">
        That’s not your fault.
      </span>{" "}
      But it is your reality — and it has a cost that most people only realise
      far too late.
    </p>
  </FadeUp>
</div>

        {/* Cards */}
        <div className="mt-16">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {truths.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition duration-300 border border-charcoal/10"
                >
                  {/* Title */}
                  <p className="text-xs text-charcoal/40 uppercase mb-4 tracking-wider">
                    {item.title}
                  </p>

                  {/* Heading */}
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {item.heading}
                  </h3>

                  {/* Highlight */}
                  <p className="text-gold font-medium mb-4">
                    {item.highlight}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-charcoal/70 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Quote */}
                  <div className="bg-ivory text-navy text-sm p-4 rounded-lg italic border border-charcoal/10">
                    “{item.quote}”
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  )
}