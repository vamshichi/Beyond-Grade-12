"use client"

import { motion } from "framer-motion"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion"
import { Cog, Cpu, Stethoscope, DollarSign, Scale, Globe } from "lucide-react"

const mentorCategories = [
  {
    icon: Cog,
    title: "Engineering",
    description: "Civil, mechanical, software engineers – problem-solving at scale and what the profession truly demands"
  },
  {
    icon: Cpu,
    title: "Technology & AI",
    description: "Software engineers, data scientists, AI specialists – the real frontier of tech careers, unfiltered"
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Doctors, nurses, therapists – the real journey behind the white coat, the hours, the rewards"
  },
  {
    icon: DollarSign,
    title: "Finance",
    description: "Financial analysts and investment professionals – what wealth management actually looks like day to day"
  },
  {
    icon: Scale,
    title: "Law",
    description: "The reality behind the courtroom – the years of training, the daily grind, and what makes it worth it"
  },
  {
    icon: Globe,
    title: "Public Service",
    description: "Police, civil service, community leadership – careers of purpose that students rarely explore"
  }
]

export function MentorsSection() {
  return (
    <section className="bg-navy py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-ivory/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-3xl font-bold text-gold sm:text-4xl lg:text-5xl">
            Our Mentors
          </h2>
        </FadeUp>

        {/* Mentors Grid */}
        <div>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {mentorCategories.map((category) => (
              <StaggerItem key={category.title}>
                <motion.div 
                  whileHover={{ y: -8, borderColor: "rgba(197, 164, 109, 0.4)" }}
                  className="group h-full rounded-2xl border border-ivory/10 bg-ivory/5 backdrop-blur-sm p-8 transition-colors"
                >
                  <motion.div 
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold group-hover:bg-gold/25 transition-colors"
                  >
                    <category.icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-ivory">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/60">
                    {category.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
