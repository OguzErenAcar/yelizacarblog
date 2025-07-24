"use client";
import Link from "next/link";
import React from "react";
import { useWindowSize } from "usehooks-ts";

function Carousel() {
  const { width, height } = useWindowSize();

  return (
    <div className="relative">
      <div style={{ height: height - 75 }} className="carousel w-full ">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://images.freeimages.com/images/large-previews/d28/macau-1227057.jpg?fmt=webp&h=350"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div id="item3" className="carousel-item w-full ">
          <img
            src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
          {butonsGroup()}
    </div>
  );
}

function butonsGroup() {
  const handleClick = (e:React.MouseEvent) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href');
    document.querySelector(target!)!.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  };

  return (
    <div className="flex w-full absolute bottom-3 justify-center gap-3 py-2">
      <a href="#item1" onClick={handleClick} className="btn rounded-full btn-xs">
        
      </a>
      <a href="#item2" onClick={handleClick} className="btn rounded-full btn-xs">
        
      </a>
      <a href="#item3" onClick={handleClick} className="btn rounded-full btn-xs">
        
      </a>
    </div>
  );
}

export default Carousel;
