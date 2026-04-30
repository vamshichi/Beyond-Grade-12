"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion"

const quickLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About Us" },
  { href: "/mentors", label: "Our Mentors" },
  { href: "/testimonials", label: "Success Stories" },
  { href: "/contact", label: "Contact" },
]

const services = [
  { href: "/programs", label: "Career Discovery" },
  { href: "/programs", label: "University Admissions" },
  { href: "/programs", label: "1-on-1 Mentorship" },
  { href: "/programs", label: "Essay Review" },
  { href: "/programs", label: "Interview Prep" },
]

const socials = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      })
      if (response.ok) {
        setSubscribed(true)
        setEmail("")
      }
    } catch (error) {
      console.error("Error subscribing:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      {/* Newsletter Section */}
      <div className="relative border-b border-ivory/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <FadeUp>
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row bg-gold/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
              <div className="text-center lg:text-left">
                <h3 className="font-serif text-2xl font-bold text-ivory lg:text-3xl">
                  Stay Ahead of the Curve
                </h3>
                <p className="mt-2 text-ivory/70">
                  Get expert tips on career planning, university admissions, and more.
                </p>
              </div>
              {subscribed ? (
                <motion.p 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-gold font-semibold text-lg"
                >
                  ✓ Thank you for subscribing!
                </motion.p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 border-ivory/20 bg-ivory/10 text-ivory placeholder:text-ivory/40 focus:border-gold focus:ring-gold rounded-full px-6"
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-gold text-navy hover:bg-gold/90 rounded-full px-6"
                  >
                    {isSubmitting ? "..." : (
                      <>
                        Subscribe
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <FadeUp className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold text-ivory">
                Beyond Grade 12
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ivory/60 max-w-xs">
              Where Ambition Meets Direction. Premium guidance for high school 
              students seeking clarity and success in their career journey.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory/10 text-ivory/60 transition-colors hover:bg-gold hover:text-navy"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </FadeUp>

          {/* Quick Links */}
          <StaggerContainer staggerDelay={0.05}>
            <StaggerItem>
              <h3 className="font-semibold text-ivory mb-4">Quick Links</h3>
            </StaggerItem>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <StaggerItem key={link.label}>
                  <li>
                    <Link 
                      href={link.href}
                      className="text-sm text-ivory/60 transition-colors hover:text-gold inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-gold mr-0 group-hover:mr-2 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>

          {/* Services */}
          <StaggerContainer staggerDelay={0.05}>
            <StaggerItem>
              <h3 className="font-semibold text-ivory mb-4">Services</h3>
            </StaggerItem>
            <ul className="space-y-3">
              {services.map((link) => (
                <StaggerItem key={link.label}>
                  <li>
                    <Link 
                      href={link.href}
                      className="text-sm text-ivory/60 transition-colors hover:text-gold inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-gold mr-0 group-hover:mr-2 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>

          {/* Contact */}
          <FadeUp delay={0.2}>
            <h3 className="font-semibold text-ivory mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@beyondgrade12.ca"
                  className="flex items-center gap-3 text-sm text-ivory/60 transition-colors hover:text-gold group"
                >
                  <div className="w-8 h-8 rounded-lg bg-ivory/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  info@beyondgrade12.ca
                </a>
              </li>
              <li>
                <a 
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-sm text-ivory/60 transition-colors hover:text-gold group"
                >
                  <div className="w-8 h-8 rounded-lg bg-ivory/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  289-800-8024
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-ivory/60">
                  <div className="w-8 h-8 rounded-lg bg-ivory/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>
                    Toronto, Ontario
                  </span>
                </div>
              </li>
            </ul>
          </FadeUp>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-ivory/40">
              © {new Date().getFullYear()} Beyond Grade 12. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-ivory/40 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-ivory/40 hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
