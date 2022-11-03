const initialState = [{ id: 1, value: 100 }]

const addRowReducer = (state, value) => [...state, { id: Math.max(...state.map(x => x.id))+1, value}]
const deleteRowReduced = (state, id) => state.filter(row => row.id !== id)

export const rowsReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case "AddRow":
            return addRowReducer(state, payload)
        case "DeleteRow":
            return deleteRowReduced(state, payload)
        default:
            return state;
    }
}

export const addRow = (value) => ({ type: "AddRow", payload: value});
export const deleteRow = (id) => ({ type: "DeleteRow", payload: id});