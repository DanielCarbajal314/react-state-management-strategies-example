import { useDispatch } from "react-redux"
import { addRow } from "./Redux/reducers"
import { useState } from "react"

export const Form = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()
    const handleInputChange = (event) => {
        setValue(event.target.value)
    }

    return(
        <div>
            <input onChange={handleInputChange}></input>
            <button onClick={() => dispatch(addRow(value))}>Add New Value</button>
        </div>
    )
}