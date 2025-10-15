"use client"
  import React, { useEffect } from "react";
  import Seo from "../../utils/Seo";
  import Image from "next/image";

function Page() {

  return (
    <>
      <div className="flex justify-center w-full">
      <div className="flex justify-between gap-x-10 w-[80%]">
        <div className="mt-4 flex flex-col bg-neutral-500 rounded-lg p-4 ">
          <h2 className="text-white font-bold text-2xl">
          İletişime Geçin
          </h2>

          <div className="mt-4">
            <label className="text-white" htmlFor="title">
              Başlık
            </label>
            <input
              placeholder="Konu Başlığı"
              className="w-full bg-neutral-300 rounded-md border-gray-700 text-black px-2 py-1"
              type="text"
            />
          </div>

          <div className="mt-4">
            <label className="text-white" htmlFor="description">
              Açıklama
            </label>
            <textarea
              placeholder="Fikir görüş ve tekliflerinizi benimle paylaşabilirsiniz."
              className="w-full h-80 bg-neutral-300 rounded-md border-gray-700 text-black  px-2 py-1"
              id="description"
            ></textarea>
          </div>

          <div className="mt-4 flex flex-row space-x-2">
            <div className="flex-1">
              <label className="text-white" htmlFor="emotions">
                Email
              </label>
              <input
                placeholder=""
                className="w-full bg-neutral-300 rounded-md border-gray-700 text-black  px-2 py-1"
                id="emotions"
                type="text"
              />
            </div>

            <div className="flex-1">
              <label className="text-white" htmlFor="symbols">
                Telefon
              </label>
              <input
                placeholder=""
                className="w-full bg-neutral-300 rounded-md border-gray-700 text-black  px-2 py-1"
                id="symbols"
                type="text"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              className="bg-black text-white rounded-md px-4 py-1 hover:bg-neutral-300  hover:text-white"
              id="generate-button"
              type="button"
            >
              Gönder
            </button>
          </div>

        </div>
          <div className="  items-center mx-end hidden xl:flex">
            <Image width={500} height={500} alt="" src="/fonts/undraw_profile-data_xkr9.svg" />
          </div>
      </div>
    </div>
    </>
  );
}

export default Page;
