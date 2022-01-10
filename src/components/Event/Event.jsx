import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { useParams } from 'react-router-dom';
// import EventItem from '../EventItem/EventItem';
// import HeroImage from '../shared/HeroImage/HeroImage'
// import eventTatry from "../../assets/images/eventTatry.jpg";
import s from "./Event.module.scss";
// import DataEvents from '../../Data';
import event111 from "../../assets/images/slider/even111.jpeg";

function Event() {
  const [event, setEvent] = useState([]);
  const { id } = useParams();

  const getEventById = async () => {
    const response = await axios.get(`http://localhost:5000/events/${id}`);
    setEvent(response.data);
  };

  console.log(event);

  useEffect(() => {
    getEventById();
  }, []);

  // const product = {
  //     img: {eventTatry}
  // };

  return (
    <div className={s.detail_info}>
      <div className={s.details_area}>
      <h2>{event.title}</h2>
        <div className={s.big_img}>
          <img src={event111} alt="main_image" />
        </div>

        <div className={s.detail_box}>
        <div className={s.detail_row}>
          <h2>About this event</h2>
          <span>{event.location}</span>
        </div>
        <div className={s.detail_desc}>
          <p>{event.full_desc}</p>
          <button type="button" className={s.save_event}>
            Save event
          </button>
        </div>
        
        <div className={s.ev_detail_widget}>
          <div className={s.ev_widget_title}>
            <span>Event Details</span>
          </div>
          <div className={s.ev_widget_content}>
            <div className={s.content_detail_box}>
              <ul>
                <li className={s.ev_start_date}>
                  <div className={s.ev_icon}></div>
                  <div className={s.ev_content}>
                    <div className={s.ev_title}>Start Date</div>
                    <div className={s.ev_inner}>{event.date}</div>
                  </div>
                </li>
                <li className={s.ev_entry}>
                  <div className={s.ev_icon}></div>
                  <div className={s.ev_content}>
                    <div className={s.ev_title}>Entry</div>
                    <div className={s.ev_inner}>{event.subcat_entry}</div>
                  </div>
                </li>
                <li className={s.ev_type}>
                  <div className={s.ev_icon}></div>
                  <div className={s.ev_content}>
                    <div className={s.ev_title}>Type</div>
                    <div className={s.ev_inner}>{event.subcat_type}</div>
                  </div>
                </li>
                <li className={s.ev_category_id}>
                  <div className={s.ev_icon}></div>
                  <div className={s.ev_content}>
                    <div className={s.ev_title}>Location</div>
                    <div className={s.ev_inner}>{event.location}</div>
                  </div>
                </li>
                <li className={s.ev_category_id}>
                  <div className={s.ev_icon}></div>
                  <div className={s.ev_content}>
                    <div className={s.ev_title}>Category</div>
                    <div className={s.ev_inner}>{event.cat_id}</div>
                  </div>
                </li>
              </ul>
        </div>
     
      </div>
          </div>
      </div>
      <div className={s.content_organizer_box}>
          <ul>
            <li className={s.ev_start_date}>
              <div className={s.ev_icon}></div>
              <div className={s.ev_content}>
                    <div className={s.ev_title}>Organizer</div>
                    <div className={s.ev_inner}>{event.organizer_id}Anna</div>
              </div>
            </li>
          </ul>
          <div className={s.ev_detail_widget}>
          <div className={s.ev_widget_title}>
            <span>User Details</span>
          </div>
          <div className={s.ev_widget_content}>
            <div className={s.content_detail_box}>
              <ul>
                <li className={s.ev_start_date}>
                  <div className={s.ev_icon}></div>
                  <div className={s.ev_content}>
                    <div className={s.ev_title}>Phone</div>
                    <div className={s.ev_inner}>{event.phone}0995634876</div>
                  </div>
                </li>
                <li className={s.ev_entry}>
                  <div className={s.ev_icon}></div>
                  <div className={s.ev_content}>
                    <div className={s.ev_title}>Email</div>
                    <div className={s.ev_inner}>{event.email}ann@gmail.com</div>
                  </div>
                </li>
                <li className={s.ev_entry}>
                  <div className={s.ev_icon}></div>
                  <div className={s.ev_content}>
                    <div className={s.ev_title}>Web page</div>
                    <div className={s.ev_inner}>{event.email}ann@gmail.com</div>
                  </div>
                </li>
                </ul>
                </div>
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
