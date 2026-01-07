"use client";

import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  name: string;
  href?: string;
  id?: string;
  description?: string;
  children?: {
    title?: string;
    items: NavItem[];
  }[];
}

const navigationData: NavItem[] = [
  {
    name: "Business Startup",
    id: "business-startup",
    children: [
      {
        items: [
          { name: "Ideation to IPO", href: "/ideation-to-ipo", description: "Complete guidance from concept to public listing" },
        ]
      }
    ]
  },
  {
    name: "Seamless Registrations & Filings",
    id: "registrations-filings",
    children: [
      {
        title: "Registrations",
        items: [
          { name: "Pvt Ltd", href: "/pvt-ltd-registration" },
          { name: "GST", href: "/gst-registration" },
          { name: "FSSAI", href: "/fssai-registration" },
          { name: "Trademark", href: "/trademark-registration" },
        ]
      },
      {
        title: "Filings",
        items: [
          { name: "GST Filing", href: "/gst-return-filing" },
          { name: "TDS Filing", href: "/tds-filing" },
          { name: "Income Tax Filing", href: "/income-tax-filing" },
          { name: "MCA Filing", href: "/mca-filing" },
        ]
      }
    ]
  },
  {
    name: "Protect Your Business",
    id: "protect-business",
    children: [
      {
        items: [
          { name: "IPR", href: "/ipr-services" },
          { name: "Copyright", href: "/copyright-registration" },
          { name: "Patent", href: "/patent-registration" },
          { name: "Trademark", href: "/trademark-registration" },
        ]
      }
    ]
  },
  {
    name: "Business Valuation",
    id: "valuation",
    children: [
      {
        items: [
            { name: "Valuation Services", href: "/valuation-services" }
        ]
      }
    ]
  },
  {
      name: "Legal Drafting",
      id: "legal",
      children: [
          {
              items: [
                  { name: "Legal Documents", href: "/legal-drafting" }
              ]
          }
      ]
  }
];

export default function GlassmorphicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleMobileExpand = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };

  const handleGetInTouch = () => {
    // Dispatch custom event to open the fixed contact form
    window.dispatchEvent(new Event('open-contact-form'));
    setIsOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-4 md:top-6 left-1/2 -translate-x-1/2
        z-[9999]
        flex items-center justify-between
        rounded-[3.75rem]
        border border-white/20
        bg-[#13131333]
        backdrop-blur-[20px]
        px-6 py-3
        transition-all duration-500 ease-in-out
        w-[90%] md:w-[calc(100%-2rem)] lg:max-w-6xl 2xl:max-w-[90%]
        opacity-100 translate-y-0
      `}
    >
      {/* Left Section - Logo */}
      <Link href="/" className="flex items-center relative z-50 hover:opacity-90 transition-opacity">
        <NextImage
          src="/LOGO.jpeg"
          alt="Logo"
          width={50} 
          height={50}
          className="object-contain rounded-lg"
        />
      </Link>

      {/* Center Nav Links (Desktop) */}
      <div className="hidden lg:flex items-center gap-8 text-white h-full">
        {navigationData.map((item) => (
          <div
            key={item.name}
            className="relative h-full flex items-center"
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <button
              className={`
                text-[15px] font-medium tracking-wide 
                opacity-90 hover:opacity-100 transition flex items-center gap-1
                py-2
                ${hoveredItem === item.name ? "opacity-100" : ""}
              `}
            >
              {item.name}
              <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredItem === item.name ? "rotate-180" : ""}`} />
            </button>

            {/* Desktop Dropdown - Dark Glassmorphism */}
            <AnimatePresence>
              {hoveredItem === item.name && item.children && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-max min-w-[200px] bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-6 text-white"
                >
                  <div className="flex gap-12">
                    {item.children.map((group, idx) => (
                      <div key={idx} className="flex flex-col gap-3 min-w-[160px]">
                        {group.title && (
                          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                            {group.title}
                          </h4>
                        )}
                        {group.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href || '#'}
                            className="text-[15px] font-semibold text-gray-200 hover:text-[#0EA5E9] hover:pl-1 transition-all block"
                          >
                            {subItem.name}
                            {subItem.description && (
                                <p className="text-xs text-gray-500 font-normal mt-0.5">{subItem.description}</p>
                            )}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                   {/* Triangle Pointer - Dark */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1a1a1a]/95 rotate-45 border-t border-l border-white/10"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

     
      <button
        onClick={handleGetInTouch}
        className="
          hidden lg:block
          bg-white text-black
          rounded-full
          px-8 py-3
          font-semibold text-[15px]
          border border-transparent
          hover:bg-gray-100
          transition-all duration-300
          cursor-pointer
          shadow-lg
          hover:shadow-xl
          ml-8
        "
      >
        Get in touch
      </button>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center z-50">
        <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2"
            aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 25 }}
            className="
              absolute top-20 right-0 left-0 mx-4
              bg-[#121212]/95 backdrop-blur-xl
              rounded-3xl
              border border-white/10
              overflow-hidden
              shadow-2xl
              flex flex-col
              lg:hidden
            "
          >
            <div className="flex flex-col p-4 max-h-[80vh] overflow-y-auto">
                {navigationData.map((item) => (
                    <div key={item.name} className="border-b border-white/10 last:border-0">
                        <button
                            onClick={() => toggleMobileExpand(item.name)}
                            className="w-full flex items-center justify-between py-4 text-white text-lg font-medium"
                        >
                            {item.name}
                            <ChevronDown 
                                size={20} 
                                className={`transition-transform duration-300 ${mobileExpanded === item.name ? "rotate-180" : ""}`}
                            />
                        </button>
                        
                        <AnimatePresence>
                            {mobileExpanded === item.name && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden bg-white/5 rounded-xl mb-4"
                                >
                                    <div className="p-4 flex flex-col gap-6">
                                        {item.children?.map((group, idx) => (
                                            <div key={idx} className="flex flex-col gap-3">
                                                 {group.title && (
                                                    <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-2">
                                                        {group.title}
                                                    </h5>
                                                )}
                                                {group.items.map(subItem => (
                                                    <Link 
                                                        key={subItem.name} 
                                                        href={subItem.href || '#'}
                                                        className="flex items-center gap-3 text-gray-200 p-2 hover:bg-white/10 rounded-lg transition-colors"
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div>
                                                        <span className="text-base">{subItem.name}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}

                <button
                    onClick={handleGetInTouch}
                    className="
                        mt-6 w-full
                        bg-white text-black
                        rounded-full py-4
                        font-bold text-lg
                        hover:bg-gray-200
                        transition-all
                    "
                >
                    Get in touch
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}