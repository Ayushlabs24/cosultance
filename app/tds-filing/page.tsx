import ServicePageLayout, { FAQ, ProcessStep } from "@/components/service-page-layout"

const overview = (
  <>
    <p>
      Tax Deducted at Source (TDS) returns must be filed quarterly by entities who have deducted tax while making payments like salary, rent, professional fees, etc.
    </p>
    <p>
      Our team ensures accurate computation of TDS, timely payment, and error-free filing of TDS returns (Form 24Q, 26Q, etc.).
    </p>
  </>
)

const benefits = [
  "Timely Compliance",
  "Avoidance of Late Filing Fees",
  "Correct TDS Credit for Payees",
  "Hassle-free Correction Filing",
]

const process: ProcessStep[] = [
  {
    title: "Data Collection",
    description: "Gathering payment and deduction details.",
  },
  {
    title: "Challan Verification",
    description: "Verifying tax deposit challans.",
  },
  {
    title: "FVU Generation",
    description: "Generating the File Validation Utility file.",
  },
  {
    title: "Return Uploading",
    description: "Uploading the trusted return to the TRACES/Income Tax portal.",
  },
  {
    title: "Form 16/16A",
    description: "Generating TDS certificates for deductees.",
  },
]

const faqs: FAQ[] = [
  {
    question: "What is the due date for TDS filing?",
    answer: "Generally, it is the 31st of the month following the end of the quarter (e.g., July 31st for Q1).",
  },
  {
    question: "What is the penalty for late filing?",
    answer: "₹200 per day of delay, up to the amount of TDS deducted.",
  },
]

export default function TDSFiling() {
  return (
    <ServicePageLayout
      serviceName="TDS Filing"
      heroTitle="Hassle-free TDS Return Filing"
      heroDescription="Expert assistance for accurate and timely TDS compliance."
      heroImage="/images/tax-filing.webp"
      overview={overview}
      benefits={benefits}
      process={process}
      faqs={faqs}
      variant={2}
    />
  )
}
