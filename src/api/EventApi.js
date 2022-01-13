import axios from "axios";


const getEvents = async () => {
    const response = await axios.get('http://localhost:5000/events');
    console.log(response);
    return response.data;
}

export default getEvents;