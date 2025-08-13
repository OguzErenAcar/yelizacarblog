import Image from "next/image";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

interface ImageType {
  className?: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

function SkeletonImage({ className, src, alt, width, height, priority = false }: ImageType) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full ${className}`} style={{ width, height }}>
      {!isLoaded && (
        <Skeleton 
          className="absolute inset-0 z-10" 
          style={{ 
            background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite"
          }} 
        />
      )}
      
      <Image
        src={src}
        alt={alt || "image"}
        fill
        className={`object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        quality={80}
        priority={priority}
        onLoadingComplete={() => setIsLoaded(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
      />
    </div>
  );
}

export default SkeletonImage;