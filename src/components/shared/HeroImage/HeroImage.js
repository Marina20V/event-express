import React from "react";
import './HeroImage.css';
// import event from "../../../assets/images/events-img.jpg";
import SearchBar from '../SearchBar/SearchBar'


export default function HeroImage() {
  return (
      <div className="hero-image">
        <div className="hero-text">
          <h1>Events</h1>
          <div className="hero-search">
          <SearchBar/>
          </div>
            {/* <img src={event} alt="cover" /> */}
        </div>
      </div>
  );
}
