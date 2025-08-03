import { useReducer, useState } from "react";

export function TableLogic<T extends { id: number } >(initialData: T[]) {
  const [refresh, forceRefresh] = useReducer(x => x + 1, 0);

  const [formComp, setFormComp] = useState(false);
  const [rows, setRows] = useState<T[]>(initialData);
  const [formData, setFormData]=useState<T|null>(null)

  const [addformBtn,setaddformBtn] =useState<boolean>(false)
  const [updformBtn,setupdformBtn] =useState<boolean>(false)
  const [delformBtn,setdelformBtn] =useState<boolean>(false)

  const addRow = () => {
    setaddformBtn(true)
    setFormComp(true)
    setFormData(null);
  };

  const deleteAllRow = () => { 
    setRows([])
  };

  const deleteRow = (index: number) =>{
    setRows((prev) => prev.filter((el) => el.id !== index));
    
  }
  const updateRow = (id: number) => {
    setFormComp(true);
    const ind= rows.findIndex(x=>x.id==id)
    setFormData(rows[ind]);
     
    setupdformBtn(true)
    setdelformBtn(true)
  };

  const changeOrder = () => {};


  const addData = (data:  T) => {
    data.id=rows.length
    setRows([...rows,data])
    closeForm()
  };
  const updateData = (data: T) => {
     setRows((prev) => {
    const index = prev.findIndex((el) => el.id === data.id);
    if (index === -1) return prev;  

    const newRows = [...prev];        
    newRows[index] = data;      
    return newRows;                   
  });
    closeForm()
  };

  const closeForm = () => {
    resetForm()
    setFormComp(false);
  };
  const resetForm=()=>{
    setaddformBtn(false)
    setupdformBtn(false)
    setdelformBtn(false)

  }

  return {
    refresh,
    forceRefresh,
    rows,
    formComp,

    addRow,
    deleteAllRow,
    changeOrder,

    deleteRow,
    updateRow,

    setRows,

    addformBtn,
    updformBtn,
    delformBtn,
    addData,
    formData,
    closeForm,
    updateData,
  };
}