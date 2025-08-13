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

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Architect Yeliz Acar Blog";
const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

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

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
  },
};

export default function Blog({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
        <StoreProvider>
          <Drawer>
            <Navbar />
            <ResizeProvider>
             {children}
            </ResizeProvider>
            <Footer />
          </Drawer>
        </StoreProvider>
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
            <Link aria-label="Blog" href="/Blog">Home</Link>
          </li>
          <li>
            <Link aria-label="Projects" href="/Blog/Projects">Projects</Link>
          </li>
          <li>
            <Link aria-label="About" href="/Blog/About">About</Link>
          </li>
          <li>
            <Link aria-label="Contact" href="/Blog/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
