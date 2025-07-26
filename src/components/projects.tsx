"use client";
import ProjectCard from "./homeComp/projectCard";
import ProjectText from "./homeComp/projectText";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { onScroll, animate } from "animejs";

function Projects() {
  const arr: null[] = Array(4).fill(null);
  const [files, setFiles] = useState<string[] | null>([]);
  const [firstImgs, setfirstImgs] = useState<string[] | null>([]);

  useEffect(() => {
    fetch("/api/uploads")
      .then((res) => res.json())
      .then((res) => {
        setFiles(res.files.slice(1, res.files.length));
      });
  }, []);

  useEffect(() => {
    if (files!.length > 0)
      files?.forEach((el, i) => {
        fetch("/api/uploads/" + el)
          .then((res) => res.json())
          .then((res) => {
            setfirstImgs((prev) => {
              const updated = [res.files[0], ...prev!];
              console.log(updated);
              return updated;
            });
          });
      });
  }, [files]);

  return (
    <div>
      <h1 className="  text-center text-4xl my-20">Projects</h1>
      <div className="w-full flex justify-center">
        <div className="md:w-[90%] ">
          <div className="w-full justify-center hidden md:flex">
            <div>
              {firstImgs?.map((item, key) => (
                <div key={key}>
                  {key % 2 == 0 && (
                    <div className="flex justify-start mb-20">
                      <Link href={`/Projects/${key}`}>
                        <ProjectCard
                          src={item}
                          innerWidth={300}
                          className="w-[430px] flex justify-center transition duration-500 ease-in-out transform hover:scale-110"
                        />
                      </Link>
                      <ProjectText
                        data_aos="fade-left"
                        className=" slide-right-to-left my-auto w-[390px] select-none text-justify"
                      />
                    </div>
                  )}

                  {key % 2 == 1 && (
                    <div className="flex justify-end mb-20">
                      <ProjectText
                        data_aos="fade-right"
                        className="my-auto w-[390px] select-none text-justify"
                      />
                      <Link href={`/Projects/${key}`}>
                        <ProjectCard
                          src={item}
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
          {firstImgs?.map((item, key) => (
            <div
              key={key}
              className="flex flex-col items-center  gap-y-8 md:hidden "
            >
              <>
                <Link href={`/Projects/${key}`}>
                  <ProjectCard
                    src={item}
                    innerWidth={300}
                    className="w-[350px] flex justify-center transition duration-500 ease-in-out transform hover:scale-110"
                  />
                </Link>
                <ProjectText
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
