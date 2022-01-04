import React from 'react';
import EventItem from "../EventItem/EventItem"
import event from "../../assets/images/event.jpg";
import s from './Events.module.scss';

function Events() {
    /* eslint-disable react/prop-types */

    return (
        <div className={s.events}>
            <h1>Check out the event</h1>
            <div className={s.events__container}>
                <div className={s.events__wrapper}>
                    
                    <ul className={s.events__items}>
                        <EventItem  
                            src={event}
                            text="Meet new people, make memories"
                            label="skiing event"
                            path="/event"
                        />
                          <EventItem  
                            src={event}
                            text="Meet new people, make memories"
                            label="skiing event"
                            path="closestevents"
                        />
                          <EventItem  
                            src={event}
                            text="Meet new people, make memories"
                            label="skiing event"
                            path="closestevents"
                        />
                          <EventItem  
                            src={event}
                            text="Meet new people, make memories"
                            label="skiing event"
                            path="closestevents"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Events
