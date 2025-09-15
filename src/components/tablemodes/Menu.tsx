import React from "react";
import Button from "../ui/button/Button";

function MenuViewer({ setmenu,children }: { setmenu: (text:string) => void ,children:React.ReactNode}) {
  return (
    <div>
    <div className="flex justify-center gap-4">
      <Button onClick={()=>{setmenu("default")}}>Default</Button>
      <Button onClick={()=>{setmenu("operations")}}>Operations</Button>
    </div>
    {children}
    </div>
  );
}

export default MenuViewer;
