import * as actionTypes from "./savedevents-types";


export const fetchEvents = () => {
    const response = await axios.get(`${constants.MAIN_API}/events`);
    return response;
}

export const addToSaved = (itemID) => {
    return {
        type: actionTypes.ADD_TO_SAVED,
        payload: {
            id: itemID
        }
    }
}

export const removeFromSaved = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_SAVED,
        payload: {
            id: itemID
        }
    }
}

export const adjustQty = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const loadCurrentEvents = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_EVENTS,
        payload: {
            id: item,
            
        }
    }
}