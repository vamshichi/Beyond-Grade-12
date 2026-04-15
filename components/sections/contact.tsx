"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, MessageCircle, Mail, ArrowRight } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", grade: "", message: "" })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-ivory py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-gold">
            Get Started
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
            <span className="text-balance">Take the First Step Today</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            Book a free consultation to discuss your goals and discover how we can help.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          {/* Contact Form */}
          <div id="apply" className="rounded-2xl border border-charcoal/10 bg-white p-8 shadow-lg lg:p-10">
            <h3 className="font-serif text-2xl font-semibold text-navy">
              Request a Consultation
            </h3>
            <p className="mt-2 text-sm text-charcoal/60">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-lg bg-navy/5 p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-ivory">
                  <Mail className="h-6 w-6" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-navy">
                  Thank You!
                </h4>
                <p className="mt-2 text-charcoal/60">
                  We&apos;ve received your request and will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-charcoal">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-charcoal/20 bg-ivory focus:border-navy focus:ring-navy"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-charcoal/20 bg-ivory focus:border-navy focus:ring-navy"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-charcoal">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-charcoal/20 bg-ivory focus:border-navy focus:ring-navy"
                    />
                  </div>
                  <div>
                    <label htmlFor="grade" className="mb-2 block text-sm font-medium text-charcoal">
                      Current Grade
                    </label>
                    <select
                      id="grade"
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="flex h-10 w-full rounded-md border border-charcoal/20 bg-ivory px-3 py-2 text-sm ring-offset-background focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                    >
                      <option value="">Select Grade</option>
                      <option value="9">Grade 9</option>
                      <option value="10">Grade 10</option>
                      <option value="11">Grade 11</option>
                      <option value="12">Grade 12</option>
                      <option value="parent">I&apos;m a Parent</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-charcoal">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your goals and how we can help..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-charcoal/20 bg-ivory focus:border-navy focus:ring-navy"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-navy text-ivory hover:bg-navy/90"
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            )}
          </div>

          {/* Contact Options */}
          <div className="flex flex-col gap-6">
            {/* Calendly Booking */}
            <div className="flex-1 rounded-2xl border border-charcoal/10 bg-white p-8 shadow-lg lg:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-ivory">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-navy">
                Book a Call
              </h3>
              <p className="mt-2 text-sm text-charcoal/60">
                Schedule a free 30-minute consultation at your convenience.
              </p>
              <Button 
                asChild 
                variant="outline" 
                className="mt-6 w-full border-navy text-navy hover:bg-navy hover:text-ivory"
              >
                <a 
                  href="https://calendly.com/beyondgrade12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Schedule on Calendly
                </a>
              </Button>
            </div>

            {/* WhatsApp */}
            <div className="flex-1 rounded-2xl border border-charcoal/10 bg-white p-8 shadow-lg lg:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-navy">
                Chat on WhatsApp
              </h3>
              <p className="mt-2 text-sm text-charcoal/60">
                Get instant answers to your questions via WhatsApp.
              </p>
              <Button 
                asChild 
                className="mt-6 w-full bg-[#25D366] text-white hover:bg-[#25D366]/90"
              >
                <a 
                  href="https://wa.me/1234567890?text=Hi%20I'm%20interested%20in%20Beyond%20Grade%2012"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start WhatsApp Chat
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
