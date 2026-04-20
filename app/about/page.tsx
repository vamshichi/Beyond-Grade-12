"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  FadeUp,
  FadeIn,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  ImageReveal,
  TextReveal,
  DrawLine
} from "@/components/motion"
import { Target, Eye, Heart, Users, BookOpen, Award, ArrowRight } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Clarity Over Confusion",
    description: "We help students cut through the noise and find their authentic path forward."
  },
  {
    icon: Eye,
    title: "Expert-Led Guidance",
    description: "Every mentor brings real-world experience from top institutions and industries."
  },
  {
    icon: Heart,
    title: "Student-Centered Approach",
    description: "Each journey is unique. We tailor our guidance to individual strengths and aspirations."
  },
  {
    icon: Users,
    title: "Community & Connection",
    description: "Building a network of ambitious students and accomplished professionals."
  }
]

const milestones = [
  { year: "2019", title: "Founded", description: "Started with a vision to transform career guidance" },
  { year: "2020", title: "First Cohort", description: "Launched flagship mentorship program with 25 students" },
  { year: "2022", title: "1000+ Students", description: "Milestone of helping over 1000 students find clarity" },
  { year: "2024", title: "Premium Programs", description: "Expanded to comprehensive university prep offerings" },
  { year: "2026", title: "National Reach", description: "Serving students across India and internationally" }
]

const team = [
  {
    name: "Aditya Sharma",
    role: "Founder & CEO",
    image: "/images/mentor-1.jpg",
    bio: "Former McKinsey consultant with a passion for youth development"
  },
  {
    name: "Priya Mehta",
    role: "Head of Mentorship",
    image: "/images/mentor-2.jpg",
    bio: "Stanford MBA with 10+ years in educational consulting"
  },
  {
    name: "Rahul Verma",
    role: "Director of Programs",
    image: "/images/mentor-3.jpg",
    bio: "IIT alumnus dedicated to shaping future leaders"
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 bg-[url('/images/testimonial-bg.jpg')] opacity-20 bg-cover bg-center" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeUp>
              <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium tracking-wide mb-6">
                OUR STORY
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="font-serif text-4xl font-bold text-ivory sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
                Transforming Futures,
                <br />
                <span className="text-gold">One Student at a Time</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-ivory/80 leading-relaxed text-center">
                Beyond Grade 12 is an elite mentorship academy where high school students
                discover their direction, build an undeniable profile, and earn their place
                at top universities guided by accomplished professionals across Engineering,
                Technology, Healthcare, Finance, and Law who deliver the unfiltered truth,
                and a real roadmap to the future they deserve.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <ImageReveal className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-mission.jpg"
                  alt="Our mission in action"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
              </ImageReveal>
            </SlideInLeft>

            <SlideInRight>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-gold" />
                    </div>
                    <span className="text-sm font-medium tracking-widest text-gold uppercase">Our Mission</span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                    Real Mentorship. Real Direction.
                  </h2>
                  <p className="text-charcoal/70 leading-relaxed">
                    To guide students through early career exploration and earn university admissions
                    aligned with their strengths, interests, and long-term goals — through real mentorship, not guesswork.
                  </p>
                </div>

                <DrawLine className="h-px bg-gold/30 w-full" />

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-navy" />
                    </div>
                    <span className="text-sm font-medium tracking-widest text-navy uppercase">Our Vision</span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                    Clarity. Confidence. Purpose.
                  </h2>
                  <p className="text-charcoal/70 leading-relaxed">
                    To create a future where high school students choose their careers and universities
                    with clarity, confidence, and purpose — supported by professionals who have lived it.
                  </p>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">What Drives Us</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-ivory sm:text-4xl lg:text-5xl">
              Our Core Values
            </h2>
          </FadeUp>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="bg-ivory/5 backdrop-blur-sm border border-ivory/10 rounded-2xl p-8 h-full hover:bg-ivory/10 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-ivory mb-3">
                    {value.title}
                  </h3>
                  <p className="text-ivory/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Our Journey</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Milestones Along the Way
            </h2>
          </FadeUp>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 transform -translate-x-1/2" />

            <StaggerContainer className="space-y-12" staggerDelay={0.15}>
              {milestones.map((milestone, index) => (
                <StaggerItem key={milestone.year}>
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                      <span className="font-serif text-4xl font-bold text-gold">{milestone.year}</span>
                      <h3 className="font-serif text-2xl font-semibold text-navy mt-2">{milestone.title}</h3>
                      <p className="text-charcoal/70 mt-2">{milestone.description}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-gold border-4 border-ivory shadow-lg z-10" />
                    <div className="lg:w-1/2" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 lg:py-32 bg-charcoal/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Leadership</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-charcoal/70 max-w-2xl mx-auto">
              Experienced professionals dedicated to shaping the next generation of leaders.
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-serif text-xl font-semibold">{member.name}</h3>
                      <p className="text-gold text-sm mt-1">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-charcoal/70">{member.bio}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gold">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Ready to Begin Your Journey?
            </h2>
            <p className="mt-6 text-navy/80 max-w-2xl mx-auto text-lg">
              Join thousands of students who have found clarity and direction with Beyond Grade 12.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-navy text-ivory hover:bg-navy/90 px-8">
                <Link href="/contact">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-ivory px-8">
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  )
}
