"use client";
import ProjectCard from "./homeComp/projectCard";
import ProjectText from "./homeComp/projectText";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getDevice, LAYOUT } from "@/app/utils/constants";
import Link from "next/link";

function Projects() {
  const arr: null[] = Array(4).fill(null);

  const screenWidth = useSelector(
    (state: RootState) => state.navbarReducer.screenWidth
  );
  const [Device, setDevice] = useState<string>("WIDESCREEN");

  useEffect(() => {
    setDevice(getDevice(screenWidth));
  }, [screenWidth]);

  return (
    <div>
      <h1 className="  text-center text-4xl my-20">Projects</h1>
      <div className="w-full flex justify-center">
        <div className="md:w-[90%] ">
          <div className="w-full justify-center hidden md:flex">
            <div>
              {arr.map((item, key) => (
                <div key={key}>
                  {key % 2 == 0 && (
                    <div className="flex justify-start mb-20">
                      <Link href={`/Projects/${key}`}>
                        <ProjectCard
                          innerWidth={300}
                          className="w-[430px] flex justify-center"
                        />
                      </Link>
                      <ProjectText className="my-auto w-[390px] select-none text-justify" />
                    </div>
                  )}

                  {key % 2 == 1 && (
                    <div className="flex justify-end mb-20">
                      <ProjectText className="my-auto w-[390px] select-none text-justify" />
                      <Link href={`/Projects/${key}`}>
                        <ProjectCard
                          innerWidth={300}
                          className="w-[430px] flex justify-center  "
                        />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {arr.map((item, key) => (
            <div
              key={key}
              className="flex flex-col items-center  gap-y-5 md:hidden "
            >
              <>
              <Link href={`/Projects/${key}`}>
                <ProjectCard
                  innerWidth={300}
                  className="w-[400px] flex justify-center "
                />
              </Link>
                <ProjectText className="my-auto w-[400px] select-none text-justify mb-25" />
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
