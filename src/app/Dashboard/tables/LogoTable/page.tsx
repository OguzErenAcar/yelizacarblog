"use client";
import tableData from "@/views/tableViews/tableDataLogo";
import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { TableLogic } from "@/hooks/TableLogic";
import Tools from "@/components/toolbar/tools";
import LogoForm from "./components/LogoForm";
import ViewTable from "./components/ViewTable";



export type LogoFormValues = {
  url: string;
  height: string;
  width: string;
};

export default function LogoTable() {
  const tableViewer = useRef<HTMLDivElement>(null);
  const initialForm = {
    url: "",
    height: "",
    width: "",
  };
  const tableLogic = TableLogic<LogoRowObj, LogoFormValues>(tableData,initialForm);

  useEffect(() => {}, [tableLogic.refresh]);

  return (
    <div>
     { tableLogic.formComp&&<div>
        <LogoForm
          addformBtn={tableLogic.addformBtn}
          updformBtn={tableLogic.updformBtn}
          delformBtn={tableLogic.delformBtn}
          addData={tableLogic.addData}
          formData={tableLogic.formData}
          updateData={tableLogic.updateData}
          deleteRow={tableLogic.deleteRow}
          closeForm={tableLogic.closeForm}
        />
      </div>}
    {  !tableLogic.formComp&& <div>
        <Tools
          forceRefresh={tableLogic.forceRefresh}
          addRow={tableLogic.addRow}
          changeOrder={tableLogic.changeOrder}
          deleteAllRow={tableLogic.deleteAllRow}
        />
        <div ref={tableViewer}>
          <ViewTable
            rows={tableLogic.rows}
            updateRow={tableLogic.updateRow}
            deleteRow={tableLogic.deleteRow}
          />
        </div>
      </div>}
    </div>
  );
}
