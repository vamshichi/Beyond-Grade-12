"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who is the Elite Pathway program designed for?",
    answer: "The Elite Pathway is designed for high school students in Grades 9-12 who are serious about gaining clarity on their career direction and securing admission to top universities. It's ideal for ambitious students who want personalized guidance rather than generic advice."
  },
  {
    question: "How is Beyond Grade 12 different from school counseling?",
    answer: "School counselors are often stretched thin, serving hundreds of students with limited time per student. Beyond Grade 12 provides personalized 1-on-1 mentorship with experts who have graduated from top universities and have deep industry experience. Our structured 12-week program offers comprehensive support that goes far beyond what school counseling can provide."
  },
  {
    question: "What is the cohort model?",
    answer: "We limit each cohort to 25 students to ensure personalized attention and quality mentorship. New cohorts begin every quarter. Early application is recommended as spots fill quickly."
  },
  {
    question: "How much does the program cost?",
    answer: "Program fees vary based on the level of support and duration. We offer different tiers to accommodate various needs. Schedule a free consultation to discuss your requirements and receive a customized quote."
  },
  {
    question: "Do you offer guidance for international universities?",
    answer: "Yes! Our mentors have experience with university applications across the US, UK, Canada, Australia, Singapore, and Europe. We provide guidance for both domestic and international institutions based on your goals."
  },
  {
    question: "What if my child doesn't know what career they want?",
    answer: "That's exactly what we help with! Many students come to us feeling confused or overwhelmed. Our Discovery & Assessment phase is specifically designed to help students uncover their strengths, interests, and potential career paths through scientific assessments and expert guidance."
  },
  {
    question: "How involved should parents be in the process?",
    answer: "We believe parents are important partners in this journey. While the mentorship is student-focused, we provide regular progress updates and include parent consultations at key milestones. We value your insights about your child while ensuring the student takes ownership of their path."
  },
  {
    question: "What happens after the 12-week program ends?",
    answer: "Students who complete the Elite Pathway gain lifetime access to our alumni network and community. We also offer continued support packages for ongoing mentorship, interview prep, and application review as needed."
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-gold">
            FAQ
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            Have questions? We&apos;ve got answers. If you don&apos;t find what you&apos;re looking for, 
            feel free to reach out.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12 lg:mt-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="rounded-lg border border-charcoal/10 bg-ivory px-6 data-[state=open]:border-gold/30"
              >
                <AccordionTrigger className="py-5 text-left font-serif text-lg font-medium text-navy hover:no-underline [&[data-state=open]]:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-charcoal/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
