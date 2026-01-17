'use client';

import { useState } from 'react';

interface BlogCardImageProps {
  src: string | null;
  alt: string;
}

export default function BlogCardImage({ src, alt }: BlogCardImageProps) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="mb-4 aspect-video relative overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center">
        <img
          src="/icon0.svg"
          alt={alt}
          width={64}
          height={64}
          className="opacity-50"
        />
      </div>
    );
  }

  return (
    <div className="mb-4 aspect-video relative overflow-hidden rounded-xl">
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
        onError={() => setImageError(true)}
      />
    </div>
  );
}