import { notFound } from "next/navigation"
import Link from "next/link"
import { Clock, Users, Calendar, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { programs } from "@/data/programs"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion"
import { Header } from "@/components/header"

interface ProgramPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }))
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

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params
  const program = programs.find((p) => p.slug === slug)

  if (!program) {
    notFound()
  }

  const highlights = [
    { label: "Program Duration", value: program.duration, icon: Clock },
    { label: "Mentorship Sessions", value: program.sessions, icon: Calendar },
    { label: "Cohort Size", value: program.cohortSize, icon: Users }
  ]

  return (
    <div className="min-h-screen bg-charcoal/2">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy/95 text-ivory py-24 lg:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.1),rgba(212,175,55,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <FadeUp className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-2 mb-6">
              <span className="text-sm font-medium text-gold">{program.tag}</span>
            </div>
            <h1 className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl mb-6 text-white">
              {program.title}
            </h1>
            <p className="text-lg leading-relaxed text-ivory mb-8">
              {program.fullDescription}
            </p>
            <Button 
              size="lg"
              asChild
              className="bg-gold text-navy hover:bg-gold/90 rounded-full"
            >
              <Link href="/contact?type=apply">{program.cta}</Link>
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((item) => (
              <FadeUp key={item.label}>
                <div className="p-6 rounded-2xl bg-charcoal/5 border border-charcoal/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-gold" />
                    </div>
                    <span className="text-sm text-charcoal/60">{item.label}</span>
                  </div>
                  <p className="text-2xl font-bold text-navy">{item.value}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-charcoal/2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-2xl mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              What&apos;s Included
            </h2>
            <p className="text-charcoal/70">
              Everything you need to succeed in this program.
            </p>
          </FadeUp>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {program.features.map((feature) => (
              <StaggerItem key={feature}>
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-charcoal/10 hover:shadow-lg transition-shadow">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy/10">
                    <Check className="h-4 w-4 text-navy" />
                  </div>
                  <span className="text-charcoal/80">{feature}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-2xl mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Where Our Students Go
            </h2>
            <p className="text-charcoal/70">
              Our alumni are now studying and working at top institutions worldwide.
            </p>
          </FadeUp>

          <div className="flex flex-wrap gap-4">
            {program.universities.map((uni) => (
              <div
                key={uni}
                className="px-6 py-3 bg-gold/10 text-navy font-semibold rounded-full border border-gold/20 hover:border-gold/50 transition-colors"
              >
                {uni}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy text-ivory py-20 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-lg text-ivory/80 mb-8">
              Join hundreds of students who have already started their journey with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gold text-navy hover:bg-gold/90 rounded-full"
              >
                <Link href="/contact?type=apply">{program.cta}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-ivory text-navy hover:bg-ivory hover:text-navy rounded-full"
              >
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
