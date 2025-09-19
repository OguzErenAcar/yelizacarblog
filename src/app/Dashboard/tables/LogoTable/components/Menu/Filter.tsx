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
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" >
        Modal Aç
      </button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <LogoForm formData={tableData[0]} />
      </Modal>
      <TableFilters />
      <ViewTable operations={false} />
    </div>
  );
}

export default Filter;
