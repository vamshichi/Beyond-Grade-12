"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  FadeUp, 
  StaggerContainer, 
  StaggerItem,
  HoverCard
} from "@/components/motion"
import { 
  Linkedin, 
  ArrowRight,
  GraduationCap,
  Briefcase,
  MapPin,
  Star
} from "lucide-react"

const mentors = [
  {
    name: "Aditya Sharma",
    role: "Strategy & Consulting",
    image: "/images/mentor-1.jpg",
    education: "MBA, Harvard Business School",
    experience: "Ex-McKinsey, 10+ years",
    location: "Mumbai",
    specialties: ["Consulting Careers", "Ivy League Applications", "Case Interviews"],
    rating: 4.9,
    sessions: 250,
    bio: "Aditya specializes in guiding students toward careers in strategy consulting and top MBA programs. Having navigated the path himself, he brings insider knowledge of what it takes to stand out."
  },
  {
    name: "Priya Mehta",
    role: "Tech & Product Management",
    image: "/images/mentor-2.jpg",
    education: "MS Computer Science, Stanford",
    experience: "Product Lead at Google, 8+ years",
    location: "Bangalore",
    specialties: ["Tech Careers", "Silicon Valley Unis", "Product Management"],
    rating: 4.8,
    sessions: 180,
    bio: "Priya helps students break into the tech industry and secure admissions at top US universities. Her practical insights make complex tech careers accessible."
  },
  {
    name: "Rahul Verma",
    role: "Engineering & Research",
    image: "/images/mentor-3.jpg",
    education: "PhD, MIT",
    experience: "Research Scientist at ISRO, 15+ years",
    location: "Delhi",
    specialties: ["STEM Careers", "Research Programs", "PhD Applications"],
    rating: 4.9,
    sessions: 320,
    bio: "Dr. Rahul guides students passionate about research and engineering. His journey from IIT to MIT to ISRO offers invaluable insights for aspiring scientists."
  },
  {
    name: "Sneha Kapoor",
    role: "Finance & Investment Banking",
    image: "/images/mentor-1.jpg",
    education: "MBA, Wharton",
    experience: "VP at Goldman Sachs, 12+ years",
    location: "Mumbai",
    specialties: ["Finance Careers", "Investment Banking", "CFA Guidance"],
    rating: 4.7,
    sessions: 145,
    bio: "Sneha demystifies the world of high finance for students. From Wall Street internships to top finance programs, she provides a roadmap to success."
  },
  {
    name: "Arjun Nair",
    role: "Medicine & Healthcare",
    image: "/images/mentor-3.jpg",
    education: "MD, AIIMS + Fellowship, Johns Hopkins",
    experience: "Senior Consultant, Apollo Hospitals",
    location: "Chennai",
    specialties: ["Medical Careers", "MBBS Abroad", "MD/MS Preparation"],
    rating: 4.9,
    sessions: 200,
    bio: "Dr. Arjun guides aspiring doctors through the complex landscape of medical education, from NEET preparation to international fellowship opportunities."
  },
  {
    name: "Kavitha Reddy",
    role: "Arts & Creative Industries",
    image: "/images/mentor-2.jpg",
    education: "MFA, Rhode Island School of Design",
    experience: "Creative Director, Ogilvy",
    location: "Hyderabad",
    specialties: ["Design Careers", "Portfolio Building", "Art Schools"],
    rating: 4.8,
    sessions: 95,
    bio: "Kavitha champions creative careers and helps students build portfolios that get noticed by top design schools and creative agencies worldwide."
  }
]

const categories = [
  "All Mentors",
  "Business & Consulting",
  "Technology",
  "Engineering",
  "Finance",
  "Medicine",
  "Arts & Design"
]

export default function MentorsPage() {
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
                EXPERT GUIDANCE
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="font-serif text-4xl font-bold text-ivory sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
                Meet Your Future
                <br />
                <span className="text-gold">Mentors</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-ivory/80 leading-relaxed">
                Learn from professionals who&apos;ve walked the path you aspire to take. 
                Our mentors come from the world&apos;s top institutions and companies.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-ivory border-b border-charcoal/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <FadeUp>
              <div className="font-serif text-4xl font-bold text-navy">50+</div>
              <div className="mt-2 text-charcoal/60">Expert Mentors</div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="font-serif text-4xl font-bold text-navy">15+</div>
              <div className="mt-2 text-charcoal/60">Industries Covered</div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="font-serif text-4xl font-bold text-navy">4.8</div>
              <div className="mt-2 text-charcoal/60">Average Rating</div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="font-serif text-4xl font-bold text-navy">5000+</div>
              <div className="mt-2 text-charcoal/60">Sessions Completed</div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-charcoal/5 sticky top-20 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  index === 0 
                    ? "bg-navy text-ivory" 
                    : "bg-white text-charcoal hover:bg-navy/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-20 lg:py-32 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {mentors.map((mentor) => (
              <StaggerItem key={mentor.name}>
                <HoverCard>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={mentor.image}
                        alt={mentor.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                      
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4 text-gold fill-gold" />
                        <span className="text-sm font-semibold text-navy">{mentor.rating}</span>
                      </div>
                      
                      {/* Name Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-serif text-2xl font-semibold text-ivory">{mentor.name}</h3>
                        <p className="text-gold mt-1">{mentor.role}</p>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      {/* Quick Info */}
                      <div className="flex flex-wrap gap-4 text-sm text-charcoal/70 mb-4">
                        <div className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4 text-gold" />
                          <span>{mentor.education.split(",")[0]}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-gold" />
                          <span>{mentor.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-charcoal/70 text-sm leading-relaxed mb-4 flex-grow">
                        {mentor.bio}
                      </p>
                      
                      {/* Specialties */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {mentor.specialties.map((specialty) => (
                          <span 
                            key={specialty}
                            className="px-3 py-1 bg-gold/10 text-gold text-xs rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                      
                      {/* Sessions */}
                      <div className="flex items-center justify-between pt-4 border-t border-charcoal/10">
                        <span className="text-sm text-charcoal/60">
                          <span className="font-semibold text-navy">{mentor.sessions}</span> sessions completed
                        </span>
                        <Button asChild size="sm" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-ivory">
                          <Link href={`/contact?mentor=${mentor.name.toLowerCase().replace(" ", "-")}`}>
                            Book Session
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          {/* Load More */}
          <FadeUp className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-navy text-navy hover:bg-navy hover:text-ivory">
              View All Mentors
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* Become a Mentor */}
      <section className="py-20 lg:py-32 bg-charcoal/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/testimonial-bg.jpg')] opacity-10 bg-cover bg-center" />
            <div className="relative">
              <FadeUp>
                <h2 className="font-serif text-3xl font-bold text-ivory sm:text-4xl lg:text-5xl">
                  Are You an Industry Expert?
                </h2>
                <p className="mt-6 text-ivory/80 max-w-2xl mx-auto text-lg">
                  Join our network of mentors and make a difference in the lives of ambitious students. 
                  Share your experience and help shape the next generation of leaders.
                </p>
                <div className="mt-10">
                  <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/90 px-8">
                    <Link href="/contact?type=mentor-application">
                      Apply to Become a Mentor
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gold">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Ready to Connect with a Mentor?
            </h2>
            <p className="mt-6 text-navy/80 max-w-2xl mx-auto text-lg">
              Book a free consultation to get matched with the perfect mentor for your goals.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-navy text-ivory hover:bg-navy/90 px-8">
                <Link href="/contact">
                  Get Matched Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-ivory px-8">
                <Link href="/programs">View Programs</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  )
}
