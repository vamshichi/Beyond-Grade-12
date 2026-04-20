export const programs = [
  {
    slug: "career-discovery",
    title: "Career Discovery Experience",
    subtitle: "Find your path with clarity",
    tag: "Flagship",
    description: "Real professionals. Real careers. Real direction. One month that changes everything.",
    duration: "1 Month",
    sessions: "8 Sessions",
    cohortSize: "Limited to 25",
    price: "$200",
    features: [
      "Personalized career aptitude assessment",
      "1-on-1 mentorship with industry experts",
      "Real-world exposure through internships",
      "Structured 4-week discovery framework",
      "Direct access to exclusive mentor network",
      "Career path clarity and action plan"
    ],
    highlights: [
      {
        label: "Program Duration",
        value: "4 Weeks"
      },
      {
        label: "Mentorship Sessions",
        value: "8+"
      },
      {
        label: "Cohort Size",
        value: "Limited to 25"
      }
    ],
    universities: ["Google", "Microsoft", "Amazon", "Deloitte", "Goldman Sachs"],
    cta: "Start Discovery",
    fullDescription: "Our Career Discovery program provides clarity on your professional path through personalized assessments, mentor guidance, and real-world exposure."
  },
  {
    slug: "future-builder",
    title: "Future Builder Program",
    subtitle: "Build your foundation for success",
    tag: "1-on-1",
    description: "Your child is capable of more than any school will ever show them. Advanced mentoring for accelerated growth.",
    duration: "3 Months",
    sessions: "12 Sessions",
    cohortSize: "Limited to 15",
    price: "$300",
    features: [
      "Personalized learning plan development",
      "Dedicated 1-on-1 mentor assignment",
      "Advanced curriculum acceleration",
      "University preparation guidance",
      "Skill development workshops",
      "Monthly progress assessments"
    ],
    highlights: [
      {
        label: "Program Duration",
        value: "3 Months"
      },
      {
        label: "Mentorship Sessions",
        value: "12+"
      },
      {
        label: "Student to Mentor",
        value: "1-on-1"
      }
    ],
    universities: ["MIT", "Stanford", "Yale", "Princeton", "Harvard"],
    cta: "Enroll Now",
    fullDescription: "The Future Builder Program is designed to unlock your full potential through personalized 1-on-1 mentorship and advanced curriculum guidance."
  },
  {
    slug: "university-accelerator",
    title: "University Admissions Accelerator",
    subtitle: "Grade 12 is the time to execute",
    tag: "Advanced",
    description: "Grade 12 is not the time to figure it out. It's the time to execute. Comprehensive university prep program.",
    duration: "6 Months",
    sessions: "24 Sessions",
    cohortSize: "Limited to 20",
    price: "$500",
    features: [
      "University shortlisting and strategy",
      "Essay and SOP expert review",
      "Interview preparation and mocks",
      "Application timeline management",
      "Financial aid consultation",
      "Admissions expert guidance"
    ],
    highlights: [
      {
        label: "Program Duration",
        value: "6 Months"
      },
      {
        label: "Mentorship Sessions",
        value: "24+"
      },
      {
        label: "Cohort Size",
        value: "Limited to 20"
      }
    ],
    universities: ["MIT", "Stanford", "Harvard", "Oxford", "Cambridge", "IIT"],
    cta: "Apply Now",
    fullDescription: "Our comprehensive University Admissions Accelerator provides end-to-end support from university selection through acceptance."
  }
]

export type Program = (typeof programs)[number]
