import { combineReducers } from "redux";
import isclickReducer from "./isClicked";
import buttonReducer from "./button";
// import searchReducer from "./searchReducer";
import savedReducer from "../saved-events/savedevents-reducer";
import eventsReducer from "../fetching-data/fetching-reducer";


const allReducers = combineReducers({
    isClicked: isclickReducer,
    button: buttonReducer,
    // events: searchReducer,
    saved: savedReducer,
    events: eventsReducer
});

export default allReducers;