"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Edu_QLD_Beginner } from "next/font/google";
import Image from "next/image";
import { Logo } from "../../types/api/apiTypes";
import SkeletonImage from "../img/skeletonImage";

const Lovers = Edu_QLD_Beginner({
  subsets: ["latin"],
  weight: ["400"], // sadece regular
  display: "swap",
});

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const absolute = usePathname() === "/";

  const drawerBtn = () => {
    document.getElementById("my-drawer")?.click();
  };

  const [Logo_, setLogo_] = useState<Logo | null>(null);
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_HOST + "/dashboard/api/logos?populate=%2A")
      .then((res) => res.json())
      .then((data) => {
        const logos = data.data as Logo[];
        const logoItem = logos.filter((x) => x.isActive == true);
        console.log(logoItem[0]);
        setLogo_(logoItem[0]);
      });
  }, []);

  return (
    <div
      id="navbar"
      className={`${
        absolute ? "absolute" : "relative"
      } top-0 h-[75px] w-full z-1`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        id="navbarbg"
        className={`absolute inset-0  duration-500 ${
          isHovered ? "opacity-100" : "opacity-50"
        }`}
      ></div>

      {/* Navbar içeriği */}
      <div className="relative flex items-center justify-between h-full  z-0">
        <div className=" ms-5">
          <Link aria-label="Logo" className="flex gap-x-2" href="/">
            <Image
              style={{
                visibility: loaded ? "visible" : "hidden",
                transition: "visibility 0s, opacity 0.3s ease",
                opacity: loaded ? 1 : 0,
              }}
              onLoad={() => setLoaded(true)}
              src={
                process.env.NEXT_PUBLIC_HOST +
                "/dashboard" +
                Logo_?.Logo?.formats.thumbnail?.url
              }
              width={40}
              height={40}
              alt=""

            />
            <h1 className={`${Lovers.className} text-2xl h-[30px] my-auto`}>
              Yeliz Acar
            </h1>
          </Link>
        </div>

        <button
          aria-label="navbutton"
          onClick={drawerBtn}
          className="text-white btn btn-square btn-ghost me-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
