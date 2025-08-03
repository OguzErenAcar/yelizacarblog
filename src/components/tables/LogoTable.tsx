"use client";
import tableData from "@/views/tableViews/tableDataLogo";
import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import LogoForm from "../form/rowForms/logoRowForm";
import { TableLogic } from "@/hooks/TableLogic";
import Tools from "../toolbar/tools";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

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

function ViewTable({
  rows,
  updateRow,
  deleteRow,
}: {
  rows: LogoRowObj[];
  updateRow: (id: number) => void;
  deleteRow: (id: number) => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Id
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Height
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Width
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                UrlUrl
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                UserId
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 mx- font-medium text-gray-500 mx-auto text-theme-xs dark:text-gray-400"
              >
                Update
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 mx-auto text-theme-xs dark:text-gray-400"
              >
                Delete
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {rows.map((data) => (
              <TableRow key={data.id}>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {data.id}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {data.height}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {data.width}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {data.url}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {data.userId}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <button
                    className=" bg-warning-500 hover:bg-warning-700  text-white  h-[30px] w-[70px] rounded-full"
                    onClick={() => updateRow(data.id)}
                  >
                    Update
                  </button>
                </TableCell>
                <TableCell className=" px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <button
                    className="bg-red-500 hover:bg-red-700  text-white  h-[30px] w-[70px] rounded-full"
                    onClick={() => deleteRow(data.id)}
                  >
                    Delete{" "}
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
