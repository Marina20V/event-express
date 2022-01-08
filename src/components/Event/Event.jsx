import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import EventItem from '../EventItem/EventItem';
// import HeroImage from '../shared/HeroImage/HeroImage'
import eventTatry from "../../assets/images/eventTatry.jpg";
import s from './Event.module.scss';
// import DataEvents from '../../Data';

function Event() {
 
    const [event, setEvent] = useState([]);
    const { id } = useParams();

    const getEventById = async () => {
        const response = await axios.get(`http://localhost:5000/events/${id}`);
        setEvent(response.data);
    }

    console.log(event);
 
    useEffect(() => {
        getEventById();
    }, []);
 
    const product = {
        img: {eventTatry}
    };
    
    return (
        <div>
            <div className={s.container}>
                <div className={s.row} >
                    <div className={s.columns}>
                    <img src={product.img} alt={event.title} />
                    </div>
                    <div className={s.columns_info}>
                            <h1>{event.title}</h1>
                            <hr />
                            <h2>{event.organizer}</h2>
                            <p>{event.short_desc}</p>
                    </div>
                </div>
            </div>
            {/* <HeroImage /> */}
            {/* <EventItem /> */}
        </div>
    )
}

export default Event; 