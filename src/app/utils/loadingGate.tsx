"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
    }, 1000); // Sayfa yüklenene kadar bekleme süresi

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className="min-h-screen">
      {showPage ? (
        children
      ) : (
        <div className=" h-screen flex items-center justify-center bg-white">
          <div className="myloader">
            <img src="/LOGOO.png" className="logo-flip" />
          </div>
        </div>
      )}
    </div>
  );
}
