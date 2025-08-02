import { ThemeProvider } from "@/context/ThemeContext";
import React from "react";
import "../../styles/index.css"
import AppLayout from "@/layout/AppLayout";
import { ScrollToTop } from "@/components/common/ScrollToTop";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ScrollToTop/>
          <AppLayout/>
          <div className="flex justify-end w-full pb-10 pe-10">
            <div className=" w-[90%]">
            {children}
            </div>
          </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
