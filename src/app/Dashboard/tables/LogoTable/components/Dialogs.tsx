import { USERID } from "@/app/utils/const";
import { Button } from "@/components/ui/myUI/myui";
import React from "react";
import { failToast, successToast } from "@/components/ui/myUI/toast";

const PATH = "Logos";

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

export function DeleteModal({
  id,
  closeModal,
}: {
  id: number;
  closeModal: () => void;
}) {
  interface StorageResponse {
    message: string;
    status: number;
  }
  const deleteFileFromStorage = async (
    name: string | undefined
  ): Promise<StorageResponse | undefined> => {
    if (name == undefined) {
      const data: StorageResponse = await {
        message: "Delete File From Storage ,name is undefined",
        status: 400,
      };
      return data;
    }
     const res = await fetch("/api/uploads", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        filePath: `${PATH}/${name}`,
      }),
    });

    const data: StorageResponse = await res.json();
    return data;
  };

  const yesBtn = () => {
    fetch(`http://localhost:5045/api/Logo/getById?userId=3&LogoId=${id}`)
      .then((res) => {
        if (res.status != 200) {
          return undefined;
        }
        return res.json();
      })
      .then((res) => {
        console.log(res.logoUrl)
        deleteFileFromStorage(res.logoUrl)
          .then((res) => {
            if (res?.status != 200)
              return failToast("delete file from storage error");
            return successToast("delete file from storage ");
          })
          .catch(() => {
            return failToast("Load file from storage error");
          });
      });

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
