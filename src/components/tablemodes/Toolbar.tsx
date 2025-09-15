import React from "react";
import { Button } from "../ui/myUI/myui";

function Toolbar() {

  
  const addRow = () => {

  };

  const deleteAllRow = () => {

  };

  return (
    <div className="flex gap-x-5">
      <Button onClick={addRow} color="black" text="ADD" />
      <Button onClick={deleteAllRow} color="black" text="DELETE ALL" />
    </div>
  );
}

export default Toolbar;
