import ServicePageLayout, { FAQ, ProcessStep, ServiceType } from "@/components/service-page-layout"

const overview = (
  <>
    <p>
      Goods and Services Tax (GST) is a comprehensive indirect tax levied on the supply of goods and services in India. All businesses registered under GST are required to file periodic returns.
    </p>
    <p>
      Our GST return filing service ensures that your business complies with all GST regulations and files returns accurately and on time, helping you avoid penalties and maintain a good compliance rating.
    </p>
  </>
)

const benefits = [
  "Timely filing of GST returns to avoid penalties",
  "Expert assistance from qualified professionals",
  "Accurate reconciliation of input tax credits",
  "Compliance with the latest GST regulations",
  "Reduced risk of errors and discrepancies",
  "Time and resource savings for your business",
]

const types: ServiceType[] = [
  {
    name: "GSTR-1",
    description: "Details of outward supplies of goods or services",
    dueDate: "11th of the following month",
  },
  {
    name: "GSTR-3B",
    description: "Monthly summary return with payment of tax",
    dueDate: "20th of the following month",
  },
  {
    name: "GSTR-4",
    description: "Return for taxpayers who have opted for composition scheme",
    dueDate: "18th of the month following the quarter",
  },
  {
    name: "GSTR-9",
    description: "Annual return for regular taxpayers",
    dueDate: "31st December of the following financial year",
  },
]

const process: ProcessStep[] = [
  {
    title: "Data Collection",
    description: "We collect all necessary data including sales, purchases, and other financial transactions for the filing period.",
  },
  {
    title: "Data Verification",
    description: "Our experts verify the collected data for accuracy and completeness to ensure error-free filing.",
  },
  {
    title: "Reconciliation",
    description: "We reconcile your input tax credits with vendor data to maximize eligible credits and identify discrepancies.",
  },
  {
    title: "Return Preparation",
    description: "Based on the verified data, we prepare your GST returns in the required format.",
  },
  {
    title: "Filing & Confirmation",
    description: "After your approval, we file the returns on the GST portal and provide you with filing confirmation.",
  },
]

const faqs: FAQ[] = [
  {
    question: "What is GST Return Filing?",
    answer: "GST Return Filing is the process of submitting details of your business's sales, purchases, and tax payments to the government through the GST portal. It's a mandatory compliance requirement for all GST-registered businesses in India.",
  },
  {
    question: "How often do I need to file GST returns?",
    answer: "The frequency depends on your business type. Regular taxpayers need to file GSTR-1 and GSTR-3B monthly. Composition scheme taxpayers file quarterly returns. Annual returns (GSTR-9) are filed once a year.",
  },
  {
    question: "What happens if I miss the GST filing deadline?",
    answer: "Missing the deadline results in late fees of ₹50-₹200 per day until you file the return. Additionally, you may face interest charges on any tax liability and potential restrictions on issuing tax invoices.",
  },
]

export default function GSTReturnFilingPage() {
  return (
    <ServicePageLayout
      serviceName="GST Return Filing"
      heroTitle="GST Return Filing Services"
      heroDescription="File your GST returns accurately and on time with our expert GST return filing services. Our team ensures compliance with all GST regulations."
      heroImage="/images/tax-filing.webp"
      overview={overview}
      benefits={benefits}
      types={types}
      process={process}
      faqs={faqs}
      variant={1}
    />
  )
}
