import { useSelector, useDispatch } from 'react-redux'
import { deleteRow } from "./Redux/reducers"

export const Table = () => {
    const rows = useSelector((state) => state.rows)
    console.log(rows);
    const dispatch = useDispatch()
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
                                <button onClick={() => dispatch(deleteRow(row.id))}>Delete</button>
                            </td>
                        </tr>))
                    }
                </tbody>
            </table>);
}