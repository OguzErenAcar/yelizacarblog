import React from "react";

export function Button({
  onClick,
  color,
  text,
}: {
  onClick?: () => void;
  color?: string;
  text: string;
}): React.JSX.Element {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className=" bg-warning-500 hover:bg-warning-700  text-white  h-[30px] w-[60px] rounded-full"
    >
      {text}
    </button>
  );
}
