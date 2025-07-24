"use client";
import React from "react";
function ResizeProvider({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="w-[100%] h-full ">{children}</div>
    </div>
  );
}

export default ResizeProvider;
