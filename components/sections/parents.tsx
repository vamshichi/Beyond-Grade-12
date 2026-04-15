import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Target, Users } from "lucide-react"

const parentBenefits = [
  {
    icon: Shield,
    title: "Peace of Mind",
    description: "Know your child is receiving expert guidance from verified professionals with proven track records."
  },
  {
    icon: Heart,
    title: "Your Child's Success",
    description: "We share your goal: seeing your child thrive and succeed in their academic and professional journey."
  },
  {
    icon: Target,
    title: "Clear Communication",
    description: "Regular progress updates and transparent communication keep you informed every step of the way."
  },
  {
    icon: Users,
    title: "Partner in the Journey",
    description: "We work with you, not around you. Your insights about your child help us guide them better."
  }
]

export function ParentsSection() {
  return (
    <section className="bg-navy py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-gold">
              For Parents
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-ivory sm:text-4xl lg:text-5xl">
              <span className="text-balance">We Understand Your Concerns</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ivory/70">
              As a parent, you want the best for your child. You&apos;ve invested in their education, 
              nurtured their talents, and now the stakes feel higher than ever. We&apos;re here to 
              partner with you in this crucial phase.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {parentBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ivory">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-ivory/60">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button 
                size="lg" 
                asChild 
                className="bg-gold text-navy hover:bg-gold/90"
              >
                <Link href="#contact">Schedule a Parent Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Quote */}
          <div className="relative">
            <div className="rounded-2xl bg-ivory/5 p-8 lg:p-12">
              <div className="text-6xl font-serif text-gold/30">{'"'}</div>
              <blockquote className="mt-4 font-serif text-xl italic leading-relaxed text-ivory lg:text-2xl">
                Beyond Grade 12 didn&apos;t just guide our daughter — they transformed her confidence. 
                She went from uncertain about her future to getting accepted at her dream university. 
                Worth every investment.
              </blockquote>
              <div className="mt-8">
                <p className="font-semibold text-ivory">Sunita Sharma</p>
                <p className="text-sm text-ivory/60">Parent of Ananya, admitted to Stanford</p>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-gold/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
