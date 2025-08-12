"use client";
import type { Metadata } from "next";
import AOS from "aos";
import { useEffect } from "react";
import Carousel from "@/components/homeComp/carousel";
import Projects from "@/components/projects";
import JsonLd from "@/app/utils/JsonLd";

export const metadata: Metadata = {
  title: "Yeliz Acar Blog",
  description: "Personal blog of architect Yeliz Acar showcasing projects and articles.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Yeliz Acar Blog",
  description: "Personal blog of architect Yeliz Acar showcasing projects and articles.",
  url: "https://yelizacarblog.com/Blog",
};

function Page() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <JsonLd data={jsonLd} />
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
