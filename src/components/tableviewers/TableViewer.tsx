import React, { FC } from 'react'

type View<T>={
    Component:FC<{ rows: T[]; setRows: (rows: T[]) => void }>;
}

function TableViewer<T>({Component}:View<T>) {
  return (
    <div>
       
      <Component rows={} setRows={}/>
    </div>
  )
}

export default TableViewer
