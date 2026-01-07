import ServicePageLayout, { FAQ, ProcessStep } from "@/components/service-page-layout"

const overview = (
  <>
    <p>
      Intellectual Property Rights (IPR) are crucial for protecting your innovative creations, designs, and brand identity.
    </p>
    <p>
      Our comprehensive IPR services cover everything from strategy and search to filing and enforcement for patents, copyrights, and designs.
    </p>
  </>
)

const benefits = [
  "Monopoly Rights over Creation",
  "Commercialization Opportunities",
  "Enhances Business Valuation",
  "Legal Remedy against Copiers",
]

const process: ProcessStep[] = [
  {
    title: "Consultation",
    description: "Understanding your IP assets.",
  },
  {
    title: "Search & Analysis",
    description: "Checking novelty and availability.",
  },
  {
    title: "Drating & Filing",
    description: "Professional drafting of applications.",
  },
  {
    title: "Prosecution",
    description: "Handling office actions and hearings.",
  },
]

const faqs: FAQ[] = [
  {
    question: "What can be protected under IPR?",
    answer: "Inventions (Patent), Brand names (Trademark), Creative works (Copyright), and Industrial Designs.",
  },
]

export default function IPRServices() {
  return (
    <ServicePageLayout
      serviceName="IPR Services"
      heroTitle="Complete Intellectual Property Protection"
      heroDescription="Safeguard your innovations and creativity with our expert IPR services."
      heroImage="/images/legal-services.webp"
      overview={overview}
      benefits={benefits}
      process={process}
      faqs={faqs}
      variant={5}
    />
  )
}
