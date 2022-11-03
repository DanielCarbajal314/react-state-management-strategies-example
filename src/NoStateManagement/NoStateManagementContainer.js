import { useState } from "react"
import { Table } from "./Table"
import { Form } from "./Form"

export const NoStateManagementContainer = () => {
    const [rows, setRows] = useState([
        { id: 1, value: 100 }
    ])
    const tableProps = { rows, setRows };
    return (
    <div className="container">
        <Form setRows={setRows}></Form>
        <Table {...tableProps}></Table>
    </div>);

}