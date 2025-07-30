import Image from "next/image";
import React, { useEffect, useState } from "react"; 
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import { Project } from '../../utils/projectsModel';
import { Nunito_Sans } from 'next/font/google';
import Skeleton from "react-loading-skeleton";

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400'],      
  display: 'swap',
});

function  DetailsProject({id}:{id:string}) {
   const [index, setIndex] = useState(-1);
   const [project, setProject] = useState<Project | null>(null);
   const [load, setLoad] = useState(false);


    useEffect(() => {
      fetch("/projects.json")
        .then((res) => res.json())
        .then((data) => {
         const projects=data.uploads.yeliz.projects as Project[];
         const proj=projects.filter((x,i)=>i.toString()==id)
         console.log(proj[0].url+proj[0].images[0])
         setProject(proj[0]);
        });
    }, []);
   
  return (
    <div> 
      <div className=" ">
        {project&&<img
          className="w-full h-[calc(100vh-80px)]  object-cover object-center"
          alt=""
          src={'/'+project!.url + project!.images[0]}
        />}
      </div> 
      <div className={`${nunito.className} text-xl max-w-2xl mx-auto px-4 mt-20 my-[100px] leading-[40px]`}>
        <h2 className={`text-black text-center  font-black text-2xl font-bold mb-4 `}>{project?.title||<Skeleton/>}</h2>
        <p className={`${nunito.className} text-black text-md text-justify mt-15`}>
          {project?.description ||<Skeleton/>}
        </p>
      </div>
      <div 
        className=" flex items-center justify-center mb-12 ">
        <div className="grid grid-cols-3 gap-y-2 gap-x-4 w-[80%] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          
          {project&&project!.images.map((item, key) => (
            
            <div
              className="border-2 rounded-md  border-gray mx-auto mb-4 md:mb-5 transition duration-1000 ease-in-out transform hover:scale-110"
              key={key}
            >
              <>
              {/* {load&&<Skeleton width={300} height={10} count={5} />} */}
              <img
                style={{}}
                onLoad={()=>setLoad(true)}
                onClick={()=>setIndex(key)}
                width="400"
                height="170"
                alt=""
                className="rounded-md"
                src={'/'+project!.url + item}
              
              />
              </>
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

export default DetailsProject
