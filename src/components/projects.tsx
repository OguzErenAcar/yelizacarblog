import React from "react";
import ProjectCard from "./homeComp/projectCard";
import ProjectText from "./homeComp/projectText";

const arr: null[] = Array(4).fill(null); 
function Projects() {
  return (
    <div className="w-full ">
      <h1>Projects</h1>
      <div className="flex justify-center ">
        <div className="w-[1000px] "> 
          {arr.map((el, key) => (
            <div key={key} className="">
              {key%2<1&&
              <div className="flex mt-[100px]  justify-between items-center">
                <ProjectCard innerWidth={300} className="w-[350px] flex justify-center"/> 
                <ProjectText className="  w-[350px]"/>
                </div>
                }
               {key%2>0&&
              <div className="flex mt-[100px]  justify-around items-center">
                <ProjectText className="  w-[350px]"/>
                <ProjectCard innerWidth={300} className="w-[350px] flex justify-center"/> 
                </div>
                }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
