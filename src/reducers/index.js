import { combineReducers } from "redux";
import loggedReducer from "./isLogged";
import toggleSidebar from './toggleSidebar'

const allReducers = combineReducers({
    isLogged: loggedReducer,
    toggleSidebar: toggleSidebar
})

export default allReducers