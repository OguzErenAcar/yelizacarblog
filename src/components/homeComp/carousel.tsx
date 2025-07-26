import Link from "next/link";
import React, { useEffect, useState } from "react";
function Carousel() {
  const [files, setFiles] = useState<string[]|null>([]);

  useEffect(() => {
    fetch("/api/uploads/p7")
      .then((res) => res.json())
      .then((data) => {
        setFiles(data.files);
      });
  }, []);
  return (
    <div className="relative">
      <div className="carousel w-full h-[calc(100vh)] ">
          {files&&files.map((item,key)=>(
        <div key={key} id={`item${key}`} className="carousel-item w-full">
          <img
            src={item}
            className="w-full h-full object-cover object-center"
          />
        </div>
          ))}
      </div>
      {files&&butonsGroup(files.length)}
    </div>
  );
}

function butonsGroup(index:number) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");
    document.querySelector(target!)!.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };
   const arr= Array(index).fill(null);
  return (
    <div className="flex w-full absolute bottom-3 justify-center gap-3 py-2">
      {
        arr.map((i,key)=>(
          <a
        key={key}
        href={`#item${key}`}
        onClick={handleClick}
        className="btn rounded-full btn-xs"
      ></a>
        ))
      }
    </div>
  );
}

export default Carousel;
