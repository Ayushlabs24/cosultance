import ServicePageLayout, { FAQ, ProcessStep } from "@/components/service-page-layout"

const overview = (
  <>
    <p>
      Food Safety and Standards Authority of India (FSSAI) license is mandatory for anyone involved in the food business—manufacturing, processing, storage, distribution, or sale.
    </p>
    <p>
      We help you identify the right category of license (Basic, State, or Central) and handle the end-to-end registration process.
    </p>
  </>
)

const benefits = [
  "Legal compliance to operate food business",
  "Consumer Trust and Safety assurance",
  "Use of FSSAI Logo on packaging",
  "Avoidance of heavy fines and shutdown",
]

const process: ProcessStep[] = [
  {
    title: "Document Review",
    description: "Assessing business scale and location.",
  },
  {
    title: "Application Filing",
    description: "Submitting Form A (Basic) or Form B (License).",
  },
  {
    title: "Govt Query Response",
    description: "Handling any clarifications raised by the food inspector.",
  },
  {
    title: "Inspection",
    description: "Facilitating premise inspection if required.",
  },
  {
    title: "License Issue",
    description: "Receiving the 14-digit FSSAI license number.",
  },
]

const faqs: FAQ[] = [
  {
    question: "Do home bakers need FSSAI?",
    answer: "Yes, even small home-based food businesses require at least a Basic FSSAI Registration.",
  },
  {
    question: "What is the difference between Registration and License?",
    answer: "Registration is for turnover up to ₹12L. State License is for ₹12L-₹20Cr turnover. Central License is for turnover > ₹20Cr or importers/exporters.",
  },
]

export default function FSSAIRegistration() {
  return (
    <ServicePageLayout
      serviceName="FSSAI Registration"
      heroTitle="Food License Registration"
      heroDescription="Ensure food safety and build trust with a valid FSSAI license for your food business."
      heroImage="/images/business-services.webp"
      overview={overview}
      benefits={benefits}
      process={process}
      faqs={faqs}
      variant={4}
    />
  )
}
