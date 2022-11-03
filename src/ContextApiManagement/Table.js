import { useContext } from "react";
import { RowsContext } from './RowsContext'

export const Table = () => {
    const { rows, deleteRow } = useContext(RowsContext);
    
    return (<table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Value</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map(row=>(
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.value}</td>
                            <td>
                                <button onClick={() => deleteRow(row)}>Delete</button>
                            </td>
                        </tr>))
                    }
                </tbody>
            </table>);
}