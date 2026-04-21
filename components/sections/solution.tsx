"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  FadeUp, 
  SlideInLeft, 
  SlideInRight,
  ImageReveal 
} from "@/components/motion"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"

const benefits = [
  "Personalized 1:1 mentorship with industry experts",
  "Clear career roadmap based on your unique strengths",
  "Strategic university application guidance",
  "Real-world exposure through industry sessions",
  "Ongoing support from discovery to admission"
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-32 bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/testimonial-bg.jpg')] opacity-5 bg-cover bg-center" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-ivory/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <SlideInLeft>
            <div className="relative">
              <ImageReveal className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-mission.jpg"
                  alt="Expert mentorship in action"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
              </ImageReveal>
              
              {/* Floating Badge */}
              {/* <div className="absolute -bottom-6 -right-6 bg-gold rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-navy" />
                  <div>
                    <div className="font-serif text-2xl font-bold text-navy">92%</div>
                    <div className="text-navy/70 text-sm">Success Rate</div>
                  </div>
                </div>
              </div> */}
            </div>
          </SlideInLeft>

          {/* Right - Content */}
          <SlideInRight>
            <div className="lg:pl-8">
              <span className="inline-flex items-center gap-2 text-gold text-sm font-medium tracking-widest uppercase">
                <span className="w-8 h-px bg-gold" />
                The Solution
              </span>
              
              <h2 className="mt-6 font-serif text-3xl font-bold text-ivory sm:text-4xl lg:text-5xl">
                Expert Guidance That 
                <span className="text-gold"> Transforms Futures</span>
              </h2>
              
              <p className="mt-6 text-lg text-ivory/80 leading-relaxed">
                Beyond Grade 12 bridges the gap between where you are and where you want to be. 
                Our expert mentors—alumni of top universities and professionals from leading 
                companies—provide the clarity and direction you need.
              </p>

              {/* Benefits List */}
              <div className="mt-10 space-y-4">
                {benefits.map((benefit, index) => (
                  <FadeUp key={benefit} delay={index * 0.1}>
                    <div className="flex items-start gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/30 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-ivory/90">{benefit}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>

              {/* CTA */}
              <FadeUp delay={0.5}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-gold text-navy hover:bg-gold/90 rounded-full"
                  >
                    <Link href="/programs">
                      Discover Our Approach
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline" 
                    className="border-ivory text-black hover:bg-ivory hover:text-navy rounded-full"
                  >
                    <Link href="/contact">Talk to Us</Link>
                  </Button>
                </div>
              </FadeUp>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}
