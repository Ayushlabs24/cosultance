"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { LazyYouTube } from "./ui/lazy-youtube"

const testimonials = [
  {
    name: "Niranjan Venugopal",
    title: "CEO Specflicks",
    quote:
      "We've tried multiple agencies and it didn't work. With teams24 we had no timeline constraints or boundaries in setting up our core team ...",
    videoId: "okh85F29Gjg",
    image: "/testimonials/niranjan.jpg",
  },
  {
    name: "Sarah Chen",
    title: "Founder TechStart",
    quote:
      "The speed at which teams24 deployed our team was incredible. No recruitment chaos, just immediate execution power ...",
    videoId: "TUKk3sptrt0",
    image: "/testimonials/sarah.jpg",
  },
  {
    name: "Michael Roberts",
    title: "COO GlobalTech",
    quote:
      "Best decision we made for scaling our engineering team. The quality and commitment exceeded all expectations ...",
    videoId: "vzVbqXVID-Y",
    image: "/testimonials/michael.jpg",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="w-full flex justify-center bg-white text-zinc-900 font-[Manrope] py-16 px-4 md:px-6 relative overflow-hidden">
      <div
        className="relative max-w-[90rem] w-full"
        style={{ height: "auto", opacity: 1 }}>
        {/* Header */}
        <div
          className="absolute lg:static z-20"
          style={{
            width: "12.75rem",
            height: "2rem",
            top: "4rem",
            left: "4.5rem",
          }}>
          <h2
            className="font-[600] text-[1.375rem] leading-[2rem] text-zinc-900"
            style={{
              letterSpacing: "-0.02em",
              fontFamily: "Manrope",
            }}>
            What our clients say
          </h2>
          <div className="mt-4 border-t border-zinc-200 w-[12.5rem]" />
        </div>

        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:mt-[6.25rem] gap-8 lg:gap-0 relative z-10">
         
            <div
              className="bg-gray-50 rounded-[2rem] p-6 lg:p-8 relative order-2 lg:order-1 border border-zinc-100 shadow-sm w-full lg:max-w-[36.125rem] h-auto lg:h-[22.5rem]"
              >
              <div
                className="flex flex-col gap-2 w-full h-auto"
               >
                <div
                  className="text-[#0EA5E9] opacity-50 text-[4rem] leading-[2rem] mb-4"
                  >
                  “
                </div>
                <p
                  className="text-zinc-800 font-semibold text-lg lg:text-[1.625rem] leading-relaxed lg:leading-[2.125rem] tracking-tight w-full"
                 >
                  {t.quote}
                </p>
              </div>

            <div
              className="mt-8 lg:absolute lg:mt-0 flex items-center gap-3 lg:top-[16.875rem] lg:left-[2.75rem]"
              >
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-zinc-900">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.title}</p>
              </div>
            </div>
          </div>

        


          <div
            className="rounded-[2rem] overflow-hidden border border-zinc-100 bg-gray-50 order-1 lg:order-2 shadow-lg w-full lg:max-w-[42.875rem] h-[15rem] md:h-[20rem] lg:h-[22.5rem]"
           >
            <LazyYouTube
              key={current}
              videoId={t.videoId}
              title={`testimonial-video-${current}`}
              className="w-full h-full"
            />
          </div>
        </div>


       
        <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-10 relative z-30">
         
          <div
            className="flex gap-2 items-center justify-center absolute lg:static"
            style={{
              width: "9rem",
              height: "2.5rem",
              top: "37.0625rem",
              left: "7.25rem",
              borderRadius: "4.5rem",
            }}>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to testimonial ${idx + 1}`}
                onClick={() => setCurrent(idx)}
                className={`rounded-full transition-all ${
                  idx === current
                    ? "w-8 h-2 bg-[#0EA5E9]"
                    : "w-2 h-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

       
          <div
            className="absolute lg:static flex gap-4 justify-center"
            style={{
              width: "7.5rem",
              height: "3.25rem",
              top: "36.625rem",
              left: "78rem",
              opacity: 1,
            }}>
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-[#0EA5E9] hover:text-white hover:border-[#0EA5E9] transition-all bg-white text-[#0EA5E9] shadow-sm z-40">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-[#0EA5E9] hover:text-white hover:border-[#0EA5E9] transition-all bg-white text-[#0EA5E9] shadow-sm z-40">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

