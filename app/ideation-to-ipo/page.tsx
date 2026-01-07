import ServicePageLayout, { FAQ, ProcessStep } from "@/components/service-page-layout"

const overview = (
  <>
    <p>
      Turning an idea into a successful IPO is a journey that requires strategic planning, solid execution, and expert guidance. Our "Ideation to IPO" service provides comprehensive support for startups at every stage of their lifecycle.
    </p>
    <p>
      From validating your business model to structuring your company, raising funds, and preparing for public listing, our team of experienced professionals walks with you every step of the way.
    </p>
  </>
)

const benefits = [
  "Strategic business modeling and validation",
  "Legal entity structuring and registration",
  "Pitch deck preparation and fundraising support",
  "Compliance management and due diligence",
  "IPO readiness assessment and advisory",
  "Mentorship from industry experts",
]

const process: ProcessStep[] = [
  {
    title: "Idea Validation",
    description: "We assess the feasibility and market potential of your business idea.",
  },
  {
    title: "Entity Formation",
    description: "We help you safeguard your business with the right legal structure.",
  },
  {
    title: "Growth & Funding",
    description: "Assistance with financial modeling and connecting with investors.",
  },
  {
    title: "Scaling & Compliance",
    description: "Establishing robust internal controls and ensuring regulatory compliance.",
  },
  {
    title: "IPO Preparation",
    description: "Guiding you through the complex process of going public.",
  },
]

const faqs: FAQ[] = [
  {
    question: "How long does the process take?",
    answer: "The timeline from ideation to IPO varies greatly depending on the business model and market conditions, typically spanning 5-10 years.",
  },
  {
    question: "Do you help with finding investors?",
    answer: "Yes, we help prepare your investment materials and can connect you with our network of angel investors and VCs.",
  },
]

export default function IdeationToIPO() {
  return (
    <ServicePageLayout
      serviceName="Ideation to IPO"
      heroTitle="From Concept to Public Listing"
      heroDescription="Comprehensive guidance for specialized startups aspiring to reach the public markets."
      heroImage="/images/business-services.webp"
      overview={overview}
      benefits={benefits}
      process={process}
      faqs={faqs}
      variant={1}
    />
  )
}
