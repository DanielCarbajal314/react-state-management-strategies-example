export const Table = ({rows, setRows}) => {

    const deleteRow = ({id}) => {
        setRows(rows => rows.filter(row => row.id !== id))
    }

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