import { useState } from "react"

export const Form = ({setRows}) => {
    const [value, setValue] = useState('');
    const addValue = () => {
        setRows(rows => {
            const id = Math.max(...rows.map(x => x.id))+1;
            return [...rows, { id, value}];
        })
    }

    const handleInputChange = (event) => {
        setValue(event.target.value)
    }

    return(
        <div>
            <input onChange={handleInputChange}></input>
            <button onClick={addValue}>Add New Value</button>
        </div>
    )
}