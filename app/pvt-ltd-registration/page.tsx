import ServicePageLayout, { FAQ, ProcessStep } from "@/components/service-page-layout"

const overview = (
  <>
    <p>
      A Private Limited Company (Pvt Ltd) is the most popular legal structure for startups and growing businesses in India. It offers limited liability protection to its shareholders and is preferred by investors.
    </p>
    <p>
      Our expert team handles the entire incorporation process—from name approval to obtaining the Certificate of Incorporation—ensuring a hassle-free experience.
    </p>
  </>
)

const benefits = [
  "Limited Liability Protection",
  "Separate Legal Entity Status",
  "Easy Transferability of Shares",
  "Preferred by VCs and Investors",
  "Perpetual Succession",
  "Enhanced Credibility",
]

const process: ProcessStep[] = [
  {
    title: "DSC & DIN",
    description: "Obtaining Digital Signature Certificates and Director Identification Numbers.",
  },
  {
    title: "Name Approval",
    description: "Reserving a unique name for your company through the RUN service.",
  },
  {
    title: "MOA & AOA",
    description: "Drafting the Memorandum and Articles of Association.",
  },
  {
    title: "Incorporation Filing",
    description: "Filing the SPicE+ form with the Ministry of Corporate Affairs (MCA).",
  },
  {
    title: "Get COI & PAN/TAN",
    description: "Receiving the Certificate of Incorporation along with PAN and TAN.",
  },
]

const faqs: FAQ[] = [
  {
    question: "What is the minimum capital required?",
    answer: "There is no minimum paid-up capital requirement for a Private Limited Company anymore.",
  },
  {
    question: "How many directors are needed?",
    answer: "A minimum of 2 directors and a maximum of 15 are allowed.",
  },
]

export default function PvtLtdRegistration() {
  return (
    <ServicePageLayout
      serviceName="Pvt Ltd Registration"
      heroTitle="Start Your Private Limited Company"
      heroDescription="The most trusted business structure for startups. Get incorporated in 10-15 days."
      heroImage="/images/business-services.webp"
      overview={overview}
      benefits={benefits}
      process={process}
      faqs={faqs}
      variant={2}
    />
  )
}
