"use client";
import tableData from "@/views/tableViews/tableDataLogo";
import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { TableLogic } from "@/hooks/TableLogic";
import { Button } from "@/components/ui/myUI/myui";
import Default from "./components/Menu/Default";
import Operations from "./components/Menu/Operations";
import Filter from "./components/Menu/Filter";
import Sort from "./components/Menu/Sort";
import Image from "next/image";

export default function LogoTable() {
  const MenuMap = {
    Default: Default,
    Operations: Operations,
    Filter: Filter,
    Sort: Sort,
  };
  type ViewKey = keyof typeof MenuMap;
  const [viewMenu, setViewMenu] = useState<ViewKey>("Default");

  const ActiveComponent = MenuMap[viewMenu];

  const OperationsBtn = () => {
    setViewMenu("Operations");
  };
  const SortBtn = () => {
    setViewMenu("Sort");
  };
  const FilterBtn = () => {
    setViewMenu("Filter");
  };
  const RefreshBtn = () => {
    setViewMenu("Default");
  };

  return (
    <div>
      <div className="my-5 flex justify-between">
        <ul className="flex gap-5">
          <li>
            <Button
              onClick={OperationsBtn}
              className="bg-blue-800"
              text="Operations"
              width={100}
            />
          </li>
          <li></li>
        </ul>
        <ul className="flex gap-x-5">
          {" "}
          <li>
            <button onClick={SortBtn}>
              <svg
                data-icon-name="sort"
                data-style="line"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                id="sort"
                className="icon line"
                width="32"
                height="32"
              >
                <line
                  style={{
                    fill: "none",
                    stroke: "rgb(0, 0, 0)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1,
                  }}
                  y2="12"
                  x2="17"
                  y1="12"
                  x1="3"
                  id="secondary-stroke"
                ></line>
                <path
                  style={{
                    fill: "none",
                    stroke: "rgb(0, 0, 0)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1,
                  }}
                  d="M3,7H21M3,17H13"
                  id="primary-stroke"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <button onClick={FilterBtn}>
              <svg
                data-icon-name="filter-alt-3"
                data-style="line"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                id="filter-alt-3"
                className="icon line"
                width="32"
                height="32"
              >
                <path
                  style={{
                    fill: "none",
                    stroke: "rgb(0, 0, 0)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1,
                  }}
                  d="M4.45,4.66,10,11V21l4-2V11l5.55-6.34A1,1,0,0,0,18.8,3H5.2A1,1,0,0,0,4.45,4.66Z"
                  id="primary"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <button id={"refreshBtn"} onClick={RefreshBtn}>
              <svg
                data-icon-name="refresh"
                data-style="line"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                id="refresh"
                className="icon line"
                width="32"
                height="32"
              >
                <polyline
                  style={{
                    fill: "none",
                    stroke: "rgb(0, 0, 0)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1,
                  }}
                  points="12 16 14 18 12 20"
                  id="primary"
                ></polyline>
                <path
                  style={{
                    fill: "none",
                    stroke: "rgb(0, 0, 0)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1,
                  }}
                  d="M6,6H4A1,1,0,0,0,3,7V17a1,1,0,0,0,1,1H14"
                  data-name="primary"
                  id="primary-2"
                ></path>
                <polyline
                  style={{
                    fill: "none",
                    stroke: "rgb(0, 0, 0)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1,
                  }}
                  points="12 8 10 6 12 4"
                  data-name="primary"
                  id="primary-3"
                ></polyline>
                <path
                  style={{
                    fill: "none",
                    stroke: "rgb(0, 0, 0)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1,
                  }}
                  d="M18,18h2a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1H10"
                  data-name="primary"
                  id="primary-4"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <ActiveComponent />
    </div>
  );
}
