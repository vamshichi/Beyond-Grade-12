"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion"
import { Linkedin, ArrowRight, GraduationCap } from "lucide-react"

const mentors = [
  {
    name: "Dr. Sarah Chen",
    role: "Career Strategy Lead",
    education: "Harvard MBA, Stanford BS",
    expertise: "Management Consulting, Tech Strategy",
    image: "/images/mentor-1.jpg"
  },
  {
    name: "Rajesh Kumar",
    role: "Admissions Expert",
    education: "MIT MS, IIT Delhi BTech",
    expertise: "University Applications, STEM Careers",
    image: "/images/mentor-2.jpg"
  },
  {
    name: "Emily Thompson",
    role: "Personal Development Coach",
    education: "Yale BA, Columbia MA",
    expertise: "Interview Prep, Communication",
    image: "/images/mentor-3.jpg"
  },
  {
    name: "Michael Rodriguez",
    role: "Industry Mentor",
    education: "Wharton MBA, Berkeley BS",
    expertise: "Finance, Entrepreneurship",
    image: "/images/mentor-2.jpg"
  }
]

export function MentorsSection() {
  return (
    <section id="mentors" className="bg-ivory py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp className="mx-auto max-w-3xl text-center">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Expert Team
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Learn From 
            <span className="text-gold"> The Best</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            Our mentors are graduates from top universities and leaders in their respective fields. 
            They&apos;ve walked the path — now they&apos;ll guide you.
          </p>
        </FadeUp>

        {/* Mentors Grid */}
        <div className="mt-16 lg:mt-20">
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {mentors.map((mentor) => (
              <StaggerItem key={mentor.name}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Mentor Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* LinkedIn Button */}
                    <motion.button 
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ scale: 1.1 }}
                      className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gold text-navy flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label={`Connect with ${mentor.name} on LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.button>
                  </div>
                  
                  {/* Mentor Info */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-navy">
                      {mentor.name}
                    </h3>
                    <p className="text-sm font-medium text-gold mt-1">{mentor.role}</p>
                    
                    <div className="mt-4 pt-4 border-t border-charcoal/10 space-y-2">
                      <div className="flex items-start gap-2">
                        <GraduationCap className="w-4 h-4 text-charcoal/40 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-charcoal/60">
                          {mentor.education}
                        </p>
                      </div>
                      <p className="text-xs text-charcoal/60">
                        <span className="font-medium text-charcoal/80">Expertise:</span> {mentor.expertise}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Mentor Network CTA */}
        <FadeUp delay={0.4} className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-charcoal/60">
              Plus access to our extended network of <span className="font-semibold text-navy">50+ industry professionals</span>
            </p>
            <Button asChild variant="outline" className="rounded-full border-navy text-navy hover:bg-navy hover:text-ivory">
              <Link href="/mentors">
                Meet All Mentors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
