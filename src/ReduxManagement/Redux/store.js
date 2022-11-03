import { combineReducers, createStore } from "redux";
import { rowsReducer } from "./reducers"

export const state = combineReducers({
    rows: rowsReducer
})

export const store = createStore(state);