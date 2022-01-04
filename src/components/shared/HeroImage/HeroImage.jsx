import React from "react";
import s from './HeroImage.module.scss';
// import event from "../../../assets/images/events-img.jpg";
import SearchBar from '../SearchBar/SearchBar'


export default function HeroImage() {
  return (
      <div className={s.hero-image}>
        <div className={s.hero_text}>
          <h1>Events</h1>
          <div className={s.hero_search}>
          <SearchBar/>
          </div>
            {/* <img src={event} alt="cover" /> */}
        </div>
      </div>
  );
}
