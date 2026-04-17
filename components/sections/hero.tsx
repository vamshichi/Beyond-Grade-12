"use client"

import Image from "next/image"
import Link from "next/link"
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

// ─── Configuration ────────────────────────────────────────────────────────────

const SLIDES = [
  {
    src: "/images/hero (4).png",
    alt: "Students achieving goals",
    eyebrow: "Expert Mentorship",
    title: ["Shape Your", "Future"],
    highlight: 1, // which line gets the gradient
    description:
      "Get clarity and direction with expert mentorship tailored for ambitious students.",
    cta: { label: "Start Your Journey", href: "/contact" },
  },
  {
    src: "/images/hero (3).png",
    alt: "Mentorship session",
    eyebrow: "1-on-1 Guidance",
    title: ["Learn From", "Experts"],
    highlight: 1,
    description:
      "Connect with mentors who guide you step by step toward the success you deserve.",
    cta: { label: "Book a Session", href: "/contact" },
  },
  {
    src: "/images/hero (2).png",
    alt: "University campus",
    eyebrow: "University Admissions",
    title: ["Get Into", "Top Universities"],
    highlight: 1,
    description:
      "Build a compelling profile and secure admissions at the world's finest institutions.",
    cta: { label: "Apply Now", href: "/contact" },
  },
  {
    src: "/images/hero (1).png",
    alt: "Student success",
    eyebrow: "Proven Results",
    title: ["Turn Dreams", "Into Reality"],
    highlight: 1,
    description:
      "Join thousands of students who have already transformed their ambitions into achievements.",
    cta: { label: "See Success Stories", href: "/about" },
  },
] as const

const AUTOPLAY_MS = 5500
const IMG_DURATION = 1.4    // s — image crossfade
const TEXT_DURATION = 0.65  // s — text reveal

// ─── Variants ─────────────────────────────────────────────────────────────────

/** Background image: crossfade + Ken-Burns zoom */
const imageVariants = {
  enter: { opacity: 0, scale: 1.10 },
  active: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: IMG_DURATION, ease: [0.4, 0, 0.2, 1] as any },
      scale:   { duration: IMG_DURATION * 1.8, ease: [0.25, 0.46, 0.45, 0.94] as any },
    },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    transition: {
      opacity: { duration: IMG_DURATION * 0.7, ease: [0.4, 0, 1, 1] as any },
    },
  },
}

/** Soft vignette pulse on slide enter */
const vignetteVariants = {
  enter: { opacity: 0 },
  active: { opacity: 1, transition: { duration: IMG_DURATION * 0.8, ease: [0.4, 0, 0.2, 1] as any } },
  exit:   { opacity: 0, transition: { duration: 0.3 } },
}

/** Text block: staggered fade + lift */
const textBlockVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
  exit: { opacity: 0, transition: { duration: 0.3, ease: [0.4, 0, 1, 1] as any } },
}

const textItemVariants = {
  hidden:  { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: TEXT_DURATION, ease: [0.22, 1, 0.36, 1] as any },
  },
}

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Thin animated rule with a gold gleam */
function Divider() {
  return (
    <motion.div
      variants={textItemVariants}
      className="flex items-center justify-center gap-3 my-6"
    >
      <span className="block h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
      <span className="block w-1.5 h-1.5 rounded-full bg-gold/80" />
      <span className="block h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
    </motion.div>
  )
}

