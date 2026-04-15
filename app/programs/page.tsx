"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  FadeUp, 
  SlideInLeft, 
  SlideInRight, 
  StaggerContainer, 
  StaggerItem,
  HoverCard,
  ImageReveal
} from "@/components/motion"
import { 
  Compass, 
  GraduationCap, 
  Briefcase, 
  Users, 
  FileText, 
  Globe,
  ArrowRight,
  Check,
  Star,
  Clock,
  Calendar,
  Video
} from "lucide-react"

const programs = [
  {
    id: "flagship",
    icon: Compass,
    title: "Flagship Mentorship Program",
    subtitle: "For Students in Grades 9-12",
    duration: "6 Months",
    format: "Hybrid (Online + In-Person)",
    price: "Premium",
    featured: true,
    description: "Our comprehensive program combining 1:1 mentorship, career exploration, and university preparation for complete transformation.",
    features: [
      "24 hours of 1:1 mentorship sessions",
      "Psychometric assessment & career mapping",
      "University shortlisting & application strategy",
      "College essay writing workshops",
      "Interview preparation with mock sessions",
      "Exclusive access to industry webinars",
      "Parent progress updates every month",
      "Dedicated success manager"
    ]
  },
  {
    id: "university-prep",
    icon: GraduationCap,
    title: "University Application Bootcamp",
    subtitle: "For Grade 11-12 Students",
    duration: "3 Months",
    format: "Online",
    price: "Standard",
    featured: false,
    description: "Intensive program focused on crafting compelling applications for top universities worldwide.",
    features: [
      "Application strategy for 10 universities",
      "Statement of Purpose crafting",
      "Letters of Recommendation guidance",
      "Scholarship application support",
      "Document preparation & review",
      "Weekly group strategy sessions"
    ]
  },
  {
    id: "career-discovery",
    icon: Briefcase,
    title: "Career Discovery Workshop",
    subtitle: "For Grades 9-10",
    duration: "4 Weeks",
    format: "Online",
    price: "Entry",
    featured: false,
    description: "Interactive workshops to help younger students explore interests and understand career possibilities.",
    features: [
      "Interest & aptitude assessment",
      "Exposure to 20+ career paths",
      "Interactive industry sessions",
      "Career roadmap creation",
      "Parent consultation session"
    ]
  },
  {
    id: "1on1-mentorship",
    icon: Users,
    title: "1:1 Expert Mentorship",
    subtitle: "All Grade Levels",
    duration: "Flexible",
    format: "Online",
    price: "Per Session",
    featured: false,
    description: "Book individual sessions with industry experts and top university alumni for targeted guidance.",
    features: [
      "Choose from 50+ expert mentors",
      "Flexible scheduling",
      "Personalized session focus",
      "Session recording provided",
      "Follow-up resources included"
    ]
  },
  {
    id: "essay-clinic",
    icon: FileText,
    title: "Essay Excellence Clinic",
    subtitle: "Grade 11-12 Students",
    duration: "6 Weeks",
    format: "Online",
    price: "Standard",
    featured: false,
    description: "Master the art of compelling personal essays and statements with expert writers.",
    features: [
      "Personal narrative development",
      "5 essay drafts with feedback",
      "Common App essay mastery",
      "Supplemental essay strategies",
      "Final review & polish"
    ]
  },
  {
    id: "global-exposure",
    icon: Globe,
    title: "Global Exposure Program",
    subtitle: "Selected Students",
    duration: "2 Weeks",
    format: "In-Person (International)",
    price: "Premium",
    featured: false,
    description: "Campus visits and immersion experiences at top universities in the US, UK, and Europe.",
    features: [
      "Guided campus tours",
      "Meet admissions officers",
      "Student life immersion",
      "City cultural experiences",
      "Alumni networking events"
    ]
  }
]

