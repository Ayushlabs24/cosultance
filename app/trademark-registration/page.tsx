import ServicePageLayout, { FAQ, ProcessStep } from "@/components/service-page-layout"

const overview = (
  <>
    <p>
      A trademark protects your brand identity—name, logo, slogan—from being used by competitors. It is a crucial asset for any business.
    </p>
    <p>
      Our trademark experts conduct thorough searches and handle the entire registration process, giving you legal ownership of your brand.
    </p>
  </>
)

const benefits = [
  "Legal Protection of Brand",
  "Exclusive Usage Rights",
  "Creation of Intangible Asset",
  "Trust and Goodwill",
  "Global Registration Possibility",
]

const process: ProcessStep[] = [
  {
    title: "Trademark Search",
    description: "Checking availability of your desired trademark.",
  },
  {
    title: "Class Selection",
    description: "Identifying the correct class(es) for your goods/services.",
  },
  {
    title: "Filing Application",
    description: "Submitting Form TM-A with the registry.",
  },
  {
    title: "Examination Response",
    description: "Replying to valid objections raised by the examiner.",
  },
  {
    title: "Registration",
    description: "Issuance of Registration Certificate (valid for 10 years).",
  },
]

const faqs: FAQ[] = [
  {
    question: "How long does trademark registration take?",
    answer: "The process typically takes 6-12 months if there are no manufacturing objections or oppositions.",
  },
  {
    question: "What is the ® symbol?",
    answer: "You can use the ® symbol only after your trademark is successfully registered. During the application process, you use ™.",
  },
]

export default function TrademarkRegistration() {
  return (
    <ServicePageLayout
      serviceName="Trademark Registration"
      heroTitle="Protect Your Brand Identity"
      heroDescription="Secure your brand name, logo, and slogan with our expert trademark services."
      heroImage="/images/legal-services.webp"
      overview={overview}
      benefits={benefits}
      process={process}
      faqs={faqs}
      variant={5}
    />
  )
}
