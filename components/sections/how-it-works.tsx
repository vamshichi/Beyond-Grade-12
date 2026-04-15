"use client"

import { motion } from "framer-motion"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion"
import { ClipboardCheck, Compass, Map, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Discovery & Assessment",
    description: "Begin with a comprehensive assessment of your interests, strengths, and aspirations. We understand who you are at your core.",
    duration: "Week 1-2",
    color: "from-gold/20 to-gold/5"
  },
  {
    number: "02",
    icon: Compass,
    title: "Career Exploration",
    description: "Explore curated career paths that align with your profile. Learn from professionals who excel in fields you're passionate about.",
    duration: "Week 3-5",
    color: "from-navy/20 to-navy/5"
  },
  {
    number: "03",
    icon: Map,
    title: "University Strategy",
    description: "Develop a strategic university shortlist. Craft compelling applications, essays, and prepare for interviews with expert guidance.",
    duration: "Week 6-9",
    color: "from-gold/20 to-gold/5"
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Beyond",
    description: "Submit confident applications. Continue with mentorship as you prepare for your next chapter with clarity and direction.",
    duration: "Week 10-12",
    color: "from-navy/20 to-navy/5"
  }
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp className="mx-auto max-w-3xl text-center">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            The Process
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Your 12-Week 
            <span className="text-gold"> Transformation</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            A proven 4-step framework that transforms uncertainty into a clear, 
            actionable roadmap for your future.
          </p>
        </FadeUp>

        {/* Steps - Timeline */}
        <div className="mt-16 lg:mt-24">
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block">
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full w-full bg-gradient-to-b from-gold via-navy to-gold origin-top"
              />
            </div>

            <StaggerContainer className="space-y-12 lg:space-y-0" staggerDelay={0.2}>
              {steps.map((step, index) => (
                <StaggerItem key={step.number}>
                  <div 
                    className={`relative lg:flex lg:items-center lg:gap-12 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } ${index > 0 ? 'lg:mt-16' : ''}`}
                  >
                    {/* Content */}
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className={`rounded-2xl border border-charcoal/10 bg-gradient-to-br ${step.color} p-6 lg:p-8 ${
                          index % 2 === 0 ? 'lg:ml-auto lg:mr-12' : 'lg:mr-auto lg:ml-12'
                        } lg:max-w-md relative overflow-hidden group`}
                      >
                        {/* Background number */}
                        <span className="absolute -right-4 -bottom-4 font-serif text-[120px] font-bold text-navy/5 leading-none group-hover:text-gold/10 transition-colors">
                          {step.number}
                        </span>
                        
                        <div className={`relative flex items-center gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                          <motion.div 
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy text-ivory"
                          >
                            <step.icon className="h-7 w-7" />
                          </motion.div>
                          <div>
                            <span className="text-sm font-medium text-gold">{step.duration}</span>
                            <h3 className="font-serif text-xl font-semibold text-navy">{step.title}</h3>
                          </div>
                        </div>
                        <p className={`relative mt-4 text-sm leading-relaxed text-charcoal/70 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                          {step.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Step Number - Center */}
                    <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block z-10">
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-navy font-serif text-lg font-bold text-gold shadow-lg"
                      >
                        {step.number}
                      </motion.div>
                    </div>

                    {/* Empty Space for Layout */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
