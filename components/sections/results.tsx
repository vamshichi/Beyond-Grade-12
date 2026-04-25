"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { 
  FadeUp, 
  StaggerContainer, 
  StaggerItem,
  AnimatedCounter
} from "@/components/motion"
import { TrendingUp, GraduationCap, Building, Award, ArrowRight } from "lucide-react"

const stats = [
  { value: 5000, suffix: "+", label: "Students Guided", icon: GraduationCap },
  { value: 92, suffix: "%", label: "Success Rate", icon: TrendingUp },
  { value: 150, suffix: "+", label: "Top Universities", icon: Building },
  { value: 50, suffix: "+", label: "Expert Mentors", icon: Award }
]

const transformations = [
  {
    before: "Confused about career options",
    after: "Clear vision and actionable plan",
    student: "Aisha M., Grade 12",
    university: "Stanford University",
    image: "/images/mentor-2.jpg"
  },
  {
    before: "Generic university applications",
    after: "Accepted to 3 Ivy League schools",
    student: "David L., Grade 12",
    university: "Harvard University",
    image: "/images/mentor-1.jpg"
  },
  {
    before: "No direction or mentorship",
    after: "Internship at top tech company",
    student: "Priya S., Grade 11",
    university: "MIT",
    image: "/images/mentor-2.jpg"
  }
]

const universities = [
  "MIT", "Stanford", "Harvard", "Yale", "Oxford", "Cambridge", 
  "Princeton", "Columbia", "IIT Bombay", "IIT Delhi"
]

export function ResultsSection() {
  return (
    <section className="bg-ivory py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp className="mx-auto max-w-3xl text-center">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Proven Results
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Real Transformations,
            <span className="text-gold"> Real Success</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            Our students don&apos;t just find direction — they achieve extraordinary outcomes 
            at the world&apos;s most prestigious institutions.
          </p>
        </FadeUp>

        {/* Stats Grid */}
        <div className="mt-16 lg:mt-20">
          <StaggerContainer className="grid grid-cols-2 gap-6 lg:grid-cols-4" staggerDelay={0.1}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="rounded-2xl bg-white p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 lg:p-8"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-ivory">
                    <stat.icon className="h-7 w-7" />
                  </div>
                  <div className="font-serif text-4xl font-bold text-navy lg:text-5xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
                  </div>
                  <p className="mt-2 text-sm text-charcoal/60">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Transformation Cards */}
        {/* <div className="mt-20 lg:mt-28">
          <FadeUp className="text-center mb-12">
            <h3 className="font-serif text-2xl font-bold text-navy">
              Before & After Transformations
            </h3>
          </FadeUp>
          
          <StaggerContainer className="grid gap-8 lg:grid-cols-3" staggerDelay={0.15}>
            {transformations.map((item) => (
              <StaggerItem key={item.student}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Before */}
                  {/* <div className="bg-charcoal/5 p-6 border-b border-charcoal/10">
                    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-charcoal/40 mb-2">
                      <span className="w-4 h-px bg-charcoal/40" />
                      Before
                    </span>
                    <p className="font-medium text-charcoal/60">{item.before}</p>
                  </div> */}
                  
                  {/* Arrow */}
                  {/* <div className="flex items-center justify-center bg-navy py-4">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-5 w-5 text-gold" />
                    </motion.div>
                  </div> */}
                  
                  {/* After */}
                  {/* <div className="bg-white p-6">
                    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gold mb-2">
                      <span className="w-4 h-px bg-gold" />
                      After
                    </span>
                    <p className="font-semibold text-navy text-lg">{item.after}</p>
                     */}
                    {/* Student Info */}
                    {/* <div className="mt-6 flex items-center gap-3 pt-4 border-t border-charcoal/10"> */}
                      {/* <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.student}
                          fill
                          className="object-cover"
                        />
                      </div> */}
                      {/* <div>
                        <p className="text-sm font-medium text-navy">{item.student}</p>
                        <p className="text-xs text-gold">{item.university}</p>
                      </div> */}
                    {/* </div> */}
                  {/* </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>  */}

        {/* University Logos Marquee */}
        {/* <FadeUp delay={0.3} className="mt-20 lg:mt-28">
          <p className="text-center text-sm text-charcoal/60 mb-8">
            Our students have been admitted to top universities worldwide
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-ivory to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-ivory to-transparent z-10" />
            
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 whitespace-nowrap"
            >
              {[...universities, ...universities].map((uni, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center px-8 py-4 bg-white rounded-xl shadow-sm"
                >
                  <span className="font-serif text-lg font-semibold text-navy">{uni}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </FadeUp> */}
      </div>
    </section>
  )
}
