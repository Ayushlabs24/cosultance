"use client";

import Link from "next/link";
import NextImage from "next/image";
import { Mail, Phone, Lock, UserPlus } from "lucide-react";

export default function TopBar() {
  return (
    <div
      className="
        fixed top-0 left-0 right-0
        z-[10000]
        flex items-center justify-between
        bg-[#0f283d]   
        text-white
        px-4 md:px-8 py-2
        h-20 md:h-24
        border-b border-white/10
        shadow-sm
      "
    >
      {/* Left Section - Logo */}
      <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
        <NextImage
          src="/LOGO.jpeg"
          alt="Bharat Comply Logo"
          width={90}
          height={90}
          className="object-contain rounded-sm mr-2"
        />
        {/* Removed Text as per request */}
      </Link>

      {/* Right Section - Contact & Auth */}
      <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm font-medium">
        
        {/* Contact Info (Hidden on very small screens if needed, or condensed) */}
        <div className="flex items-center gap-4">
             <a href="mailto:info@bharatcomply.com" className="flex items-center gap-1.5 hover:text-[#0EA5E9] transition-colors">
                <Mail size={14} />
                <span className="hidden sm:inline">info@bharatcomply.com</span>
             </a>
             <div className="h-4 w-[1px] bg-white/20 hidden sm:block"></div>
             <a href="tel:+919760092270" className="flex items-center gap-1.5 hover:text-[#0EA5E9] transition-colors">
                <Phone size={14} />
                <span className="hidden sm:inline">+91 9760092270</span>
             </a>
        </div>

        {/* Auth Links (Optional - based on reference image showing Login/Register) */}
        <div className="flex items-center gap-4 ml-2 md:ml-4 border-l border-white/20 pl-4">
             <Link href="/login" className="hover:text-[#0EA5E9] transition-colors">
                Login
             </Link>
             <Link href="/register" className="hover:text-[#0EA5E9] transition-colors">
                Register
             </Link>
        </div>

      </div>
    </div>
  );
}
