import { Button } from "@/components/ui/myUI/myui";
import React from "react";

function Tools({ setModal }: { setModal: (operation: string) => void }) {
  const deleteAll = () => {
    setModal("deleteAll");
  };

  const addRow = () => {
    setModal("addRow");
  };

  return (
    <ul className="flex gap-x-5 my-3 bg-gray-100 rounded-lg p-2">
      <li>
        <Button
          onClick={deleteAll}
          color="black"
          width={130}
          text="Delete All"
        />
      </li>
      <li>
        <Button onClick={addRow} color="black" width={130} text="Add Row" />
      </li>
        <li>
        <Button color="black" width={130} text="Change Order" />
      </li>
    </ul>
  );
}

export default Tools;
