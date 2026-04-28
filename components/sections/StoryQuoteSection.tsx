"use client"

import { FadeUp } from "@/components/motion"

export function StoryQuoteSection() {
  return (
    <section className="bg-[#f4efe6] py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">

        {/* Quote */}
        <FadeUp>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-snug">
            “Education, in our home,
            <br />
            was never optional.
            <br />
            <span className="text-[#c9a84c] italic">It was identity.”</span>
          </h2>
        </FadeUp>

        {/* Divider */}
        <FadeUp delay={0.1}>
          <div className="mt-6 flex justify-center">
            <div className="h-[1px] w-12 bg-[#c9a84c]" />
          </div>
        </FadeUp>

        {/* Paragraph 1 */}
        <FadeUp delay={0.2}>
          <p className="mt-8 text-gray-700 leading-relaxed text-base sm:text-lg">
            The Syed family was not built in a boardroom. It was built around dinner tables where
            academic excellence was the standard — where curiosity was celebrated, where borders were
            meant to be crossed, and where the pursuit of knowledge was simply <span className="italic">what you did.</span>
          </p>
        </FadeUp>

        {/* Paragraph 2 */}
        <FadeUp delay={0.3}>
          <p className="mt-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            Between them, this family has led <span className="font-semibold">universities as Vice Chancellor</span>, earned{" "}
            <span className="font-semibold">Erasmus Mundus Scholarships</span> — with one member topping the global ranking
            list out of applicants worldwide — collectively secured over{" "}
            <span className="font-semibold">$500,000 in scholarships and research grants</span>, published over{" "}
            <span className="font-semibold">175 combined research papers</span>, and built careers across India, South Korea,
            Europe, Australia, the UAE, Malaysia, and Canada.
          </p>
        </FadeUp>

        {/* Closing line */}
        <FadeUp delay={0.4}>
          <p className="mt-10 italic text-gray-800 text-base sm:text-lg">
            Now, every ounce of that experience is dedicated to one purpose —
            <br />
            giving your student the clarity, the strategy, and the mentorship that changes everything.
          </p>
        </FadeUp>

      </div>
    </section>
  )
}