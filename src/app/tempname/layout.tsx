import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/blog/navbar";
import Footer from "@/components/blog/footer";
import { StoreProvider } from "@/store/storeProvider";
import Link from "next/link";
import ResizeProvider from "../utils/resizeProvider";
import "aos/dist/aos.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "yet-another-react-lightbox/styles.css";
import "react-loading-skeleton/dist/skeleton.css";

import { Nunito_Sans } from "next/font/google";
import LoadingGate from "../utils/loadingGate";
import { generateSeoMetadata } from "../../app/utils/seoMetaData";
import JsonLd from "@/app/utils/JsonLd";

const title ="YELİZ ACAR";
const description= "YELİZ ACAR , Mimar projeleri ve bilgileri. iletişime geçin, projelerine göz atın, mimarlık, mezun";
const path= "/Blog";

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

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400"], // sadece regular
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export default function Blog({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <main>
      <link rel="icon" href={process.env.NEXT_PUBLIC_TITTLE_ICON} />
     {/* <JsonLd data={jsonLd} />  */}
      <StoreProvider>
           <Drawer>
          <Navbar />
            <ResizeProvider>
              <LoadingGate>
             {children}
              </LoadingGate>
            </ResizeProvider>
            <Footer /> 
          </Drawer> 
        </StoreProvider>
    </main>
  
  );
}

function Drawer({ children }: { children?: React.ReactNode }) {
  return (
    <div className={"drawer drawer-end "}>
     <label htmlFor="my-drawer"/>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className=" hidden btn btn-primary drawer-button"
        >
          Open drawer
        </label>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul
          className={`${nunito.className} text-lg menu bg-base-200 text-base-content min-h-full w-80 p-4`}
        >
          <li>
            <Link aria-label="Blog" href="/blog">Home</Link>
          </li>
          <li>
            <Link aria-label="Projects" href="/blog/projects">Projects</Link>
          </li>
          <li>
            <Link aria-label="About" href="/blog/about">About</Link>
          </li>
          <li>
            <Link aria-label="Contact" href="/blog/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
