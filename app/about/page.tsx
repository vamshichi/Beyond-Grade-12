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
import { StoryQuoteSection } from "@/components/sections/StoryQuoteSection"
import { FamilySection } from "@/components/sections/FamilySection"
import { NumbersSection } from "@/components/sections/NumbersSection"
import { OurPromiseSection } from "@/components/sections/OurPromiseSection"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <Header />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 bg-[url('/images/testimonial-bg.jpg')] opacity-20 bg-cover bg-center" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">

            <FadeUp>
              <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium tracking-wide mb-6">
                ABOUT BEYOND GRADE 12
              </span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="font-serif text-4xl font-bold text-ivory sm:text-5xl lg:text-6xl xl:text-7xl text-balance leading-tight">
                From our family
                <br />
                <span className="text-gold italic">to yours.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-ivory/80 leading-relaxed text-center">
                Five doctors. One family. Raised together on a single conviction —
                that{" "}
                <span className="text-gold">
                  knowledge is not just acquired. It is lived, earned across continents, and passed forward with intention.
                </span>
              </p>
            </FadeUp>

            {/* Stats */}
            <FadeUp delay={0.3}>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-0 border border-gold/20 rounded-xl overflow-hidden backdrop-blur-sm w-fit mx-auto">
                <div className="text-center px-8 py-5 border-r border-gold/20">
                  <h3 className="text-2xl font-serif text-ivory">5</h3>
                  <p className="text-xs text-ivory/60 mt-1 uppercase tracking-wide leading-tight">Doctors on<br />the core team</p>
                </div>
                <div className="text-center px-8 py-5 border-r border-gold/20">
                  <h3 className="text-2xl font-serif text-ivory">$500K+</h3>
                  <p className="text-xs text-ivory/60 mt-1 uppercase tracking-wide leading-tight">In scholarships<br />won by this family</p>
                </div>
                <div className="text-center px-8 py-5 border-r border-gold/20">
                  <h3 className="text-2xl font-serif text-ivory">4</h3>
                  <p className="text-xs text-ivory/60 mt-1 uppercase tracking-wide leading-tight">Continents of<br />lived experience</p>
                </div>
                <div className="text-center px-8 py-5">
                  <h3 className="text-2xl font-serif text-ivory">50+</h3>
                  <p className="text-xs text-ivory/60 mt-1 uppercase tracking-wide leading-tight">Years of academic<br />leadership</p>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── BELIEF / STORY QUOTE ── */}
      <section className="py-20 lg:py-32 bg-[#F8F5F0]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#09091A] leading-snug mb-8">
              "Education, in our home,<br />
              was never optional.<br />
              <em className="italic text-[#B8942A]">It was identity.</em>"
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="w-9 h-px bg-[#C9A84C] mx-auto mb-10" />
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-[#4a4a5a] text-base leading-relaxed mb-5 font-light">
              The Syed family was not built in a boardroom. It was built around dinner tables where academic excellence
              was the standard — where curiosity was celebrated, where borders were meant to be crossed, and where the
              pursuit of knowledge was simply{" "}
              <strong className="font-medium text-[#09091A]">what you did.</strong>
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-[#4a4a5a] text-base leading-relaxed mb-5 font-light">
              Between them, this family has{" "}
              <strong className="font-medium text-[#09091A]">led universities as Vice Chancellor, earned Erasmus Mundus Scholarships</strong>
              {" "}— with one member topping the global ranking list out of applicants worldwide —{" "}
              <strong className="font-medium text-[#09091A]">collectively secured over $500,000 in scholarships and research grants,</strong>{" "}
              published over 175 combined research papers, and built careers across India, South Korea, Europe, Australia,
              the UAE, Malaysia, and Canada.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="font-serif text-lg italic text-[#09091A] leading-relaxed mt-4">
              Now, every ounce of that experience is dedicated to one purpose —<br />
              giving your student the clarity, the strategy, and the mentorship that changes everything.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── CONTRAST ── */}
      <section className="grid md:grid-cols-2">
        <FadeUp>
          <div className="bg-[#0F0F20] px-8 py-16 lg:px-16 lg:py-20 h-full">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-5 h-px bg-[#6B6890]" />
              <span className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-[#6B6890]">
                What most students get
              </span>
            </div>
            <ul className="space-y-5">
              {[
                "Generic advice from people who haven't walked the path",
                "One-size-fits-all guidance built for the average student",
                "20 minutes a year with a counsellor managing 400 students",
                "Surface-level information they could find on Google",
                "Scholarship advice from someone who has never won one",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-sm text-[#6B6890] leading-relaxed">
                  <span className="mt-0.5 shrink-0 text-[#3A3760]">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="bg-navy border-l border-gold/15 px-8 py-16 lg:px-16 lg:py-20 h-full">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-5 h-px bg-gold" />
              <span className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-gold">
                What the Syed family delivers
              </span>
            </div>
            <ul className="space-y-5">
              {[
                "Mentorship from five doctors who personally won what your student is chasing",
                "A strategy built from scratch — around who your student actually is",
                "Dedicated mentors with the time, depth, and commitment they deserve",
                "Unfiltered truth from people who lived these careers across four continents",
                "Scholarship intelligence from a family that collectively won over $500,000",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-sm text-ivory/80 leading-relaxed">
                  <span className="mt-0.5 shrink-0 text-gold">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 lg:py-32 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <FadeUp>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-px bg-gold/50" />
                <span className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-gold">Board of Directors</span>
                <div className="w-8 h-px bg-gold/50" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory leading-snug mb-4">
                Meet the family that has<br />
                <em className="italic text-gold">lived every step of this journey.</em>
              </h2>
              <p className="text-[#6B6890] text-sm leading-relaxed max-w-lg mx-auto">
                Every credential below was earned — across borders, against global competition,
                through decades of relentless discipline. This team doesn't advise from the sidelines.
                They mentor from the front.
              </p>
            </div>
          </FadeUp>

          {/* Founder Card */}
          <FadeUp>
            <div className="relative rounded-2xl border border-gold/30 bg-gradient-to-br from-[#0D0D28] to-[#12122E] p-8 lg:p-14 mb-6 overflow-hidden">
              {/* top gold line */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                {/* Left */}
                <div>
                  <span className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-[0.65rem] font-medium tracking-[0.12em] uppercase px-3.5 py-1.5 rounded mb-7">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Founder
                  </span>
                  <h3 className="font-serif text-3xl lg:text-4xl font-light text-ivory leading-tight mb-1.5">
                    Dr. Nabeel<br />Ahmed Syed
                  </h3>
                  <p className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-gold mb-6">
                    Founder &amp; Director, Beyond Grade 12
                  </p>
                  <p className="text-sm text-[#6B6890] leading-relaxed">
                    The architect of Beyond Grade 12. Dr. Nabeel saw firsthand what a lack of real guidance costs
                    students — and built the solution. Having navigated the scholarship landscape himself, securing{" "}
                    <strong className="font-normal text-[#C8C4BA]">over $140,000 CAD</strong> through grants and research funding across India, South Korea,
                    and Canada, he now dedicates that expertise entirely to the students who deserve the same outcomes.
                    His work spans polymer materials science, industrial R&amp;D, and leading a{" "}
                    <strong className="font-normal text-[#C8C4BA]">$1M+ research portfolio</strong>
                    {" "}— and his mission is ensuring every student under Beyond Grade 12 leaves with the same drive,
                    clarity, and competitive edge he built for himself.
                  </p>
                </div>
                {/* Right — credentials */}
                <div className="flex flex-col gap-3">
                  {[
                    <><strong className="font-normal text-[#C8C4BA]">PhD, Mechanical Engineering</strong> (Composite Materials) — Ontario Tech University, Canada</>,
                    <>MEng — Changwon National University, South Korea · BEng — SJCE, India</>,
                    <>Research Scholar — Advanced Composites Material Lab, South Korea</>,
                    <><strong className="font-normal text-[#C8C4BA]">$140,000+ CAD</strong> secured personally in scholarships and research grants</>,
                    <>R&amp;D Lab Manager · <strong className="font-normal text-[#C8C4BA]">20+ concurrent projects</strong> · <strong className="font-normal text-[#C8C4BA]">$1M+ SR&amp;ED portfolio</strong></>,
                    <>ISO 9001:2015 Certified Internal Auditor</>,
                  ].map((cred, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/[0.03] border border-white/[0.07] rounded-lg px-4 py-3.5">
                      <div className="w-1 h-1 rounded-full bg-gold shrink-0 mt-2" />
                      <p className="text-sm text-[#6B6890] leading-relaxed">{cred}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Board section label */}
          <FadeUp>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-[#6B6890]">Board of Directors</span>
              <div className="flex-1 h-px bg-white/[0.07]" />
            </div>
          </FadeUp>

          {/* Dr Akheel — featured full-width board card */}
          <FadeUp>
            <div className="relative rounded-2xl border border-white/[0.07] bg-[#0B0B22] p-8 lg:p-10 mb-6 overflow-hidden hover:border-gold/25 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gold" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/[0.12] border border-gold/25 flex items-center justify-center font-serif text-gold text-sm shrink-0">
                  AAS
                </div>
                <div>
                  <p className="font-serif text-lg text-ivory leading-tight">Prof. Dr. Akheel Ahmed Syed</p>
                  <p className="text-[0.625rem] font-medium tracking-[0.12em] uppercase text-gold mt-0.5">
                    Board of Directors · Senior Academic Advisor
                  </p>
                </div>
              </div>
              <div className="h-px bg-white/[0.06] mb-6" />
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="flex flex-col gap-2.5">
                  {[
                    <><strong className="font-normal text-[#C8C4BA]">Former Vice Chancellor — 2 Universities, India</strong></>,
                    <>Post-Doctoral Fellow, Europe · IKON Professor, Malaysia</>,
                    <><strong className="font-normal text-[#C8C4BA]">50+ years</strong> of university-level teaching, research &amp; leadership — joined faculty 1974</>,
                    <><strong className="font-normal text-[#C8C4BA]">130+ research publications · 3,174+ total citations · h-index 28</strong></>,
                    <><strong className="font-normal text-[#C8C4BA]">300+ keynote and invited lectures</strong> worldwide — all by invitation</>,
                    <><strong className="font-normal text-[#C8C4BA]">30+ citations by Nobel Laureates</strong> (1985 to present)</>,
                  ].map((cred, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-[#6B6890] leading-relaxed">
                      <div className="w-[3px] h-[3px] rounded-full bg-gold shrink-0 mt-2" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-[#6B6890] leading-relaxed mb-4">
                    Dr. Akheel didn't just study at a university —{" "}
                    <strong className="font-normal text-[#C8C4BA]">he ran two of them.</strong> With over five decades of academic leadership,
                    130+ published works cited over 3,000 times — including by{" "}
                    <strong className="font-normal text-[#C8C4BA]">30+ Nobel Laureates</strong> — and 300+ invited lectures delivered worldwide,
                    he is the kind of authority that no other mentorship program can place in the same room as your student.
                    When he speaks about academic excellence, university systems, and what it takes to reach the very top —
                    he speaks as someone who has{" "}
                    <strong className="font-normal text-[#C8C4BA]">shaped it for 50 years.</strong>
                  </p>
                  <div className="inline-flex items-center gap-2 bg-gold/[0.08] border border-gold/25 rounded-md px-3.5 py-2.5">
                    <span className="text-gold text-sm">★</span>
                    <span className="text-xs text-[#E8D08A] leading-snug">Cited by 30+ Nobel Laureates · h-index 28 · 3,174+ citations</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* 3-column board grid */}
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>

            {/* Dr. Raihan */}
            <StaggerItem>
              <div className="relative rounded-2xl border border-white/[0.07] bg-[#0B0B22] p-8 flex flex-col gap-5 overflow-hidden hover:border-gold/25 transition-all hover:-translate-y-0.5 h-full">
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#534AB7]" />
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-[rgba(83,74,183,0.15)] border border-[rgba(83,74,183,0.3)] flex items-center justify-center font-serif text-[#AFA9EC] text-sm shrink-0">RS</div>
                  <div>
                    <p className="font-serif text-lg text-ivory leading-tight">Dr. Raihan Taqui Syed</p>
                    <p className="text-[0.625rem] font-medium tracking-[0.12em] uppercase text-gold mt-0.5">Board of Directors</p>
                  </div>
                </div>
                <div className="h-px bg-white/[0.06]" />
                <div className="flex flex-col gap-2 flex-1">
                  {[
                    <><strong className="font-normal text-[#9994C0]">DBA</strong> — University of Bradford, UK</>,
                    <><strong className="font-normal text-[#9994C0]">MBA</strong> — James Cook University, Australia (High-Performing Student Award)</>,
                    <>Assistant Professor — UAE University, <strong className="font-normal text-[#9994C0]">QS Top 300 globally</strong></>,
                    <>Founding Director — Center for Entrepreneurship &amp; Business Incubation</>,
                    <><strong className="font-normal text-[#9994C0]">20+ publications · 20+ keynote addresses · 25+ countries</strong></>,
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[0.8125rem] text-[#6B6890] leading-relaxed">
                      <div className="w-[3px] h-[3px] rounded-full bg-gold shrink-0 mt-2" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[0.8125rem] text-[#6B6890] leading-relaxed">
                  Three degrees. Three continents. Fifteen years of lived international experience across Europe,
                  the Middle East, South Asia and the UK. Currently a professor at a globally ranked university,
                  Dr. Raihan develops not just the application — but the{" "}
                  <strong className="font-normal text-[#C8C4BA]">mindset of a future leader.</strong>
                </p>
                <div className="inline-flex items-center gap-1.5 bg-gold/[0.07] border border-gold/20 rounded px-3 py-1.5 w-fit">
                  <span className="text-gold text-xs">★</span>
                  <span className="text-[0.7rem] text-[#E8D08A] leading-snug">Erasmus Mundus Scholar — 1 of 3 selected from all of Asia</span>
                </div>
              </div>
            </StaggerItem>

            {/* Dr. Noeman */}
            <StaggerItem>
              <div className="relative rounded-2xl border border-white/[0.07] bg-[#0B0B22] p-8 flex flex-col gap-5 overflow-hidden hover:border-gold/25 transition-all hover:-translate-y-0.5 h-full">
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#1D9E75]" />
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-[rgba(29,158,117,0.12)] border border-[rgba(29,158,117,0.25)] flex items-center justify-center font-serif text-[#5DCAA5] text-sm shrink-0">NT</div>
                  <div>
                    <p className="font-serif text-lg text-ivory leading-tight">Dr. Syed Noeman Taqui</p>
                    <p className="text-[0.625rem] font-medium tracking-[0.12em] uppercase text-gold mt-0.5">Board of Directors</p>
                  </div>
                </div>
                <div className="h-px bg-white/[0.06]" />
                <div className="flex flex-col gap-2 flex-1">
                  {[
                    <><strong className="font-normal text-[#9994C0]">PhD, Chemistry</strong> — Malaysia · Masters — India</>,
                    <><strong className="font-normal text-[#9994C0]">15 published papers</strong> in international journals of repute</>,
                    <>Co-author — <em>Basics of Chemistry for Pre-University Students</em></>,
                    <>10 international conference presentations · 2 awards for technical excellence</>,
                    <>6+ years research across Analytical, Physical &amp; Environmental Chemistry</>,
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[0.8125rem] text-[#6B6890] leading-relaxed">
                      <div className="w-[3px] h-[3px] rounded-full bg-gold shrink-0 mt-2" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[0.8125rem] text-[#6B6890] leading-relaxed">
                  Dr. Noeman{" "}
                  <strong className="font-normal text-[#C8C4BA]">literally wrote the book</strong> on helping students learn chemistry at the
                  pre-university level. With 15 published papers and an analytical precision that defines everything
                  he does, he brings a depth of academic rigour to student mentorship that is genuinely rare.
                </p>
              </div>
            </StaggerItem>

            {/* Dr. Usman */}
            <StaggerItem>
              <div className="relative rounded-2xl border border-white/[0.07] bg-[#0B0B22] p-8 flex flex-col gap-5 overflow-hidden hover:border-gold/25 transition-all hover:-translate-y-0.5 h-full">
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#378ADD]" />
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-[rgba(55,138,221,0.12)] border border-[rgba(55,138,221,0.25)] flex items-center justify-center font-serif text-[#85B7EB] text-sm shrink-0">US</div>
                  <div>
                    <p className="font-serif text-lg text-ivory leading-tight">Dr. Usman Taqui Syed</p>
                    <p className="text-[0.625rem] font-medium tracking-[0.12em] uppercase text-gold mt-0.5">Board of Directors</p>
                  </div>
                </div>
                <div className="h-px bg-white/[0.06]" />
                <div className="flex flex-col gap-2 flex-1">
                  {[
                    <><strong className="font-normal text-[#9994C0]">PhD &amp; Masters</strong> — Europe (6 institutions across Portugal, Netherlands, Czech Republic, France, Belgium &amp; Italy)</>,
                    <>Erasmus Mundus Doctoral Fellowship — <strong className="font-normal text-[#9994C0]">€129,900 · Topped global ranking list</strong></>,
                    <>One of <strong className="font-normal text-[#9994C0]">5 scholars selected worldwide</strong> for the doctoral programme</>,
                    <>Specialisation — Membrane Engineering &amp; Science</>,
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[0.8125rem] text-[#6B6890] leading-relaxed">
                      <div className="w-[3px] h-[3px] rounded-full bg-gold shrink-0 mt-2" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[0.8125rem] text-[#6B6890] leading-relaxed">
                  Dr. Usman didn't just win the Erasmus Mundus scholarship —{" "}
                  <strong className="font-normal text-[#C8C4BA]">he topped the global ranking list.</strong>{" "}
                  Selected as one of five scholars worldwide for a €129,900 fellowship across six European nations,
                  his journey is the living proof of what strategic academic positioning achieves at the highest level.
                </p>
                <div className="inline-flex items-center gap-1.5 bg-gold/[0.07] border border-gold/20 rounded px-3 py-1.5 w-fit">
                  <span className="text-gold text-xs">★</span>
                  <span className="text-[0.7rem] text-[#E8D08A] leading-snug">Global #1 — Erasmus Mundus Doctoral Fellowship · €129,900</span>
                </div>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>

      {/* ── AUTHORITY STATS ── */}
      <section className="py-20 lg:py-28 bg-[#F8F5F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-6 h-px bg-[#C9A84C] opacity-50" />
              <span className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[#B8942A]">The numbers speak</span>
              <div className="w-6 h-px bg-[#C9A84C] opacity-50" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#09091A] leading-snug text-center">
              A family whose credentials<br />
              <em className="italic text-[#B8942A]">are impossible to ignore.</em>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-black/10 border border-black/10 rounded-xl overflow-hidden">
              {[
                { num: "$500K+", label: "in scholarships and research grants won collectively by this family — they teach exactly what they have lived" },
                { num: "3,174+", label: "citations of Dr. Akheel's work alone — including over 30 by Nobel Laureates across four decades" },
                { num: "175+", label: "combined research publications across the board — in the world's most respected indexed journals" },
                { num: "2", label: "Erasmus Mundus Scholars on the same team — one topped the global ranking. Both in the same family." },
              ].map(({ num, label }) => (
                <div key={num} className="bg-[#F8F5F0] px-8 py-10 flex flex-col gap-2">
                  <div className="w-6 h-0.5 bg-[#C9A84C] rounded-sm mb-1.5" />
                  <p className="font-serif text-4xl font-light text-[#09091A]">{num}</p>
                  <p className="text-sm text-[#6B6880] leading-relaxed font-light">{label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── PROMISE ── */}
      <section className="py-20 lg:py-32 bg-navy text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-px bg-gold/50" />
              <span className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-gold">Our promise</span>
              <div className="w-8 h-px bg-gold/50" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory leading-snug max-w-2xl mx-auto mb-4">
              We don't just prepare students
              for the future. We position them
              to <em className="italic text-gold">own it.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="w-9 h-px bg-gold/50 mx-auto my-8" />
            <p className="text-[#6B6890] text-base leading-relaxed max-w-xl mx-auto mb-12">
              Beyond Grade 12 was built by a family that earned everything the hard way — through discipline,
              borders crossed, and decades of uncompromising excellence. That is the standard we hold for
              every student we work with. No exceptions.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
             {["Clarity", "Strategy", "Confidence", "Results"].map((w, i, arr) => (
  <span key={w} className="flex items-center gap-2">
    <span className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-gold">
      {w}
    </span>
    {i < arr.length - 1 && (
      <span className="text-[#3A3760] text-base">·</span>
    )}
  </span>
))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-32 bg-gold">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              From our family to yours —<br />
              let's <em className="italic">build this together.</em>
            </h2>
            <p className="mt-6 text-navy/80 max-w-2xl mx-auto text-lg">
              Limited spots · Personalised mentorship · Real outcomes
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