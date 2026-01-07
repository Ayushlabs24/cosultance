import ServicePageLayout, { FAQ, ProcessStep } from "@/components/service-page-layout"

const overview = (
  <>
    <p>
      Copyright protects original literary, dramatic, musical, and artistic works. It gives the creator exclusive rights to use and distribute their work.
    </p>
    <p>
      We assist authors, artists, and software developers in registering their copyrights to prevent unauthorized use and infringement.
    </p>
  </>
)

const benefits = [
  "Legal Proof of Ownership",
  "Right to Reproduce & Distribute",
  "Protection for Software Code",
  "Ability to Sue for Infringement",
]

const process: ProcessStep[] = [
  {
    title: "Application",
    description: "Filing Form XIV with the Copyright Office.",
  },
  {
    title: "Diary Number",
    description: "Receiving the diary number for tracking.",
  },
  {
    title: "Examination",
    description: "Mandatory waiting period of 30 days for objections.",
  },
  {
    title: "Registration",
    description: "Issuance of Copyright Registration Certificate.",
  },
]

const faqs: FAQ[] = [
  {
    question: "How long is copyright valid?",
    answer: "Generally, it lasts for the lifetime of the author plus 60 years.",
  },
]

export default function CopyrightRegistration() {
  return (
    <ServicePageLayout
      serviceName="Copyright Registration"
      heroTitle="Protect Your Creative Work"
      heroDescription="Secure legal ownership of your content, software, and artistic creations."
      heroImage="/images/business-services.webp"
      overview={overview}
      benefits={benefits}
      process={process}
      faqs={faqs}
      variant={1}
    />
  )
}
