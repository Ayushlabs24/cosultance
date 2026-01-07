"use client"

import React, { forwardRef } from "react"

interface VideoPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    src?: string;
    poster?: string;
}

export const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  ({ src, poster, className, ...props }, ref) => {
    return (
      <video
        ref={ref}
        className={className}
        poster={poster}
        playsInline
        muted
        loop
        preload="auto"
        {...props}
      >
        {src && <source src={src} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
    )
  }
)

VideoPlayer.displayName = "VideoPlayer"
