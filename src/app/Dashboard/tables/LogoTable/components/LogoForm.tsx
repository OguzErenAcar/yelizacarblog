import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import { Button } from "@/components/ui/myUI/myui";
import { useEffect } from "react";
import { Formik, Field, Form, useFormik } from "formik";
import * as Yup from "yup";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";

type Form = {
  formData?: LogoRowObj;
};

function LogoForm({ formData }: Form) {


  const formik = useFormik({
    initialValues: { url: "", height: "", width: "" },
    onSubmit: () => {},
    validationSchema: Yup.object({}),
  });

  useEffect(() => {
    formik.resetForm({
      values: {
        url: formData?.url || "",
        height: formData?.height || "",
        width: formData?.width || "",
      },
    });
  }, [formData]);

  const addRow = (row: typeof formik.values) => {

  };
  const updateRow = (row: typeof formik.values)  => {

  };
  const deleteRow = (id: number)  => {

  };

  return (
    <ComponentCard title="Row" className="pb-10 relative">
 
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
      <div className="absolute bottom-4 right-4">
        {
          <button
            onClick={() => {
              addRow(formik.values);
            }}
            className=" bg-blue-500 hover:bg-blue-700  text-white  h-[30px] w-[70px] rounded-full"
          >
            Add
          </button>
        }
        {
          <button
            onClick={() => {
              updateRow(formik.values);
            }}
            className=" bg-green-500 hover:bg-green-700  text-white  h-[30px] w-[70px] rounded-full"
          >
            Update
          </button>
        }
        {
          <button
            onClick={() => {
              deleteRow(formData!.id);
            }}
            className="ms-2 bg-red-500 hover:bg-red-700  text-white  h-[30px] w-[70px] rounded-full"
          >
            Delete
          </button>
        }
      </div>
    </ComponentCard>
  );
}

export default LogoForm;
