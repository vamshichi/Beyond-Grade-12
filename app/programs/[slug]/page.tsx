import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, BookOpen, TrendingUp, Users, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { programs } from "@/data/programs"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion"
import { Header } from "@/components/header"

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
      <section className="py-20 lg:py-28  border-b border-gold/20 py-10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <StaggerContainer className="grid gap-6 sm:grid-cols-3">
            {program.differentiators.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gold/25 rounded-3xl p-9 h-full hover:border-gold/60 hover:from-gray-800 hover:via-gray-700 transition-all duration-300 group transform hover:scale-105 hover:shadow-2xl hover:shadow-gold/20">
                  <div className="w-12 h-12 rounded-2xl bg-gold/20 border border-gold/40 flex items-center justify-center mb-6 group-hover:bg-gold/30 group-hover:border-gold/60 transition-colors duration-300">
                    <DifferentiatorIcon type={item.icon} />
                  </div>
                  <h3 className="font-serif font-semibold text-ivory text-lg leading-snug mb-4 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ivory/65 leading-relaxed font-light group-hover:text-ivory/80 transition-colors duration-300">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>


{/* ── Stats Strip ── */}
<section className="bg-gray-950 border-b border-gold/20">
  <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 lg:py-24">
    <FadeUp>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/50 mb-12 text-center font-light">
        By The Numbers
      </p>
    </FadeUp>

    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gold/20">
      {program.stats.map((stat, i) => (
        <FadeUp key={i}>
          <div className="px-6 lg:px-10 py-6 text-center group hover:bg-gold/5 transition-colors duration-300 first:pl-0 last:pr-0">
            <p className="font-serif text-3xl lg:text-4xl font-bold text-gold mb-3 tracking-tight group-hover:text-gold/80 transition-colors duration-300">
              {stat.value}
            </p>
            <div className="w-8 h-px bg-gold/30 mx-auto mb-3 group-hover:w-12 group-hover:bg-gold/50 transition-all duration-300" />
            <p className="text-xs uppercase tracking-[0.15em] text-ivory/45 leading-relaxed font-light group-hover:text-ivory/65 transition-colors duration-300">
              {stat.label}
            </p>
          </div>
        </FadeUp>
      ))}
    </div>
  </div>
</section>

     

      {/* ── Network Access Card (optional — Future Builder only) ── */}
      {program.networkAccess && (
        <section className="pb-12  border-b border-gold/20 ">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <FadeUp>
              <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-10 lg:p-12 flex gap-8 items-start border border-gold/30 hover:border-gold/60 shadow-2xl hover:shadow-gold/20 transition-all duration-300 group hover:from-gray-800 hover:to-gray-700">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gold/25 border border-gold/50 flex items-center justify-center mt-1 group-hover:bg-gold/35 group-hover:border-gold/70 transition-colors duration-300">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-ivory text-xl mb-4 group-hover:text-gold transition-colors duration-300">
                    {program.networkAccess.title}
                  </h3>
                  <p className="text-ivory/70 leading-relaxed text-base font-light group-hover:text-ivory/90 transition-colors duration-300">
                    {program.networkAccess.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {/* ── Fields Covered ── */}
      <section className="pb-16 bg-gray-950 border-b border-gold/20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-10">
          <FadeUp>
            <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gold/25 p-10 hover:border-gold/50 transition-colors duration-300">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold/60 mb-8 font-light">
                Focus Areas
              </p>
              <div className="flex flex-wrap gap-3">
                {program.fields.map((field) => (
                  <span
                    key={field}
                    className="inline-flex items-center px-5 py-2.5 rounded-full bg-gold/20 border border-gold/40 hover:bg-gold/30 hover:border-gold/60 text-ivory text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-gold/20"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="pb-16 bg-gray-950 border-b border-gold/20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-10">
          <FadeUp>
            <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gold/30 p-12 lg:p-14 relative shadow-2xl hover:shadow-gold/20 hover:border-gold/60 transition-all duration-300">
              <Quote className="absolute top-8 left-8 w-8 h-8 text-gold/40 fill-gold/20" />
              <p className="text-ivory/80 leading-relaxed text-lg lg:text-xl pl-8 italic font-light">
                {program.quote}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Transformation Block ── */}
      <section className="pb-24 bg-gray-950 border-b border-gold/20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-10 ">
          <FadeUp>
            <div className="rounded-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden shadow-2xl border border-gold/25 hover:border-gold/50 transition-all duration-300">
              <div className="grid sm:grid-cols-[1fr_auto_1fr]">
                <div className="p-10 lg:p-14 hover:bg-gray-800/50 transition-colors duration-300">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold/70 mb-6 font-light">
                    Where They Are Now
                  </p>
                  <p className="text-ivory font-serif font-semibold text-xl leading-snug">
                    {program.transformation.before}
                  </p>
                </div>
                <div className="hidden sm:flex items-center justify-center px-6">
                  <div className="w-12 h-12 rounded-full bg-gold/30 border border-gold/50 flex items-center justify-center hover:bg-gold/40 transition-colors duration-300">
                    <ArrowRight className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <div className="p-10 lg:p-14 border-t border-gold/20 sm:border-t-0 sm:border-l sm:border-gold/20 bg-gradient-to-b from-gray-800/50 to-gray-900 hover:bg-gradient-to-b hover:from-gray-700/50 hover:to-gray-800 transition-colors duration-300">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold/70 mb-6 font-light">
                    Where They Will Be
                  </p>
                  <p className="text-ivory font-serif font-semibold text-xl leading-snug">
                    {program.transformation.after}
                  </p>
                </div>
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
