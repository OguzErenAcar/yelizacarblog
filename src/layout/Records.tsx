import Default from "@/components/tablemodes/Default"
import Operations from "@/components/tablemodes/Operations"
import InfoTableViewer from "@/components/tableviewers/InfoTableViewer"
import LogoTableViewer from "@/components/tableviewers/LogoTableViewer"
import TableViewer from "@/components/tableviewers/TableViewer"
import LogoForm from '../components/form/rowForms/logoRowForm';


export type TableMode = "default" | "oparations"  
//| "change_order"|"filter"|"refresh";

export type tableName='Logo'|'Info'


export const MenuContent : Record<string,React.FC>={
  default:Default,
  operations:Operations
}

 

export type TableMap = {
  Info: InfoRowObj;
  Logo: LogoRowObj;
};

export const TableFormMap :{
  [K in keyof TableMap]:React.FC
}= {
  Logo: LogoForm,
  Info: LogoForm

};


export const ViewTable: {
  [K in keyof TableMap]: React.FC<{ operations:boolean }>
} = {
  Info: InfoTableViewer,
  Logo: LogoTableViewer,
};
