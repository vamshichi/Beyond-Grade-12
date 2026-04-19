"use client"

import { motion } from "framer-motion"
import { 
  FadeUp, 
  StaggerContainer, 
  StaggerItem,
  DrawLine 
} from "@/components/motion"
import { AlertCircle, HelpCircle, TrendingDown, Clock } from "lucide-react"

const problems = [
  {
    icon: HelpCircle,
    title: "Career Confusion",
    description: "Students feel lost about which career path to pursue, leading to years of uncertainty and wrong choices.",
    stat: "78%",
    statLabel: "of students feel confused"
  },
  {
    icon: AlertCircle,
    title: "Information Overload",
    description: "Too many options and conflicting advice make it impossible to make informed decisions about the future.",
    stat: "5+",
    statLabel: "sources of conflicting advice"
  },
  {
    icon: TrendingDown,
    title: "Missed Opportunities",
    description: "Without proper guidance, students miss scholarships, early admissions, and competitive advantages.",
    stat: "40%",
    statLabel: "miss key deadlines"
  },
  {
    icon: Clock,
    title: "Wasted Potential",
    description: "Brilliant students end up in careers that don't match their strengths, leading to lifelong dissatisfaction.",
    stat: "65%",
    statLabel: "feel unfulfilled later"
  }
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-32 bg-ivory overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <FadeUp>
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              The Challenge
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-4 font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl text-balance">
              We expect 16-year-olds to make life-changing decisions… without ever helping them understand what those
              <br />
              <span className="text-gold">choices really mean</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-6 text-lg text-charcoal/70 leading-relaxed">
              Despite having access to more information than ever, today&apos;s students face 
              unprecedented challenges in making informed career and education decisions.
            </p>
          </FadeUp>
        </div>

        {/* Problem Cards */}
        <div className="mt-16">
          <StaggerContainer 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" 
            staggerDelay={0.1}
          >
            {problems.map((problem, index) => (
              <StaggerItem key={problem.title}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full group"
                >
                  {/* Number */}
                  <div className="absolute top-4 right-4 font-serif text-6xl font-bold text-navy/5 group-hover:text-gold/20 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                    <problem.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-6">
                    {problem.description}
                  </p>
                  
                  {/* Stat */}
                  <div className="pt-4 border-t border-charcoal/10">
                    <div className="font-serif text-2xl font-bold text-gold">
                      {problem.stat}
                    </div>
                    <div className="text-xs text-charcoal/60">
                      {problem.statLabel}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom Statement */}
        <FadeUp delay={0.5} className="mt-16 text-center">
          <DrawLine className="w-24 h-px bg-gold mx-auto mb-8" />
          <p className="text-xl text-navy font-serif italic max-w-2xl mx-auto">
            1 in 3 students in Canada, either Drop OUT or Change their Program in the university!
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
