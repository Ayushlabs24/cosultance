import ServicePageLayout, { FAQ, ProcessStep } from "@/components/service-page-layout"

const overview = (
  <>
    <p>
      Business Valuation is critical for fundraising, mergers & acquisitions, and regulatory compliance (FEMA/Income Tax/Companies Act).
    </p>
    <p>
      Our Registered Valuers provide accurate and defensible valuation reports for startups and established companies.
    </p>
  </>
)

const benefits = [
  "Know True Business Worth",
  "Essential for Fundraising",
  "Regulatory Compliance",
  "Strategic Decision Making",
]

const process: ProcessStep[] = [
  {
    title: "Data Analysis",
    description: "Reviewing financial models and historical data.",
  },
  {
    title: "Method Selection",
    description: "Choosing DCF, NAV, or Comparable Company method.",
  },
  {
    title: "Draft Valuation",
    description: "Preliminary value assessment and discussion.",
  },
  {
    title: "Final Report",
    description: "Issuing signed Valuation Report.",
  },
]

const faqs: FAQ[] = [
  {
    question: "Why do I need a valuation report?",
    answer: "Investors require it to determine equity stake, and laws require it for issuing shares at a premium.",
  },
]

export default function ValuationServices() {
  return (
    <ServicePageLayout
      serviceName="Business Valuation"
      heroTitle="Know Your Business Worth"
      heroDescription="Professional valuation services for fundraising and compliance."
      heroImage="/images/business-services.webp"
      overview={overview}
      benefits={benefits}
      process={process}
      faqs={faqs}
      variant={3}
    />
  )
}
