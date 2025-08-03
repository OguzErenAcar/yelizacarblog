import ComponentCard from "@/components/common/ComponentCard";
import { Button } from "@/components/ui/myUI/myui";
import React, { useEffect } from "react";
import Label from "../Label";
import Input from "../input/InputField";
import { Formik, Field, Form, useFormik } from "formik";
import * as Yup from "yup";
import { LogoFormValues } from "@/components/tables/LogoTable";
import FileInput from "../input/FileInput";
import ImagesGroup from "../form-elements/ImagesGroup";
import { usePathname } from "next/navigation";

export default function LogoForm({
  formData,
  addformBtn,
  updformBtn,
  delformBtn,
  addData,
  closeForm,
  updateData,
  deleteRow,
}: {
  formData: LogoRowObj | null;
  addformBtn: boolean;
  updformBtn: boolean;
  delformBtn: boolean;
  addData: (data: LogoRowObj) => void;
  closeForm?: () => void;
  updateData: (data: LogoRowObj) => void;
  deleteRow: (id: number) => void;
}) {
  const formik = useFormik({
    initialValues: {
        id: formData?.id ?? -1,
        url: formData?.url || "",
        height: formData?.height || "",
        width: formData?.width || "",
        userId: formData?.id || -1,
      },
    onSubmit: () => {},
    validationSchema: Yup.object({}),
  });

  useEffect(() => { 
    console.log("fv",formik.values.id)
  //   formik.resetForm({
  //     values: {
  //       id: formData?.id || -1,
  //       url: formData?.url || "",
  //       height: formData?.height || "",
  //       width: formData?.width || "",
  //       userId: formData?.id || -1,
  //     },
  //   }
  // );
  }, []);

  const images = [
    "/images/cards/card-01.jpg",
    "/images/cards/card-01.jpg",
    "/images/cards/card-01.jpg",
    "/images/cards/card-01.jpg",
    "/images/cards/card-01.jpg",
    "/images/cards/card-01.jpg",
    "/images/cards/card-01.jpg",
    "/images/cards/card-01.jpg",
    "/images/cards/card-01.jpg",
  ];

  return (
    <ComponentCard title="Row" className="pb-10 relative">
      <div className="absolute top-4 right-4">
        <Button
          onClick={closeForm}
          text="x"
          color="oklch(57.7% 0.245 27.325)"
        />
      </div>

      <div className="h-150 flex w-full justify-center">
        <div className="flex flex-col gap-10 md:w-[80%] w-full ">
          <ImagesGroup
            tablePath={`/Dashboard/tables/ProjectImagesTable/projectId=${formData?.id}`}
            imageUrls={[]}
          />

          <div>
            <Label htmlFor="url">Url</Label>
            <Input
              onChange={formik.handleChange}
              value={formik.values.url}
              name="url"
              type="text"
              id="input"
            />
          </div>
          <div>
            <Label htmlFor="height">Height</Label>
            <Input
              onChange={formik.handleChange}
              value={formik.values.height}
              name="height"
              type="text"
              id="input"
            />
          </div>
          <div>
            <Label htmlFor="width">Width</Label>
            <Input
              onChange={formik.handleChange}
              value={formik.values.width}
              name="width"
              type="text"
              id="input"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        {addformBtn && (
          <button
            onClick={() => {
              addData(formik.values);
            }}
            className=" bg-blue-500 hover:bg-blue-700  text-white  h-[30px] w-[70px] rounded-full"
          >
            Add
          </button>
        )}
        {updformBtn && (
          <button
            onClick={() => {
              updateData(formik.values);
            }}
            className=" bg-green-500 hover:bg-green-700  text-white  h-[30px] w-[70px] rounded-full"
          >
            Update
          </button>
        )}
        {delformBtn && (
          <button
            onClick={() => {
              deleteRow(formData!.id);
            }}
            className="ms-2 bg-red-500 hover:bg-red-700  text-white  h-[30px] w-[70px] rounded-full"
          >
            Delete
          </button>
        )}
      </div>
    </ComponentCard>
  );
}
