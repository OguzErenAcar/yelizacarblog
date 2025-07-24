"use client";
import { setScreenWidth } from "@/store/sliders/navbarSlider";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function ResizeProvider({ children }: { children?: React.ReactNode }) {

  const dispatch=useDispatch()
  useEffect(() => {
    const handleResize = () => {
      dispatch(setScreenWidth(window.innerWidth))
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return ( 
      <div >{children}</div> 
  );
}

export default ResizeProvider;
