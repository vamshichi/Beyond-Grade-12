"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  FadeUp, 
  SlideInLeft, 
  SlideInRight,
  StaggerContainer,
  StaggerItem
} from "@/components/motion"
import { Check, Star, ArrowRight, Clock, Users, Calendar } from "lucide-react"

const features = [
  "Personalized career discovery and aptitude assessment",
  "1-on-1 mentorship with industry experts",
  "University shortlisting and application strategy",
  "Essay and SOP review by admissions experts",
  "Interview preparation and mock sessions",
  "Real-world exposure through internships",
  "Structured 12-week transformation framework",
  "Direct access to exclusive mentor network"
]

const highlights = [
  { label: "Program Duration", value: "12 Weeks", icon: Clock },
  { label: "Mentorship Sessions", value: "24+", icon: Calendar },
  { label: "Cohort Size", value: "Limited to 25", icon: Users }
]

export function FlagshipProgramSection() {
  return (
    <section id="program" className="bg-charcoal/5 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-gold fill-gold" />
            <span className="text-sm font-medium text-gold">Flagship Program</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            The Beyond Grade 12
            <span className="text-gold"> Elite Pathway</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            Our comprehensive 12-week transformation program designed to provide clarity, 
            build confidence, and give you the direction to achieve your dreams.
          </p>
        </FadeUp>

        {/* Program Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="grid lg:grid-cols-5">
            {/* Features List */}
            <SlideInLeft className="p-8 lg:col-span-3 lg:p-12">
              <h3 className="font-serif text-2xl font-bold text-navy mb-8">
                What&apos;s Included
              </h3>
              <StaggerContainer className="grid gap-4 sm:grid-cols-2" staggerDelay={0.05}>
                {features.map((feature) => (
                  <StaggerItem key={feature}>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy group-hover:bg-gold transition-colors">
                        <Check className="h-3.5 w-3.5 text-ivory" />
                      </div>
                      <span className="text-sm text-charcoal/80">{feature}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Trusted Universities */}
              <div className="mt-12 pt-8 border-t border-charcoal/10">
                <p className="text-sm text-charcoal/60 mb-4">Students admitted to:</p>
                <div className="flex flex-wrap gap-3">
                  {["MIT", "Stanford", "Harvard", "Oxford", "Cambridge", "IIT"].map((uni) => (
                    <span key={uni} className="px-4 py-2 bg-navy/5 text-navy text-sm rounded-full font-medium">
                      {uni}
                    </span>
                  ))}
                </div>
              </div>
            </SlideInLeft>

            {/* CTA Panel */}
            <SlideInRight className="flex flex-col justify-center bg-navy p-8 lg:col-span-2 lg:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
              
              <div className="relative">
                {/* Highlights */}
                <div className="mb-8 space-y-4">
                  {highlights.map((item) => (
                    <div key={item.label} className="flex items-center justify-between border-b border-ivory/10 pb-4 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-ivory/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-gold" />
                        </div>
                        <span className="text-sm text-ivory/70">{item.label}</span>
                      </div>
                      <span className="font-semibold text-gold">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Next Cohort Banner */}
                <motion.div 
                  animate={{ 
                    boxShadow: ["0 0 0 0 rgba(197, 164, 109, 0)", "0 0 0 8px rgba(197, 164, 109, 0.1)", "0 0 0 0 rgba(197, 164, 109, 0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="rounded-xl bg-gold/20 backdrop-blur-sm p-4 text-center mb-8"
                >
                  <span className="text-sm font-semibold text-gold">
                    Next Cohort Starting January 2026
                  </span>
                  <p className="mt-1 text-xs text-ivory/60">
                    Only 8 seats remaining
                  </p>
                </motion.div>

                {/* CTAs */}
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    asChild 
                    className="w-full bg-gold text-navy hover:bg-gold/90 rounded-full"
                  >
                    <Link href="/contact?type=apply">
                      Apply Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    asChild 
                    className="w-full border-ivory/30 text-black hover:bg-ivory hover:text-navy rounded-full"
                  >
                    <Link href="/contact">Book Free Consultation</Link>
                  </Button>
                </div>

                {/* Social Proof */}
                <div className="mt-8 flex items-center justify-center gap-3">
                  {/* <div className="flex -space-x-2">
                    {["/images/mentor-1.jpg", "/images/mentor-2.jpg", "/images/mentor-3.jpg"].map((src, i) => (
                      <Image
                        key={i}
                        src={src}
                        alt="Student"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border-2 border-navy object-cover"
                      />
                    ))}
                  </div> */}
                  <p className="text-xs text-ivory/60">
                    Join <span className="text-gold font-semibold">5000+</span> students
                  </p>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </div>
    </section>
  )
}
