"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { VideoPlayer } from "./ui/video-player";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const steps = [
  {
    id: "01",
    title: "Define your vision",
    description: "Strategic session to blueprint your success",
    videoUrl: "/video/walter.mp4",
    posterUrl: "/video/how it work poster/indx1.png",
  },
  {
    id: "02",
    title: "Evaluate from the curated",
    description: "Handpicked experts integrated and ready",
    videoUrl: "/video/how%20web.mp4",
    posterUrl: "/video/how it work poster/indx2.png",
  },
  {
    id: "03",
    title: "Start building",
    description: "on a flexible subscription model",
    videoUrl: "/video/huddle.mp4",
    posterUrl: "/video/how it work poster/indx3.png",
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
  
      <div className="hidden lg:block w-full h-[1px] bg-white/20" />
      
      {steps.map((step, index) => (
        <div key={step.id} className="flex flex-col">
          <div 
            onClick={() => onStepClick(index)}
            className="flex items-center justify-between py-6 group cursor-pointer"
          >
            <div
              className={`text-base lg:text-lg font-medium ${
                activeStep === index
                  ? "text-white"
                  : "text-gray-500 group-hover:text-gray-300"
              }`}
            >
              Step {step.id}
            </div>
            
            
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                activeStep === index
                  ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  : "bg-gray-600 group-hover:bg-gray-400"
              }`}
            />
          </div>
        
          <div className="hidden lg:block w-full h-[1px] bg-white/20" />
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
      
      <div className="relative w-full h-[2px] bg-white/20 mb-4">
       
        <div 
            className="absolute left-0 top-0 h-full bg-white"
            style={{ width: `${((activeStep + 1) / 3) * 100}%` }}
        />
      </div>
      
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            onClick={() => onStepClick(index)}
            className={`flex items-center gap-2 text-sm md:text-base font-medium cursor-pointer ${
                activeStep === index ? "text-white" : "text-gray-500"
            }`}
          >
            {activeStep === index && (
                <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            )}
            Step {step.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const prevStepRef = useRef(0);


  const handleStepClick = (index: number) => {
    const trigger = ScrollTrigger.getById("how-it-works-trigger");
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
          id: "how-it-works-trigger",
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
            const threshold = 0.75; 
            
            let currentStep = 0;
            if (p < 0.375) currentStep = 0;
            else if (p < 0.875) currentStep = 1;
            else currentStep = 2;

            if (currentStep !== prevStepRef.current) {
              const oldStep = prevStepRef.current;
              prevStepRef.current = currentStep;
              setActiveStep(currentStep);

              videoRefs.current[oldStep]?.pause();
              if (videoRefs.current[currentStep]) {
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
    <div id="how-it-works" ref={sectionRef} className="relative bg-black text-white font-manrope">
      {/* Absolute Header - The line acts as the visual track baseline */}
      <div className="absolute top-0 left-0 right-0 z-40 px-6 lg:px-12 pt-10 lg:pt-14 pointer-events-none">
        <div className="container mx-auto">
            <div className="flex flex-col gap-4 md:gap-6">
                <div className="text-white text-sm font-medium tracking-wider">
                  How it works
                </div>
                <hr id="track-line" className="w-full border-t border-white/30" />
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
                      <VideoPlayer
                        ref={(el) => { videoRefs.current[index] = el; }}
                        src={step.videoUrl}
                        poster={step.posterUrl}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        playsInline
                      />
                  
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                    </div>

                    
                    <div className="order-1 lg:order-2 shrink-0 w-full max-w-[280px] md:max-w-[350px] 2xl:max-w-[400px] flex flex-col text-center lg:text-left items-center lg:items-start pt-4 pb-4 lg:py-0">
                      <div className="text-lg md:text-xl 2xl:text-2xl font-bold text-white tracking-tight mb-2 md:mb-6 2xl:mb-10">
                        [{step.id}]
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold leading-tight tracking-tight mb-2 md:mb-12 2xl:mb-16">
                        {step.title}
                      </h3>
                     
                      <p className="font-manrope font-medium text-[16px] leading-[24px] text-gray-200 md:text-gray-300 md:text-base md:leading-[1.5] mt-0 md:mt-4">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

       
          <div className="lg:hidden absolute bottom-8 left-0 right-0 px-6 z-50">
            <div className="max-w-[280px] mx-auto bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-2xl">
              <MobileStepIndicators activeStep={activeStep} onStepClick={handleStepClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
