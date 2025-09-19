"use client";
import tableData from "@/views/tableViews/tableDataLogo";
import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { TableLogic } from "@/hooks/TableLogic";
import { Button } from "@/components/ui/myUI/myui";
import Default from "./components/Menu/Default";
import Operations from "./components/Menu/Operations";
import Filter from "./components/Menu/Filter";

export type LogoFormValues = {
  url: string;
  height: string;
  width: string;
};

export default function LogoTable() {
  const tableViewer = useRef<HTMLDivElement>(null);

  const MenuMap={
    "Default":Default,
    "Operations":Operations,
    "Filter":Filter
  }
  type ViewKey = keyof typeof MenuMap;
  const [viewMenu , setViewMenu]=useState<ViewKey>("Default");

  const ActiveComponent=MenuMap[viewMenu];

  const DefaultBtn = () => {setViewMenu("Default")};
  const OperationsBtn = () => {setViewMenu("Operations")};
  const FilterBtn = () => {setViewMenu("Filter")};

  const initialForm = {
    url: "",
    height: "",
    width: "",
  };
  const tableLogic = TableLogic<LogoRowObj, LogoFormValues>(
    tableData,
    initialForm
  ); 

  useEffect(() => {}, [tableLogic.refresh]);

  return (
    <div>

      <div className="my-5">
        <ul className="flex gap-5">
          <li>
            <Button
              onClick={DefaultBtn}
              color="blue"
              text="Default"
              width={100}
            />
          </li>
          <li>
            <Button
              onClick={OperationsBtn}
              color="blue"
              text="Operations"
              width={100}
            />
          </li>
          <li>
            <Button
              onClick={FilterBtn}
              color="blue"
              text="Filter"
              width={100}
            />
          </li>
        </ul>
      </div>
      <ActiveComponent/>
     
    </div>
  );
}
