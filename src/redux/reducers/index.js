import { combineReducers } from "redux";
import isclickReducer from "./isClicked";
import buttonReducer from "./button";
import searchReducer from "./searchReducer";


const allReducers = combineReducers({
    isClicked: isclickReducer,
    button: buttonReducer,
    events: searchReducer

});

export default allReducers;