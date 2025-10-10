"use client";
import ProjectCard from "./projectCard";
import ProjectText from "./projectText";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Aos from "aos";
import { Nunito_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import {  Project } from "../../types/api/apiTypes";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400"], // sadece regular
  display: "swap",
});

function Projects() {
  const [Projects, setProjects] = useState<Project[] | null>([]);
  const pathname = usePathname();
  const getPath = (key: string): string => {
    return pathname?.includes("/projects")
      ? `${pathname}/${key}`
      : `${pathname}/projects/${key}`;
  };

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
    fetch(process.env.NEXT_PUBLIC_HOST+"/dashboard/api/projects?populate=%2A")
      .then((res) => 
        res.json())
      .then((data) => {
          const projects=data.data as Project[];
          const activeProjects=projects.filter(z=>z.isActive)
          setProjects(activeProjects);
      });
  }, []);

  return (
    <div>
      <h1
        className={`${nunito.className} text-center text-black text-5xl my-20`}
      >
        PROJECTS
      </h1>
      <div className="w-full flex justify-center">
        <div className="xl:max-w-[1280px] ">
          <div className="w-full justify-center hidden md:flex">
            <div className="min-h-[100vh]">
              {Projects?.sort((a,b)=>a.rowOfNumber-b.rowOfNumber).map((item, key) => (
                <div key={key}>
                  {key % 2 == 0 && (
                    <div className="flex justify-start mb-20">
                      <Link aria-label="project" href={getPath(item.documentId)}>
                        <ProjectCard
                          src={
                            process.env.NEXT_PUBLIC_HOST+"/dashboard" +
                              item.ProjectImages![0].formats.medium?.url || ""
                          }
                          innerWidth={300}
                          className="w-[430px] flex justify-center transition duration-500 ease-in-out transform hover:scale-110"
                        />
                      </Link>
                      <ProjectText
                        title={item.Title}
                        desc={item.Description}
                        data_aos="fade-left"
                        className=" slide-right-to-left my-auto w-[390px] select-none text-start"
                      />
                    </div>
                  )}

                  {key % 2 == 1 && (
                    <div className="flex justify-end mb-20">
                      <ProjectText
                        title={item.Title}
                        desc={item.Description}
                        data_aos="fade-right"
                        className="my-auto w-[390px] select-none text-end"
                      />
                      <Link aria-label="project" href={getPath(item.documentId)}>
                        <ProjectCard
                          src={
                            process.env.NEXT_PUBLIC_HOST+"/dashboard" +
                              item.ProjectImages![0].formats.medium?.url || ""
                          }
                          innerWidth={300}
                          className="w-[430px] flex justify-center transition duration-500 ease-in-out transform hover:scale-110"
                        />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {Projects?.sort((a,b)=>a.rowOfNumber-b.rowOfNumber).map((item, key) => (
            <div
              key={key}
              className="flex flex-col items-center  gap-y-8 md:hidden "
            >
              <>
                <Link aria-label="project" href={getPath(item.documentId)}>
                  <ProjectCard
                    src={
                      process.env.NEXT_PUBLIC_HOST+"/dashboard" +
                        item.ProjectImages![0].formats.medium?.url || ""
                    }
                    innerWidth={300}
                    className="w-[350px] flex justify-center transition duration-500 ease-in-out transform hover:scale-110"
                  />
                </Link>
                <ProjectText
                  title={item.Title}
                  desc={item.Description}
                  data_aos="zoom-in-up"
                  className="my-auto w-[350px] select-none text-justify mb-25"
                />
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
