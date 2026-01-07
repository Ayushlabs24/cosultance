import ServicePageLayout, { FAQ, ProcessStep } from "@/components/service-page-layout"

const overview = (
  <>
    <p>
      Every company (Pvt Ltd, OPC, LLP) must file annual returns and financial statements with the Ministry of Corporate Affairs (MCA).
    </p>
    <p>
      Our team handles all MCA compliance requirements including AOC-4, MGT-7, and event-based filings to keep your company's status active and compliant.
    </p>
  </>
)

const benefits = [
  "Stay Active Status",
  "Avoid Heavy Penalties",
  "Director Disqualification Protection",
  "Good Corporate Governance",
]

const process: ProcessStep[] = [
  {
    title: "Documentation",
    description: "Reviewing financial statements and board reports.",
  },
  {
    title: "Form Preparation",
    description: "Preparing AOC-4 (Financials) and MGT-7 (Annual Return).",
  },
  {
    title: "Certification",
    description: "Certifying forms by a Practicing CA/CS.",
  },
  {
    title: "Filing",
    description: "Uploading forms to MCA V3 portal.",
  },
]

const faqs: FAQ[] = [
  {
    question: "When is the due date for MCA annual filing?",
    answer: "AOC-4 is due within 30 days of the AGM, and MGT-7 within 60 days of the AGM.",
  },
  {
    question: "What happens if I don't file?",
    answer: "Penalties are high (₹100 per day per form), and directors can be disqualified for non-filing for 3 consecutive years.",
  },
]

export default function MCAFiling() {
  return (
    <ServicePageLayout
      serviceName="MCA Filing"
      heroTitle="Company Annual Compliance"
      heroDescription="Seamless ROC filing services to keep your company compliant and active."
      heroImage="/images/legal-services.webp"
      overview={overview}
      benefits={benefits}
      process={process}
      faqs={faqs}
      variant={4}
    />
  )
}
