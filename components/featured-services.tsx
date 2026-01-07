"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function FeaturedServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.1, once: true })
  const router = useRouter()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-12 md:py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Our Featured Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Comprehensive business solutions to help you start, manage, and grow your business efficiently
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featuredServices.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative h-48 md:h-56 w-full bg-gray-100">
                  <motion.div
                    className="w-full h-full relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index === 0}
                    />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col">
                  <motion.h3
                    className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm md:text-base text-gray-600 mb-6 flex-grow line-clamp-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    {service.description}
                  </motion.p>
                  <Link href={service.href} className="w-full">
                    <Button
                      className="bg-primary hover:bg-primary/90 text-white text-base w-full py-6 rounded-xl"
                    >
                      <motion.span
                        className="flex items-center justify-center font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </motion.span>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Button */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/services">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg rounded-2xl shadow-lg hover:shadow-primary/20 transition-all"
            >
              View All Services
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

const featuredServices = [
  {
    title: "Company Registration",
    description: "Register your business as Private Limited, LLP, OPC or Partnership Firm with expert guidance from professionals.",
    href: "/business-registration",
    image: "/s1.png",
  },
  {
    title: "GST Registration",
    description: "Get your business registered for GST and comply with tax regulations seamlessly and start your business.",
    href: "/gst-registration",
    image: "/s2.png",
  },
  {
    title: "Trademark Registration",
    description: "Protect your brand identity with trademark registration and secure your business name across the globe.",
    href: "/trademark-registration",
    image: "/s3.png",
  },
  {
    title: "Legal Documentation",
    description: "Get professionally drafted legal documents tailored to your business needs.",
    href: "/legal-documentation",
    image: "/services/legal-docs.webp",
  },
]