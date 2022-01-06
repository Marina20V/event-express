import React, {useState, useEffect} from 'react';
import axios from 'axios';
import EventItem from "../EventItem/EventItem"
// import event from "../../assets/images/event.jpg";
import s from './Events.module.scss';


function Events() {
    /* eslint-disable react/prop-types */

    const [events, setEvent] = useState([]);
 
    const getEvents = async () => {
        const response = await axios.get('http://localhost:5000/events');
        setEvent(response.data);
    }
 
    useEffect(() => {
        getEvents();
    }, []);
 

    // const deleteEvent = async (id) => {
    //     await axios.delete(`http://localhost:5000/events/${id}`);
    //     getProducts();
    // }

    return (
        <div className={s.events}>
            <h1>Check out the event</h1>
            <div className={s.events__container}>
                <div className={s.events__wrapper}>
                    
                    <ul className={s.events__items}>
                    { events.map((event) => (
                        <EventItem  
                            key={event.id}
                            // { index + 1 }
                            src={event.img_url}
                            text={event.title}
                            label={event.cat_id}
                            path={`/events/${event.id}`}
                            desc={event.short_desc}
                            date={event.date}
                        />
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Events
