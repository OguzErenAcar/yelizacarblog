import React from "react";

export function Button({
  onClick,
  color,
  text,
  width
}: {
  onClick?: () => void;
  color?: string;
  text: string;
  width?:number
}): React.JSX.Element {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color ,width:width}}
      className=" bg-warning-500 hover:bg-warning-700  text-white  h-[30px] rounded-full"
    >
      {text}
    </button>
  );
}
