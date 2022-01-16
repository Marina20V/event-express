import axios from "axios";
import constants from "../constants/constants";

const apiClient = () => {
return  axios.get({
        baseUrl: `${constants.MAIN_API}/events`,
        responseType: 'json'
    });

};

export default apiClient;
