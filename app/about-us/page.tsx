"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Users, Trophy, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0f283d]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/BackgroundImage.png" // Fallback to existing asset
            alt="About Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f283d]/90 to-[#0f283d]/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Empowering Business <br/> <span className="text-[#0EA5E9]">Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We are a team of dedicated professionals committed to simplifying complex business processes. From registration to compliance, we are your trusted partners in growth.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { label: "Happy Clients", value: "500+", icon: Users },
              { label: "Years Experience", value: "10+", icon: Trophy },
              { label: "Successful Filings", value: "10k+", icon: Target },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center p-4"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#0EA5E9] mb-4">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Section (SEO Optimization) */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
             {/* Left Column: Who We Are */}
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-6"
             >
                <div className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#0EA5E9] font-bold text-xs uppercase tracking-widest mb-2">
                   Who We Are
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                   Your Trusted Partner for <span className="text-[#0EA5E9]">Corporate Compliance</span> & Legal Excellence
                </h2>
                <div className="text-gray-600 space-y-4 text-justify leading-relaxed">
                   <p>
                      At <strong>Bharat Comply</strong>, we understand that navigating the legal landscape of business registration and compliance in India can be daunting. Established with a vision to simplify these complexities, we have grown into a premier consultancy firm dedicated to empowering startups, SMEs, and large enterprises.
                   </p>
                   <p>
                      Our team comprises seasoned Chartered Accountants, Company Secretaries, and Legal Experts who bring decades of combined experience to the table. We don't just file your returns; we strategize your growth. Whether you are looking to incorporate a Private Limited Company, register a Trademark, or ensure GST compliance, we provide end-to-end solutions tailored to your unique business needs.
                   </p>
                   <p>
                      In today's fast-paced digital economy, staying compliant is not just a legal requirement but a competitive advantage. We leverage cutting-edge technology to ensure your filings are accurate, timely, and hassle-free, allowing you to focus on what matters most—scaling your business.
                   </p>
                </div>
             </motion.div>

             {/* Right Column: Why Choose & Expertise */}
             <div className="space-y-12">
                {/* Why Choose Us */}
                <motion.div
                   initial={{ opacity: 0, x: 30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                >
                   <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Bharat Comply?</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                         <Trophy className="w-8 h-8 text-[#0EA5E9] mb-3" />
                         <h4 className="font-bold text-gray-900 mb-2">Proven Track Record</h4>
                         <p className="text-sm text-gray-600">Over 10,000+ businesses registered and managed successfully.</p>
                      </div>
                      <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                         <CheckCircle2 className="w-8 h-8 text-[#0EA5E9] mb-3" />
                         <h4 className="font-bold text-gray-900 mb-2">transparent Pricing</h4>
                         <p className="text-sm text-gray-600">No hidden fees. You pay exactly what you see.</p>
                      </div>
                      <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                         <Users className="w-8 h-8 text-[#0EA5E9] mb-3" />
                         <h4 className="font-bold text-gray-900 mb-2">Dedicated Experts</h4>
                         <p className="text-sm text-gray-600">Personalized support from qualified professionals.</p>
                      </div>
                      <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                         <Target className="w-8 h-8 text-[#0EA5E9] mb-3" />
                         <h4 className="font-bold text-gray-900 mb-2">Timely Delivery</h4>
                         <p className="text-sm text-gray-600">We respect your time and ensure deadlines are met.</p>
                      </div>
                   </div>
                </motion.div>
                
                {/* SEO Keywords Area */}
                <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Our Core Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                       {[
                         "Private Limited Registration", "LLP Registration", "GST Filing", 
                         "Trademark Registration", "FSSAI License", "Income Tax Filing", 
                         "Import Export Code", "Digital Signature Certificate (DSC)", 
                         "ISO Certification", "Startup India Registration", "MSME Registration",
                         "Legal Drafting", "Accounting Services", "Virtual CFO"
                       ].map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100">
                             {tag}
                          </span>
                       ))}
                    </div>
                </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Join thousands of satisfied business owners who trust us with their legal and financial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/contact-us">
                <Button size="lg" className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white rounded-xl px-8 h-12 text-lg">
                  Contact Us
                </Button>
            </Link>
            <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-xl px-8 h-12 text-lg border-gray-300 hover:bg-white hover:text-[#0EA5E9]">
                  Explore Services
                </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
