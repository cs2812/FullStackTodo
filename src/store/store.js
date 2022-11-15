
import {legacy_createStore,combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import authReducer from "./auth/authReducer"
import { todoReduer } from "./todo/todoReducer"

const rootReducer=combineReducers({
    auth:authReducer,
    todo:todoReduer,
})

export const store =legacy_createStore(rootReducer,applyMiddleware(thunk))