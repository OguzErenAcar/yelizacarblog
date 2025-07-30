import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Project } from "../../app/utils/projectsModel";
import { useRef } from "react";

function Carousel() {
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProject(data.uploads.yeliz.projects[6]);
      });
  }, []);
  return (
    <div className="relative">
      <div className="carousel w-full h-[calc(100vh)]  ">
        {project &&
          project.images.map((item, key) => (
            <div key={key} id={`item${key}`} className="carousel-item w-full ">
              <img
                src={project.url + item}
                className="w-full h-full object-cover object-center "
              />
              <div className="absolute bottom-0 left-0 h-1/7 w-full bg-gradient-to-t from-black/40"></div>
            </div>
          ))}
      </div>
      {project && <ButonsGroup index={project.images.length} />}
    </div>
  );
}

function ButonsGroup({ index }: { index: number }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");
    document.querySelector(target!)!.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };
  const arr = Array(index).fill(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
 

  // useEffect(() => {
  //   const buttons = buttonsRef.current;
  //   if (buttons) {
  //     const childs = buttons.childNodes;

  //     let ind = 0;
  //     const interval = setInterval(() => {
  //       const btn = childs[ind] as HTMLElement;
  //       btn.click();
  //       ind += 1;
  //       if (ind >= childs.length) ind = 0;
  //     }, 2000);

  //     return () => clearInterval(interval);
  //   } 
  // }, []);

  return (
    <div
      ref={buttonsRef}
      id="carouselButtons"
      className="flex w-full absolute bottom-3 justify-center gap-3 py-2 shadow-none"
    >
      {arr.map((i, key) => (
        <a
          key={key}
          href={`#item${key}`}
          onClick={handleClick}
          className=" bg-white border-black rounded-full btn-xs h-[14px] w-[14px] opacity-50"
        ></a>
      ))}
    </div>
  );
}

export default Carousel;
