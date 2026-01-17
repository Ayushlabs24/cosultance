'use client';

import { useState } from 'react';

interface FeaturedImageProps {
  src: string | null;
  alt: string;
  priority?: boolean;
}

export default function FeaturedImage({ src, alt, priority = false }: FeaturedImageProps) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return null;
  }

  return (
    <div className="mb-8 aspect-video relative overflow-hidden rounded-xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(128,128,128,1)]">
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
        onError={() => setImageError(true)}
      />
    </div>
  );
}