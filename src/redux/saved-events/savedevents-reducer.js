import * as actionTypes from "./savedevents-types";
import events from '../../components/Events/Events';


const INITIAL_STATE = {

    
  events, // id, title ,..
  cart: [], // id, title, qty
  currentItem: null,
};

const savedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_SAVED:
      return {};
    case actionTypes.REMOVE_FROM_SAVED:
      return {};
    case actionTypes.ADJUST_QTY:
      return {};
    case actionTypes.LOAD_CURRENT_EVENTS:
      return {};
    default:
      return state;
  }
};

export default savedReducer;
