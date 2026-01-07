"use client"

import React, { useState } from "react"
import { Play } from "lucide-react"

interface LazyYouTubeProps {
  videoId: string
  title?: string
  className?: string
}

export function LazyYouTube({ videoId, title = "YouTube video", className }: LazyYouTubeProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (isPlaying) {
    return (
      <div className={className}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-2xl"
        />
      </div>
    )
  }

  return (
    <div 
      className={`relative cursor-pointer group bg-gray-900 overflow-hidden rounded-2xl ${className}`}
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
            <Play className="w-8 h-8 text-white fill-white ml-1" />
        </div>
      </div>
    </div>
  )
}
