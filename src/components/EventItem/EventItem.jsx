import React from 'react';
import { Link } from 'react-router-dom';
import s from './EventItem.module.scss';
// import event111 from '../../assets/images/slider/even111.jpeg' 

function EventItem(props) {
    /* eslint-disable react/prop-types */
    return (
        

        
        <li className={s.events__item}>
            <Link className={s.events__item__link} to={props.path}>
                <figure className={s.events__item__pic} data-category={props.label}>
                    {/* <img src={btoa(props.src)} alt="events-card" className={s.events__item__img}/> */}

                    <img src={props.img_url} alt="events-card" className={s.events__item__img}/>
                    {/* {console.log('data:image/bmp;base64,'+ Base64.encode(props.src))} */}


                    {/* {console.log(imageSrc)} */}
                </figure>
                <div className={s.events__item__info} >
                    <h6 className={s.events__item__text}>{props.text}</h6>
                    {/* <div className={s.events_list}> */}
                    <ul className={s.ul_events_list}>
                    <li className={s.events__item__date}>{props.date}</li>
                    <li className={s.events__item__location}>{props.location}</li>
                    <li className={s.events__item__entry}>{props.entry}</li>
                    <li className={s.events__item__type}>{props.type}</li>
                    </ul>
                    {/* </div> */}
                     <div className={s.el_details}>   
                    <details className={s.events__item__desc}>{props.desc}</details>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default EventItem;
