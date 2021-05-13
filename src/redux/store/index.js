import {authReducer} from "../reducers/authReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))