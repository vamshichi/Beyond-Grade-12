"use client"

import { FadeUp } from "@/components/motion"

export function OurPromiseSection() {
  return (
    <section className="bg-navy py-24 lg:py-32 text-center">
      <div className="mx-auto max-w-4xl px-6">

        {/* Top Label */}
        <FadeUp>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-10 h-[1px] bg-gold" />
            <span className="text-xs tracking-widest text-gold uppercase">
              Our Promise
            </span>
            <div className="w-10 h-[1px] bg-gold" />
          </div>
        </FadeUp>

        {/* Main Heading */}
        <FadeUp delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-ivory leading-tight">
            We don’t just prepare students
            <br />
            for the future. We position them
            <br />
            to <span className="text-gold italic">own it.</span>
          </h2>
        </FadeUp>

        {/* Divider */}
        <FadeUp delay={0.2}>
          <div className="mt-8 flex justify-center">
            <div className="w-12 h-[1px] bg-gold" />
          </div>
        </FadeUp>

        {/* Description */}
        <FadeUp delay={0.3}>
          <p className="mt-8 text-ivory/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Beyond Grade 12 was built by a family that earned everything the hard way — through discipline,
            borders crossed, and decades of uncompromising excellence. That is the standard we hold for every
            student we work with. No exceptions.
          </p>
        </FadeUp>

        {/* Bottom Keywords */}
        <FadeUp delay={0.4}>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs tracking-widest text-gold uppercase">
            <span>Clarity</span>
            <span className="opacity-50">•</span>
            <span>Strategy</span>
            <span className="opacity-50">•</span>
            <span>Confidence</span>
            <span className="opacity-50">•</span>
            <span>Results</span>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}