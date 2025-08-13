import Image from "next/image";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

interface ImageType {
  className?: string;
  src: string;
  alt?: string;
  width?: number ;
  height?: number ;
}

function SkeletonImage({ className, src, alt, width, height }: ImageType) {
  const [load, setload] = useState<boolean>(false);

  return (
    <div style={{ width, height }} className="w-full h-full relative">
      {!load && <Skeleton style={{ background: "transparent" }} count={height?height/20:5} />}
      <Image
        fill
        onLoad={() => setload(true)}
        style={{ width: load ? "100%" : 0, height: "100%" }}
        alt={alt || "image"}
        src={src}
        className={` ${className}`}
        quality={1}
        priority  
      />
    </div>
  );
}

export default SkeletonImage;
