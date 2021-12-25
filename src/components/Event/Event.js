import React from 'react';
import { Link } from 'react-router-dom';

function Event(props) {
    /* eslint-disable react/prop-types */
    return (
        <>
            <li className="events__item">
                <Link className="events__item__link" to={props.path}>
                    <figure className="events__item__pic" data-category={props.label}>
                        <img src={props.src} alt="events-card" className="events__item__img"/>
                    </figure>
                    <div className="events__item__info" >
                        <h5 className="events__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default Event
