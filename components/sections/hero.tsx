"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Shield, TrendingUp, Users } from "lucide-react"

// Stagger helper
const stagger = (i: number) => ({ duration: 0.8, delay: 0.1 + i * 0.12, ease: cubicBezier(0.22, 1, 0.36, 1) })

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  const stats = [
    { icon: Users,      value: "5,000+", label: "Students Mentored" },
    { icon: TrendingUp, value: "92%",    label: "Dream-University Rate" },
    { icon: Shield,     value: "50+",    label: "Expert Mentors" },
  ]

  const badges = ["MIT", "Stanford", "Oxford", "IIT Delhi", "NUS", "LSE"]

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#0B1120] flex flex-col"
    >
      {/* ── Background ── */}
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/hero-students.jpg"
          alt="High-achieving students"
          fill
          priority
          className="object-cover object-center "
        />
        {/* left-to-right dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/10 to-transparent" />
        {/* bottom fade */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-[#0B1120]/60" /> */}
      </motion.div>

      {/* ── Ambient glows ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-0 w-[600px] h-[600px] rounded-full bg-[#C9A84C] blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-500 blur-[140px]"
        />
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{ opacity }}
        className="relative flex-1 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16 pt-36 pb-24 lg:pt-44 lg:pb-32"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">

          {/* LEFT ─────────────────────────────────── */}
          <div className="lg:w-[58%]">

            {/* Exclusivity badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={stagger(0)}
              className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A84C] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A84C]" />
              </span>
              <span className="text-[#C9A84C] text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Limited Cohort · Application Required
              </span>
            </motion.div>

            {/* ── HEADLINE ── */}
            <div className="space-y-2 mb-6">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={stagger(1)}
                className="text-white/50 text-sm sm:text-base font-medium uppercase tracking-[0.2em]"
              >
                India's Premier Career Mentorship
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={stagger(2)}
                className="font-serif leading-[1.05] tracking-tight"
              >
                {/* Line 1 */}
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold text-white">
                  Your Future
                </span>
                {/* Line 2 – gold accent */}
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold text-[#C9A84C]">
                  Deserves a Plan.
                </span>
                {/* Line 3 – slightly smaller, muted */}
                <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/60">
                  Not Guesswork.
                </span>
              </motion.h1>
            </div>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={stagger(3)}
              className="text-white/65 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
            >
              We pair high-school students with mentors from the world's top institutions —
              so you walk in with confusion and walk out with a <em>concrete roadmap</em>{" "}
              to the career and university that actually fits you.
            </motion.p>

            {/* ── CTAs ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={stagger(4)}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              {/* Primary – gold, large */}
              <Link href="/contact">
                <button className="group relative inline-flex items-center gap-3 bg-[#C9A84C] hover:bg-[#d4b35e] text-[#0B1120] font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-[0_0_40px_rgba(201,168,76,0.35)] hover:shadow-[0_0_60px_rgba(201,168,76,0.55)] transition-all duration-300">
                  Apply for Mentorship
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>

              {/* Secondary – ghost */}
              <Link href="/programs">
                <button className="inline-flex items-center gap-2 text-white/75 hover:text-white font-semibold text-base border border-white/20 hover:border-white/50 px-7 py-[14px] rounded-full transition-all duration-300 backdrop-blur-sm">
                  Explore Programs
                </button>
              </Link>
            </motion.div>

            {/* Admission logos strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={stagger(5)}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <span className="text-white/35 text-xs uppercase tracking-widest mr-1">Admits to</span>
              {badges.map((b) => (
                <span
                  key={b}
                  className="px-3 py-1 rounded-full bg-white/6 border border-white/10 text-white/60 text-xs font-medium"
                >
                  {b}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT – stat cards ────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex lg:w-[42%] flex-col gap-5 self-start mt-8 lg:mt-0"
          >
            {/* Big pull-quote card */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-8">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4 font-medium">
                Why students choose us
              </p>
              <blockquote className="font-serif text-2xl text-white leading-snug">
                "I went from having zero idea about my future to{" "}
                <span className="text-[#C9A84C]">getting into Stanford</span> — in one programme."
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] font-bold text-sm">
                  A
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Arjun S.</div>
                  <div className="text-white/40 text-xs">Class of 2024 · Stanford CS</div>
                </div>
              </div>
            </div>

            {/* Stat cards row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                  transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-5 flex flex-col items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/15 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-bold text-white">{value}</div>
                    <div className="text-white/45 text-xs leading-tight mt-0.5">{label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Urgency strip */}
            <div className="rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/25 px-5 py-3 flex items-center justify-between">
              <span className="text-[#C9A84C] text-sm font-semibold">Applications open — June 2025</span>
              <span className="text-white/40 text-xs">Only 30 seats</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-white/25 text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4 text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  )
}