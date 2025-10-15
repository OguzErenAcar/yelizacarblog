import React from 'react'
import { generateSeoMetadata } from "../../../app/utils/seoMetaData";
import JsonLd from "@/app/utils/JsonLd";

const title ="Yeliz Acar";
const description= "Yeliz Acar mimar iletişim bilgiler, iletişime geçin, projelerine göz atın, mimarlık, mezun.";
const path= "/Blog/contact";
 

export const metadata = generateSeoMetadata({
  title:title,
  description:description,
  path: path
}); 
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: `https://yelizacar.com.tr${path}`,

};


function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     <link rel="icon" href={process.env.NEXT_PUBLIC_TITTLE_ICON} />
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}

export default layout
