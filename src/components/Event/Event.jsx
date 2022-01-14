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
                <ul className={s.detail_information}>
                  <li className={s.ev_start_date}>
                    <div className={s.ev_content}>
                      <div className={s.ev_title}>
                        <i className="fas fa-calendar-day"></i>
                        {constants.START_DATE}
                      </div>
                      <div className={s.ev_inner}>{event.date}</div>
                    </div>
                  </li>
                  <li className={s.ev_entry}>
                  <div className={s.ev_content}>
                      <div className={s.ev_title}>
                        <i className="fas fa-ticket-alt"></i>{constants.ENTRY}
                      </div>
                      <div className={s.ev_inner}>{event.subcat_entry}</div>
                    </div>
                  </li>
                  <li className={s.ev_type}>
                    <div className={s.ev_content}>
                      <div className={s.ev_title}>
                        <i className="fas fa-wifi"></i>{constants.TYPE}
                      </div>
                      <div className={s.ev_inner}>{event.subcat_type}</div>
                    </div>
                  </li>
                  <li className={s.ev_category_id}>
                    <div className={s.ev_content}>
                      <div className={s.ev_title}>
                        <i className="fas fa-map-marker-alt"></i>{constants.LOCATION}
                      </div>
                      <div className={s.ev_inner}>{event.location}</div>
                    </div>
                  </li>
                  <li className={s.ev_category_id}>
                    <div className={s.ev_content}>
                      <div className={s.ev_title}>
                        <i className="far fa-caret-square-down"></i>
                        {constants.CATEGORY}
                      </div>
                      <div className={s.ev_inner}>{event.cat_id}</div>
                    </div>
                  </li>
                </ul>
            </div>
          </div>
        </div>
        <div className={s.content_organizer_box}>
          <div className={s.ev_detail_widget}>
            <div className={s.ev_widget_title}>
              <span>{constants.USER_DETAILS}</span>
            </div>
            <div className={s.ev_widget_content}>
                <ul className={s.detail_information}>
                <li className={s.ev_start_date}>
                    <div className={s.ev_content}>
                      <div className={s.ev_title}><i className="fas fa-portrait"></i>{constants.ORGANIZER}</div>
                      <div className={s.ev_inner}>{event.organizer_id}</div>
                    </div>
                  </li>
                  <li className={s.ev_start_date}>
                    <div className={s.ev_content}>
                      <div className={s.ev_title}><i className="fas fa-phone-volume"></i>{constants.PHONE}</div>
                      <div className={s.ev_inner}>{event.phone}0995634876</div>
                    </div>
                  </li>
                  <li className={s.ev_entry}>
                    <div className={s.ev_content}>
                      <div className={s.ev_title}><i className="fas fa-envelope-square"></i>{constants.EMAIL}</div>
                      <div className={s.ev_inner}>
                        {event.email}ann@gmail.com
                      </div>
                    </div>
                  </li>
                  <li className={s.ev_entry}>
                    <div className={s.ev_content}>
                      <div className={s.ev_title}><i className="fas fa-registered"></i>
                        {constants.WEB_PAGE}</div>
                      <div className={s.ev_inner}>
                        {event.email}victory.com
                      </div>
                    </div>
                  </li>
                </ul>
            </div>
          </div>
        </div>

      </div>
      {/* <HeroImage /> */}
      {/* <EventItem /> */}
    </div>
  );
}

export default Event;
