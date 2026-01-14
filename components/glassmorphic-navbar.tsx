"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
    name: "Home",
    href: "/",
  },
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
  const [isVisible, setIsVisible] = useState(true);

  const toggleMobileExpand = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
        // Hide navbar if scrolled past the viewport height (assuming hero section is 100vh or similar)
        // Using window.innerHeight as a proxy for the "first page" / hero section
        if (window.scrollY > window.innerHeight - 200) { 
             setIsVisible(false);
        } else {
             setIsVisible(true);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-20 md:top-24 left-0 right-0
        z-[9999]
        flex items-center justify-center
        border-b border-white/20
        bg-[#0f283d]/80
        backdrop-blur-[20px]
        px-4 md:px-8 py-0
        h-12 md:h-14
        transition-all duration-500 ease-in-out
        w-full
        ${isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}
      `}
    >
      {/* Center Nav Links (Desktop) */}
      <div className="hidden lg:flex items-center gap-6 text-white h-full">
        {navigationData.map((item) => (
          <div
            key={item.name}
            className="relative h-full flex items-center"
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.children ? (
              <>
                <button
                  className={`
                    text-[14px] font-medium tracking-wide 
                    opacity-80 hover:opacity-100 transition flex items-center gap-1
                    py-2
                    ${hoveredItem === item.name ? "opacity-100 text-[#0EA5E9]" : ""}
                  `}
                >
                  {item.name}
                  <ChevronDown size={12} className={`transition-transform duration-300 ${hoveredItem === item.name ? "rotate-180" : ""}`} />
                </button>

                {/* Desktop Dropdown - Dark Glassmorphism */}
                <AnimatePresence>
                  {hoveredItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max min-w-[200px] bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-6 text-white"
                    >
                      <div className="flex gap-12">
                        {item.children.map((group, idx) => (
                          <div key={idx} className="flex flex-col gap-3 min-w-[160px]">
                            {group.title && (
                              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                                {group.title}
                              </h4>
                            )}
                            {group.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href || '#'}
                                className="text-[14px] font-medium text-gray-300 hover:text-[#0EA5E9] hover:pl-1 transition-all block"
                              >
                                {subItem.name}
                                {subItem.description && (
                                    <p className="text-[10px] text-gray-500 font-normal mt-0.5">{subItem.description}</p>
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
              </>
            ) : (
                <Link
                    href={item.href || '#'}
                    className={`
                      text-[14px] font-medium tracking-wide 
                      opacity-80 hover:opacity-100 transition flex items-center gap-1
                      py-2
                      ${hoveredItem === item.name ? "opacity-100 text-[#0EA5E9]" : ""}
                    `}
                >
                    {item.name}
                </Link>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button - Left aligned on mobile since logo is gone/moved to top bar */}
      <div className="lg:hidden flex items-center justify-between w-full z-50">
        <span className="text-white font-bold text-sm">MENU</span>
        <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-1"
            aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
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
              absolute top-full right-0 left-0
              bg-[#121212]/95 backdrop-blur-xl
              rounded-3xl
              border border-white/10
              overflow-hidden
              shadow-2xl
              flex flex-col
              lg:hidden
              w-full
            "
          >
            <div className="flex flex-col p-4 max-h-[80vh] overflow-y-auto">
                {navigationData.map((item) => (
                    <div key={item.name} className="border-b border-white/10 last:border-0">
                        {item.children ? (
                            <>
                                <button
                                    onClick={() => toggleMobileExpand(item.name)}
                                    className="w-full flex items-center justify-between py-3 text-white text-base font-medium"
                                >
                                    {item.name}
                                    <ChevronDown 
                                        size={18} 
                                        className={`transition-transform duration-300 ${mobileExpanded === item.name ? "rotate-180" : ""}`}
                                    />
                                </button>
                                
                                <AnimatePresence>
                                    {mobileExpanded === item.name && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden bg-white/5 rounded-xl mb-3"
                                        >
                                            <div className="p-3 flex flex-col gap-4">
                                                {item.children?.map((group, idx) => (
                                                    <div key={idx} className="flex flex-col gap-2">
                                                         {group.title && (
                                                            <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">
                                                                {group.title}
                                                            </h5>
                                                        )}
                                                        {group.items.map(subItem => (
                                                            <Link 
                                                                key={subItem.name} 
                                                                href={subItem.href || '#'}
                                                                className="flex items-center gap-2 text-gray-200 p-2 hover:bg-white/10 rounded-lg transition-colors"
                                                            >
                                                                <div className="w-1 h-1 rounded-full bg-[#0EA5E9]"></div>
                                                                <span className="text-sm">{subItem.name}</span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </>
                        ) : (
                            <Link 
                                href={item.href || '#'}
                                className="w-full flex items-center justify-between py-3 text-white text-base font-medium hover:text-[#0EA5E9] transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        )}
                    </div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
