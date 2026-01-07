import dynamic from "next/dynamic"
import HeroSectionNew from "@/components/hero-section-new"

// Dynamically import heavy components below the fold
const UpdatesSection = dynamic(() => import("@/components/updates-section"), { ssr: true })
const FeaturedServices = dynamic(() => import("@/components/featured-services"), { ssr: true })
const ServicesSection = dynamic(() => import("@/components/services-section"), { ssr: true })
const StatsSection = dynamic(() => import("@/components/stats-section"), { ssr: true })
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"), { ssr: true })
const PricingSection = dynamic(() => import("@/components/pricing-section"), { ssr: true })
const ContactSection = dynamic(() => import("@/components/contact-form"), { ssr: true })

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSectionNew />
      <UpdatesSection />
      <FeaturedServices />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
    </div>
  )
}


