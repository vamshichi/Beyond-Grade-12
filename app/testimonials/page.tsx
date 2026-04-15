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
  ArrowRight,
  Quote,
  Star,
  Play,
  GraduationCap
} from "lucide-react"

const testimonials = [
  {
    name: "Ananya Krishnan",
    role: "Admitted to Stanford University",
    image: "/images/mentor-2.jpg",
    quote: "Beyond Grade 12 transformed my entire approach to applications. My mentor helped me discover my unique story and craft essays that truly stood out. I couldn't have done it without them.",
    rating: 5,
    program: "Flagship Program",
    university: "Stanford University",
    year: "Class of 2026"
  },
  {
    name: "Rohan Sharma",
    role: "IIT Bombay, Computer Science",
    image: "/images/mentor-1.jpg",
    quote: "The career discovery sessions opened my eyes to paths I never knew existed. My mentor's guidance was invaluable in helping me prepare for JEE and choose the right branch.",
    rating: 5,
    program: "Career Discovery",
    university: "IIT Bombay",
    year: "Class of 2025"
  },
  {
    name: "Priya Menon",
    role: "LSE Economics Graduate",
    image: "/images/mentor-2.jpg",
    quote: "The UK application process seemed daunting until I joined BG12. The essay workshops and interview prep gave me the confidence I needed. Forever grateful!",
    rating: 5,
    program: "University Bootcamp",
    university: "London School of Economics",
    year: "Class of 2024"
  },
  {
    name: "Arjun Patel",
    role: "Wharton Business School",
    image: "/images/mentor-3.jpg",
    quote: "My mentor at BG12 had been through the exact journey I aspired to take. His insights into finance careers and Ivy League admissions were game-changing.",
    rating: 5,
    program: "Flagship Program",
    university: "UPenn Wharton",
    year: "Class of 2025"
  },
  {
    name: "Neha Agarwal",
    role: "MIT Engineering",
    image: "/images/mentor-2.jpg",
    quote: "From not knowing what I wanted to study to getting into MIT - BG12 was with me every step. The structured approach and personalized mentorship made all the difference.",
    rating: 5,
    program: "Flagship Program",
    university: "MIT",
    year: "Class of 2026"
  },
  {
    name: "Vikram Singh",
    role: "Oxford PPE Student",
    image: "/images/mentor-1.jpg",
    quote: "The mock interviews prepared me for every possible question Oxford threw at me. My mentor's attention to detail in my personal statement was incredible.",
    rating: 5,
    program: "University Bootcamp",
    university: "Oxford University",
    year: "Class of 2025"
  }
]

const parentTestimonials = [
  {
    name: "Mrs. Kavitha Nair",
    role: "Parent of Admitted Student",
    quote: "As a parent, seeing my daughter confused about her future was heartbreaking. BG12 not only guided her but kept us involved throughout. The monthly updates were reassuring.",
    studentResult: "Daughter admitted to Columbia University"
  },
  {
    name: "Mr. Rajesh Gupta",
    role: "Parent of Admitted Student",
    quote: "The professionalism and genuine care shown by the BG12 team exceeded our expectations. Worth every rupee invested in our son's future.",
    studentResult: "Son admitted to IIM Ahmedabad"
  }
]

const videoTestimonials = [
  {
    name: "Aisha Khan",
    thumbnail: "/images/student-success.jpg",
    university: "Harvard University",
    duration: "3:24"
  },
  {
    name: "Karthik Reddy",
    thumbnail: "/images/program-workshop.jpg",
    university: "Carnegie Mellon",
    duration: "2:58"
  },
  {
    name: "Simran Kaur",
    thumbnail: "/images/about-mission.jpg",
    university: "Cambridge University",
    duration: "4:12"
  }
]

const stats = [
  { value: "5000+", label: "Students Guided" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "92%", label: "Success Rate" },
  { value: "98%", label: "Recommend Us" }
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0">
          <Image
            src="/images/student-success.jpg"
            alt="Student success stories"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeUp>
              <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium tracking-wide mb-6">
                SUCCESS STORIES
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="font-serif text-4xl font-bold text-ivory sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
                Real Students,
                <br />
                <span className="text-gold">Real Results</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-ivory/80 leading-relaxed">
                Hear from students and parents who have experienced the Beyond Grade 12 difference. 
                Their journeys inspire our mission every day.
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

      {/* Video Testimonials */}
      <section className="py-20 lg:py-32 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Watch</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Video Testimonials
            </h2>
          </FadeUp>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {videoTestimonials.map((video) => (
              <StaggerItem key={video.name}>
                <HoverCard>
                  <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                    <div className="relative h-64">
                      <Image
                        src={video.thumbnail}
                        alt={video.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/40 transition-colors" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-navy fill-navy ml-1" />
                        </div>
                      </div>
                      
                      {/* Duration */}
                      <div className="absolute bottom-4 right-4 bg-black/60 px-2 py-1 rounded text-sm text-white">
                        {video.duration}
                      </div>
                    </div>
                    
                    <div className="bg-white p-6">
                      <h3 className="font-semibold text-navy">{video.name}</h3>
                      <p className="text-gold text-sm mt-1">{video.university}</p>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 lg:py-32 bg-charcoal/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Student Stories</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              What Our Students Say
            </h2>
          </FadeUp>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <HoverCard>
                  <div className="bg-white rounded-2xl p-8 h-full flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300">
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-gold/20 mb-4" />
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-charcoal/80 leading-relaxed flex-grow mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    
                    {/* University Badge */}
                    <div className="flex items-center gap-2 mb-6 bg-gold/10 px-4 py-2 rounded-full w-fit">
                      <GraduationCap className="w-4 h-4 text-gold" />
                      <span className="text-sm font-medium text-gold">{testimonial.university}</span>
                    </div>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-charcoal/10">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy">{testimonial.name}</h4>
                        <p className="text-sm text-charcoal/60">{testimonial.year}</p>
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-20 lg:py-32 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Parent Perspectives</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-ivory sm:text-4xl lg:text-5xl">
              Trusted by Parents
            </h2>
          </FadeUp>
          
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.2}>
            {parentTestimonials.map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <div className="bg-ivory/10 backdrop-blur-sm rounded-2xl p-8 border border-ivory/10">
                  <Quote className="w-10 h-10 text-gold mb-4" />
                  <p className="text-ivory/90 text-lg leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-ivory">{testimonial.name}</h4>
                      <p className="text-ivory/60 text-sm">{testimonial.role}</p>
                    </div>
                    <div className="bg-gold/20 px-4 py-2 rounded-full">
                      <p className="text-gold text-sm font-medium">{testimonial.studentResult}</p>
                    </div>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="mt-6 text-navy/80 max-w-2xl mx-auto text-lg">
              Join thousands of students who have achieved their dreams with Beyond Grade 12.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-navy text-ivory hover:bg-navy/90 px-8">
                <Link href="/contact">
                  Start Your Journey
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
