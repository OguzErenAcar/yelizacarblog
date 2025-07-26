"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from "../About/about.module.css";
import { animate,onScroll } from "animejs";

function Page() {
  useEffect(() => {
    animate(".fade-in-header", {
      opacity: [0, 1],
      duration: 2000,
      easing: "easeInOutQuad",
    });
    animate(".fade-in-description", {
      opacity: [0, 1],
      duration: 6000,
      easing: "easeInOutQuad",
    });

    animate(".timelineText", {
      translateY: [100, 0],
      duration: 2000,
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <div>
      <div className="flex justify-center mt-10 ">
        <div className="flex justify-around w-full items-center lg:flex-row lg:gap-0 gap-4 flex-col-reverse">
          <div className="mt-10 lg:mt-0">
            {" "}
            {/* text */}
            <div className="mx-auto text-start w-[400px]">
              <h1 className=" text-gray-950 text-2xl font-bold mb-4  fade-in-header">
                Yeliz Acar
              </h1>
              <p className="text-gray-950 mt-10 text-justify fade-in-description">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a mo
              </p>
              <div className="w-full flex justify-start gap-x-5 mt-10">
                <button className=" btn btn-outline btn-error">Error</button>
                <button className="btn btn-outline btn-error">Error</button>
                <button className="btn btn-outline btn-error">Error</button>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src="https://images.unsplash.com/photo-1753012102486-e6fa2dd0558a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={468}
              height={0}
              alt=""
              className="block mx-auto"
            />
          </div>
        </div>
      </div>
      {TimeLine()}
    </div>
  );
}

function TimeLine() {
  const arr = Array(4).fill(null);
  useEffect(() => {
    arr.forEach((el,i)=>{
    animate(".timelineText"+i, {
      translateY: [300, 0],
      opacity: [0, 1],
      duration: 1000+i*500,
      easing: "easeInOutQuad",
      autoplay: onScroll({
        container: document.body,
      }),
    });
    })

  }, []);
  return (
    <section className={styles.designsection}>
      <div className={styles.timeline}>
        {arr.map((el,i) => (
          <>
            {i % 2 === 0 ? timelineTextLeft(i) : timelineTextRight(i)}
          </>
        ))}
      </div>
    </section>
  );
}

function timelineTextRight(i:number): React.ReactNode {
  return (
    <>
      <div className={`${styles.timelineempty} `}></div>
      <div className={styles.timelinemiddle}>
        <div className={styles.timelinecircle}></div>
      </div>
      <div
        className={`timelineText${i} ${styles.timelinecomponent} ${styles.timelinecontent}`}
      >
        <h3>HTML</h3>
        <p>Some Text</p>
      </div>
    </>
  );
}
function timelineTextLeft(i:number): React.ReactNode {
  return (
    <>
      <div
        className={`timelineText${i} ${styles.timelinecomponent} ${styles.timelinecontent}`}
      >
        <h3>CSS</h3>
        <p>Some Text.</p>
      </div>
      <div className={styles.timelinemiddle}>
        <div className={styles.timelinecircle}></div>
      </div>
      <div className={styles.timelineempty}></div>
    </>
  );
}

export default Page;
