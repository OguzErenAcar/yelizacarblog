import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
function LogoTableViewer({operations}: { operations: boolean }) {
  const demoLogoRows: LogoRowObj[] = [
    {
      id: 1,
      url: "https://picsum.photos/200/100",
      height: "100",
      width: "200",
      userId: 201,
    },
    {
      id: 2,
      url: "https://picsum.photos/300/150",
      height: "150",
      width: "300",
      userId: 202,
    },
    {
      id: 3,
      url: "https://picsum.photos/400/200",
      height: "200",
      width: "400",
      userId: 203,
    },
  ];

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
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {demoLogoRows.map((data) => (
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
                {operations && (
                  <TableCell className="flex gap-x-10 px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <button
                      className=" bg-warning-500 hover:bg-warning-700  text-white  h-[30px] w-[70px] rounded-full"
                      onClick={() => {}}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700  text-white  h-[30px] w-[70px] rounded-full"
                      onClick={() => {}}
                    >
                      Delete
                    </button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default LogoTableViewer;
