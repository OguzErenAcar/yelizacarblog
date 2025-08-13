import Image from "next/image";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton"; 

interface ImageType {
  className?: string;
  src: string;
  alt?: string;
  width?:string
  height?:string
}

function SkeletonImg({
  className,
  src,
  alt,
  width,
  height
}: ImageType) {

const [load,setload]=useState<boolean>(false)

  return (
    <div style={{width,height}}>
       {!load&& <Skeleton style={{background:'transparent'}} count={5}  />}
        <img 
        onLoad={()=>setload(true)}
        style={{width:load?"100%":0,height:"100%"}}
        alt={alt||"image"}
        src={src}
        className={` ${className}`}
        loading="eager"
        />
    </div>
  )
}

export default SkeletonImg;
