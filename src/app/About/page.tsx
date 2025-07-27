"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from "../About/about.module.css";
import { animate, onScroll } from "animejs";
import { Nunito_Sans } from "next/font/google";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";


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
        text: str +' Copied',
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
        text: 'Download CV',
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
 
  return (
    <div>
      <div className="flex justify-center mt-10 ">
        <div className="flex justify-around w-full items-center lg:flex-row lg:gap-0 gap-4 flex-col-reverse">
          <div className="mt-10 lg:mt-0">
            {" "}
            {/* text */}
            <div className={`mx-auto text-start lg:w-[600px] lg:px-0 px-4 `}>
              <h1
                className={` ${nunito.className} font-extrabold text-gray-950 text-3xl font-bold mb-4  fade-in-header`}
              >
                Yeliz Acar
              </h1>
              <p
                className={`${nunito2.className} leading-relaxed text-gray-950 text-3xl mt-10 text-justify fade-in-description`}
              >
                Yeliz Acar, 2003 yılında İstanbul&apos;da doğmuştur. 2025
                yılında Bursa Uludağ Üniversitesi Mimarlık bölümünden mezun
                olmuş bir mimardır.
              </p>
              <div className="w-full flex justify-start gap-x-15 mt-10">
                <img
                  onClick={downloadCV}
                  className="cursor-pointer"
                  src="/fonts/docs_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="Arrow"
                  width={40}
                  height={40}
                />
                <img
                  onClick={() => {
                    copyLink("0551 160 14 94");
                  }}
                  className="cursor-pointer"
                  src="/fonts/mail_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="Arrow"
                  width={40}
                  height={40}
                />
                <img
                  onClick={() => {
                    copyLink("yelzacr4141@.gmail.com");
                  }}
                  className="cursor-pointer"
                  src="/fonts/phone_in_talk_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="Arrow"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src='/photo.jpeg'
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
  const arr = [
  { title: "ŞANTİYE STAJI", desc: "ARTSAM İNŞAAT 2024-AĞUSTOS" },
  { title: "OFİS STAJI", desc: "EMİRCAN İNŞAAT 2024-TEMMUZ" },
  { title: "OFİS STAJI", desc: "ENGİN KÜÇÜK MİMARLIK 2023-Temmuz-Ağustos" },
  { title: "ŞANTİYE STAJI", desc: "BASİT İNŞAAT/ Zafer Şantiyesi 2022-Temmuz-Ağustos" },
];
  useEffect(() => {
    arr.forEach((el, i) => {
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
  }, []);
  return (
    <section className={styles.designsection}>
      <div className={styles.timeline}>
        {arr.map((el, i) => (
          <React.Fragment key={i}>
            {i % 2 === 0 ? timelineTextLeft(i, el) : timelineTextRight(i, el)}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function timelineTextRight(
  i: number,
  item: { title: string; desc: string }
): React.ReactNode {
  return (
    <>
      <div className={`${styles.timelineempty} `}></div>
      <div className={styles.timelinemiddle}>
        <div className={styles.timelinecircle}></div>
      </div>
      <div
        className={`timelineText${i} ${styles.timelinecomponent} ${styles.timelinecontent}`}
      >
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </>
  );
}

function timelineTextLeft(
  i: number,
  item: { title: string; desc: string }
): React.ReactNode {
  return (
    <>
      <div
        className={`timelineText${i} ${styles.timelinecomponent} ${styles.timelinecontent}`}
      >
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
      <div className={styles.timelinemiddle}>
        <div className={styles.timelinecircle}></div>
      </div>
      <div className={styles.timelineempty}></div>
    </>
  );
}

export default Page;
