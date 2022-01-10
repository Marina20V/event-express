import { combineReducers } from "redux";
import isclickReducer from "./isClicked";
import buttonReducer from "./button";


const allReducers = combineReducers({
    isClicked: isclickReducer,
    button: buttonReducer

});

export default allReducers;