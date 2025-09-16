"use client";
import tableData from "@/views/tableViews/tableDataLogo";
import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Button } from "../../../../components/ui/myUI/myui";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";

function LinksTable() {
  const [editComp, setEditComp] = useState(false);
  const [id, setId] = useState(-1);

  const deleteRow = (id: number) => {

  };
  const updateRow = (id: number) => {
    setId(id);
    setEditComp(true);
  };

  const updateData = () => {

  };

  
  const removeEditRow = () => {
    setEditComp(false);
  };


  function EditRow(): React.JSX.Element {
    return (
      <ComponentCard title="Row" className="pb-10 relative">
        <div className="absolute top-4 right-4">
          <Button
            onClick={removeEditRow}
            text="x"
            color="oklch(57.7% 0.245 27.325)"
          />
        </div>
        <div>
          <Label htmlFor="input">Url</Label>
          <Input type="text" id="input" />
        </div>
        <div>
          <Label htmlFor="input">Height</Label>
          <Input type="text" id="input" />
        </div>
        <div>
          <Label htmlFor="input">Width</Label>
          <Input type="text" id="input" />
        </div>
        <div className="absolute bottom-4 right-4">
          <button
            onClick={updateData}
            className=" bg-green-500 hover:bg-green-700  text-white  h-[30px] w-[70px] rounded-full"
          >
            Update
          </button>
          <button
            className="ms-2 bg-red-500 hover:bg-red-700  text-white  h-[30px] w-[70px] rounded-full"
          >
            Delete
          </button>
        </div>
      </ComponentCard>
    );
  }

  return (
    <div>
      <div style={{ display: editComp ? "block" : "none" }}>
        <EditRow />
      </div>
      <div
        style={{ display: !editComp ? "block" : "none" }}
        className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]"
      >
        <div className="max-w-full overflow-x-auto">
          <Table>
            {/* Table Header */}
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
                  Edit
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
              {tableData.map((data) => (
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
                      className="ms-2 bg-warning-500 hover:bg-warning-700  text-white  h-[30px] w-[70px] rounded-full"
                      onClick={() => updateRow(data.id)}
                    >
                      Edit
                    </button>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <button
                      className="ms-2 bg-red-500 hover:bg-red-700  text-white  h-[30px] w-[70px] rounded-full"
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
    </div>
  );
}

export default LinksTable;
