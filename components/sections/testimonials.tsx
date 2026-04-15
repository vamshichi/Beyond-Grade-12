"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FadeUp } from "@/components/motion"
import { ChevronLeft, ChevronRight, Quote, Star, ArrowRight } from "lucide-react"

const testimonials = [
  {
    quote: "Before Beyond Grade 12, I had no idea what I wanted to do with my life. The mentorship program helped me discover my passion for biomedical engineering, and I'm now at MIT pursuing my dreams.",
    name: "Arjun Patel",
    role: "MIT Class of 2027",
    university: "Massachusetts Institute of Technology",
    image: "/images/mentor-1.jpg",
    rating: 5
  },
  {
    quote: "The personalized attention I received was incredible. My mentor spent hours reviewing my essays and preparing me for interviews. I got accepted to all 5 universities I applied to.",
    name: "Sophia Williams",
    role: "Yale Class of 2026",
    university: "Yale University",
    image: "/images/mentor-2.jpg",
    rating: 5
  },
  {
    quote: "I was lost in a sea of options. Beyond Grade 12 helped me narrow down my choices and build a compelling profile. The strategic guidance made all the difference.",
    name: "Chen Wei",
    role: "Oxford Class of 2027",
    university: "University of Oxford",
    image: "/images/mentor-3.jpg",
    rating: 5
  },
  {
    quote: "The real-world exposure through internships arranged by the program was invaluable. It not only strengthened my application but gave me clarity about my career path.",
    name: "Priya Mehta",
    role: "Harvard Class of 2026",
    university: "Harvard University",
    image: "/images/mentor-2.jpg",
    rating: 5
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000)
    return () => clearInterval(timer)
  }, [])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  }

  return (
    <section id="testimonials" className="bg-navy py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/testimonial-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
        />
      </div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ivory/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp className="mx-auto max-w-3xl text-center">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Success Stories
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-ivory sm:text-4xl lg:text-5xl">
            Hear From Our Students
          </h2>
        </FadeUp>

        {/* Testimonial Carousel */}
        <div className="mt-16 lg:mt-20">
          <div className="relative mx-auto max-w-4xl">
            {/* Large Quote Icon */}
            <div className="absolute -top-8 left-0 lg:-left-8 z-0">
              <Quote className="h-24 w-24 text-gold/20" />
            </div>

            {/* Testimonial Content */}
            <div className="relative bg-ivory/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-ivory/10 min-h-[350px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-8 lg:inset-12"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-serif text-xl lg:text-2xl italic leading-relaxed text-ivory/90">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-ivory">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-gold">{testimonials[currentIndex].role}</p>
                      <p className="text-xs text-ivory/50">{testimonials[currentIndex].university}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-gold' 
                        : 'w-2 bg-ivory/30 hover:bg-ivory/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevTestimonial}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-gold hover:bg-gold hover:text-navy"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextTestimonial}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-gold hover:bg-gold hover:text-navy"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <FadeUp delay={0.3} className="mt-16 text-center">
          <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/90 rounded-full">
            <Link href="/testimonials">
              Read More Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </FadeUp>
      </div>
    </section>
  )
}
