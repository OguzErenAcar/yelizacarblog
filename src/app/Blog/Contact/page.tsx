"use client";
import React from "react";
import type { Metadata } from "next";
import JsonLd from "@/app/utils/JsonLd";

export const metadata: Metadata = {
  title: "Contact - Yeliz Acar",
  description: "Get in touch with Yeliz Acar through the contact form.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Yeliz Acar",
  description: "Get in touch with Yeliz Acar through the contact form.",
  url: "https://yelizacarblog.com/Blog/Contact",
};

function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="flex justify-center w-full">
        <div className="flex justify-between gap-x-10 w-[80%]">
          <div className="mt-4 flex flex-col bg-neutral-500 rounded-lg p-4 ">
            <h2 className="text-white font-bold text-2xl">
              AI Story Maker Dream Form
            </h2>

            <div className="mt-4">
              <label className="text-white" htmlFor="title">
                Title
              </label>
              <input
                placeholder="Enter a title for your dream"
                className="w-full bg-neutral-300 rounded-md border-gray-700 text-black px-2 py-1"
                type="text"
              />
            </div>

            <div className="mt-4">
              <label className="text-white" htmlFor="description">
                Description
              </label>
              <textarea
                placeholder="Describe your dream in detail"
                className="w-full bg-neutral-300 rounded-md border-gray-700 text-black  px-2 py-1"
                id="description"
              ></textarea>
            </div>

            <div className="mt-4 flex flex-row space-x-2">
              <div className="flex-1">
                <label className="text-white" htmlFor="emotions">
                  Emotions
                </label>
                <input
                  placeholder="What emotions did you feel during your dream?"
                  className="w-full bg-neutral-300 rounded-md border-gray-700 text-black  px-2 py-1"
                  id="emotions"
                  type="text"
                />
              </div>

              <div className="flex-1">
                <label className="text-white" htmlFor="symbols">
                  Symbols
                </label>
                <input
                  placeholder="Did you see any symbols in your dream?"
                  className="w-full bg-neutral-300 rounded-md border-gray-700 text-black  px-2 py-1"
                  id="symbols"
                  type="text"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-row space-x-2">
              <div className="flex-1">
                <label className="text-white" htmlFor="themes">
                  Themes
                </label>
                <input
                  placeholder="What themes do you think your dream might be about?"
                  className="w-full bg-neutral-300rounded-md border-gray-700 text-white px-2 py-1"
                  id="themes"
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
                Generate
              </button>
            </div>

            <div className="mt-4">
              <textarea
                placeholder="Your AI-generated story will appear here"
                className="w-full bg-neutral-300 rounded-md border-gray-700 text-black px-2 py-1 h-48"
                id="story-output"
              ></textarea>
            </div>
          </div>
          <div className="  items-center mx-end hidden xl:flex">
            <img width={500} alt="" src="/fonts/undraw_profile-data_xkr9.svg"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
