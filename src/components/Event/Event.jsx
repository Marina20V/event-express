import React from 'react';
// import { useParams } from 'react-router-dom';
// import EventItem from '../EventItem/EventItem';
// import HeroImage from '../shared/HeroImage/HeroImage'
import eventTatry from "../../assets/images/eventTatry.jpg";
import s from './Event.module.scss';
// import DataEvents from '../../Data';

function Event() {
    // const proid = useParams();
    // const proDetail = DataEvents.filter(x=>x.id === proid.id);
    // const product = proDetail[0];

    const product =     {
        "id" : 60046777806,
		"title" : "Skiing in Tatry",
		"location" : {},
        "img": {eventTatry},
		"description" : 'In the High Tatras (Vysoké Tatry/Tatry Wysokie), you can look forward to 32 kilometres of slopes: the ski resorts are served by 35 ski lifts. Have lots of fun skiing in the High Tatras (Vysoké Tatry/Tatry Wysokie)!',
        "organizer" : "Anna",
    };
    
    return (
        <div>

            <div className={s.container}>
                <div className={s.row} >
                    <div className={s.columns}>
                    <img src={product.img} alt={product.title} />
                    </div>
                    {/* {DataEvents.map(cardItem)} */}
                    <div className={s.columns_info}>
                            <h1>{product.title}</h1>
                            <hr />
                            <h2>{product.organizer}</h2>
                            <p>{product.description}</p>
                    </div>
                </div>
            </div>
            {/* <HeroImage /> */}
            {/* <EventItem /> */}
        </div>
    )
}

export default Event; 