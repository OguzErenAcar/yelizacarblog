import React from "react";
import ToolsMenu from "./ToolsMenu";

function ToolsProvider({ children }: { children: React.JSX.Element }) {
  return (
    <div>
    <ToolsMenu>
        {children}
    </ToolsMenu>
    </div>
  );
}

export default ToolsProvider;
