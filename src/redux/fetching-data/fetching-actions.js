import * as actionTypes from "./fetching_types";

export const fetchEventsPending = () => {
    return {
        type: actionTypes.FETCH_EVENTS_PENDING
    }
}

export const fetchEventsSuccess = (events) => {
    return {
        type: actionTypes.FETCH_EVENTS_SUCCESS,
        paload: events
    }
}

export const fetchEventsError = (error) => {
    return {
        type: actionTypes.FETCH_EVENTS_ERROR,
        payload: error
    }
}

export default {
    fetchEventsPending,
    fetchEventsSuccess,
    fetchEventsError
}
