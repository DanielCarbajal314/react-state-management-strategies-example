import { Table } from "./Table"
import { Form } from "./Form"
import { RowsProvider } from './RowsContext'

export const ContextApiContainer = () => {
    return (
    <div className="container">
        <RowsProvider>
            <Form></Form>
            <Table></Table>
        </RowsProvider>
    </div>);

}