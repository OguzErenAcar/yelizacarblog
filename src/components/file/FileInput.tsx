import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Preview from "./Preview";

type FileInputProps = {
  name: string;
  getFile: (file: File|undefined) => void;
  limitNum: number;
};

export default function FileInput({ name, getFile, limitNum }: FileInputProps) {
  const fileInput = useRef(null);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [fileType, setfileType] = useState<string>("");

  const setInitialFile = () => {
    const fakeFile = new File([], name || "");
    setFile(fakeFile);
    getFile(fakeFile)
  };

  useEffect(() => {
    setInitialFile();
  }, [name]);

  useEffect(() => { 
    if (file == undefined) {  
      getFile(undefined)
      console.log("file",file)
    }
      console.log("file",file)

  }, [file]);

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {};

  useEffect(() => {
    const div = fileInput.current as HTMLDivElement | null;
    if (div) {
      //   div.addEventListener("dragenter", handleDragEnter);
      //   div.addEventListener("dragleave", handleDragLeave);
      div.addEventListener("dragover", handleDragOver);
      div.addEventListener("drop", handleDrop);
      return () => {
        // div.removeEventListener("dragenter", handleDragEnter);
        // div.removeEventListener("dragleave", handleDragLeave);
        div.removeEventListener("dragover", handleDragOver);
        div.removeEventListener("drop", handleDrop);
      };
    }
  }, []);

  const handleDrop = async (e: DragEvent) => {
    e.preventDefault();

    if (!e.dataTransfer?.items) return;
    const files = Array.from(e.dataTransfer.files);
    setFile(files[0]);
    getFile(files[0])
    
  };

  const deleteFile = () => { 
    setFile(undefined); 
  };

  const setPreview = (el: string | undefined) => {
    const type = el?.split(".") || "";
    setfileType(type[type.length - 1] || "");
  };

  return (
    <div>
      {fileType && (
        <div className="flex items-center justify-center w-full py-5 bg-neutral-100 rounded-xl">
          <Preview width={250} filetype={fileType} src={file?.name} />
        </div>
      )}

      <div className="flex gap-x-30 gap-y-5 md:h-70  justify-start items-center flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%] ">
          File
          <div className="border-3 h-20 ">
            <table className="border-separate border-spacing-x-6 w-full ">
              <thead>
                <tr>
                  <th>row</th>
                  <th>name</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                {file?.name!=''&&<tr>
                    <td>{0}</td>
                    <td>
                      <button onClick={() => setPreview(file?.name)}>
                        <h4>{file?.name}</h4>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteFile()}
                        className="bg-red-300 rounded-xl w-6"
                      >
                        x
                      </button>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
        <div ref={fileInput}>
          <label
            className="border-dashed border-3 p-4 rounded-xl"
            htmlFor={"file-browser-input"}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img
                width={100}
                src={
                  "https://w7.pngwing.com/pngs/31/82/png-transparent-computer-icons-file-manager-computer-file-directory-documents-icon-angle-rectangle-black.png"
                }
                alt=""
              />
            </div>
            <div className="pt-5">
              <h1>Drag and drop to upload an image.</h1>
            </div>
          </label>
          <input
            type="file"
            id="file-browser-input"
            accept="image/png, image/jpeg"
            onChange={handleInputChange}
            style={{ display: "none" }}
          ></input>
        </div>
      </div>
    </div>
  );
}
