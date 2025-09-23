import React from "react";

export function Button({
  onClick,
  color,
  text,
  width,
  className
}: {
  onClick?: () => void;
  color?: string;
  text: string;
  width?:number,
  className?:string
}): React.JSX.Element {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color ,width:width}}
      className={`${className}    text-white  h-[30px] rounded-full`}
    >
      {text}
    </button>
  );
}
