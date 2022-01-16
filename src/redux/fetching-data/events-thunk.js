import EventsService from "../../services/events.service";
import actions from "./fetching-actions";

export const loadEventsAsync = () => (dispatch) => {
    dispatch(actions.fetchEventsPending());

    EventsService.getAllEvents()
    .then((response) => dispatch(actions.fetchEventsSuccess(response.data)))
    .catch((error) => dispatch(actions.fetchEventsError(error.message)));

}
