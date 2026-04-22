import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, BookOpen, TrendingUp, Users, Quote, Search, MessageCircle, Compass, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { programs } from "@/data/programs"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion"
import { Header } from "@/components/header"
import { FieldsSlider } from "@/components/sections/fields-slider"

interface ProgramPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }))
}

export async function generateMetadata({ params }: ProgramPageProps) {
  const { slug } = await params
  const program = programs.find((p) => p.slug === slug)
  if (!program) return {}
  return {
    title: `${program.title} | Beyond Grade 12`,
    description: program.description,
  }
}

const DifferentiatorIcon = ({ type }: { type: string }) => {
  const cls = "w-5 h-5 text-ivory"
  if (type === "arrow") return <ArrowRight className={cls} />
  if (type === "trending") return <TrendingUp className={cls} />
  if (type === "book") return <BookOpen className={cls} />
  return <Users className={cls} />
}

const StepIcon = ({ type }: { type: string }) => {
  const cls = "w-6 h-6 text-gold"
  if (type === "search") return <Search className={cls} />
  if (type === "chat") return <MessageCircle className={cls} />
  if (type === "compass") return <Compass className={cls} />
  if (type === "rocket") return <Rocket className={cls} />
  return <ArrowRight className={cls} />
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params
  const program = programs.find((p) => p.slug === slug)
  if (!program) notFound()

  // Split description so the last word is highlighted in gold
  const descWords = program.description.trimEnd().replace(/\.$/, "").split(" ")
  const lastWord = descWords.pop()
  const leadWords = descWords.join(" ")

  return (
    <div className="min-h-screen ">
      <Header />

      {/* ── Hero ── */}
      <section
        className="relative bg-gray-950 pt-20 pb-24 lg:pt-32 lg:pb-36 overflow-hidden"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/85 via-gray-950/75 to-gray-900/80" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <FadeUp>
            {/* Tags row */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/40 px-4 py-2 backdrop-blur-sm hover:bg-gold/20 transition-colors duration-300">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gold/90">
                  {program.tag}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-ivory/10 border border-ivory/30 px-4 py-2 backdrop-blur-sm hover:bg-ivory/15 transition-colors duration-300">
                <span className="text-xs font-semibold text-ivory/80">{program.gradeRange}</span>
              </div>
            </div>

            {/* Headline — last word in gold */}
            <h1 className="font-serif text-5xl font-bold text-ivory leading-tight sm:text-4xl lg:text-4xl mb-10 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              {leadWords} <span className="text-gold drop-shadow-lg">{lastWord}</span>.
            </h1>

            <p className="text-lg leading-relaxed text-ivory/80 max-w-xl mb-12 font-light animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              {program.heroDescription}
            </p>

            <Button
              size="lg"
              asChild
              className="bg-gold text-gray-950 hover:bg-gold/90 rounded-full px-10 gap-2 font-semibold text-base shadow-2xl hover:shadow-gold/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400"
            >
              <Link href="/contact?type=apply">
                {program.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── Differentiators ── */}
      <section className="bg-gray-950 border-b border-gold/20 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <StaggerContainer className="flex flex-col sm:flex-row items-stretch gap-0">
            {program.differentiators.map((item, i) => (
              <div key={i} className="flex items-center flex-1 min-w-0">
                <StaggerItem className="flex-1 min-w-0">
                  <div className="bg-gradient-to-b from-[#1a2035] to-[#141829] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center h-full group hover:border-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-gold/10">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gray-700/50 border border-white/10 flex items-center justify-center mb-6 group-hover:border-gold/30 transition-colors duration-300">
                      <DifferentiatorIcon type={item.icon} />
                    </div>
                    {/* Title in gold */}
                    <h3 className="font-serif font-semibold text-gold text-base leading-snug mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ivory/65 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>

                {/* Gold circular arrow connector between cards */}
                {i < program.differentiators.length - 1 && (
                  <div className="hidden sm:flex shrink-0 items-center justify-center w-10 z-10 -mx-1">
                    <div className="w-9 h-9 rounded-full bg-[#c9a84c] flex items-center justify-center shadow-lg shadow-gold/30">
                      <ArrowRight className="w-4 h-4 text-gray-950" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── How It Works ── */}
      {program.howItWorks && program.howItWorks.length > 0 && (
        <section className="bg-[#f0e8d5] border-b border-[#c9a84c]/30 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">

            <FadeUp>
              {/* Header */}
              <div className="flex justify-center mb-16">
                <div className="inline-flex items-center rounded-full bg-[#1a2035] px-10 py-3 shadow-xl">
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-ivory/80">
                    How It Works: 4 Simple Steps
                  </span>
                </div>
              </div>
            </FadeUp>

            {/* Steps */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-x-10 relative">

              {program.howItWorks.map((step, i) => (
                <StaggerItem key={i}>

                  <div className="flex flex-col items-center text-center relative group">

                    {/* ICON */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full bg-[#141829] border-2 border-[#c9a84c]/50 flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:border-[#c9a84c]">
                        <StepIcon type={step.icon} />
                      </div>

                      {/* Step number floating */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#c9a84c] text-[#141829] text-xs font-bold flex items-center justify-center shadow-md">
                        {i + 1}
                      </div>
                    </div>

                    {/* TEXT */}
                    <h3 className="text-[#141829] text-lg font-bold font-serif mb-2">
                      {step.title}
                    </h3>

                    <p className="text-[#4a4030] text-sm leading-relaxed max-w-[220px]">
                      {step.description}
                    </p>

                    {/* Desktop Arrow */}
                    {i < program.howItWorks.length - 1 && (
                      <div className="hidden lg:flex absolute top-10 -right-8 items-center">
                        <div className="w-10 h-px bg-[#c9a84c]/40"></div>
                        <ArrowRight className="w-4 h-4 text-[#c9a84c]/70 ml-1" />
                      </div>
                    )}
                  </div>

                  {/* Mobile Arrow */}
                  {i < program.howItWorks.length - 1 && (
                    <div className="flex lg:hidden justify-center mt-6">
                      <div className="flex flex-col items-center">
                        <div className="w-px h-6 bg-[#c9a84c]/40"></div>
                        <ArrowRight className="w-4 h-4 text-[#c9a84c]/60 rotate-90" />
                      </div>
                    </div>
                  )}

                </StaggerItem>
              ))}

            </StaggerContainer>
          </div>
        </section>
      )}

      {/* ── Stats Strip ── */}
      <section className="bg-gray-950 border-b border-gold/20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 lg:py-20">
          <FadeUp>
            {/* "By The Numbers" label with flanking lines */}
            <div className="flex items-center gap-4 mb-14">
              <div className="h-px flex-1 bg-[#c9a84c]/30" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c9a84c]/60 whitespace-nowrap">
                By The Numbers
              </p>
              <div className="h-px flex-1 bg-[#c9a84c]/30" />
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 lg:grid-cols-4">
            {program.stats.map((stat, i) => (
              <FadeUp key={i}>
                <div
                  className={`px-6 lg:px-8 py-4 text-center group hover:bg-gold/5 transition-colors duration-300 ${i > 0 ? "border-l border-[#c9a84c]/20" : ""
                    }`}
                >
                  {/* Stat icon circle */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#1a2035] border border-[#c9a84c]/25 flex items-center justify-center group-hover:border-[#c9a84c]/50 transition-colors duration-300">
                      <StepIcon type={["person", "book", "chat", "compass"][i] ?? "compass"} />
                    </div>
                  </div>
                  <p className="font-serif text-3xl lg:text-4xl font-bold text-[#c9a84c] mb-2 tracking-tight group-hover:text-[#c9a84c]/80 transition-colors duration-300">
                    {stat.value}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-ivory/45 leading-relaxed font-light group-hover:text-ivory/65 transition-colors duration-300 max-w-[130px] mx-auto">
                    {stat.label}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>


      {/* ── Network Access ── */}
      {program.networkAccess && (
        <section className="bg-gray-950 border-b border-gold/20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 lg:py-20">

            <FadeUp>
              {/* Section Label (same style as stats) */}
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-[#c9a84c]/30" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c9a84c]/60 whitespace-nowrap">
                  Network Access
                </p>
                <div className="h-px flex-1 bg-[#c9a84c]/30" />
              </div>
            </FadeUp>

            <FadeUp>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left group">

                {/* ICON */}
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#1a2035] border border-[#c9a84c]/25 flex items-center justify-center transition-all duration-300 group-hover:border-[#c9a84c]/50">
                    <Users className="w-6 h-6 text-[#c9a84c]" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="max-w-2xl">
                  <h3 className="font-serif font-semibold text-ivory text-xl mb-3 tracking-tight transition-colors duration-300 group-hover:text-[#c9a84c]">
                    {program.networkAccess.title}
                  </h3>

                  <p className="text-ivory/60 leading-relaxed text-[15px] font-light transition-colors duration-300 group-hover:text-ivory/80">
                    {program.networkAccess.description}
                  </p>
                </div>

              </div>
            </FadeUp>

          </div>
        </section>
      )}



      {/* ── Fields Covered ── */}
      <section className="bg-white border-b border-[#c9a84c]/20 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 lg:py-20">

          <FadeUp>
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-[#c9a84c]/30" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c9a84c]/70 whitespace-nowrap">
                Focus Areas
              </p>
              <div className="h-px flex-1 bg-[#c9a84c]/30" />
            </div>
          </FadeUp>

          {/* Slider */}
          <FieldsSlider fields={program.fields} />

        </div>
      </section>

      {/* ── Quote ── */}
      <section className="bg-gray-950 border-b border-gold/20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 lg:py-28 text-center">

          <FadeUp>
            {/* Decorative top line */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-16 bg-[#c9a84c]/30" />
              <Quote className="w-6 h-6 text-[#c9a84c]/60" />
              <div className="h-px w-16 bg-[#c9a84c]/30" />
            </div>

            {/* Quote Text */}
            <p className="font-serif text-2xl lg:text-3xl leading-relaxed text-ivory/85 italic tracking-tight">
              {program.quote}
            </p>

            {/* Bottom Accent */}
            <div className="mt-10 flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ── Transformation ── */}
      <section className="bg-gray-950 border-b border-gold/20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20 lg:py-28">

          <FadeUp>
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px flex-1 bg-[#c9a84c]/30" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c9a84c]/60 whitespace-nowrap">
                Transformation
              </p>
              <div className="h-px flex-1 bg-[#c9a84c]/30" />
            </div>
          </FadeUp>

          <FadeUp>
            <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-10 md:gap-6 text-center md:text-left">

              {/* BEFORE */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#c9a84c]/60 mb-5">
                  Where They Are Now
                </p>

                <p className="text-ivory font-serif text-xl lg:text-2xl leading-relaxed">
                  {program.transformation.before}
                </p>
              </div>

              {/* CENTER ARROW */}
              <div className="flex justify-center">
                <div className="flex flex-col items-center gap-2">

                  {/* Line */}
                  <div className="hidden md:block w-px h-16 bg-[#c9a84c]/30" />

                  {/* Arrow Circle */}
                  <div className="w-12 h-12 rounded-full border border-[#c9a84c]/40 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-[#c9a84c]" />
                  </div>

                  {/* Line */}
                  <div className="hidden md:block w-px h-16 bg-[#c9a84c]/30" />

                </div>
              </div>

              {/* AFTER */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#c9a84c]/60 mb-5">
                  Where They Will Be
                </p>

                <p className="text-ivory font-serif text-xl lg:text-2xl leading-relaxed">
                  {program.transformation.after}
                </p>
              </div>

            </div>
          </FadeUp>

        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-navy text-ivory py-24 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl mb-8 tracking-tight">
              Ready to Transform Your Future?
            </h2>
            <p className="text-ivory/70 text-lg leading-relaxed mb-12 max-w-xl mx-auto font-light">
              Join students who have already started their journey with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gold text-navy hover:bg-gold/95 rounded-full px-10 gap-2 font-semibold text-base shadow-xl hover:shadow-2xl transition-all"
              >
                <Link href="/contact?type=apply">
                  {program.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-ivory/40 text-navy hover:bg-ivory/10 rounded-full px-10 font-semibold text-base transition-all"
              >
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}