"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion"
import { GraduationCap, Users, Globe, Shield, Clock, Award, CheckCircle2 } from "lucide-react"

const differentiators = [
  {
    icon: GraduationCap,
    title: "Expert Mentors",
    description: "Learn from professionals who graduated from top universities and have excelled in their careers."
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description: "No two students are alike. Every roadmap is tailored to your unique strengths and goals."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Access guidance for universities worldwide — from Ivy League to top European and Asian institutions."
  },
  {
    icon: Shield,
    title: "Proven Framework",
    description: "Our structured methodology has helped hundreds of students achieve their dream admissions."
  },
  {
    icon: Clock,
    title: "Timely Guidance",
    description: "Start early, stay ahead. We ensure you never miss critical deadlines or opportunities."
  },
  {
    icon: Award,
    title: "Real Results",
    description: "92% of our students secure admission to their top 3 university choices."
  }
]

export function WhyChooseUsSection() {
  return (
    <section className="bg-navy py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <Image
          src="/images/testimonial-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-5"
        />
      </div>
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-ivory/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp className="mx-auto max-w-3xl text-center">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Why Us
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-ivory sm:text-4xl lg:text-5xl">
            Why Choose 
            <span className="text-gold"> Beyond Grade 12?</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ivory/70">
            We don&apos;t just guide — we transform. Here&apos;s what sets us apart 
            from generic counseling services.
          </p>
        </FadeUp>

        {/* Differentiators Grid */}
        <div className="mt-16 lg:mt-20">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {differentiators.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div 
                  whileHover={{ y: -8, borderColor: "rgba(197, 164, 109, 0.5)" }}
                  className="group h-full rounded-2xl border border-ivory/10 bg-ivory/5 backdrop-blur-sm p-8 transition-colors"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors"
                  >
                    <item.icon className="h-7 w-7" />
                  </motion.div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-ivory">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/60">
                    {item.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Trust Indicators */}
        <FadeUp delay={0.4} className="mt-20 lg:mt-28">
          <div className="bg-ivory/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-ivory/10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "IIT & IIM Alumni Network",
                "Ivy League Admissions Experts",
                "Industry Partnership Access",
                "24/7 Mentorship Support"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-sm text-ivory/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
