"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What services does ConsultanceBase offer?",
    answer: "We offer a comprehensive range of business services including Company Registration (Pvt Ltd, LLP, OPC), GST Registration & Filing, Trademark & IP Protection, Income Tax Filing, Legal Drafting, and Business Valuation services."
  },
  {
    question: "How long does it take to register a Private Limited Company?",
    answer: "Typically, the registration process for a Private Limited Company takes about 7-10 working days, subject to government processing times and document submission accuracy."
  },
  {
    question: "Do you provide support after company registration?",
    answer: "Yes, we provide end-to-end post-registration compliance support, including GST filing, annual return filing, TDS compliance, and regular legal advisory to ensure your business stays compliant."
  },
  {
    question: "What documents are required for GST Registration?",
    answer: "The primary documents required include PAN card, Aadhaar card, business address proof (electricity bill/rent agreement), and a cancelled cheque or bank statement. Our team will guide you through the specific requirements based on your business type."
  },
  {
    question: "Can you help with Trademark objection replies?",
    answer: "Absolutely. Our legal experts specialize in handling Trademark objections, hearings, and oppositions. We draft professional replies to increase the chances of your trademark approval."
  },
  {
    question: "Is the consultation free?",
    answer: "We offer a preliminary consultation to understand your business needs. For detailed legal or financial advisory, we have specific tiered pricing plans that you can choose from."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-manrope">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-400">Everything you need to know about our services and process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-zinc-800 rounded-2xl border border-gray-100 dark:border-zinc-700 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-50 dark:border-zinc-700/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
