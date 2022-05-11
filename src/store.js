import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { todos } from "./todos/reducers";
const reducers  ={
    todos
}
const rootReducer = combineReducers( reducers )
export const store = () => configureStore( rootReducer ) 

