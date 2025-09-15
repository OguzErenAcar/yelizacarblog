"use client";
import ViewTableLayout from "@/layout/ViewTableLayout";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import getTables from "@/services/tables/getTables";
import { MenuContent, TableMode } from "@/layout/Records";
import MenuViewer from "@/components/tablemodes/Menu"; 

function Page() {
  const [menu, setMenu] = useState<string>("default");

  const ModeComponent = MenuContent[menu];

  return (
    <div>
      <div className="flex flex-col min-h-screen gap-20"> 
          <MenuViewer setmenu={setMenu}>
            <ModeComponent />
          </MenuViewer> 
      </div>
    </div>
  );
}

export default Page;
