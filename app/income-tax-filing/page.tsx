import ServicePageLayout, { FAQ, ProcessStep } from "@/components/service-page-layout"

const overview = (
  <>
    <p>
      Income Tax Return (ITR) filing is an annual obligation for individuals and businesses earning income above the taxable limit.
    </p>
    <p>
      We offer personalized tax planning and filing solutions to maximize your refunds and ensure full compliance with the Income Tax Act.
    </p>
  </>
)

const benefits = [
  "Maximize Tax Refunds",
  "Avoid Notices & Scrutiny",
  "Easy Loan Approvals",
  "Carry Forward of Losses",
  "Visa Processing Support",
]

const process: ProcessStep[] = [
  {
    title: "Document Collection",
    description: "Form 16, Bank Statements, Investment Proofs, etc.",
  },
  {
    title: "Computation",
    description: "Calculating total taxable income and tax liability.",
  },
  {
    title: "Tax Optimization",
    description: "Suggesting legitimate ways to save tax.",
  },
  {
    title: "Filing ITR",
    description: "Submitting the return (ITR-1 to ITR-7) online.",
  },
  {
    title: "Verification",
    description: "E-verifying the return.",
  },
]

const faqs: FAQ[] = [
  {
    question: "Is ITR mandatory if my income is tax-free?",
    answer: "If your gross total income exceeds the basic exemption limit (₹2.5L or ₹3L), filing is mandatory regardless of tax liability.",
  },
  {
    question: "Can I revise my return if I made a mistake?",
    answer: "Yes, you can file a revised return u/s 139(5) before the end of the assessment year.",
  },
]

export default function IncomeTaxFiling() {
  return (
    <ServicePageLayout
      serviceName="Income Tax Filing"
      heroTitle="Expert ITR Filing Services"
      heroDescription="Maximize your refunds and stay compliant with our CA-assisted tax filing."
      heroImage="/images/tax-filing.webp"
      overview={overview}
      benefits={benefits}
      process={process}
      faqs={faqs}
      variant={3}
    />
  )
}
