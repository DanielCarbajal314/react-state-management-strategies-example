import { Provider } from 'react-redux'
import { store } from "./Redux/store"
import { Table } from "./Table"
import { Form } from "./Form"

export const ReduxContainer = () => {
    return (
        <div className="container">
            <Provider store={store}>
                <Form></Form>
                <Table></Table>
            </Provider>
        </div>
    )
}