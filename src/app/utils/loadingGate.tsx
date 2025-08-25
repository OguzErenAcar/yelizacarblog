"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

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

  return (
    <div className="min-h-screen">
      {showPage ? (
        children
      ) : (
          <div className=" h-screen flex items-center justify-center bg-white">
            <div className="myloader">
              <Image src="/LOGOO.png" width={148} height={148} alt="" className="logo-flip" />
            </div>
          </div>
      )}
    </div>
  );
}