import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import s from "./Event.module.scss";
import noimg from '../../assets/images/noimg.png';



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

  return (
    <div className={s.detail_info}>
      <h1 className={s.title_event}>{event.title}</h1>

      <div className={s.details_area}>
        <div className={s.big_img}>
         {(event.img_url) !== null ? <img src={event.img_url} alt="main_image" /> : 
          <img src={noimg} alt="events-card" className={s.events__item__img}/>}
        </div>

        <div className={s.detail_box}>
          <div className={s.detail_row}>
            <h2>About this event</h2>
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
                <ul className={s.detail_information}>
                  <li className={s.ev_start_date}>
                    <div className={s.ev_icon}></div>
                    <div className={s.ev_content}>
                      <div className={s.ev_title}>
                        <i className="fas fa-calendar-day"></i>
                        Start Date
                      </div>
                      <div className={s.ev_inner}>{event.date}</div>
                    </div>
                  </li>
                  <li className={s.ev_entry}>
                    <div className={s.ev_icon}></div>
                    <div className={s.ev_content}>
                      <div className={s.ev_title}>
                        <i className="fas fa-ticket-alt"></i>Entry
                      </div>
                      <div className={s.ev_inner}>{event.subcat_entry}</div>
                    </div>
                  </li>
                  <li className={s.ev_type}>
                    <div className={s.ev_icon}></div>
                    <div className={s.ev_content}>
                      <div className={s.ev_title}>
                        <i className="fas fa-wifi"></i>Type
                      </div>
                      <div className={s.ev_inner}>{event.subcat_type}</div>
                    </div>
                  </li>
                  <li className={s.ev_category_id}>
                    <div className={s.ev_icon}></div>
                    <div className={s.ev_content}>
                      <div className={s.ev_title}>
                        <i className="fas fa-map-marker-alt"></i>Location
                      </div>
                      <div className={s.ev_inner}>{event.location}</div>
                    </div>
                  </li>
                  <li className={s.ev_category_id}>
                    <div className={s.ev_icon}></div>
                    <div className={s.ev_content}>
                      <div className={s.ev_title}>
                        <i className="far fa-caret-square-down"></i>
                        Category
                      </div>
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
                <div className={s.ev_title}><i className="fas fa-portrait"></i>Organizer</div>
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
                <ul className={s.detail_information}>
                  <li className={s.ev_start_date}>
                    <div className={s.ev_icon}></div>
                    <div className={s.ev_content}>
                      <div className={s.ev_title}><i className="fas fa-phone-volume"></i>Phone</div>
                      <div className={s.ev_inner}>{event.phone}0995634876</div>
                    </div>
                  </li>
                  <li className={s.ev_entry}>
                    <div className={s.ev_icon}></div>
                    <div className={s.ev_content}>
                      <div className={s.ev_title}><i className="fas fa-envelope-square"></i>Email</div>
                      <div className={s.ev_inner}>
                        {event.email}ann@gmail.com
                      </div>
                    </div>
                  </li>
                  <li className={s.ev_entry}>
                    <div className={s.ev_icon}></div>
                    <div className={s.ev_content}>
                      <div className={s.ev_title}><i className="fas fa-registered"></i>
                        Web page</div>
                      <div className={s.ev_inner}>
                        {event.email}ann@gmail.com
                      </div>
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