// ─── HeroSection ──────────────────────────────────────────────────────────────

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const intervalRef  = useRef<ReturnType<typeof setInterval> | null>(null)

  const [index,    setIndex]    = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // ── Scroll parallax ──────────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const bgY          = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const contentY     = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scrollOverlay  = useTransform(scrollYProgress, [0, 0.6], [0, 0.5])

  // ── Navigation helpers ───────────────────────────────────────────────────
  const goTo = useCallback(
    (i: number) => setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length),
    []
  )
  const next = useCallback(() => goTo(index + 1), [index, goTo])
  const prev = useCallback(() => goTo(index - 1), [index, goTo])

  // ── Autoplay ─────────────────────────────────────────────────────────────
  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length)
    }, AUTOPLAY_MS)
  }, [])

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!isPaused) startAutoplay()
    else stopAutoplay()
    return stopAutoplay
  }, [isPaused, startAutoplay, stopAutoplay])

  const handleManualNav = useCallback(
    (fn: () => void) => { fn(); if (!isPaused) startAutoplay() },
    [isPaused, startAutoplay]
  )

  // ─────────────────────────────────────────────────────────────────────────

  const slide = SLIDES[index]

  return (
    <section
      ref={containerRef}
      className="relative h-screen max-h-screen overflow-hidden bg-[#0B1120]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* ── Background Layer ─────────────────────────────────────────────── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 will-change-transform"
      >
        {/* Crossfading images */}
        <AnimatePresence mode="sync">
          <motion.div
            key={`img-${index}`}
            variants={imageVariants}
            initial="enter"
            animate="active"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Static gradient stack — dark left + dark bottom always present */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/55 via-[#0B1120]/30 to-[#0B1120]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent pointer-events-none" />

        {/* Vignette: soft animated per-slide pulse for depth */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`vignette-${index}`}
            variants={vignetteVariants}
            initial="enter"
            animate="active"
            exit="exit"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, #0B1120 100%)",
            }}
          />
        </AnimatePresence>

        {/* Scroll-reactive cinematic darkening */}
        <motion.div
          style={{ opacity: scrollOverlay }}
          className="absolute inset-0 bg-[#0B1120] pointer-events-none"
        />
      </motion.div>

      {/* ── Ambient Glows ────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.06, 0.13, 0.06] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[35%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, #C9A84C44 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, #C9A84C33 0%, transparent 70%)" }}
        />
      </div>

      {/* ── Centered Content ─────────────────────────────────────────────── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="
          relative z-10 h-full
          flex flex-col items-center justify-center
          px-6 sm:px-10
          text-center
        "
      >
        <div className="w-full max-w-2xl mx-auto">

          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${index}`}
              variants={textBlockVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >

              {/* Eyebrow — small caps label */}
              <motion.p
                variants={textItemVariants}
                className="
                  inline-flex items-center gap-2
                  text-xs tracking-[0.25em] font-medium uppercase
                  text-[#C9A84C]/80
                  mb-4
                "
              >
                <span className="block w-4 h-px bg-[#C9A84C]/50" />
                {slide.eyebrow}
                <span className="block w-4 h-px bg-[#C9A84C]/50" />
              </motion.p>

              {/* Heading */}
              <motion.h1
                variants={textItemVariants}
                className="
                  font-serif font-bold leading-[1.08]
                  text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
                  text-[#F5F0E8]
                "
              >
                {/* First line — plain */}
                <span className="block">{slide.title[0]}</span>

                {/* Second line — gold gradient highlight */}
                <span
                  className="block bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(95deg, #C9A84C 0%, #F0D080 45%, #C9A84C 100%)",
                  }}
                >
                  {slide.title[1]}
                </span>
              </motion.h1>

              {/* Ornamental divider */}
              <Divider />

              {/* Description */}
              <motion.p
                variants={textItemVariants}
                className="
                  text-base sm:text-lg
                  text-[#F5F0E8]/65
                  leading-relaxed
                  max-w-lg mx-auto
                "
              >
                {slide.description}
              </motion.p>

              {/* CTA */}
              <motion.div variants={textItemVariants} className="mt-9">
                <Link
                  href={slide.cta.href}
                  className="
                    group
                    inline-flex items-center gap-3
                    bg-[#C9A84C] hover:bg-[#D4B45A]
                    text-[#0B1120]
                    font-semibold text-sm tracking-wide
                    px-8 py-3.5
                    rounded-full
                    transition-all duration-300
                    shadow-[0_0_24px_#C9A84C30]
                    hover:shadow-[0_0_36px_#C9A84C50]
                    hover:scale-[1.03]
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-[#C9A84C]
                  "
                >
                  {slide.cta.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>

            </motion.div>
          </AnimatePresence>

        </div>
      </motion.div>

      {/* ── Slide Controls ────────────────────────────────────────────────── */}

      {/* Arrow Buttons */}
      <div className="absolute inset-y-0 left-4 right-4 z-20 hidden lg:flex items-center justify-between pointer-events-none">
        {[
          { fn: prev, Icon: ChevronLeft, label: "Previous slide" },
          { fn: next, Icon: ChevronRight, label: "Next slide"     },
        ].map(({ fn, Icon, label }) => (
          <motion.button
            key={label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => handleManualNav(fn)}
            aria-label={label}
            className="
              pointer-events-auto
              w-9 h-9 rounded-full
              border border-[#F5F0E8]/15
              bg-[#0B1120]/30 backdrop-blur-sm
              text-[#F5F0E8]/50 hover:text-[#F5F0E8]
              hover:border-[#C9A84C]/40 hover:bg-[#0B1120]/50
              flex items-center justify-center
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A84C]
            "
          >
            <Icon className="w-4 h-4" />
          </motion.button>
        ))}
      </div>

      {/* Dot + Progress Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2.5"
      >
        {/* Dots */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Slide navigation">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => handleManualNav(() => goTo(i))}
              className="relative focus-visible:outline-none"
            >
              <span
                className="block h-[3px] rounded-full overflow-hidden transition-all duration-300"
                style={{ width: i === index ? "28px" : "12px", background: "rgba(245,240,232,0.2)" }}
              >
                {i === index && (
                  <motion.span
                    key={`fill-${index}-${isPaused}`}
                    className="block h-full rounded-full origin-left"
                    style={{ background: "#C9A84C" }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isPaused ? 0 : 1 }}
                    transition={{
                      duration: isPaused ? 0 : AUTOPLAY_MS / 1000,
                      ease: "linear",
                    }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>

        {/* Slide counter */}
        <span className="font-mono text-[10px] tracking-[0.2em] text-[#F5F0E8]/30 select-none">
          {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </span>
      </motion.div>

      {/* Pause badge */}
      <AnimatePresence>
        {isPaused && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="
              absolute top-5 right-5 z-30
              px-2.5 py-1 rounded-full
              bg-[#0B1120]/50 backdrop-blur-sm
              border border-[#F5F0E8]/10
              text-[#F5F0E8]/35 text-[9px]
              font-mono tracking-[0.2em] select-none pointer-events-none
            "
          >
            PAUSED
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}