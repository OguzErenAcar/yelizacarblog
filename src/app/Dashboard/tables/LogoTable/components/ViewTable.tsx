import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../../../components/ui/table";
function ViewTable({
  operations = false,
  updateRow,
  deleteRow,
}: {
  children?: React.ReactNode;
  operations?: boolean;
  updateRow?: (id: number) => void;
  deleteRow?: (id: number) => void;
}) {
  const [tableData, settableData] = useState<LogoRowObj[]>([]);

  useEffect(() => {
    fetch("http://localhost:5045/api/Logo?userId=3")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        settableData(res);
      })
      .catch((res) => {});
  }, []);

  return (
    <div className="w-[95%] overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Row Of Number
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Is Active ?
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
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              ></TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((data) => (
              <TableRow key={data.id}>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {data.rowOfNumber}
                </TableCell>
                <TableCell className="text-black px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {data.isActive ? (
                    <div className="text-indigo-500">TRUE</div>
                  ) : (
                    <div className="text-red-500">FALSE</div>
                  )}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {data.height}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {data.width}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {data.logoUrl}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {data.userId}
                </TableCell>
                {operations ? (
                  <>
                    <TableCell className=" py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <button
                        className="ms-2 bg-green-400 hover:bg-warning-700  text-white  h-[30px] w-[70px] rounded-full"
                        onClick={() => updateRow!(data.id)}
                      >
                        Update
                      </button>

                      <button
                        className="ms-2 bg-red-400 hover:bg-red-700  text-white  h-[30px] w-[70px] rounded-full"
                        onClick={() => deleteRow!(data.id)}
                      >
                        Delete{" "}
                      </button>
                    </TableCell>
                  </>
                ) : (
                  <TableCell className="w-[200px] py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400" />
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
export default ViewTable;
