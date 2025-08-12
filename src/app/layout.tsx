import { ThemeProvider } from "@/context/ThemeContext";
import React from "react";
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Yeliz Acar Blog",
  description: "Personal blog of architect Yeliz Acar.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
