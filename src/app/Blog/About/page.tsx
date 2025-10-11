"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../about/about.module.css";
import { animate, onScroll } from "animejs";
import { Nunito_Sans } from "next/font/google";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
import Seo from "../../utils/Seo";
import SkeletonImage from "@/components/img/skeletonImage";
import { Infos, InfoTimeLine, LinkItem } from "../../../types/api/apiTypes";
import { useRouter } from "next/navigation";
import Link from "next/link";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["700"], // sadece regular
  display: "swap",
});
const nunito2 = Nunito_Sans({
  subsets: ["latin"],
  weight: ["500"], // sadece regular
  display: "swap",
});
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

  const copyLink = (str: string) => {
    navigator.clipboard.writeText(str).then(() => {
      Toastify({
        text: str + " Copied",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "black",
        },
      }).showToast();
    });
  };
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/YelizAcar-CV.pdf"; // dosyanın yolu
    link.download = "YelizAcar-CV.pdf"; // kullanıcıya nasıl görünecek
    link.click();
    Toastify({
      text: "Download CV",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "black",
      },
    }).showToast();
  };

  const router = useRouter();
  const goToLink = (el: string) => {
window.open(el, "_blank");
  };

  const [Info, setInfo] = useState<Infos | null>(null);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_HOST + "/dashboard/api/infos?populate=%2A")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data.data[0]);
      });
  }, []);

  const [Links, setLinks] = useState<LinkItem[] | []>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_HOST + "/dashboard/api/links?populate=%2A")
      .then((res) => res.json())
      .then((data) => {
        const links = data.data as LinkItem[];
        const activeLinks = links.filter((z) => z.isActive);
        setLinks(activeLinks);
      });
  }, []);

  return (
    <>
      <Seo title="About" path="/Blog/About" />
      <div className="flex justify-center mt-10 ">
        <div className="flex justify-around w-full items-center xl:flex-row xl:gap-0 gap-4 flex-col-reverse">
          <div className="mt-10 lg:mt-0">
            {" "}
            {/* text */}
            <div className={`mx-auto text-start lg:w-[600px] lg:px-0 px-4 `}>
              <h1
                className={` ${nunito.className} font-extrabold text-gray-950 text-3xl font-bold mb-4  fade-in-header`}
              >
                {Info?.Header}
              </h1>
              <p
                className={`${nunito2.className} leading-relaxed text-gray-950 text-3xl mt-10 text-justify fade-in-description`}
              >
                {Info?.Description}
              </p>
              <div className="w-full flex justify-start gap-x-10 mt-10">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                 {Links.sort((a,b)=>a.rowOfNumber-b.rowOfNumber).map((el, i) => (
                  <div key={i}>
                   <button  onClick={()=>{
                    if(el.Name=="CV"){
                      goToLink(el.LinkUrl);
                    }else{
                      copyLink(el.LinkUrl)
                    }
                   }}>
                     <span style={{ color: 'black', fontSize:40 ,cursor:"pointer" }} className="material-symbols-outlined">
                      {el.FontName}
                    </span>
                   </button>
                  </div>
                ))} 
                {/* <img
                  loading="lazy"
                  onClick={() => {
                    const mail = Links.filter((x) => x.Name == "CV");
                    goToLink(mail[0].LinkUrl);
                  }}
                  className="cursor-pointer"
                  src="/fonts/docs_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="Arrow"
                  width={40}
                  height={40}
                /> */}
              </div>
            </div>
          </div>
          {/* <div className="p-8 space-y-6">
            <div className="animate-pulse space-y-4 p-4  rounded-lg shadow w-full max-w-md">
              <div className="h-190 bg-gray-300 rounded w-[468px]"></div>
            </div>
          </div> */}

          <div className="">
            <Image
              src={
                process.env.NEXT_PUBLIC_HOST +
                "/dashboard" +
                Info?.ProfileImage?.url
              }
              width={468}
              height={700}
              alt="Yeliz Acar image"
              className="block mx-auto"
            />
          </div>
        </div>
      </div>
      {TimeLine()}
    </>
  );
}

function TimeLine() {
  const [InfoTimeLine_, setInfoTimeLine] = useState<InfoTimeLine[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_HOST + "/dashboard/api/info-time-lines")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.data);
        setInfoTimeLine(data.data);
      });
  }, []);
  useEffect(() => {
    InfoTimeLine_?.sort((a,b)=>a.rowOfNumber-b.rowOfNumber).forEach((el, i) => {
      animate(".timelineText" + i, {
        translateY: [300, 0],
        opacity: [0, 1],
        duration: 1000 + i * 500,
        easing: "easeInOutQuad",
        autoplay: onScroll({
          container: document.body,
        }),
      });
    });
  }, [InfoTimeLine_]);

  return (
    <section className={styles.designsection}>
      <div className={styles.timeline}>
        {InfoTimeLine_?.sort((a,b)=>a.rowOfNumber-b.rowOfNumber).map((el, i) => (
          <React.Fragment key={i}>
            {i % 2 === 0 ? timelineTextLeft(i, el) : timelineTextRight(i, el)}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function timelineTextRight(i: number, item: InfoTimeLine): React.ReactNode {
  return (
    <>
      <div className={`${styles.timelineempty} `}></div>
      <div className={styles.timelinemiddle}>
        <div className={styles.timelinecircle}></div>
      </div>
      <div
        className={`timelineText${i} ${styles.timelinecomponent} ${styles.timelinecontent}`}
      >
        <h3>{item.Header}</h3>
        <p>{item.Description}</p>
      </div>
    </>
  );
}

function timelineTextLeft(i: number, item: InfoTimeLine): React.ReactNode {
  return (
    <>
      <div
        className={`timelineText${i} ${styles.timelinecomponent} ${styles.timelinecontent}`}
      >
        <h3>{item.Header}</h3>
        <p>{item.Description}</p>
      </div>
      <div className={styles.timelinemiddle}>
        <div className={styles.timelinecircle}></div>
      </div>
      <div className={styles.timelineempty}></div>
    </>
  );
}

export default Page;