const stats = [
  { value: "5000+", label: "Students Mentored" },
  { value: "92%", label: "Success Rate" },
  { value: "150+", label: "University Acceptances" },
  { value: "50+", label: "Expert Mentors" }
]

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0">
          <Image
            src="/images/program-workshop.jpg"
            alt="Students in workshop"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeUp>
              <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium tracking-wide mb-6">
                OUR PROGRAMS
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="font-serif text-4xl font-bold text-ivory sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
                Programs Designed for
                <br />
                <span className="text-gold">Your Success</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-ivory/80 leading-relaxed">
                From career discovery to university admissions, our expertly crafted programs 
                guide students at every stage of their academic journey.
              </p>
            </FadeUp>
          </div>
          
          {/* Stats */}
          <FadeUp delay={0.3}>
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-4xl font-bold text-gold">{stat.value}</div>
                  <div className="mt-2 text-ivory/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Featured Program */}
      <section className="py-20 lg:py-32 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-4">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-gold text-sm font-medium">FLAGSHIP PROGRAM</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              The Complete Transformation
            </h2>
          </FadeUp>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <SlideInLeft className="relative h-[400px] lg:h-auto">
                <Image
                  src="/images/program-workshop.jpg"
                  alt="Flagship mentorship program"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent lg:bg-none" />
              </SlideInLeft>
              
              <SlideInRight className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                    <Compass className="w-8 h-8 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-navy">Flagship Mentorship Program</h3>
                    <p className="text-charcoal/60">For Students in Grades 9-12</p>
                  </div>
                </div>
                
                <p className="text-charcoal/70 leading-relaxed mb-8">
                  Our most comprehensive program combining 1:1 mentorship, career exploration, 
                  and university preparation for complete transformation. Designed for ambitious 
                  students who want the best possible guidance.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Clock className="w-4 h-4 text-gold" />
                    <span>6 Months Duration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Video className="w-4 h-4 text-gold" />
                    <span>Hybrid Format</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span>Flexible Scheduling</span>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {programs[0].features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-charcoal/70">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/90">
                    <Link href="/contact?program=flagship">
                      Apply Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-navy text-navy">
                    <Link href="/contact">Request Brochure</Link>
                  </Button>
                </div>
              </SlideInRight>
            </div>
          </div>
        </div>
      </section>

      {/* All Programs Grid */}
      <section className="py-20 lg:py-32 bg-charcoal/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Explore All</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Choose Your Path
            </h2>
            <p className="mt-4 text-charcoal/70 max-w-2xl mx-auto">
              Whether you need comprehensive guidance or focused support, we have a program for you.
            </p>
          </FadeUp>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {programs.slice(1).map((program) => (
              <StaggerItem key={program.id}>
                <HoverCard>
                  <div className="bg-white rounded-2xl p-8 h-full flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                      <program.icon className="w-7 h-7 text-gold" />
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold text-navy mb-2">
                      {program.title}
                    </h3>
                    <p className="text-sm text-gold mb-4">{program.subtitle}</p>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-6 flex-grow">
                      {program.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-navy/5 text-navy text-xs rounded-full">
                        {program.duration}
                      </span>
                      <span className="px-3 py-1 bg-navy/5 text-navy text-xs rounded-full">
                        {program.format}
                      </span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {program.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-charcoal/70">
                          <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="w-full bg-navy text-ivory hover:bg-navy/90 mt-auto">
                      <Link href={`/contact?program=${program.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-32 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Compare</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Find Your Perfect Fit
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-navy text-ivory">
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">Flagship</th>
                    <th className="px-6 py-4 text-center font-semibold">Bootcamp</th>
                    <th className="px-6 py-4 text-center font-semibold">Discovery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/10">
                  <tr>
                    <td className="px-6 py-4 text-charcoal/80">1:1 Mentorship</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-gold mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-gold mx-auto" /></td>
                    <td className="px-6 py-4 text-center text-charcoal/30">-</td>
                  </tr>
                  <tr className="bg-charcoal/5">
                    <td className="px-6 py-4 text-charcoal/80">University Applications</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-gold mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-gold mx-auto" /></td>
                    <td className="px-6 py-4 text-center text-charcoal/30">-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-charcoal/80">Career Exploration</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-gold mx-auto" /></td>
                    <td className="px-6 py-4 text-center text-charcoal/30">-</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-gold mx-auto" /></td>
                  </tr>
                  <tr className="bg-charcoal/5">
                    <td className="px-6 py-4 text-charcoal/80">Essay Support</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-gold mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-gold mx-auto" /></td>
                    <td className="px-6 py-4 text-center text-charcoal/30">-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-charcoal/80">Interview Prep</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-gold mx-auto" /></td>
                    <td className="px-6 py-4 text-center text-charcoal/30">-</td>
                    <td className="px-6 py-4 text-center text-charcoal/30">-</td>
                  </tr>
                  <tr className="bg-charcoal/5">
                    <td className="px-6 py-4 text-charcoal/80">Parent Updates</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-gold mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-gold mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-gold mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/testimonial-bg.jpg')] opacity-10 bg-cover bg-center" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl font-bold text-ivory sm:text-4xl lg:text-5xl">
              Not Sure Which Program is Right?
            </h2>
            <p className="mt-6 text-ivory/80 max-w-2xl mx-auto text-lg">
              Book a free consultation with our advisors to find the perfect program for your goals.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/90 px-8">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  )
}
