"use client";
import Image from "next/image";
import React from "react";
import { useWindowSize } from "usehooks-ts";

function Page({ params }: { params: { id: string } }) {
  const { width, height } = useWindowSize();
  const arr: null[] = Array(8).fill(null);

  return (
    <div>
      <div>
        <img
          style={{ height }}
          className="w-full"
          alt=""
          src="https://images.pexels.com/photos/32544883/pexels-photo-32544883.jpeg?_gl=1*1nc3lvi*_ga*Mzc5NTY5ODM2LjE3NTMxNDM1NjA.*_ga_8JE65Q40S6*czE3NTMyOTM2NTYkbzIkZzEkdDE3NTMyOTM3MDckajkkbDAkaDA."
        />
      </div>
      <div className="max-w-xl mx-auto px-4 mt-20">
        <h2 className="text-center text-2xl font-bold mb-4">Header</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to usi
        </p>
      </div>
      <div style={{height:arr.length*100}} className=" flex items-center justify-center">
      <div className="grid grid-cols-3 gap-y-3 gap-x-7">
        {arr.map((item, key) => (
          <div key={key}>
            <Image width="270" height="170" alt="" src="https://plus.unsplash.com/premium_photo-1752954678452-2b4946f15ae5?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Page;
