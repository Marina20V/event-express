import React, { useState, useEffect } from "react";
import axios from "axios";
import EventItem from "../EventItem/EventItem";
import s from "./Events.module.scss";
import constants from "../../constants/constants";
// import Categories from '../Categories/Categories';

function Events() {
  /* eslint-disable react/prop-types */

  const [events, setEvent] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getEvents = async () => {
    const response = await axios.get(`${constants.MAIN_API}/events`);
    setEvent(response.data);
  };

  useEffect(() => {
    getEvents();
  }, []);
  

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = events.filter((item) => {
        return Object.values(item.title)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(events);
    }
  };

  const searchLocation = (searchCity) => {
    setSearchInput(searchCity);
    if (searchInput !== "") {
      const filteredData = events.filter((item) => {
        return Object.values(item.location)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(events);
    }

    
  };
  return (
    <>
      <div className={s.events}>
        <div className={s.wrap}>
          <form>
            <div className={s.search}>
              <input
                type="text"
                className={`${s.search_field} ${s.events_search}`}
                placeholder="Concert, Webinar, Conferences, etc."
                onChange={(e) => searchItems(e.target.value)}
              />
               <i className="fa fa-search"></i>
        <input
                type="text"
                className={`${s.search_field} ${s.location}`}
                placeholder="City"
                onChange={(e) => searchLocation(e.target.value)}
              />
        <i className="fa fa-search-location"></i>
            </div>
          </form>
        </div>
        {/* <SearchBar /> */}
        <h1>{constants.TITLE}</h1>
        {/* <Categories /> */}

        {searchInput.length > 1 ? (
          
          <>
        <h3>{constants.FOUND} {filteredResults.length} {constants.RESULTS}</h3>
          <ul className={s.events__items}>
            {filteredResults.map((eventFilter) => (
              <EventItem
                key={eventFilter.id}
                // { index + 1 }
                src={eventFilter.img_url}
                text={eventFilter.title}
                label={eventFilter.cat_id}
                path={`/events/${eventFilter.id}`}
                desc={eventFilter.full_desc}
                short_desc={eventFilter.short_desc}
                entry={eventFilter.subcat_entry}
                type={eventFilter.subcat_type}
                date={eventFilter.date}
                location={eventFilter.location}
              />
            ))}
          </ul>
          </>
        ) : (
          <>
          <ul className={s.events__items}>
            {events.map((event) => (
              <EventItem
                key={event.id}
                // { index + 1 }
                src={event.img_url}
                text={event.title}
                label={event.cat_id}
                path={`/events/${event.id}`}
                desc={event.full_desc}
                short_desc={event.short_desc}
                entry={event.subcat_entry}
                type={event.subcat_type}
                date={event.date}
                location={event.location}
              />
            ))}
          </ul>
          </>
        )}
      </div>
    </>
  );
}

export default Events;
