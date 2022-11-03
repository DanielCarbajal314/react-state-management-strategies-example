import React, { createContext, useState } from "react";

const RowsContext = createContext(undefined);

const RowsProvider = ({ children }) => {
    const [rows, setRows] = useState([
      { id: 1, value: 100 }
    ]);

    const addRow = (value) => {
      setRows(rows => {
        const id = Math.max(...rows.map(x => x.id))+1;
        return [...rows, { id, value}];
      })
    }

    const deleteRow = ({id}) => {
      setRows(rows => rows.filter(row => row.id !== id))
    }

    return (
      <RowsContext.Provider value={{rows, addRow, deleteRow}}>
          {children}
      </RowsContext.Provider>
    );
  }

export { RowsProvider, RowsContext }