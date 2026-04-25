import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { ProblemSection } from "@/components/sections/problem"
import { SolutionSection } from "@/components/sections/solution"
import { FlagshipProgramSection } from "@/components/sections/flagship-program"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us"
import { MentorsSection } from "@/components/sections/mentor"
import { ResultsSection } from "@/components/sections/results"
import { ParentsSection } from "@/components/sections/parents"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq"
import { ContactSection } from "@/components/sections/contact"
import { VisionMissionSection } from "@/components/sections/vision-mission-section"
import { ProgramsSection } from "@/components/sections/ProgramsSection"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <VisionMissionSection />
        <SolutionSection />
        {/* <FlagshipProgramSection /> */}
        <ProgramsSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <MentorsSection />
        {/* <MentorsSection /> */}
        <ResultsSection />
        {/* <ParentsSection /> */}
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
