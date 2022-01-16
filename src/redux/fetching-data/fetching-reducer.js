import {FETCH_PRODUCTS_SUCCESS} from './fetching-actions';
import * as actionTypes from '../fetching-data/fetching_types';
const initialState = {
    pending: false,
    products: [],
    error: null
}

const eventReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_EVENTS_PENDING: 
            return {
                ...state,
                pending: true,
                events: [],
                error: null
            };
        case actionTypes.FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                pending: false,
                events: action.payload
            }
        case actionTypes.FETCH_EVENTS_ERROR:
            return {
                ...state,
                pending: false,
                events: action.payload
            }
            default: 
            return state;
    }
}

export default eventReducer;
