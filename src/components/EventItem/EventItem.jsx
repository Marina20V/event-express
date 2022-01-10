import React from 'react';
import { Link } from 'react-router-dom';
import s from './EventItem.module.scss';
import event4 from '../../assets/images/slider/event4.jpg' 

function EventItem(props) {


    // const url = window.URL || window.webkitURL;

    // const convertImg = (img) =>{
    //     const convertToBase = btoa(img);
    //     const base64Icon = `data:image/png;base64,${convertToBase}`;
    //     const urlConvert = url.createObjectURL(base64Icon);
   
    //     // console.log(urlConvert);
    //     console.log(urlConvert);
    //     return urlConvert;
    // }




    /* eslint-disable react/prop-types */
    return (
        

        
        <li className={s.events__item}>
            <Link className={s.events__item__link} to={props.path}>
                <figure className={s.events__item__pic} data-category={props.label}>
                    {/* <img src={btoa(props.src)} alt="events-card" className={s.events__item__img}/> */}

                    <img src={event4} alt="events-card" className={s.events__item__img}/>
                    {/* {console.log('data:image/bmp;base64,'+ Base64.encode(props.src))} */}


                    {/* {console.log(imageSrc)} */}
                </figure>
                <div className={s.events__item__info} >
                    <h6 className={s.events__item__text}>{props.text}</h6>
                    <div className={s.events_list}>
                    <ul className={s.ul_events_list}>
                    <li className={s.events__item__date}>{props.date}</li>
                    <li className={s.events__item__location}>{props.location}</li>
                    <li className={s.events__item__entry}>{props.entry}</li>
                    <li className={s.events__item__type}>{props.type}</li>
                    </ul>
                    </div>
                    <details className={s.events__item__desc}>{props.desc}</details>
                </div>
            </Link>
        </li>
    )
}

export default EventItem;
