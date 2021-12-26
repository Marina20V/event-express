import React from 'react';
import EventItem from "../EventItem/EventItem"
import "./Events.css";
import event from "../../assets/images/event.jpg";

function Events() {
    /* eslint-disable react/prop-types */

    return (
        <div className="events">
            <h1>Check out the event</h1>
            <div className="events__container">
                <div className="events wrapper">
                    
                    <ul className="events__items">
                        <EventItem  
                            src={event}
                            text="Meet new people, make memories"
                            label="skiing event"
                            path="/closestevents"
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
