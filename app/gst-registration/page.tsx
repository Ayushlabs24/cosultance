import ServicePageLayout, { FAQ, ProcessStep } from "@/components/service-page-layout"

const overview = (
  <>
    <p>
      GST is a single tax on the supply of goods and services, right from the manufacturer to the consumer. GST registration is mandatory for businesses with turnover exceeding the threshold limit.
    </p>
    <p>
      We simplify the GST registration process, helping you obtain your GSTIN quickly and ensuring your business is compliant from day one.
    </p>
  </>
)

const benefits = [
  "Legal Recognition of Business",
  "Interstate Sales Permitted",
  "Input Tax Credit Eligibility",
  "E-commerce Sales Enabled",
]

const process: ProcessStep[] = [
  {
    title: "Document Collection",
    description: "Gathering PAN, Aadhar, and business proof documents.",
  },
  {
    title: "Application Filing",
    description: "Submitting REG-01 on the GST Portal.",
  },
  {
    title: "ARN Generation",
    description: "Receiving the Application Reference Number.",
  },
  {
    title: "Verification",
    description: "Officer verifies documents (and premises if needed).",
  },
  {
    title: "GSTIN Allotment",
    description: "Receiving the GST Certificate (REG-06).",
  },
]

const faqs: FAQ[] = [
  {
    question: "Is GST mandatory for online sellers?",
    answer: "Yes, GST registration is mandatory for e-commerce operators and sellers, regardless of turnover.",
  },
  {
    question: "Can I voluntarily register for GST?",
    answer: "Yes, you can register voluntarily to claim Input Tax Credit and boost business credibility.",
  },
]

export default function GSTRegistration() {
  return (
    <ServicePageLayout
      serviceName="GST Registration"
      heroTitle="Seamless GST Registration"
      heroDescription="Get your GSTIN quickly and effortlessly. Compliance made simple for your business."
      heroImage="/images/business-services.webp"
      overview={overview}
      benefits={benefits}
      process={process}
      faqs={faqs}
      variant={3}
    />
  )
}
