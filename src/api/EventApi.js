import axios from "axios";
import constants from "../constants/constants";



const getEvents = async () => {
    const response = await axios.get(`${constants.MAIN_API}/events`);
    console.log(response);
    return response.data;
}

export default getEvents;