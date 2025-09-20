import { Button } from "@/components/ui/myUI/myui";
import React from "react";

export function DeleteAllModal ({
  setState,
}: {
  setState: (state:boolean)=>void;
}) {
  return (
    <div className="flex justify-center flex-col items-center min-h-[200px]">
      <p>Are You Sure Delete All Data ? </p>
      <div className="flex gap-x-5 mt-10">
      <Button onClick={() => setState(true)} color="green" text="Yes" width={100} />
      <Button onClick={() => setState(false)} color="red" text="No"  width={100}/>
      </div>
    </div>
  );
};


export function DeleteModal ({
  setState,
}: {
  setState: (state:boolean)=>void;
}) {
  return (
    <div className="flex justify-center flex-col items-center min-h-[200px]">
      <p>Are You Sure Delete Row ? </p>
      <div className="flex gap-x-5 mt-10">
      <Button onClick={() => setState(true)} color="green" text="Yes" width={100} />
      <Button onClick={() => setState(false)} color="red" text="No"  width={100}/>
      </div>
    </div>
  );
};