"use client"

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion"

export function FamilySection() {
  return (
    <section className="bg-navy py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <FadeUp className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory leading-tight">
            Meet the family that has
            <br />
            <span className="text-gold italic">lived every step of this journey.</span>
          </h2>

          <p className="mt-6 text-ivory/60 text-sm leading-relaxed">
            From top-ranked universities to global careers across medicine, research, and leadership —
            this is not theory. This is lived experience.
          </p>
        </FadeUp>

        {/* Featured Card */}
        <FadeUp delay={0.2}>
          <div className="mt-16 border border-gold/20 rounded-2xl p-8 lg:p-10 bg-ivory/5 backdrop-blur-sm">

            <div className="grid lg:grid-cols-2 gap-10">

              {/* Left */}
              <div>
                <span className="text-xs tracking-widest text-gold uppercase">
                  Founder
                </span>

                <h3 className="mt-3 font-serif text-2xl text-ivory">
                  Dr. Nabeel Ahmed Syed
                </h3>

                <p className="mt-4 text-ivory/60 text-sm leading-relaxed">
                  A globally trained doctor with academic and leadership experience across multiple
                  continents. Known for mentoring students into top universities and guiding them with
                  real, experience-backed strategies.
                </p>
              </div>

              {/* Right */}
              <div className="space-y-4 text-sm text-ivory/70">
                <div className="border border-ivory/10 rounded-lg p-4">
                  🎓 MBBS – International Medical Graduate
                </div>
                <div className="border border-ivory/10 rounded-lg p-4">
                  🌍 Experience across India, Europe & UAE
                </div>
                <div className="border border-ivory/10 rounded-lg p-4">
                  📊 Helped students secure top global rankings
                </div>
                <div className="border border-ivory/10 rounded-lg p-4">
                  💰 Scholarship wins & mentorship expertise
                </div>
              </div>

            </div>
          </div>
        </FadeUp>

        {/* Highlight Card */}
        <FadeUp delay={0.3}>
          <div className="mt-10 border border-gold/20 rounded-2xl p-8 bg-ivory/5 backdrop-blur-sm">
            <h3 className="font-serif text-xl text-ivory mb-4">
              Prof. Dr. Abdul Azeez Syed
            </h3>

            <p className="text-ivory/60 text-sm leading-relaxed">
              A senior academic leader who has served as Vice Chancellor and contributed extensively
              to global research and education systems.
            </p>

            <div className="mt-6 inline-block px-4 py-2 border border-gold text-gold text-xs tracking-wide rounded-lg">
              Leading institutions across continents
            </div>
          </div>
        </FadeUp>

        {/* Bottom Grid */}
        <StaggerContainer className="mt-12 grid md:grid-cols-3 gap-8" staggerDelay={0.1}>

          {[
            {
              name: "Dr. Rahman Syed",
              desc: "Medical professional with international exposure and research contributions.",
            },
            {
              name: "Dr. Sara Syed",
              desc: "Focused on patient care, global healthcare systems, and academic mentorship.",
            },
            {
              name: "Dr. Zoya Syed",
              desc: "Combines clinical excellence with mentorship for future medical aspirants.",
            },
          ].map((member) => (
            <StaggerItem key={member.name}>
              <div className="border border-ivory/10 rounded-xl p-6 bg-ivory/5 backdrop-blur-sm hover:border-gold/40 transition">
                <h4 className="font-serif text-lg text-ivory">
                  {member.name}
                </h4>

                <p className="mt-3 text-sm text-ivory/60 leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </StaggerItem>
          ))}

        </StaggerContainer>

      </div>
    </section>
  )
}