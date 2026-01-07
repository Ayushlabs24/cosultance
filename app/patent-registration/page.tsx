import ServicePageLayout, { FAQ, ProcessStep } from "@/components/service-page-layout"

const overview = (
  <>
    <p>
      A Patent grants exclusive rights to an inventor for a new, useful, and non-obvious invention. It prevents others from making, using, or selling your invention without permission.
    </p>
    <p>
      Our patent agents help you with prior art search, patent drafting, and filing to secure monopoly rights over your innovation.
    </p>
  </>
)

const benefits = [
  "Exclusive Monopoly Rights (20 Years)",
  "Higher Market Valuation",
  "Licensing & Royalty Income",
  "Competitive Advantage",
]

const process: ProcessStep[] = [
  {
    title: "Prior Art Search",
    description: "Checking if the invention is truly novel.",
  },
  {
    title: "Patent Drafting",
    description: "Writing the technical and legal specifications.",
  },
  {
    title: "Filing",
    description: "Submitting Provisional or Complete Specification.",
  },
  {
    title: "Examination & Grant",
    description: "Responding to FER and getting the grant.",
  },
]

const faqs: FAQ[] = [
  {
    question: "Can I patent an idea?",
    answer: "No, you can only patent an invention that has a practical application, not just an abstract idea.",
  },
]

export default function PatentRegistration() {
  return (
    <ServicePageLayout
      serviceName="Patent Registration"
      heroTitle="Secure Your Inventions"
      heroDescription="Get exclusive rights for your technological innovations with Patent Registration."
      heroImage="/images/legal-services.webp"
      overview={overview}
      benefits={benefits}
      process={process}
      faqs={faqs}
      variant={2}
    />
  )
}
