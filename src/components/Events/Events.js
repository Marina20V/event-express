import React from 'react';
import Event from "../Event/Event"
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
                        <Event  
                            src={event}
                            text="Meet new people, make memories"
                            label="skiing event"
                            path="/services"
                        />
                          <Event  
                            src={event}
                            text="Meet new people, make memories"
                            label="skiing event"
                            path="/services"
                        />
                          <Event  
                            src={event}
                            text="Meet new people, make memories"
                            label="skiing event"
                            path="/services"
                        />
                          <Event  
                            src={event}
                            text="Meet new people, make memories"
                            label="skiing event"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Events
