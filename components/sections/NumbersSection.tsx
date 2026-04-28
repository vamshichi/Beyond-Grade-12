"use client"

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion"

export function NumbersSection() {
  return (
    <section className="bg-[#f4efe6] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">

        {/* Top Label */}
        <FadeUp>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-[#c9a84c]" />
            <span className="text-xs tracking-widest text-[#c9a84c] uppercase">
              The Numbers Speak
            </span>
            <div className="w-10 h-[1px] bg-[#c9a84c]" />
          </div>
        </FadeUp>

        {/* Heading */}
        <FadeUp delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
            A family whose credentials
            <br />
            <span className="text-[#c9a84c] italic">
              are impossible to ignore.
            </span>
          </h2>
        </FadeUp>

        {/* Stats */}
        <StaggerContainer
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          staggerDelay={0.1}
        >
          {[
            {
              value: "$500K+",
              desc: "in scholarships and research grants won collectively by this family — they teach exactly what they have lived",
            },
            {
              value: "3,174+",
              desc: "citations of Dr. Akheel’s work alone — including over 30 by Nobel laureates across four decades",
            },
            {
              value: "175+",
              desc: "combined research publications across the board — in the world’s most respected indexed journals",
            },
            {
              value: "2",
              desc: "Erasmus Mundus Scholars on the same team — one topped the global ranking. Both in the same family.",
            },
          ].map((item, index) => (
            <StaggerItem key={index}>
              <div className="text-left">

                {/* Small gold line */}
                <div className="w-6 h-[2px] bg-[#c9a84c] mb-6" />

                {/* Number */}
                <h3 className="font-serif text-2xl sm:text-3xl text-gray-900">
                  {item.value}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}