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
    <section className="w-full flex justify-center bg-white text-zinc-900 font-[Manrope] py-16 px-6 relative overflow-visible">
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
            className="bg-gray-50 rounded-[2rem] p-8 relative order-2 lg:order-1 border border-zinc-100 shadow-sm"
            style={{
              width: "100%",
              maxWidth: "36.125rem",
              height: "22.5rem",
            }}>
            <div
              className="flex flex-col"
              style={{ width: "30rem", height: "10rem", gap: "0.5rem" }}>
              <div
                className="text-[#0EA5E9] opacity-50"
                style={{
                  width: "2rem",
                  height: "2rem",
                  fontSize: "4rem",
                  lineHeight: "2rem",
                  marginBottom: "1rem"
                }}>
                “
              </div>
              <p
                className="text-zinc-800"
                style={{
                  width: "30rem",
                  height: "7.5rem",
                  fontWeight: 600,
                  fontSize: "1.625rem",
                  lineHeight: "2.125rem",
                  letterSpacing: "-0.03em",
                }}>
                {t.quote}
              </p>
            </div>

            <div
              className="absolute flex items-center gap-3"
              style={{
                width: "15.0625rem",
                height: "3.625rem",
                top: "16.875rem",
                left: "2.75rem",
              }}>
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
            className="rounded-[2rem] overflow-hidden border border-zinc-100 bg-gray-50 order-1 lg:order-2 shadow-lg"
            style={{
              width: "100%",
              maxWidth: "42.875rem",
              height: "22.5rem",
            }}>
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
      <style jsx>{`
        @media (max-width: 1024px) {
          section {
            padding: 4rem 1rem;
          }
          /* Make sure buttons and dots remain visible */
          div[style*="left: 78rem"],
          div[style*="left: 7.25rem"] {
            position: static !important;
            margin: 1rem auto 0 auto;
            justify-content: center;
            display: flex;
            z-index: 50;
          }
          .flex-col {
            flex-direction: column;
          }
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 18px;
            text-align: center;
            font-weight: 500 !important;
          }
          iframe {
            height: 240px !important;
          }
          p {
            font-size: 18px !important;
            line-height: 26px !important;
          }
          section {
            overflow: visible !important;
          }
          button {
            z-index: 50 !important;
          }
        }
      `}</style>
    </section>
  )
}

