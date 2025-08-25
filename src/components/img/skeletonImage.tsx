import Image from "next/image";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

interface ImageType {
  className?: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  skeletonHeight?:number;
}

function SkeletonImage({ className, src, alt, width, height,skeletonHeight }: ImageType) {
  const [load, setload] = useState<boolean>(false);

  return (
    <div style={{ width, height }} className={` ${className} relative`}>
      {!load && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%", 
            width: "100%", 
          }}
        >
          <Skeleton
            count={height?Math.trunc(height/50):2}
            width={width?width-100:200} 
            style={{
              background: "transparent",
              display: "block",
            }}
          />
        </div>
      )}
      <Image
        fill
        onLoad={() => setload(true)}
        style={{ width: load ? "100%" : 0, height: "100%" }}
        alt={alt || "image"}
        src={src}
        className={` ${className}`}
        quality={80}
        priority  
      /> 
    </div>
  );
}

export default SkeletonImage;
