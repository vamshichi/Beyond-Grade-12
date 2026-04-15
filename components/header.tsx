"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/about", label: "About Us" },
  { 
    href: "/programs", 
    label: "Programs",
    dropdown: [
      { href: "/programs#flagship", label: "Flagship Program" },
      { href: "/programs#university-prep", label: "University Bootcamp" },
      { href: "/programs#career-discovery", label: "Career Discovery" },
    ]
  },
  { href: "/mentors", label: "Mentors" },
  { href: "/testimonials", label: "Success Stories" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-ivory/95 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <span className={`font-serif text-xl font-bold lg:text-2xl transition-colors ${
                isScrolled || pathname !== "/" ? "text-navy" : "text-ivory"
              }`}>
                Beyond
              </span>
              <span className="text-gold font-serif text-xl font-bold lg:text-2xl"> Grade 12</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.href}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    pathname === link.href 
                      ? "text-gold" 
                      : isScrolled || pathname !== "/" 
                        ? "text-charcoal hover:text-navy hover:bg-navy/5" 
                        : "text-ivory/90 hover:text-ivory hover:bg-ivory/10"
                  }`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-charcoal/10 overflow-hidden"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-charcoal hover:bg-gold/10 hover:text-navy transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button 
              variant="outline" 
              asChild 
              className={`rounded-full transition-all ${
                isScrolled || pathname !== "/"
                  ? "border-navy text-navy hover:bg-navy hover:text-ivory"
                  : "border-ivory text-ivory hover:bg-ivory hover:text-navy"
              }`}
            >
              <Link href="/contact">Book Consultation</Link>
            </Button>
            <Button 
              asChild 
              className="bg-gold text-navy hover:bg-gold/90 rounded-full"
            >
              <Link href="/contact?type=apply">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="lg:hidden relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-navy" />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled || pathname !== "/" ? "text-navy" : "text-ivory"}`} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-ivory z-40 lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-8">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-4 text-2xl font-serif font-semibold transition-colors ${
                        pathname === link.href ? "text-gold" : "text-navy"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <div className="pl-4 space-y-2 mt-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-2 text-charcoal/70 hover:text-navy"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>
              
              <div className="mt-auto space-y-4">
                <Button 
                  variant="outline" 
                  asChild 
                  className="w-full border-navy text-navy hover:bg-navy hover:text-ivory rounded-full"
                  size="lg"
                >
                  <Link href="/contact">Book Consultation</Link>
                </Button>
                <Button 
                  asChild 
                  className="w-full bg-gold text-navy hover:bg-gold/90 rounded-full"
                  size="lg"
                >
                  <Link href="/contact?type=apply">Apply Now</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
