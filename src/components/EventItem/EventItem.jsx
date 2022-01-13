import React from 'react';
import { Link } from 'react-router-dom';
// import HoverModal from '../shared/Modal/hoverModal/HoverModal';
import s from './EventItem.module.scss';
import noimg from '../../assets/images/noimg.png';
import constants from '../../constants/constants';

function EventItem(props) {

    const imgCheck = (element) => {
        if (element.match(/(https?:\/\/.+?)\//)) {
            return element
        }
         return `${constants.MAIN_API}/uploads/${element}`;
        
    }

    /* eslint-disable react/prop-types */
    return (
        
        <li className={s.events__item}>
            <Link className={s.events__item__link} to={props.path}>
                <figure className={s.events__item__pic} data-category={props.label}>
                    {/* <img src={btoa(props.src)} alt="events-card" className={s.events__item__img}/> */}
                    ({(props.src) !== null} ?
                    <img src={noimg} alt="events-card" className={s.events__item__img}/>
                        : <img src={imgCheck(props.src)} alt="events-card" className={s.events__item__img}/>
                    )
                    {/* {console.log('data:image/bmp;base64,'+ Base64.encode(props.src))} */}


                    {/* {console.log(imageSrc)} */}
                </figure>
                <div className={s.events__item__info} >
                {(props.text !== '') ? <h6 className={s.events__item__text}>{props.text}</h6> : 'No title'}
                    {/* <div className={s.events_list}> */}
                    <ul className={s.ul_events_list}>
                    {(props.date) ?<li className={s.events__item__date}>{props.date}</li> : null}
                    {(props.location) ? <li className={s.events__item__location}>{props.location}</li> : null}
                    {(props.entry) ? <li className={s.events__item__entry}>{props.entry}</li> : null}
                    {(props.type) ? <li className={s.events__item__type}>{props.type}</li> : null}
                    </ul>
                    {/* </div> */}
                     <div className={s.el_details}>   
                    <details className={s.events__item__desc}>{props.desc}</details>
                    </div>
                    {/* <HoverModal desc = {props.short_desc}/> */}
                </div>
            </Link>
        </li>
    )
}

export default EventItem;
