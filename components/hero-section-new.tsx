"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Card {
  img: string;
  subtitle: string;
  title: string;
  tag: string;
  gradient: string;
}

const cards: Card[] = [
  {
    img: "/images/tan.webp",
    subtitle: "Registration",
    title: "Company Registration & Compliance",
    tag: "Get Registered in 7 Days",
    gradient: "from-[#0F3642] to-[#09222B]", // Deep Teal/Blue
  },
  {
    img: "/images/tax-filing.webp",
    subtitle: "Taxation",
    title: "GST Filing & Income Tax Returns",
    tag: "Expert Tax Assistance",
    gradient: "from-[#1A3C34] to-[#0D1F1A]", // Deep Green
  },
  {
    img: "/images/trademark-registration.webp",
    subtitle: "Legal",
    title: "Trademark & IP Protection",
    tag: "Secure Your Brand",
    gradient: "from-[#2D1B4E] to-[#150D24]", // Deep Purple
  },
];

export default function HeroSectionNew() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const getCircularIndex = (index: number): number =>
    (index + cards.length) % cards.length;

  return (
    <section className="bg-white w-full flex justify-center lg:px-6 2xl:px-0">
      {/* Mobile Layout: Full screen, no white borders */}
      <div className="md:hidden w-full min-h-screen relative overflow-hidden">
          
             {/* Mobile Dynamic Background */}
             <motion.div
              key={`mobile-bg-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className={`absolute inset-0 bg-gradient-to-br ${cards[currentIndex].gradient}`}
            />
            
            <Image
              src="/background-image.jpg" // Fallback/Texture overlay
              alt="Background"
              fill
              priority
              quality={90}
              className="object-cover opacity-20 mixed-blend-overlay"
              sizes="100vw"
            />
          
            <div className="absolute inset-0 bg-black/20"></div>
            
           
            <div className="relative z-10 flex flex-col items-center px-6 pt-24 pb-12 h-full justify-center min-h-screen">
          
              <h1 
                className="font-manrope font-bold text-[2.5rem] leading-[1.2] tracking-[-0.04em] text-white text-center w-full mb-6"
              >
                Expert CA Services for Your Business Growth
              </h1>
              
          
              <p className="font-manrope font-medium text-[16px] leading-[24px] text-gray-200 text-center mb-12">
                Seamless Tax Filing, GST Compliance & Financial Advisory
              </p>
            
              <button 
                onClick={() => window.dispatchEvent(new Event('open-contact-form'))}
                className="px-8 py-4 bg-[#0EA5E9] text-white rounded-2xl font-manrope font-medium text-[18px] leading-[28px] hover:bg-[#0284c7] transition-all duration-300 shadow-lg mb-4"
              >
                Get Expert Consultation
              </button>
              
              
              <div className="flex items-center gap-2 mb-12">
                <Image
                  src="/placeholder-logo.png"
                  alt="Logo"
                  width={14}
                  height={14}
                  className="shrink-0"
                />
                <p className="font-manrope font-medium text-sm leading-[20px] text-gray-200 text-center">
                  Book a free discovery call
                </p>
              </div>

              
              <div className="relative w-full h-[380px] flex items-center justify-center overflow-visible">
                {cards.map((card, i) => {
                  const circularIndex = getCircularIndex(currentIndex - i);
                  let x = "0rem",
                    scale = 1,
                    opacity = 1,
                    zIndex = 10;

                  if (circularIndex === 0) {
                    x = "-15.5rem"; 
                    scale = 0.85;
                    opacity = 0.7;
                    zIndex = 1;
                  } else if (circularIndex === 1) {
                    x = "0rem";
                    scale = 1;
                    opacity = 1;
                    zIndex = 10;
                  } else if (circularIndex === 2) {
                    x = "15.5rem"; 
                    scale = 0.85;
                    opacity = 0.7;
                    zIndex = 1;
                  }

                  return (
                    <motion.div
                      key={i}
                      animate={{ x, scale, opacity, zIndex }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute w-[15.5rem] h-[19.2rem] rounded-3xl overflow-hidden bg-white border border-white/20 shadow-xl will-change-transform"
                    >
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        className="object-cover"
                        priority
                        quality={80}
                        sizes="247px"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                        <p className="text-xs font-semibold text-[#0EA5E9] mb-1">{card.subtitle}</p>
                        <h3 className="text-sm font-bold leading-tight">{card.title}</h3>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

         
              <div className="flex justify-center mt-8">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 w-fit">
                  {cards.map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-full transition-all duration-300 ${
                        currentIndex === i ? "w-8 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
      </div>

      {/* Desktop/Tablet Layout: Dynamic Gradient Background */}
      <div 
        className="hidden lg:block relative w-full h-screen min-h-[700px] max-h-[1200px] overflow-hidden transition-all duration-1000"
      >
        {/* Animated Background Layers */}
        <AnimatePresence mode="popLayout">
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className={`absolute inset-0 bg-gradient-to-br ${cards[currentIndex].gradient} z-0`}
            />
        </AnimatePresence>

        {/* Abstract Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-0"></div>
        
        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center justify-between px-12 lg:px-20 pt-32 lg:pt-40 2xl:pt-48">
          {/* LEFT TEXT CONTENT */}
          <div className="flex-1 max-w-[40rem] lg:max-w-[44rem] space-y-6 lg:space-y-8">
            {/* Main Heading */}
            <h1 className="text-[3rem] lg:text-[4rem] 2xl:text-[5rem] font-manrope font-bold leading-[1.125] tracking-[-0.02em] text-white">
              Expert CA Services for <br /> Your Business Growth
            </h1>
            
          
            <p className="font-manrope font-medium text-sm lg:text-base leading-[1.5] text-gray-300">
              Seamless Tax Filing, GST Compliance & Financial Advisory
            </p>


            <div className="flex flex-col items-start gap-4 pt-4 lg:pt-8">
              <button 
                onClick={() => window.dispatchEvent(new Event('open-contact-form'))}
                className="px-6 py-3 lg:px-8 lg:py-4 bg-[#0EA5E9] text-white rounded-2xl font-manrope font-medium text-base lg:text-lg leading-[1.55] hover:bg-[#0284c7] transition-all duration-300 shadow-lg"
              >
                Get Expert Consultation
              </button>
              
              <div className="flex items-center gap-3 max-w-[18rem]">
                <Image
                  src="/placeholder-logo.png"
                  alt="Logo"
                  width={14}
                  height={14}
                  className="shrink-0"
                />
                <p className="font-manrope font-medium text-xs lg:text-sm leading-[1.4] text-gray-300">
                  Book a free discovery call
                </p>
              </div>
            </div>
          </div>

        
          <div className="flex-1 flex justify-end relative">
           
         
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
               <div className="inline-flex flex-col items-center gap-2 px-2 py-3 rounded-full border border-white/10 bg-white/5 h-fit">
                {cards.map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full transition-all duration-300 ${
                      currentIndex === i ? "h-6 w-1 lg:h-8 lg:w-1.5 bg-white" : "h-1 w-1 lg:h-1.5 lg:w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            
            <div className="flex flex-col items-center justify-center relative h-[38rem] lg:h-[45rem] 2xl:h-[52rem] w-[18rem] lg:w-[22rem] 2xl:w-[28rem] overflow-visible mr-16 lg:mr-24 2xl:mr-32">
              {cards.map((card, i) => {
                const circularIndex = getCircularIndex(currentIndex - i);
                let y = "0%",
                  scale = 1,
                  opacity = 1,
                  zIndex = 10;

                if (circularIndex === 0) {
                  y = "100%";
                  scale = 0.85;
                  opacity = 0.7;
                  zIndex = 1;
                } else if (circularIndex === 1) {
                  y = "0%"; 
                  scale = 1;
                  opacity = 1;
                  zIndex = 10;
                } else if (circularIndex === 2) {
                  y = "-100%";
                  scale = 0.85;
                  opacity = 0.7;
                  zIndex = 1;
                }

                return (
                  <motion.div
                    key={i}
                    animate={{ y, scale, opacity, zIndex }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute w-[18rem] h-[24rem] lg:w-[22rem] lg:h-[26rem] 2xl:w-[24rem] 2xl:h-[30rem] rounded-3xl overflow-hidden bg-white border border-white/20 shadow-2xl will-change-transform"
                  >
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority
                      quality={80}
                      sizes="(max-width: 1280px) 100vw, 384px"
                    />
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 lg:p-6 text-white">
                        <p className="text-xs lg:text-sm font-semibold text-[#0EA5E9] mb-1">{card.subtitle}</p>
                        <h3 className="text-lg lg:text-xl font-bold leading-tight">{card.title}</h3>
                        <p className="text-[10px] lg:text-xs text-gray-300 mt-1">{card.tag}</p>
                      </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
