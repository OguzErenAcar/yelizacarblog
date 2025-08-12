import Projects from "@/components/projects";
import React from "react";
import type { Metadata } from "next";
import JsonLd from "@/app/utils/JsonLd";

export const metadata: Metadata = {
  title: "Projects - Yeliz Acar",
  description: "A selection of projects by Yeliz Acar.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects",
  description: "A selection of projects by Yeliz Acar.",
  url: "https://yelizacarblog.com/Blog/Projects",
};

function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div>
        <Projects />
      </div>
    </>
  );
}

export default Page;
