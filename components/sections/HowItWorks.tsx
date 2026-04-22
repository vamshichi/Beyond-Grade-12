"use client"

import { motion } from "framer-motion"
import { Search, MessageCircle, Compass, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Explore",
    description:
      "Discover diverse, high-growth career fields through engaging sessions.",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Engage",
    description:
      "Interact with real professionals, ask anything, and hear unfiltered stories.",
  },
  {
    icon: Compass,
    number: "03",
    title: "Clarify",
    description:
      "Uncover strengths, interests, and the careers that truly align with who they are.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Plan",
    description:
      "Walk away with a personalized roadmap and clear next steps.",
  },
]

export function HowItWorks() {
  return (
    <section className="relative bg-[#F5F2EC] py-24 border-b border-gold/20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Title */}
        <div className="flex justify-center mb-20">
          <div className="px-6 py-3 rounded-full bg-navy text-ivory text-xs tracking-[0.25em] font-semibold border border-gold/30 shadow-lg">
            HOW IT WORKS: 4 SIMPLE STEPS
          </div>
        </div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid md:grid-cols-4 gap-12 relative"
        >
          {steps.map((step, i) => {
            const Icon = step.icon

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                className="relative text-center group"
              >
                {/* Arrow Connector */}
                {i !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-[-50px] text-gold/60 text-2xl group-hover:translate-x-1 transition">
                    →
                  </div>
                )}

                {/* Icon Circle */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-gold/40 bg-white flex items-center justify-center shadow-md group-hover:shadow-gold/30 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-gold" />
                </div>

                {/* Number */}
                <p className="text-sm text-gold font-semibold mb-2 tracking-wider">
                  {step.number}
                </p>

                {/* Title */}
                <h3 className="font-serif text-lg font-semibold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}