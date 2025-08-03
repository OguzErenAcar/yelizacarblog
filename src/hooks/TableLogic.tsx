import { useReducer, useState } from "react";

export function TableLogic<T,U>(initialData: T[],formType:U) {
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
    
  };

  const deleteRow = (index: number) =>
    setRows((prev) => prev.filter((_, i) => i !== index));
    

  const updateRow = (id: number) => {
    setFormComp(true);
    setFormData(rows[id]);
    setupdformBtn(true)
    setdelformBtn(true)
  };

  const changeOrder = () => {};


  const addData = (data: typeof formType) => {
    console.log(data)
     
  };
  const updateData = (data: typeof formType) => {
    
    
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

    addformBtn,
    updformBtn,
    delformBtn,
    addData,
    formData,
    closeForm,
    updateData,
  };
}

// const [id, setId] = useState(-1);

// const deleteRow = (id: number) => {};

// const updateRow = (id: number) => {

//   setId(id);
//   setEditComp(true);
// };

// const updateData = () => {};

// const removeEditRow = () => {
//   setEditComp(false);
// };
//}
