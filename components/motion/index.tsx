"use client"

import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion"
import { useRef, type ReactNode } from "react"

// Fade up animation
export function FadeUp({ 
  children, 
  delay = 0,
  duration = 0.6,
  className = ""
}: { 
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Fade in animation
export function FadeIn({ 
  children, 
  delay = 0,
  duration = 0.6,
  className = ""
}: { 
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Slide in from left
export function SlideInLeft({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Slide in from right
export function SlideInRight({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Scale up animation
export function ScaleUp({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger children animation container
export function StaggerContainer({ 
  children,
  staggerDelay = 0.1,
  className = ""
}: { 
  children: ReactNode
  staggerDelay?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger item
export function StaggerItem({ 
  children,
  className = ""
}: { 
  children: ReactNode
  className?: string
}) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
    }
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

// Parallax scroll effect
export function ParallaxSection({ 
  children,
  offset = 50,
  className = ""
}: { 
  children: ReactNode
  offset?: number
  className?: string
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

// Text reveal animation
export function TextReveal({ 
  children,
  className = ""
}: { 
  children: string
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const words = children.split(" ")

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  return (
    <motion.span
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Hover card effect
export function HoverCard({ 
  children,
  className = ""
}: { 
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Magnetic button effect
export function MagneticButton({ 
  children,
  className = ""
}: { 
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = "translate(0, 0)"
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}

// Counter animation
export function AnimatedCounter({ 
  value,
  suffix = "",
  duration = 2,
  className = ""
}: { 
  value: number
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span ref={ref} className={className}>
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CounterNumber value={value} duration={duration} />
          {suffix}
        </motion.span>
      ) : (
        <span>0{suffix}</span>
      )}
    </span>
  )
}

function CounterNumber({ value, duration }: { value: number; duration: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        onAnimationStart={() => {
          if (!ref.current) return
          let start = 0
          const end = value
          const increment = end / (duration * 60)
          const timer = setInterval(() => {
            start += increment
            if (ref.current) {
              ref.current.textContent = Math.floor(start).toString()
            }
            if (start >= end) {
              clearInterval(timer)
              if (ref.current) {
                ref.current.textContent = end.toString()
              }
            }
          }, 1000 / 60)
        }}
      >
        0
      </motion.span>
    </motion.span>
  )
}

// Image reveal animation
export function ImageReveal({ 
  children,
  className = ""
}: { 
  children: ReactNode
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Line draw animation
export function DrawLine({ 
  className = ""
}: { 
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className={`origin-left ${className}`}
    />
  )
}
