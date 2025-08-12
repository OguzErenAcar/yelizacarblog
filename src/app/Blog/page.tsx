"use client";
import Carousel from "@/components/homeComp/carousel";
import Projects from "@/components/projects";
import AOS from 'aos';
import { useEffect } from "react";
import dynamic from "next/dynamic"
import LoadingGate from "../utils/loadingGate"
import Seo from "../utils/Seo";


function Page() {



  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <Seo title="Home" path="/Blog" />
      <div>
        <div>
          <Carousel />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default Page;
