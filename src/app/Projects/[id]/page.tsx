"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react"; 
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import { Project } from '../../utils/projectsModel';
import { Nunito_Sans } from 'next/font/google';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400'],       // sadece regular
  display: 'swap',
});

function Page({ params }: { params: { id: string } }) {
    const [index, setIndex] = useState(-1);

  const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
      fetch("/projects.json")
        .then((res) => res.json())
        .then((data) => {
         const projects=data.uploads.yeliz.projects as Project[];
         const proj=projects.filter((x,i)=>i.toString()==params.id)
         console.log(proj[0].url+proj[0].images[0])
         setProject(proj[0]);
        });
    }, []);
   
  return (
    <div className="" > 
      <div className="min-h-100">
        {project&&<img
          className="w-full h-[calc(100vh-80px)]  object-cover object-center"
          alt=""
          src={'/'+project!.url + project!.images[0]}
        />}
      </div> 
      <div className={`${nunito.className} max-w-xl mx-auto px-4 mt-20`}>
        <h2 className={`text-black text-center  text-2xl font-bold mb-4`}>{project?.title}</h2>
        <p className={`${nunito.className} text-black text-md text-justify mt-15`}>
          {project?.description}
        </p>
      </div>
      <div
       
        className=" flex items-center justify-center h-170 md:h-[1000px]"
      >
        <div className="grid grid-cols-3 gap-y-2 gap-x-4">
          {project&&project!.images.map((item, key) => (
            <div
              className="transition duration-1000 ease-in-out transform hover:scale-110"
              key={key}
            >
              <img
                onClick={()=>setIndex(key)}
                width="270"
                height="170"
                alt=""
                src={'/'+project!.url + item}
              />
            </div>
          ))}
        </div>
      </div>
       <Lightbox
        index={index}
        open={index>=0}
        close={() => setIndex(-1)}
        slides={project?.images.map((el,i)=>{
          const slideImg:SlideImage={
            src:`/${project.url}${el}`
          }
          return slideImg
        } )
      }
      />
    </div>
  );
}
export default Page;
