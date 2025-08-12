"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import type { Metadata } from "next";
import JsonLd from "@/app/utils/JsonLd";

export const metadata: Metadata = {
  title: "Yeliz Acar Blog",
  description: "Personal blog of architect Yeliz Acar.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Yeliz Acar Blog",
  description: "Personal blog of architect Yeliz Acar.",
  url: "https://yelizacarblog.com",
};

function Page() {
  const router = useRouter();
  useEffect(() => {
    router.push("/Blog");
  }, [router]);
  return <JsonLd data={jsonLd} />;
}

export default Page;
