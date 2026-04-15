"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star } from "lucide-react"

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-navy">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-students.jpg"
          alt="Students achieving their goals"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/50" />
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gold/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-ivory/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-8">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-ivory/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-navy bg-gold flex items-center justify-center">
                    <Star className="w-4 h-4 text-navy fill-navy" />
                  </div>
                ))}
              </div>
              <span className="text-ivory/90 text-sm font-medium">
                Trusted by 5000+ students
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl font-bold text-ivory sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="block">Where</span>
              <span className="block text-gold">Ambition</span>
              <span className="block">Meets Direction</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg text-ivory/80 leading-relaxed max-w-xl"
            >
              Premium, expert-led mentorship for high school students seeking clarity, 
              confidence, and a clear path to their dream careers and universities.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-gold text-navy hover:bg-gold/90 rounded-full px-8 text-base font-semibold group"
              >
                <Link href="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-ivory text-ivory hover:bg-ivory hover:text-navy rounded-full px-8 text-base"
              >
                <Link href="/programs" className="flex items-center gap-2">
                  <Play className="h-5 w-5 fill-current" />
                  Explore Programs
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {[
                { value: "5000+", label: "Students Mentored" },
                { value: "92%", label: "Success Rate" },
                { value: "50+", label: "Expert Mentors" }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-3xl font-bold text-gold lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-ivory/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2 hidden lg:block"
          >
            <div className="relative h-[500px]">
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl w-64 z-10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <Star className="w-5 h-5 text-gold" />
                  </div>
                  <div className="font-semibold text-navy">Top University Admits</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["MIT", "Stanford", "Oxford", "IIT"].map((uni) => (
                    <span key={uni} className="px-3 py-1 bg-navy/10 text-navy text-xs rounded-full">
                      {uni}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 right-0 bg-gold rounded-2xl p-6 shadow-2xl w-56 z-10"
              >
                <div className="text-navy font-semibold mb-2">Student Success</div>
                <div className="text-4xl font-serif font-bold text-navy">92%</div>
                <div className="text-navy/70 text-sm mt-1">achieved their dream university</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["/images/mentor-1.jpg", "/images/mentor-2.jpg", "/images/mentor-3.jpg"].map((src, i) => (
                      <Image
                        key={i}
                        src={src}
                        alt="Mentor"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">Expert Mentors</div>
                    <div className="text-xs text-charcoal/60">From top institutions</div>
                  </div>
                </div>
              </motion.div>

              {/* Center Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-gold/30">
                  <Image
                    src="/images/student-success.jpg"
                    alt="Student success"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-ivory/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
