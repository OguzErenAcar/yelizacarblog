import { USERID } from "@/app/utils/const";
import { Button } from "@/components/ui/myUI/myui";
import React from "react";

export function DeleteAllModal({ closeModal }: { closeModal: () => void }) {
  const yesBtn = () => {
    fetch(`http://localhost:5045/api/Logo/delete?userId=${USERID}`).then(
      (res) => {
        if (res.status != 200) return undefined;
        console.log(res);
        closeModal();
      }
    );
  };
  const NoBtn = () => {
    closeModal();
  };

  return (
    <div className="flex justify-center flex-col items-center min-h-[200px]">
      <p>Are You Sure Delete All Data ? </p>
      <div className="flex gap-x-5 mt-10">
        <Button onClick={yesBtn} color="green" text="Yes" width={100} />
        <Button onClick={NoBtn} color="red" text="No" width={100} />
      </div>
    </div>
  );
}

export function DeleteModal({ closeModal }: { closeModal: () => void }) {
  const yesBtn = () => {
    fetch(`http://localhost:5045/api/Logo/delete?userId=${USERID}`).then(
      (res) => {
        if (res.status != 200) return undefined;
        console.log(res);
        closeModal();
      }
    );
  };
  const NoBtn = () => {
    closeModal();
  };

  return (
    <div className="flex justify-center flex-col items-center min-h-[200px]">
      <p>Are You Sure Delete Row ? </p>
      <div className="flex gap-x-5 mt-10">
        <Button onClick={yesBtn} color="green" text="Yes" width={100} />
        <Button onClick={NoBtn} color="red" text="No" width={100} />
      </div>
    </div>
  );
}
