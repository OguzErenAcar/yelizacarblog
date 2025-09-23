import React, { useState } from "react";
import ViewTable from "../ViewTable";
import TableFilters from "../TableFilters";
import { Modal } from "@/components/ui/modal";
import LogoForm from "../LogoForm";
import tableData from "@/views/tableViews/tableDataLogo";

function Filter() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      Filter 
      {/* <TableFilters />
      <ViewTable operations={false} /> */}
    </div>
  );
}

export default Filter;
