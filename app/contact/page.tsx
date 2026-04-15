"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  FadeUp, 
  SlideInLeft, 
  SlideInRight,
  StaggerContainer,
  StaggerItem
} from "@/components/motion"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Calendar,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Loader2
} from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Sat, 9am-6pm IST",
    value: "+91 98765 43210",
    action: "tel:+919876543210"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "We reply within 24 hours",
    value: "hello@beyondgrade12.com",
    action: "mailto:hello@beyondgrade12.com"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick responses",
    value: "Chat with us",
    action: "https://wa.me/919876543210"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "By appointment only",
    value: "Mumbai, India",
    action: "#"
  }
]

const programs = [
  { value: "flagship", label: "Flagship Mentorship Program" },
  { value: "university-prep", label: "University Application Bootcamp" },
  { value: "career-discovery", label: "Career Discovery Workshop" },
  { value: "1on1-mentorship", label: "1:1 Expert Mentorship" },
  { value: "essay-clinic", label: "Essay Excellence Clinic" },
  { value: "global-exposure", label: "Global Exposure Program" },
  { value: "other", label: "Other / Not Sure" }
]

const grades = [
  { value: "9", label: "Grade 9" },
  { value: "10", label: "Grade 10" },
  { value: "11", label: "Grade 11" },
  { value: "12", label: "Grade 12" },
  { value: "college", label: "College Student" },
  { value: "parent", label: "Parent / Guardian" }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    program: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", phone: "", grade: "", program: "", message: "" })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-ivory">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0">
          <Image
            src="/images/contact-team.jpg"
            alt="Contact us"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeUp>
              <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium tracking-wide mb-6">
                GET IN TOUCH
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="font-serif text-4xl font-bold text-ivory sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
                Let&apos;s Start Your
                <br />
                <span className="text-gold">Journey Together</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-ivory/80 leading-relaxed">
                Have questions? Ready to begin? We&apos;re here to help you take the first step 
                toward clarity and success.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-ivory border-b border-charcoal/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {contactMethods.map((method) => (
              <StaggerItem key={method.title}>
                <a 
                  href={method.action}
                  className="block bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <method.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-semibold text-navy">{method.title}</h3>
                  <p className="text-sm text-charcoal/60 mt-1">{method.description}</p>
                  <p className="text-navy font-medium mt-2">{method.value}</p>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form & Calendar */}
      <section className="py-20 lg:py-32 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <SlideInLeft>
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
                <div className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-navy lg:text-3xl">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-charcoal/70">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-navy mb-2">
                      Thank You!
                    </h3>
                    <p className="text-charcoal/70 mb-6">
                      We&apos;ve received your message and will get back to you soon.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-navy text-navy"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="border-charcoal/20 focus:border-gold focus:ring-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="border-charcoal/20 focus:border-gold focus:ring-gold"
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="border-charcoal/20 focus:border-gold focus:ring-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="grade">Current Grade</Label>
                        <Select 
                          value={formData.grade}
                          onValueChange={(value) => setFormData({ ...formData, grade: value })}
                        >
                          <SelectTrigger className="border-charcoal/20 focus:border-gold focus:ring-gold">
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                          <SelectContent>
                            {grades.map((grade) => (
                              <SelectItem key={grade.value} value={grade.value}>
                                {grade.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="program">Interested In</Label>
                      <Select 
                        value={formData.program}
                        onValueChange={(value) => setFormData({ ...formData, program: value })}
                      >
                        <SelectTrigger className="border-charcoal/20 focus:border-gold focus:ring-gold">
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                        <SelectContent>
                          {programs.map((program) => (
                            <SelectItem key={program.value} value={program.value}>
                              {program.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your goals and how we can help..."
                        rows={4}
                        className="border-charcoal/20 focus:border-gold focus:ring-gold resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-gold text-navy hover:bg-gold/90"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </SlideInLeft>
            
            {/* Calendar Booking */}
            <SlideInRight>
              <div className="bg-navy rounded-3xl p-8 lg:p-12 h-full flex flex-col">
                <div className="mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                    <Calendar className="w-7 h-7 text-gold" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-ivory lg:text-3xl">
                    Book a Free Consultation
                  </h2>
                  <p className="mt-2 text-ivory/70">
                    Schedule a 30-minute call with our team to discuss your goals and explore how we can help.
                  </p>
                </div>
                
                <div className="flex-grow">
                  <div className="bg-ivory/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                    <h3 className="font-semibold text-ivory mb-4">What to expect:</h3>
                    <ul className="space-y-3">
                      {[
                        "Understanding your academic goals",
                        "Personalized program recommendations",
                        "Q&A with our advisors",
                        "No pressure, no obligations"
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-ivory/80">
                          <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center gap-3 text-ivory/60 mb-6">
                    <Clock className="w-5 h-5" />
                    <span>30 minutes | Online via Google Meet</span>
                  </div>
                </div>
                
                <Button 
                  asChild
                  size="lg" 
                  className="w-full bg-gold text-navy hover:bg-gold/90"
                >
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    Schedule Your Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                
                <p className="text-center text-ivory/50 text-sm mt-4">
                  Powered by Calendly
                </p>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 lg:py-32 bg-charcoal/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl font-bold text-navy sm:text-4xl">
              Have More Questions?
            </h2>
            <p className="mt-4 text-charcoal/70 max-w-2xl mx-auto">
              Check out our frequently asked questions or reach out directly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-ivory">
                <Link href="/#faq">View FAQ</Link>
              </Button>
              <Button asChild className="bg-navy text-ivory hover:bg-navy/90">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  )
}
