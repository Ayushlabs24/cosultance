"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Clock, FileText, HelpCircle, Star, ChevronRight, ArrowRight, ShieldCheck, Zap, ArrowLeft } from "lucide-react"
import ServiceForm from "@/components/service-form"
import { motion } from "framer-motion"

// Removed PricingPlan interface

export interface FAQ {
  question: string
  answer: string
}

export interface ProcessStep {
  title: string
  description: string
}

export interface ServiceType {
    name: string
    description: string
    dueDate?: string
}

export interface ServicePageProps {
  serviceName: string
  heroTitle: string
  heroDescription: string
  heroImage: string
  overview: React.ReactNode
  benefits: string[]
  typesTitle?: string
  types?: ServiceType[]
  process: ProcessStep[]
  // pricing removed
  faqs: FAQ[]
  variant?: 1 | 2 | 3 | 4 | 5
}

const whyChooseUs = [
    "Team of experienced CA professionals",
    "100% accuracy guarantee",
    "Timely filing to avoid penalties",
    "Comprehensive reconciliation",
    "Dedicated account manager",
    "Regular compliance updates",
    "Secure data handling",
]

export default function ServicePageLayout({
  serviceName,
  heroTitle,
  heroDescription,
  heroImage,
  overview,
  benefits,
  typesTitle,
  types,
  process,
  faqs,
  variant = 1
}: ServicePageProps) {

  const handleOpenForm = () => window.dispatchEvent(new Event('open-contact-form'));

  // Common Form Wrapper with Highlight
  const HighlightedForm = () => (
    <div className="relative sticky top-28 z-30">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-75 animate-pulse"></div>
        <div className="relative bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all hover:scale-[1.01]">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-center">
                <h3 className="text-white font-bold text-lg uppercase tracking-wider">Get Expert Advice</h3>
                <p className="text-blue-100 text-xs mt-1">Fill the Details below</p>
            </div>
            <div className="p-1">
                <ServiceForm service={serviceName} />
            </div>
        </div>
    </div>
  )

  // --- STYLE 1: ORIGINAL/STANDARD (Light Gradient) ---
  if (variant === 1) {
    return (
      <div className="min-h-screen bg-gray-50/50">
        {/* Style 1 Hero */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50/50 py-20 lg:py-28 relative overflow-hidden">
             {/* Abstract BG Shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center text-sm font-medium text-blue-600 mb-2">
                   <Link href="/" className="hover:underline flex items-center">
                      Home <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
                   </Link> 
                   <span>{serviceName}</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
                  {heroTitle}
                </h1>
                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                  {heroDescription}
                </p>
                <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-700 pt-2">
                    <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <span>4.9/5 Rating</span>
                    </div>
                </div>
                <div className="pt-4 flex gap-4">
                   <Button onClick={handleOpenForm} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full shadow-lg shadow-blue-600/20 text-lg h-12">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                   </Button>
                   <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-8 border-gray-300 text-gray-700 hover:bg-gray-50">
                      <Link href="/">Back to Home</Link>
                   </Button>
                </div>
              </div>
              <div className="relative">
                 <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10 scale-95 translate-y-4"></div>
                <Image
                  src={heroImage}
                  alt={serviceName}
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
                {/* Overview */}
              <section>
                 <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
                    Overview
                 </h2>
                 <div className="prose prose-lg text-gray-600 leading-relaxed bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    {overview}
                 </div>
              </section>

               {/* Benefits */}
               <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="bg-green-50 p-2 rounded-lg mr-4 shrink-0">
                                    <Check className="h-5 w-5 text-green-600" />
                                </div>
                                <span className="text-gray-700 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
               </section>

               {/* Process */}
               <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Process</h2>
                <div className="relative border-l-2 border-blue-100 ml-4 space-y-10 pl-8 pb-4">
                    {process.map((step, i) => (
                        <div key={i} className="relative">
                            <span className="absolute -left-[45px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm ring-4 ring-white">
                                {i + 1}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
               </section>
               
               {/* Types */}
               {types && (
                   <div className="grid md:grid-cols-2 gap-6">
                       {types.map((t, i) => (
                           <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                               <h4 className="font-bold text-lg mb-2">{t.name}</h4>
                               <p className="text-sm text-gray-600">{t.description}</p>
                           </div>
                       ))}
                   </div>
               )}

               {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group bg-white rounded-xl border border-gray-200 open:ring-1 open:ring-blue-100 transition-all">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-800 marker:content-none">
                                    {faq.question}
                                    <ChevronRight className="h-5 w-5 text-gray-400 group-open:rotate-90 transition-transform" />
                                </summary>
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

            </div>
            <div className="lg:col-span-1">
                 <div className="sticky top-28">
                     <HighlightedForm />
                 </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // --- STYLE 2: MODERN CENTERED (Dark/Overlay Hero) ---
  if (variant === 2) {
      return (
          <div className="min-h-screen bg-white">
              <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
                   <Image src={heroImage} alt={serviceName} fill className="object-cover opacity-30" />
                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                   
                   <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10 text-center max-w-4xl">
                        <Link href="/" className="absolute top-8 left-4 md:left-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                            <div className="bg-white/10 p-2 rounded-full">
                                <ArrowLeft className="h-5 w-5" />
                            </div>
                            <span className="font-medium">Go to Home</span>
                        </Link>

                        <div className="flex flex-col items-center mt-12">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6">
                                {serviceName}
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-none">{heroTitle}</h1>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">{heroDescription}</p>
                            <Button onClick={handleOpenForm} size="lg" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full h-14 px-8 text-lg font-semibold">
                                Book a Consultation
                            </Button>
                        </div>
                   </div>
              </div>

              <div className="container mx-auto px-4 py-20 -mt-20 relative z-20">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
                     <div className="grid lg:grid-cols-3 gap-12">
                         <div className="lg:col-span-2">
                             <h2 className="text-2xl font-bold mb-6">About the Service</h2>
                             <div className="prose text-gray-600 mb-12">{overview}</div>

                             <div className="grid md:grid-cols-2 gap-6 mb-12">
                                 {benefits.map((b, i) => (
                                     <div key={i} className="flex gap-4 items-start">
                                         <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                                             <Check className="w-5 h-5 text-indigo-600" />
                                         </div>
                                         <p className="font-medium text-gray-800 pt-2">{b}</p>
                                     </div>
                                 ))}
                             </div>

                             <h3 className="text-2xl font-bold mb-8">How It Works</h3>
                             <div className="space-y-8">
                                 {process.map((step, i) => (
                                     <div key={i} className="flex gap-6 group">
                                         <div className="text-4xl font-black text-gray-100 group-hover:text-indigo-600 transition-colors">
                                             0{i+1}
                                         </div>
                                         <div>
                                             <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                                             <p className="text-gray-600">{step.description}</p>
                                         </div>
                                     </div>
                                 ))}
                             </div>
                             
                             {faqs.length > 0 && (
                                <div className="mt-16">
                                    <h3 className="text-2xl font-bold mb-6">Common Questions</h3>
                                    <div className="grid gap-4">
                                        {faqs.map((f, i) => (
                                            <div key={i} className="bg-gray-50 p-6 rounded-xl">
                                                <h5 className="font-bold text-gray-900 mb-2">{f.question}</h5>
                                                <p className="text-gray-600 text-sm">{f.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                             )}

                         </div>
                         <div className="lg:col-span-1">
                             <HighlightedForm />
                         </div>
                     </div>
                  </div>
              </div>
          </div>
      )
  }

  // --- STYLE 3: BOLD & COLORFUL (Purple/Dark Mode Vibe) ---
  if (variant === 3) {
      return (
        <div className="min-h-screen bg-slate-50">
             <div className="bg-[#1e1b4b] text-white py-24 rounded-b-[3rem] lg:rounded-b-[5rem] overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse"></div>
                 <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <Link href="/" className="mb-6 opacity-60 hover:opacity-100 transition-opacity">Home / {serviceName}</Link>
                    <span className="text-indigo-300 font-medium tracking-widest text-sm uppercase mb-4">{serviceName}</span>
                    <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight max-w-4xl">{heroTitle}</h1>
                    <p className="text-indigo-100 max-w-2xl text-lg mb-10">{heroDescription}</p>
                    <Button onClick={handleOpenForm} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 h-14 px-10 rounded-xl text-lg hover:brightness-110">Let's Discuss</Button>
                 </div>
             </div>

             <div className="container mx-auto px-6 py-16 -mt-10">
                 <div className="grid lg:grid-cols-12 gap-12">
                     <div className="lg:col-span-8 space-y-12">
                         <div className="bg-white p-8 rounded-2xl shadow-xl shadow-indigo-900/5">
                             <h3 className="text-2xl font-bold text-slate-800 mb-6">Overview</h3>
                             <div className="text-slate-600 leading-relaxed space-y-4">{overview}</div>
                         </div>
                         
                         <div className="grid sm:grid-cols-2 gap-4">
                            {benefits.map((b,i) => (
                                <div key={i} className="bg-indigo-50 p-6 rounded-2xl">
                                    <ShieldCheck className="w-8 h-8 text-indigo-600 mb-4" />
                                    <p className="font-bold text-indigo-900">{b}</p>
                                </div>
                            ))}
                         </div>

                         <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-8">Execution Roadmap</h3>
                            <div className="space-y-0">
                                {process.map((step, i) => (
                                    <div key={i} className="flex group">
                                        <div className="flex flex-col items-center mr-6">
                                            <div className="w-10 h-10 rounded-full border-2 border-indigo-600 flex items-center justify-center font-bold text-indigo-600 bg-white z-10 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                                {i + 1}
                                            </div>
                                            {i !== process.length - 1 && <div className="w-0.5 h-full bg-indigo-100 -mt-2 -mb-2"></div>}
                                        </div>
                                        <div className="pb-10 pt-2">
                                            <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                                            <p className="text-slate-500">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                         </div>
                     </div>
                     <div className="lg:col-span-4">
                         <div className="sticky top-24">
                              <HighlightedForm />
                              {/* <div className="mt-8 bg-indigo-900 rounded-3xl p-8 text-white text-center">
                                  <h4 className="font-bold text-xl mb-2">Need Expert Help?</h4>
                                  <p className="text-indigo-200 mb-6 text-sm">Our CAs are just a call away.</p>
                                  <button onClick={handleOpenForm} className="w-full bg-white text-indigo-900 font-bold py-3 rounded-xl hover:bg-gray-100">Talk to Expert</button>
                              </div> */}
                         </div>
                     </div>
                 </div>
             </div>
        </div>
      )
  }

  // --- STYLE 4: MINIMALIST (Clean / Corporate) ---
  if (variant === 4) {
      return (
        <div className="min-h-screen bg-[#FDFCF8] text-[#1A1A1A]">
            <div className="border-b border-gray-200">
                <div className="container mx-auto px-4 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                            <Link href="/">Home</Link>
                            <span className="w-8 h-[1px] bg-gray-300"></span>
                            <span className="text-orange-600">{serviceName}</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-serif font-medium mb-8 leading-[1.1]">{heroTitle}</h1>
                        <p className="text-xl text-gray-500 max-w-md font-light mb-10">{heroDescription}</p>
                        <div className="flex gap-6 items-center">
                            <button onClick={handleOpenForm} className="border-b-2 border-orange-600 pb-1 text-lg font-medium hover:text-orange-600 transition-colors">
                                Start Consultation &rarr;
                            </button>
                            <Link href="/" className="text-gray-400 hover:text-gray-900 text-sm">Cancel</Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                             <Image src={heroImage} alt={serviceName} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-24">
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 lg:sticky top-32 h-fit">
                        <h3 className="font-bold text-2xl mb-6">In This Service</h3>
                        <ul className="space-y-4 text-gray-500">
                            <li className="text-black font-medium cursor-pointer">Overview</li>
                            <li>Process</li>
                            <li>Benefits</li>
                            <li>FAQ</li>
                        </ul>
                         <div className="mt-12">
                             <HighlightedForm />
                         </div>
                    </div>
                    <div className="lg:col-span-8 space-y-20">
                         <div>
                             <p className="text-2xl font-light leading-relaxed text-gray-800">{overview}</p>
                         </div>
                         
                         <div className="bg-gray-50 p-10">
                             <h3 className="font-serif text-3xl mb-8">What You Get</h3>
                             <ul className="grid md:grid-cols-2 gap-y-6 gap-x-12">
                                 {benefits.map((b, i) => (
                                     <li key={i} className="flex gap-4 items-baseline">
                                         <span className="text-orange-600 font-bold text-sm">0{i+1}</span>
                                         <span className="text-lg text-gray-700">{b}</span>
                                     </li>
                                 ))}
                             </ul>
                         </div>

                         <div>
                             <h3 className="font-serif text-3xl mb-10">Integration Steps</h3>
                             <div className="border-l border-gray-200 pl-10 space-y-12">
                                 {process.map((step, i) => (
                                     <div key={i}>
                                         <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                                         <p className="text-gray-500 max-w-md">{step.description}</p>
                                     </div>
                                 ))}
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      )
  }

  // --- STYLE 5: SPLIT SCREEN (Energetic/Modern) ---
  if (variant === 5) {
      return (
        <div className="min-h-screen bg-white">
            <div className="grid lg:grid-cols-2 min-h-[600px]">
                <div className="bg-emerald-950 p-12 lg:p-20 flex flex-col justify-center text-white relative overflow-hidden">
                    <Zap className="absolute top-10 right-10 w-64 h-64 text-emerald-900 opacity-20" />
                    <Link href="/" className="mb-12 opacity-50 hover:opacity-100 inline-flex items-center gap-2">&larr; Back to Home</Link>
                    <h1 className="text-5xl lg:text-7xl font-bold mb-8">{heroTitle}</h1>
                    <p className="text-emerald-200 text-xl max-w-xl mb-10">{heroDescription}</p>
                    <div className="flex gap-4">
                        <Button onClick={handleOpenForm} className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold h-12 px-8 rounded-none">Get Started Now</Button>
                    </div>
                </div>
                <div className="relative min-h-[400px]">
                    <Image src={heroImage} alt={serviceName} fill className="object-cover" />
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                 <div className="max-w-5xl mx-auto">
                     <div className="grid md:grid-cols-2 gap-16 mb-20">
                         <div>
                             <h2 className="text-4xl font-bold text-gray-900 mb-6">Why this matters</h2>
                             <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                                 {overview}
                             </div>
                         </div>
                         <div className="bg-gray-100 p-8">
                             <h3 className="font-bold text-xl mb-6">Key Benefits</h3>
                             <ul className="space-y-4">
                                 {benefits.map((b, i) => (
                                     <li key={i} className="flex items-center gap-3">
                                         <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                         {b}
                                     </li>
                                 ))}
                             </ul>
                         </div>
                     </div>
                     
                     <div className="bg-white border-2 border-black p-8 md:p-12 mb-20">
                         <h3 className="text-3xl font-bold text-center mb-12 uppercase tracking-wide">Flow of Work</h3>
                         <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                             {process.map((step, i) => (
                                 <div key={i} className="text-center relative">
                                     <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                                         {i+1}
                                     </div>
                                      {i !== process.length - 1 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>}
                                     <h4 className="font-bold text-lg">{step.title}</h4>
                                     <p className="text-xs text-gray-500 mt-2">{step.description}</p>
                                 </div>
                             ))}
                         </div>
                     </div>

                     <div className="max-w-xl mx-auto">
                         <h3 className="text-center font-bold text-2xl mb-8">Get Expert Assistance</h3>
                         <div className="shadow-2xl rounded-2xl overflow-hidden">
                             <HighlightedForm />
                         </div>
                     </div>

                 </div>
            </div>
        </div>
      )
  }

  // Fallback (same as Style 1)
  return <div>Component Error: Invalid Variant</div>
}
