"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Logo } from "../../types/api/apiTypes";
import SkeletonImage from "@/components/img/skeletonImage";

export default function LoadingGate({
  children,
}: {
  children?: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setShowPage(false);

    const timeout = setTimeout(() => {
      setShowPage(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  const [Logo_, setLogo_] = useState<Logo | null>(null);
  const [loaded, setLoaded] = useState(false);
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
    <div className="min-h-screen">
      {showPage ? (
        children
      ) : (
        <div className=" h-screen flex items-center justify-center bg-white">
          <div className="myloader">
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
              width={148}
              height={148}
              alt=""
              className="logo-flip"
            />
          </div>
        </div>
      )}
    </div>
  );
}
