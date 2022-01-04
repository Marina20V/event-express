import React from 'react';
import { Link } from 'react-router-dom';
import s from './EventItem.module.scss';

function EventItem(props) {
    /* eslint-disable react/prop-types */
    return (
        <>
            <li className={s.events__item}>
                <Link className={s.events__item__link} to={props.path}>
                    <figure className={s.events__item__pic} data-category={props.label}>
                        <img src={props.src} alt="events-card" className={s.events__item__img}/>
                    </figure>
                    <div className={s.events__item__info} >
                        <h5 className={s.events__item__text}>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default EventItem;
