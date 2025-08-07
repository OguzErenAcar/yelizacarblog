"use client";
import BasicTableOne from "@/components/tables/BasicTableOne";
import React from "react";
import ViewTableLayout from "@/layout/ViewTableLayout";
import { useParams } from "next/navigation";
import getTables from "@/services/tables/getTables";

function Page() {
  const Tables = getTables();

  const { table } = useParams() as { table: keyof typeof Tables };
  if (!table || !(table in Tables)) {
    return <div>Not Found</div>;
  }
  
  return (
    <div>
      <div className="flex flex-col min-h-screen gap-20">{Tables[table]}</div>;
    </div>
  );
}

export default Page;
