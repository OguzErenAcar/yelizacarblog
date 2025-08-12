import React from "react";
import Toolbar from "./Toolbar";
import { ViewTable } from "@/layout/Records";
import { useParams } from "next/navigation";

function Operations() {
  const { table } = useParams() as { table: string };

  const VTKey = table as keyof typeof ViewTable;
  const Viewer = ViewTable[VTKey];

  return <div></div>;
}

export default Operations;
