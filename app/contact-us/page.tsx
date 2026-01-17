"use client"

import { useState, ChangeEvent } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [errors, setErrors] = useState<any>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev: any) => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    let isValid = true
    const newErrors: any = {}

    if (!formData.name.trim()) { newErrors.name = 'Name is required'; isValid = false }
    if (!formData.email) { newErrors.email = 'Email is required'; isValid = false }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = 'Invalid email'; isValid = false }
    if (!formData.phone) { newErrors.phone = 'Phone is required'; isValid = false }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    if (validateForm()) {
       // Simulate API call
       await new Promise(resolve => setTimeout(resolve, 1500))
       setSubmitted(true)
       setIsSubmitting(false)
    } else {
        setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white font-manrope">
       {/* Simple Header */}
       <section className="bg-[#0f283d] pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 text-center">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
           <p className="text-gray-300 text-lg max-w-xl mx-auto">
             Have questions about company registration or tax filings? Our team is here to help you.
           </p>
       </section>

       <section className="container mx-auto px-4 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
             
             {/* Left: Contact Info */}
             <div className="lg:w-2/5 bg-[#0EA5E9] p-10 lg:p-14 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                   <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                   <div className="space-y-8">
                      <div className="flex items-start gap-4">
                         <Mail className="w-6 h-6 opacity-80 mt-1" />
                         <div>
                            <p className="text-sm opacity-80 font-medium uppercase tracking-wider mb-1">Email Us</p>
                            <p className="text-lg font-semibold">support@bharatcomply.com</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <Phone className="w-6 h-6 opacity-80 mt-1" />
                         <div>
                            <p className="text-sm opacity-80 font-medium uppercase tracking-wider mb-1">Call Us</p>
                            <p className="text-lg font-semibold">+91 97600 92270</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <MapPin className="w-6 h-6 opacity-80 mt-1" />
                         <div>
                            <p className="text-sm opacity-80 font-medium uppercase tracking-wider mb-1">Visit Us</p>
                            <p className="text-lg font-semibold">
                               S-12, 2nd Floor, <br/>
                               Central Plaza Mall, Golf Course Rd, <br/>
                               Sector 53, Gurugram, <br/>
                               Haryana 122002
                            </p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Decorative Circles */}
                <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 mt-12">
                     <p className="opacity-80 text-sm">Follow us on social media for updates.</p>
                     {/* Social Icons Placeholder */}
                     <div className="flex gap-4 mt-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                                <ArrowRight className="w-4 h-4 -rotate-45" />
                            </div>
                        ))}
                     </div>
                </div>
             </div>

             {/* Right: Form */}
             <div className="lg:w-3/5 p-10 lg:p-14 bg-gray-50/50">
                {submitted ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        className="h-full flex flex-col items-center justify-center text-center py-10"
                    >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                            <ArrowRight className="w-8 h-8 -rotate-45" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                        <p className="text-gray-600">Thank you for contacting Bharat Comply. We will get back to you shortly.</p>
                        <Button 
                            className="mt-8 bg-gray-900 text-white" 
                            onClick={() => setSubmitted(false)}
                        >
                            Send Another Message
                        </Button>
                    </motion.div>
                ) : (
                    <>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                        <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                                <Input 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    placeholder="John Doe" 
                                    className="h-12 rounded-xl bg-white border-gray-200 focus:border-[#0EA5E9]" 
                                />
                                {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                    <Input 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        type="email"
                                        placeholder="john@example.com" 
                                        className="h-12 rounded-xl bg-white border-gray-200 focus:border-[#0EA5E9]" 
                                    />
                                    {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                                    <Input 
                                        name="phone" 
                                        value={formData.phone} 
                                        onChange={handleChange} 
                                        type="tel"
                                        placeholder="+91 00000 00000" 
                                        className="h-12 rounded-xl bg-white border-gray-200 focus:border-[#0EA5E9]" 
                                    />
                                    {errors.phone && <span className="text-xs text-red-500">{errors.phone}</span>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Message (Optional)</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your requirements..."
                                    className="w-full min-h-[120px] rounded-xl bg-white border border-gray-200 focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] p-4 text-sm"
                                />
                            </div>

                            <Button 
                                type="submit" 
                                className="w-full h-14 bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-500/20"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? <Loader2 className="animate-spin" /> : 'Send Message'}
                            </Button>
                        </form>
                    </>
                )}
             </div>
          </div>
       </section>

        {/* Google Maps Embed - Gurugram Address */}
        <section className="h-[400px] w-full bg-gray-100 flex items-center justify-center relative grayscale hover:grayscale-0 transition-all duration-500">
             <iframe 
               src="https://maps.google.com/maps?q=S-12%2C%202nd%20Floor%2C%20Central%20Plaza%20Mall%2C%20Golf%20Course%20Rd%2C%20Sector%2053%2C%20Gurugram%2C%20Haryana%20122002&t=&z=13&ie=UTF8&iwloc=&output=embed" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
        </section>
    </div>
  )
}
