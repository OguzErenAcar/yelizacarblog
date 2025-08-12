import { ViewTable } from "@/layout/Records";
import getTables from "@/services/tables/getTables";
import { useParams } from "next/navigation";
import React from "react";

//aslında parametre alabilr 
function Default() {
  const { table } = useParams() as {table:string}

  const VTKey = table as keyof typeof ViewTable;
  const Viewer = ViewTable[VTKey];

  return (
    <div>
      <div className="flex flex-col min-h-screen gap-20"></div>
      <Viewer rows={} setRows={}/>
    </div>
  );
}

export default Default;
