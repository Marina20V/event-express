import React from "react";
import s from "./About.module.scss";
import aboutImg from "../../assets/images/about_events.jpg";
import constants from "../../constants/constants";

export default function About() {
  return (
    <div className={s.detail_info}>
      <h1>{constants.ABOUT_US}</h1>
      <div className={s.about_info}>
      <div className={s.about_img}>
        <img src={aboutImg} alt="about" />
      </div>
      <p className={s.about_description}>
          {constants.DESCRIPTION_ABOUT}
      </p>
    </div>
    </div>
  );
}
