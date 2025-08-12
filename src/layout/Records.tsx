import Default from "@/components/tablemodes/Default"
import Operations from "@/components/tablemodes/Operations"
import InfoTableViewer from "@/components/tableviewers/InfoTableViewer"
import LogoTableViewer from "@/components/tableviewers/LogoTableViewer"
import TableViewer from "@/components/tableviewers/TableViewer"


export type TableMode = "default" | "oparations"  
//| "change_order"|"filter"|"refresh";

export type tableName='Logo'|'Info'


export const MenuContent : Record<string,React.FC>={
  default:Default,
  oparations:Operations
}

export type ModeProps<T> = {
  rows: T[];
  setRows: React.Dispatch<React.SetStateAction<T[]>>;
};

type TableRowMap = {
  Info: InfoRowObj;
  Logo: LogoRowObj;
};


export const ViewTable: {
  [K in keyof TableRowMap]: React.FC<ModeProps<TableRowMap[K]>>
} = {
  Info: InfoTableViewer,
  Logo: LogoTableViewer,
};
