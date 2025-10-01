import React, { useState } from "react";
import ViewTable from "../ViewTable";
import LogoForm from "../LogoForm";
import Tools from "../Tools";
import { Modal } from "@/components/ui/modal";
import { DeleteAllModal, DeleteModal } from "../Dialogs";

function Operations() {
  const [open, setOpen] = useState<boolean>(false);
  const [operation, setOperation] = useState<string>("addRow");
  const [id, setId] = useState<number>(-1);

  const Content: Record<string, (id: number) => React.ReactNode> = {
    deleteAll: () => <DeleteAllModal closeModal={closeModal} />,
    addRow: () => <LogoForm add={true} closeModal={closeModal}/>,
    updateRow: (id: number) => (
      <LogoForm id={id} update={true} delete_={true} closeModal={closeModal}/>
    ),
    deleteRow: (id: number) => <DeleteModal id={id} closeModal={closeModal} />,
  };

  const openModal = (operation: string) => {
    setOperation(operation);
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
   const btn= document.querySelector("#refreshBtn") as HTMLButtonElement;
   btn.click();
  };
  const updateRow = (id: number) => {
    setId(id);
    openModal("updateRow");
  };
  const deleteRow = (id: number) => {
    setId(id);
    openModal("deleteRow");
  };

  return (
    <div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        {Content[operation](id)}
      </Modal>
      <Tools setModal={openModal} />
      <ViewTable
        updateRow={updateRow}
        deleteRow={deleteRow}
        operations={true}
      />
    </div>
  );
}

export default Operations;
