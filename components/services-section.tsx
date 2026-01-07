"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { VideoPlayer } from "./ui/video-player";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const steps = [
  {
    id: "01",
    title: "Business Registration",
    description: "Start your business journey with the right business structure.",
    features: [
      "Private Limited & LLP Registration",
      "Complete Documentation Assistance",
    ],
    href: "/business-registration",
    image: "/s1.png", 
    videoUrl: null,
    posterUrl: "/s1.png",
  },
  {
    id: "02",
    title: "Tax & Compliance Services",
    description: "Stay compliant with all tax regulations while you grow your business.",
    features: [
      "GST Filing & Income Tax Returns",
      "Annual ROC Compliance & Filing",
    ],
    href: "/tax-compliance",
    image: "/s2.png",
    videoUrl: null,
    posterUrl: "/s2.png",
  },
  {
    id: "03",
    title: "Trademark & Intellectual Property",
    description: "Protect your brand identity and intellectual property with our experts.",
    features: [
      "Trademark & Logo Registration",
      "Copyright & Patent Protection",
    ],
    href: "/trademark-ip",
    image: "/s3.png",
    videoUrl: null,
    posterUrl: "/s3.png",
  },
];

const StepIndicators = ({ 
  activeStep, 
  onStepClick 
}: { 
  activeStep: number, 
  onStepClick: (index: number) => void 
}) => {
  return (
    <div className="flex flex-row lg:flex-col lg:min-w-[240px] 2xl:min-w-[320px]">
  
      <div className="hidden lg:block w-full h-[1px] bg-zinc-200" />
      
      {steps.map((step, index) => (
        <div key={step.id} className="flex flex-col">
          <div 
            onClick={() => onStepClick(index)}
            className="flex items-center justify-between py-6 group cursor-pointer"
          >
            <div
              className={`text-base lg:text-lg font-medium ${
                activeStep === index
                  ? "text-[#0EA5E9]"
                  : "text-gray-400 group-hover:text-gray-500"
              }`}
            >
              Step {step.id}
            </div>
            
            
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                activeStep === index
                  ? "bg-[#0EA5E9] shadow-[0_0_8px_rgba(14,165,233,0.5)]"
                  : "bg-gray-300 group-hover:bg-gray-400"
              }`}
            />
          </div>
        
          <div className="hidden lg:block w-full h-[1px] bg-zinc-200" />
        </div>
      ))}
    </div>
  );
};

const MobileStepIndicators = ({ 
  activeStep, 
  onStepClick 
}: { 
  activeStep: number, 
  onStepClick: (index: number) => void 
}) => {
  return (
    <div className="flex flex-col w-full px-0 pb-0">
      
      <div className="relative w-full h-[2px] bg-zinc-100 mb-4">
       
        <div 
            className="absolute left-0 top-0 h-full bg-[#0EA5E9]"
            style={{ width: `${((activeStep + 1) / 3) * 100}%` }}
        />
      </div>
      
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            onClick={() => onStepClick(index)}
            className={`flex items-center gap-2 text-sm md:text-base font-medium cursor-pointer ${
                activeStep === index ? "text-[#0EA5E9]" : "text-gray-400"
            }`}
          >
            {activeStep === index && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
            )}
            Step {step.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const prevStepRef = useRef(0);
  const router = useRouter();


  const handleStepClick = (index: number) => {
    const trigger = ScrollTrigger.getById("services-trigger");
    if (!trigger) return;

    const scrollHeight = trigger.end - trigger.start;
    const targetScroll = trigger.start + (index / (steps.length - 1)) * scrollHeight;
    
    gsap.to(window, {
      scrollTo: targetScroll,
      duration: 1,
      ease: "power2.inOut"
    });
  };

  useEffect(() => {
    if (!sectionRef.current || !cardsWrapperRef.current) return;

    const ctx = gsap.context(() => {
      const stepScrollHeight = window.innerHeight * (steps.length - 1) * 1.5;

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "services-trigger",
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${stepScrollHeight}`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: [0, 0.5, 1],
            duration: 0.6,
            ease: "power1.inOut"
          },
          onUpdate: (self) => {
            const p = self.progress;
            
            let currentStep = 0;
            if (p < 0.375) currentStep = 0;
            else if (p < 0.875) currentStep = 1;
            else currentStep = 2;

            if (currentStep !== prevStepRef.current) {
              const oldStep = prevStepRef.current;
              prevStepRef.current = currentStep;
              setActiveStep(currentStep);

              // Only manage video play/pause if videoUrl exists
              if (steps[oldStep].videoUrl) {
                  videoRefs.current[oldStep]?.pause();
              }
              if (steps[currentStep].videoUrl && videoRefs.current[currentStep]) {
                  videoRefs.current[currentStep]!.currentTime = 0;
                  videoRefs.current[currentStep]!.play().catch(() => {});
              }
            }
          }
        }
      });

      tl.to(cardsWrapperRef.current, {
        yPercent: -((steps.length - 1) * 100),
        duration: 1,
        ease: "none"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <div id="services-section" ref={sectionRef} className="relative bg-white text-zinc-900 font-manrope">
      {/* Absolute Header - The line acts as the visual track baseline */}
      <div className="absolute top-0 left-0 right-0 z-40 px-6 lg:px-12 pt-10 lg:pt-14 pointer-events-none">
        <div className="container mx-auto">
            <div className="flex flex-col gap-4 md:gap-6">
                <div className="text-zinc-500 text-sm font-medium tracking-wider">
                  Our Business Services
                </div>
                <hr id="track-line" className="w-full border-t border-zinc-200" />
            </div>
        </div>
      </div>

      <div className="relative h-screen flex flex-col">
        
        <div className="h-[80px] md:h-[100px] lg:h-[110px] shrink-0" />

        <div className="hidden lg:block absolute left-10 md:left-20 lg:left-32 2xl:left-48 top-1/2 -translate-y-1/2 z-50">
          <StepIndicators activeStep={activeStep} onStepClick={handleStepClick} />
        </div>

        
        <div className="relative flex-1 overflow-hidden">
          <div 
            ref={cardsWrapperRef}
            className="absolute inset-0 h-full w-full"
          >
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="absolute inset-0 w-full h-full"
                style={{ top: `${index * 100}%` }}
              >
                
                <div className="absolute inset-0 flex items-center justify-center px-4 pl-0 lg:pl-[380px] 2xl:pl-[480px]">
                  <div className="w-full max-w-7xl 2xl:max-w-screen-2xl flex flex-col lg:flex-row items-center justify-center gap-2 md:gap-12 lg:gap-32 2xl:gap-48">
              
                    <div 
                      className="order-2 lg:order-1 relative shrink-0 w-[240px] h-[300px] sm:w-[280px] sm:h-[380px] md:w-[320px] md:h-[435px] 2xl:w-[450px] 2xl:h-[600px] rounded-[24px] 2xl:rounded-[40px] overflow-hidden border-2 border-white/20 shadow-2xl"
                      style={{
                        transform: "rotate(4deg)",
                        boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      {step.videoUrl ? (
                         <VideoPlayer
                            ref={(el) => { if (el) videoRefs.current[index] = el; }}
                            src={step.videoUrl}
                            poster={step.posterUrl}
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            playsInline
                        />
                      ) : (
                        <div className="relative w-full h-full">
                            <Image
                                src={step.image}
                                alt={step.title}
                                fill
                                className="object-cover"
                            />
                             <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                        </div>
                      )}
                  
                    </div>

                    
                    <div className="order-1 lg:order-2 shrink-0 w-full max-w-[280px] md:max-w-[350px] 2xl:max-w-[400px] flex flex-col text-center lg:text-left items-center lg:items-start pt-4 pb-4 lg:py-0">
                      <div className="text-lg md:text-xl 2xl:text-2xl font-bold text-[#0EA5E9] tracking-tight mb-2 md:mb-6 2xl:mb-10">
                        [{step.id}]
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold leading-tight tracking-tight mb-2 md:mb-6 2xl:mb-8 text-zinc-900">
                        {step.title}
                      </h3>
                     
                      <p className="font-manrope font-medium text-[16px] leading-[24px] text-gray-600 md:text-gray-500 md:text-base md:leading-[1.5] mt-0 md:mt-2">
                        {step.description}
                      </p>

                      <ul className="mt-4 space-y-2 text-left hidden md:block">
                        {step.features.map(f => (
                            <li key={f} className="flex items-start text-gray-500 text-sm md:text-base">
                                <Check className="w-4 h-4 md:w-5 md:h-5 text-[#0EA5E9] mr-2 mt-0.5 shrink-0" />
                                {f}
                             </li>
                        ))}
                      </ul>

                      <Button 
                        className="mt-6 md:mt-8 bg-[#0EA5E9] text-white hover:bg-[#0284c7] shadow-lg shadow-blue-500/20"
                        onClick={() => router.push(`/service/${step.href}`)}
                      >
                        Get Started <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

       
          <div className="lg:hidden absolute bottom-8 left-0 right-0 px-6 z-50">
            <div className="max-w-[280px] mx-auto bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-zinc-200 shadow-2xl">
              <MobileStepIndicators activeStep={activeStep} onStepClick={handleStepClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
