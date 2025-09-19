import React, { useState } from "react";
import ViewTable from "../ViewTable";
import LogoForm from "../LogoForm";
import Tools from "../Tools";
import { Modal } from "@/components/ui/modal";
import tableData from "@/views/tableViews/tableDataLogo";

function Operations() {
  const [open, setOpen] = useState<boolean>(false);
  const [row, setRow] = useState<LogoRowObj | undefined>(undefined);


  
  const openModal = (operation: string) => {
   console.log(operation)
    setOpen(true);
  };

  return (
    <div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <LogoForm formData={row} />
      </Modal>
      <Tools setModal={openModal} />
      <ViewTable operations={true} />
    </div>
  );
}

export default Operations;
