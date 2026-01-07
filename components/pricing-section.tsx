"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// Interface for Pricing Data (matches Google Sheets structure for future)
// Columns: Tier Name, Price, Description, Features (comma separated usually, but array here for clean logic)
interface PricingTier {
  id: string
  name: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
  buttonText: string
}

// Default Hardcoded Data
const PRICING_DATA: PricingTier[] = [
  {
    id: "basic",
    name: "Basic",
    price: "₹1,999",
    description: "Essential services for small businesses and startups.",
    features: [
      "Company Registration Assistance",
      "Basic Tax Filing (GST)",
      "Annual Compliance Reminder",
      "Email Support",
    ],
    buttonText: "Get Started",
  },
  {
    id: "popular",
    name: "Popular",
    price: "₹4,999",
    description: "Complete package for growing businesses needing improvements.",
    features: [
      "Everything in Basic",
      "Trademark Registration",
      "Priority Tax Filing",
      "Dedicated Account Manager",
      "Monthly Compliance Reports",
    ],
    isPopular: true,
    buttonText: "Choose Popular",
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹9,999",
    description: "Comprehensive solutions for established enterprises.",
    features: [
      "Everything in Popular",
      "IP Strategy Consultation",
      "Complex Legal Drafting",
      "24/7 Priority Support",
      "Audit Assistance",
    ],
    buttonText: "Contact Sales",
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-zinc-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-5xl font-bold font-manrope text-zinc-900 dark:text-white mb-6">
            Transparent Pricing for <br/> <span className="text-[#0EA5E9]">Your Growth</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choose the plan that fits your business stage. No hidden fees, just clear value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PRICING_DATA.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                tier.isPopular 
                  ? "bg-white dark:bg-zinc-800 border-[#0EA5E9] shadow-2xl scale-100 md:scale-110 z-10" 
                  : "bg-white/50 dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600"
              }`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0EA5E9] text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white">
                    {tier.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">/mo</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="flex-1 mb-8">
                <ul className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-1 p-0.5 rounded-full ${tier.isPopular ? "bg-blue-100 dark:bg-blue-900/30 text-[#0EA5E9]" : "bg-gray-100 dark:bg-zinc-800 text-gray-500"}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm lg:text-base text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className={`w-full py-6 rounded-xl text-base font-semibold transition-all shadow-lg hover:shadow-xl ${
                  tier.isPopular 
                    ? "bg-[#0EA5E9] hover:bg-[#0284c7] text-white" 
                    : "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700"
                }`}
              >
                {tier.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
