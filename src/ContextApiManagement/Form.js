import { useContext, useState } from "react"
import { RowsContext } from "./RowsContext";

export const Form = () => {
    const [value, setValue] = useState('');
    const { addRow } = useContext(RowsContext)

    const handleInputChange = (event) => {
        setValue(event.target.value)
    }

    return(
        <div>
            <input onChange={handleInputChange}></input>
            <button onClick={() => addRow(value)}>Add New Value</button>
        </div>
    )
}