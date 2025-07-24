"use client";
import Image from "next/image";
import React from "react";
import { useWindowSize } from "usehooks-ts";
import styles from "../About/about.module.css";
function Page() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <div className="flex items-center">
        <div className="flex-1">
          <div className="mx-auto text-center w-[500px]">
            <h1 className=" text-2xl font-bold mb-4  ">Yeliz Acar</h1>
            <p className="mt-10 text-justify">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a mo
            </p>
            <div className="w-full flex justify-center gap-x-5 mt-10">
              <button className=" btn btn-outline btn-error">Error</button>
              <button className="btn btn-outline btn-error">Error</button>
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <Image
            src="https://images.unsplash.com/photo-1753012102486-e6fa2dd0558a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
            height={0}
            alt=""
            className="block mx-auto"
          />
        </div>
      </div>

      <section className={styles.designsection}>

        <div className={styles.timeline}>
          
          <div className={styles.timelineempty}></div>
          <div className={styles.timelinemiddle}>
            <div className={styles.timelinecircle}></div>
          </div>
          <div className={`${styles.timelinecomponent} ${styles.timelinecontent}`}>
            <h3>HTML</h3>
            <p>Some Text</p>
          </div>
          <div className={`${styles.timelinecomponent} ${styles.timelinecontent}`}>
            <h3>CSS</h3>
            <p>Some Text.</p>
          </div>
          <div className={styles.timelinemiddle}>
            <div className={styles.timelinecircle}></div>
          </div>
          <div className={styles.timelineempty}></div>
          <div className={styles.timelineempty}></div>
          <div className={styles.timelinemiddle}>
            <div className={styles.timelinecircle}></div>
          </div>
          <div className={`${styles.timelinecomponent} ${styles.timelinecontent}`}>
            <h3>Javascript</h3>
            <p>Some Text.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
