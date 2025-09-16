import React from "react";

type ToolsProps = {
  forceRefresh?:() => void
  rows?: () => void;
  setRows?: () => void;
  addRow?: () => void;
  deleteRow?: () => void;
  updateRow?: () => void;
  deleteAllRow?: () => void;
  changeOrder?: () => void;
};

function Tools({
  forceRefresh,
  rows,
  setRows,
  addRow,
  deleteRow,
  updateRow,
  deleteAllRow,
  changeOrder,
}: ToolsProps) {
  return (
    <div className="w-full h-14 flex justify-between ">
      <div>
        <button
          onClick={forceRefresh}
          className=" right-35  bg-neutral-500 hover:bg-neutral-700  text-white  h-[30px] w-[120px] rounded-lg"
        >
          Refresh
        </button>
      </div>
      <div className="flex justify-center gap-3">
        <button
          onClick={addRow}
          className=" right-35  bg-neutral-500 hover:bg-neutral-700  text-white  h-[30px] w-[120px] rounded-lg"
        >
          Add Row
        </button>
        <button
          className=" right-0  bg-neutral-500 hover:bg-neutral-700 text-white  h-[30px] w-[120px] rounded-lg"
          onClick={deleteAllRow}
        >
          Delete All Row
        </button>
        <button
          className=" right-35  bg-neutral-200 hover:bg-neutral-200  text-white  h-[30px] w-[120px] rounded-lg"
          onClick={changeOrder}
        >
          Change Order
        </button>

        <button
          disabled={true}
          className=" right-0 bg-neutral-200 hover:bg-neutral-200 text-white  h-[30px] w-[120px] rounded-lg"
        >
          Filter
        </button>
      </div>
    </div>
  );
}

export default Tools;
