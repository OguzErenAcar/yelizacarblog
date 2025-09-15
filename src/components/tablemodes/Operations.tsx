import React from "react";
import Toolbar from "./Toolbar";
import { ViewTable } from "@/layout/Records";
import { useParams } from "next/navigation";

function Operations() {
  const { table } = useParams() as { table: keyof typeof ViewTable };

  const Viewer = ViewTable[table];

  return (
    <div>
      <div className="text-black">Operations</div>
      <Toolbar/>
      <div className="flex flex-col min-h-screen gap-20">
        <Viewer operations={true}/>
      </div>
    </div>
  );
}

export default Operations;
