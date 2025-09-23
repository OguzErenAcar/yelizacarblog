import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import { Button } from "@/components/ui/myUI/myui";
import { useEffect } from "react";
import { Formik, Field, Form, useFormik } from "formik";
import * as Yup from "yup";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import { USERID } from "@/app/utils/const";

type FormParams = {
  id?: number;
  add?: boolean;
  update?: boolean;
  delete_?: boolean;
  closeModal:()=>void
};

function LogoForm({
  id,
  add = false,
  update = false,
  delete_ = false,
  closeModal
}: FormParams) {

 
  useEffect(() => {
    if(id){ 
      fetch(`http://localhost:5045/api/Logo/getById?userId=3&LogoId=${id}`)
        .then((res) => {
          if (res.status != 200) return undefined;
          return res.json();
        })
        .then((res) => {
          setFormData(res);
        });
    }
  }, []);

  const [formData, setFormData] = useState<LogoRowObj | undefined>(undefined);
 
  const formik = useFormik({
    initialValues: { UserId:USERID,rowOfNumber:0,logoUrl: "", height: "", width: "",isActive:false },
    onSubmit: () => {},
    validationSchema: Yup.object({}),
  });
 

  useEffect(() => {
    formik.resetForm({
      values: {
        UserId:USERID,
        rowOfNumber:formData?.rowOfNumber||0,
        logoUrl: formData?.logoUrl || "",
        height: formData?.height || "",
        width: formData?.width || "",
        isActive:formData?.isActive||false
      },
    });
    console.log("data",formData?.isActive)
  }, [formData]);


 


  const addRow = (row: typeof formik.values) => {
    fetch(`http://localhost:5045/api/Logo/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(row),
    }).then((res) => {
      if (res.status != 200) {
        return undefined;
      }
        closeModal();
    });
  };
  const updateRow = (row: typeof formik.values) => {

    fetch(`http://localhost:5045/api/Logo/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(row),
    }).then((res) => {
      if (res.status != 200) return undefined;
      console.log(res);
      closeModal()
    });
  };
  const deleteRow = (id: number) => {
    fetch(`http://localhost:5045/api/Logo/delete?userId=${USERID}`).then((res) => {
      if (res.status != 200) return undefined;
      console.log(res);
      closeModal()
    });
  };

  return (
    <ComponentCard title="Row" className="pb-10 relative">

    <div>
        <Label htmlFor="url">Row Of Number</Label>
        <Input
          onChange={formik.handleChange}
          value={formik.values.rowOfNumber}
          name="rowOfNumber"
          type="text"
          id="input"
        />
      </div>
      <div>
        <Label htmlFor="url">Url</Label>
        <Input
          onChange={formik.handleChange}
          value={formik.values.logoUrl}
          name="logoUrl"
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
       <div>
        <Label htmlFor="width">Is Active ?</Label>
        <Button
        className={!formik.values.isActive?"bg-green-400 w-[100px]":"bg-red-400 w-[100px]"}
        text={!formik.values.isActive?"Set Enable":"Set Disable"}
        onClick={()=>{
          console.log(formik.values.isActive);
         formik.setFieldValue('isActive', !formik.values.isActive);
        }}
        />
      </div>
      <div className="absolute bottom-4 right-4">
        {add && (
          <button
            onClick={() => {
              addRow(formik.values);
            }}
            className=" bg-blue-500 hover:bg-blue-700  text-white  h-[30px] w-[70px] rounded-full"
          >
            Add
          </button>
        )}
        {update && (
          <button
            onClick={() => {
              updateRow(formik.values);
            }}
            className="ms-2 bg-green-500 hover:bg-green-700  text-white  h-[30px] w-[70px] rounded-full"
          >
            Update
          </button>
        )}
        {delete_ && (
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

export default LogoForm;
