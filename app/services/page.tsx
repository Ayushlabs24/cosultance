"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Rocket, 
  ShieldCheck, 
  FileText, 
  Scale, 
  TrendingUp, 
  ClipboardCheck,
  Building2,
  FileBadge,
  BadgeCheck,
  CircleDollarSign,
  Gavel
} from "lucide-react";

const navigationData = [
  {
    category: "Business Startup",
    items: [
      { name: "Ideation to IPO", href: "/ideation-to-ipo", icon: Rocket, image: "/Busness/1.webp", description: "Complete guidance from concept to public listing" },
    ]
  },
  {
    category: "Seamless Registrations & Filings",
    subgroups: [
      {
        title: "Registrations",
        items: [
          { name: "Pvt Ltd", href: "/pvt-ltd-registration", icon: Building2, image: "/Busness/2.webp" },
          { name: "GST", href: "/gst-registration", icon: FileBadge, image: "/Busness/gst-registration.webp" },
          { name: "FSSAI", href: "/fssai-registration", icon: BadgeCheck, image: "/Busness/3.webp" },
          { name: "Trademark", href: "/trademark-registration", icon: ShieldCheck, image: "/trademark/2.webp" },
        ]
      },
      {
        title: "Filings",
        items: [
          { name: "GST Filing", href: "/gst-return-filing", icon: ClipboardCheck, image: "/Tax/3.webp" },
          { name: "TDS Filing", href: "/tds-filing", icon: CircleDollarSign, image: "/Tax/2.webp" },
          { name: "Income Tax Filing", href: "/income-tax-filing", icon: FileText, image: "/Tax/4 (2).webp" },
          { name: "MCA Filing", href: "/mca-filing", icon: Scale, image: "/Tax/10 (2).webp" },
        ]
      }
    ]
  },
  {
    category: "Protect Your Business",
    items: [
      { name: "IPR", href: "/ipr-services", icon: ShieldCheck, image: "/trademark/1.webp" },
      { name: "Copyright", href: "/copyright-registration", icon: FileText, image: "/trademark/9.webp" },
      { name: "Patent", href: "/patent-registration", icon: FileBadge, image: "/trademark/6.webp" },
      { name: "Trademark", href: "/trademark-registration", icon: ShieldCheck, image: "/trademark/2.webp" },
    ]
  },
  {
    category: "Business Valuation",
    items: [
      { name: "Valuation Services", href: "/valuation-services", icon: TrendingUp, image: "/Tax/11.webp" }
    ]
  },
  {
    category: "Legal Drafting",
    items: [
      { name: "Legal Documents", href: "/legal-drafting", icon: Gavel, image: "/Busness/legal-docs.webp" }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#0F172A] overflow-hidden">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/BackgroundImage.png"
          alt="Services Background"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Comprehensive <span className="text-[#0EA5E9]">Business Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto">
            Empowering your entrepreneurial journey with expert guidance and seamless compliance services.
          </p>
        </motion.div>

        <div className="space-y-24">
          {navigationData.map((category, catIdx) => (
            <div key={category.category} className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase">
                  {category.category}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-[#0EA5E9]/50 to-transparent"></div>
              </motion.div>

              {category.subgroups ? (
                <div className="space-y-16">
                  {category.subgroups.map((subgroup) => (
                    <div key={subgroup.title} className="space-y-6">
                      <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest pl-2">
                        {subgroup.title}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {subgroup.items.map((item, itemIdx) => (
                          <ServiceCard key={item.name} item={item} index={itemIdx} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.items?.map((item, itemIdx) => (
                    <ServiceCard key={item.name} item={item} index={itemIdx} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-[#0EA5E9]/20 to-transparent border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl -z-10"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to scale your business?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto uppercase tracking-widest font-semibold">
            Get expert consultation tailored to your needs
          </p>
          <button 
            onClick={() => window.dispatchEvent(new Event('open-contact-form'))}
            className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-xl hover:shadow-[#0EA5E9]/20"
          >
            Schedule a Free Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
}

function ServiceCard({ item, index }: { item: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ 
        duration: 0.3,
        delay: (index % 4) * 0.04,
        ease: "easeOut"
      }}
      className="h-full"
    >
      <Link href={item.href} className="block h-full group">
        <div className="h-full bg-white/[0.03] border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/[0.08] transition-all duration-200 shadow-2xl flex flex-col">
          {/* Image Container */}
          <div className="relative h-44 w-full overflow-hidden bg-gray-900/50">
            {item.image && (
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                quality={45} // Drastically reduced for performance
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            
            <div className="absolute bottom-4 left-6 w-10 h-10 bg-[#0EA5E9] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
              <item.icon className="w-5 h-5 text-white" />
            </div>
          </div>
          
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#0EA5E9] transition-colors uppercase tracking-tight line-clamp-1">
              {item.name}
            </h3>
            
            {item.description && (
              <p className="text-gray-400 text-[11px] leading-relaxed mb-4 line-clamp-2">
                {item.description}
              </p>
            )}
            
            <div className="mt-auto flex items-center text-[10px] font-bold text-[#0EA5E9] tracking-widest">
              EXPLORE
              <ArrowRight className="ml-2 w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
