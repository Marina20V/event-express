import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import s from "./Event.module.scss";
import noimg from '../../assets/images/noimg.png';
import constants from "../../constants/constants";



function Event() {
  const [event, setEvent] = useState([]);
  const { id } = useParams();

  const getEventById = async () => {
    const response = await axios.get(`${constants.MAIN_API}/events/${id}`);
    setEvent(response.data);
  };

  useEffect(() => {
    getEventById();
  }, []);

  return (
    <div className={s.detail_info}>
      <h1 className={s.title_event}>{event.title}</h1>

      <div className={s.details_area}>
        <div className={s.big_img}>
         {(event.img_url) !== null ? <img src={event.img_url} alt="main_image" /> : 
          <img src={noimg} alt="events-card" className={s.events__item__img}/>}
        </div>

        <div className={s.detail_box}>
            <h2 className={s.detail_row}>{constants.DESCRIPTION_EVENT}</h2>
            <p>{event.full_desc}</p>
            <button type="button" className={s.save_event}>
              {constants.SAVE_EVENT}
            </button>

          <div className={s.ev_detail_widget}>
              <span className={s.ev_widget_title}>{constants.EVENT_DETAILS}</span>
            <div className={s.ev_widget_content}>
                <ul className={s.ev_ul}>
                  <li>
                      <p className={s.ev_title}>
                        <i className="fas fa-calendar-day"></i>
                        {constants.START_DATE}
                        </p>
                      <span className={s.ev_inner}>{event.date}</span>
                  </li>
                  <li>
                      <p className={s.ev_title} >
                        <i className="fas fa-ticket-alt"></i>{constants.ENTRY}
                        </p>
                      <span className={s.ev_inner}>{event.subcat_entry}</span>
                  </li>
                  <li>
                      <p className={s.ev_title}>
                        <i className="fas fa-wifi"></i>{constants.TYPE}
                      </p>
                      <span className={s.ev_inner}>{event.subcat_type}</span>
                  </li>
                  <li>
                      <p className={s.ev_title}>
                        <i className="fas fa-map-marker-alt"></i>{constants.LOCATION}
                      </p>
                      <span className={s.ev_inner}>{event.location}</span>
                  </li>
                  <li>
                      <p className={s.ev_title}>
                        <i className="far fa-caret-square-down"></i>
                        {constants.CATEGORY}
                      </p>
                      <span className={s.ev_inner}>{event.cat_id}</span>
                  </li>
                </ul>
            </div>
          </div>
        </div>
        <div className={s.content_organizer_box}>
              <h3 className="{s.ev_widget_title}">{constants.USER_DETAILS}</h3>
            <div className={s.ev_widget_content}>
                <ul className={s.ev_ul}>
                <li>
                      <p className={s.ev_title}><i className="fas fa-portrait"></i>{constants.ORGANIZER}</p>
                      <span className={s.ev_inner}>{event.organizer_id}</span>
                  </li>
                  <li>
                      <p className={s.ev_title}><i className="fas fa-phone-volume"></i>{constants.PHONE}</p>
                      <span className={s.ev_inner}>{event.phone}0995634876</span>
                  </li>
                  <li>
                      <p className={s.ev_title}><i className="fas fa-envelope-square"></i>{constants.EMAIL}</p>
                      <span className={s.ev_inner}>
                        {event.email}ann@gmail.com
                    </span>
                  </li>
                  <li>
                      <div className={s.ev_title}><i className="fas fa-registered"></i>
                        {constants.WEB_PAGE}</div>
                      <span className={s.ev_inner}>
                        {event.email}victory.com
                        </span>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      {/* <HeroImage /> */}
      {/* <EventItem /> */}
    </div>
  );
}

export default Event;
