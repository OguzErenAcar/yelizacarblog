import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
function InfoTableViewer({ operations }: { operations: boolean }) {
  const demoInfoRows: InfoRowObj[] = [
    {
      id: 1,
      imgUrl: "https://picsum.photos/200/300",
      imgHeight: "300",
      imgWidth: "200",
      header: "Demo Başlık 1",
      description: "Bu bir demo açıklamasıdır. İlk tablo satırı.",
      userId: 101,
    },
    {
      id: 2,
      imgUrl: "https://picsum.photos/250/250",
      imgHeight: "250",
      imgWidth: "250",
      header: "Demo Başlık 2",
      description: "İkinci demo satırı. Açıklama burada.",
      userId: 102,
    },
    {
      id: 3,
      imgUrl: "https://picsum.photos/400/200",
      imgHeight: "200",
      imgWidth: "400",
      header: "Demo Başlık 3",
      description: "Üçüncü satır için açıklama metni.",
      userId: 103,
    },
  ];

  return (
    <div>
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

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {demoInfoRows.map((data) => (
                <TableRow key={data.id}>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {data.id}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {data.imgHeight}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {data.imgWidth}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {data.imgUrl}
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
                        Delete{" "}
                      </button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default InfoTableViewer;
