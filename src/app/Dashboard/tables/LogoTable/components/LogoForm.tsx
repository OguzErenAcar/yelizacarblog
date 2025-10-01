"use-client";

import React, { useMemo, useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import { Button } from "@/components/ui/myUI/myui";
import { useEffect } from "react";
import { Formik, Field, Form, useFormik } from "formik";
import * as Yup from "yup";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import { USERID } from "@/app/utils/const";
import FileInput from "../../../../../components/file/FileInput";
import { failToast, successToast } from "@/components/ui/myUI/toast";

type FormParams = {
  id?: number;
  add?: boolean;
  update?: boolean;
  delete_?: boolean;
  closeModal: () => void;
};

type FilewithUrl = {
  file: File;
  url: string;
};

function LogoForm({
  id,
  add = false,
  update = false,
  delete_ = false,
  closeModal,
}: FormParams) {
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5045/api/Logo/getById?userId=3&LogoId=${id}`)
        .then((res) => {
          if (res.status != 200) {
            failToast("Error");
            return undefined;
          }
          return res.json();
        })
        .then((res) => {
          setFormData(res);
          setInitialData(res);
        });
    }
  }, []);

  const [formData, setFormData] = useState<LogoRowObj | undefined>(undefined);
  const [initialData, setInitialData] = useState<LogoRowObj | undefined>(
    undefined
  );
  const PATH = "Logos";
  const formik = useFormik({
    initialValues: {
      UserId: USERID,
      rowOfNumber: 0,
      logoUrl: "",
      height: "",
      width: "",
      isActive: false,
    },
    onSubmit: () => {},
    validationSchema: Yup.object({}),
  });

  useEffect(() => {
    formik.resetForm({
      values: {
        UserId: USERID,
        rowOfNumber: formData?.rowOfNumber || 0,
        logoUrl: formData?.logoUrl || "",
        height: formData?.height || "",
        width: formData?.width || "",
        isActive: formData?.isActive || false,
      },
    });
  }, [formData]);

  const [LogoFile, setLogoFile] = useState<File | undefined>(undefined);

  interface StorageResponse {
    message: string;
    status: number;
  }

  const deleteFileFromStorage = async (
    name: string | undefined
  ): Promise<StorageResponse | undefined> => {
    if (name == undefined) {
      const data: StorageResponse = await {
        message: "Delete File From Storage ,name is undefined",
        status: 400,
      };
      return data;
    }

    const res = await fetch("/api/uploads", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        filePath: `${PATH}/${name}`,
      }),
    });

    const data: StorageResponse = await res.json();
    return data;
  };

  const loadFileToStorage = async (
    file: File | undefined
  ): Promise<StorageResponse | undefined> => {
    if (file == undefined) {
      const data: StorageResponse = await {
        message: "Load File To Storage Error",
        status: 400,
      };
      return data;
    }

    if (
      initialData?.logoUrl != undefined &&
      initialData?.logoUrl != file.name
    ) {
      deleteFileFromStorage(initialData?.logoUrl || "")
        .then((res) => {
          if (res?.status != 200)
            return failToast("delete file from storage error");
          return successToast("delete file from storage ");
        })
        .catch(() => {
          return failToast("Load file from storage error");
        });
    }
    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("path", PATH);
    const res = await fetch("/api/uploads", {
      method: "POST",
      body: formData,
    });

    const data: StorageResponse = await res.json();
    return data;
  };

  const addRow = (row: typeof formik.values) => {
    loadFileToStorage(LogoFile)
      .then((res) => {
        console.log("res");
        console.log(res);
        if (res?.status != 200)
          return failToast("load file from storage status error");
        successToast("load file from storage ");
        fetch(`http://localhost:5045/api/Logo/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(row),
        }).then((res) => {
          if (res.status != 200) {
            failToast("Error");
            return undefined;
          }
          closeModal();
          successToast("Success");
        });
      })
      .catch(() => {
        return failToast("Load file from storage error");
      });
  };
  const updateRow = (row: typeof formik.values) => {
    loadFileToStorage(LogoFile)
      .then((res) => {
        if (res?.status != 200)
          return failToast("load file from storage status error");
        successToast("load file from storage ");
        fetch(`http://localhost:5045/api/Logo/update`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(row),
        }).then((res) => {
          if (res.status != 200) {
            failToast("Error");
            return undefined;
          }
          closeModal();
          successToast("Success");
        });
      })
      .catch(() => {
        return failToast("Load file from storage error");
      });
  };
  const deleteRow = (id: number) => {
    console.log("delete row");
    deleteFileFromStorage(LogoFile?.name)
      .then((res) => {
        if (res?.status != 200)
          return failToast("delete file from storage error");
        console.log(res);
        successToast("delete file from storage ");
        fetch(`http://localhost:5045/api/Logo/delete?userId=${USERID}`).then(
          (res) => {
            if (res.status != 200) {
              failToast("Error");
              return undefined;
            }
            closeModal();
            successToast("Success");
          }
        );
      })
      .catch(() => {
        return failToast("Load file from storage error");
      });
  };

  return (
    <ComponentCard title="Row" className="pb-10 relative ">
      <div>
        <Label htmlFor="url">Row Of Number</Label>
        <Input
          onChange={formik.handleChange}
          value={formik.values.rowOfNumber}
          name="rowOfNumber"
          type="text"
          id="input"
          className="w-[50%]"
        />
      </div>
      <div>
        <Label htmlFor="url">Url</Label>
        name={formik.values.logoUrl}
        <FileInput
          name={formik.values.logoUrl}
          getFile={(logoFile: File | undefined) => {
            formik.values.logoUrl = logoFile?.name || "";
            formik.setFieldValue("logoUrl", logoFile?.name);
            setLogoFile(logoFile!);
          }}
          limitNum={1}
        />
      </div>
      <div>
        <Label htmlFor="height">Height</Label>
        <Input
          className="w-[50%]"
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
          className="w-[50%]"
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
          className={
            !formik.values.isActive
              ? "bg-green-400 w-[100px]"
              : "bg-red-400 w-[100px]"
          }
          text={!formik.values.isActive ? "Set Enable" : "Set Disable"}
          onClick={() => {
            console.log(formik.values.isActive);
            formik.setFieldValue("isActive", !formik.values.isActive);
          }}
        />
      </div>
      <div className="absolute bottom-4 right-4">
        {add && (
          <button
            onClick={() => {
              console.log(formik.values.logoUrl);
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
