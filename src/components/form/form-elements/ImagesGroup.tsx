'use client'
import React, { ReactNode } from "react";
import FileInput from "../input/FileInput";
import { Button } from "@/components/ui/myUI/myui";
import { useRouter } from 'next/navigation';

function ImagesGroup({
  imageUrls,
  tablePath
}: {

  imageUrls: string[];
  tablePath:string
}) {

const router=useRouter();
const routeTable=()=>{
    router.push(tablePath);
}
  return (
    <div>
      <div className="overflow-y-auto text-black rounded-xl bg-gray-100  ">
        <h1 className="text-3xl text-center mt-3">Images</h1>
        <br />
        <div className="w-full  max-h-100 flex flex-col  gap-4 justify-start">
          {imageUrls.length > 0&&imageUrls.map((el, i) => (
            <div className="flex " key={i}>
              <div className="flex h-full items-center ps-3">
                <img src={el} width={"100%"} height={150} />
              </div>
              <div className="w-full flex justify-center items-center h-full">
                <div className="w-[300px] ">
                  <p>
                    URL: <br /> {el}{" "}
                  </p>{" "}
                  <br /> 
                  <div className="mt-4">
                    Number of Rows:
                    <input
                      readOnly
                      defaultValue={`${i}`}
                      type="input"
                      className="text-center ms-4 bg-stone-50 rounded-lg w-20"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
          }
          {imageUrls.length < 1&&(
            <div className="flex justify-center my-5 text-4xl">
                Images Not Found
            </div>
          )}
        </div>
      </div>
        <div className="w-full flex justify-end mt-4">
             <button
        onClick={routeTable}
        className=" bg-green-500 hover:bg-green-700  text-white  h-[30px] w-[170px] rounded-full" >
        update images
      </button>
        </div>
     
    </div>
  );
}

export default ImagesGroup;
