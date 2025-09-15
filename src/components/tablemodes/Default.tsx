import { tableName, ViewTable } from "@/layout/Records";
import getTables from "@/services/tables/getTables";
import { useParams } from "next/navigation";
import React, { useState } from "react";
 

//aslında parametre alabilr 
function Default() {
  const { table } = useParams() as {table:keyof typeof ViewTable} 

   const Viewer = ViewTable[table];

  return (
    <div>
      <div className="text-black">Default</div>
      <div className="flex flex-col min-h-screen gap-20">
      <Viewer operations={false}/>
      </div>
    </div>
  );
}

export default Default;
