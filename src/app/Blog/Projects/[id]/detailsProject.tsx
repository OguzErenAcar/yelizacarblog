"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import { Nunito_Sans } from 'next/font/google';
import Skeleton from "react-loading-skeleton";
import SkeletonImage from "@/components/img/skeletonImage";
import {  Project } from "../../../../types/api/apiTypes";

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400'],      
  display: 'swap',
});

function  DetailsProject({id}:{id:string}) {
   const [index, setIndex] = useState(-1);
   const [project, setProject] = useState<Project | null>(null);



    useEffect(() => {
      fetch(process.env.NEXT_PUBLIC_HOST+"/dashboard/api/projects/"+id+"?populate=%2A")
        .then((res) => res.json())
        .then((data) => {
         const project=data.data as Project;
         console.log(project)
         setProject(project);
        });
    }, []);
   
  return (
    <div> 
      <div className=" h-[calc(100vh-80px)]">
      { project&& <SkeletonImage
          src={process.env.NEXT_PUBLIC_HOST+"/dashboard"+project.ProjectImages![0].url}
          alt="project details"
          className="w-full  h-full object-cover object-center"
        />}
      </div> 
      <div className={`${nunito.className} text-xl max-w-2xl mx-auto px-4 mt-20 my-[100px] leading-[40px]`}>
        <h2 className={`text-black text-center  font-black text-2xl font-bold mb-4 `}>{project?.Title||<Skeleton/>}</h2>
        <p className={`${nunito.className} text-black text-md text-justify mt-15`}>
          {project?.Description ||<Skeleton/>}
        </p>
      </div>
      <div 
        className=" flex items-center justify-center mb-12 ">
        <div className="grid grid-cols-3 gap-y-2 gap-x-4 w-[80%] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          
          {project&&project!.ProjectImages?.map((item, key) => (
            
            <div
              className="border-2 rounded-md  border-gray mx-auto mb-4 md:mb-5 transition duration-1000 ease-in-out transform hover:scale-110"
              key={key}
            >
              <div onClick={()=>setIndex(key)}>
              {/* {load&&<Skeleton width={300} height={10} count={5} />} */}
              <SkeletonImage
                width={300}
                height={170}
                alt=""
                className="rounded-md"
                src={process.env.NEXT_PUBLIC_HOST+"/dashboard"+item.formats.medium?.url}
              
              />
              </div>
            </div>
          ))}
        </div>
      </div>
       <Lightbox
        index={index}
        open={index>=0}
        close={() => setIndex(-1)}
        slides={project?.ProjectImages?.map((el,i)=>{
          const slideImg:SlideImage={
            src:`${process.env.NEXT_PUBLIC_HOST+"/dashboard"+el.url}`
          }
          return slideImg
        } )
      }
      />
    </div>
  );
}

export default DetailsProject
