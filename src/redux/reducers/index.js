import { combineReducers } from "redux";
import counterReducer from "./counter";
import isclickReducer from "./isClicked";
import buttonReducer from "./button";


const allReducers = combineReducers({
    counter: counterReducer,
    isClicked: isclickReducer,
    button: buttonReducer

});

export default allReducers;