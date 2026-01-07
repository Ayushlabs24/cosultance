import ServicePageLayout, { FAQ, ProcessStep } from "@/components/service-page-layout"

const overview = (
  <>
    <p>
      Solid legal contracts are the foundation of secure business relationships. Poorly drafted agreements can lead to disputes and losses.
    </p>
    <p>
      We draft, review, and negotiate various legal documents including Co-founder Agreements, SHA, ESOPs, Service Agreements, and Vendor Contracts.
    </p>
  </>
)

const benefits = [
  "Mitigate Legal Risks",
  "Clarity in Obligations",
  "Dispute Resolution Mechanism",
  "Professional Credibility",
]

const process: ProcessStep[] = [
  {
    title: "Requirement Gathering",
    description: "Understanding the terms of the deal.",
  },
  {
    title: "Drafting",
    description: "Creating the first draft of the agreement.",
  },
  {
    title: "Review & Iteration",
    description: "Incorporating feedback and changes.",
  },
  {
    title: "Finalization",
    description: "Delivering the execution-ready document.",
  },
]

const faqs: FAQ[] = [
  {
    question: "Why can't I use a template from the internet?",
    answer: "Generic templates may not cover specific risks relevant to your business model and jurisdiction, leaving you exposed.",
  },
]

export default function LegalDrafting() {
  return (
    <ServicePageLayout
      serviceName="Legal Drafting"
      heroTitle="Rock-Solid Legal Agreements"
      heroDescription="Protect your business interests with professionally drafted legal documents."
      heroImage="/images/legal-services.webp"
      overview={overview}
      benefits={benefits}
      process={process}
      faqs={faqs}
      variant={4}
    />
  )
}
