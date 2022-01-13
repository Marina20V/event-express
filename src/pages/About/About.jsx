import React from "react";
import s from "./About.module.scss";
import aboutImg from "../../assets/images/about_events.jpg";

export default function About() {
  return (
    <div className={s.detail_info}>
      <h1>About us</h1>
      <div className={s.about_info}>
      <div className={s.about_img}>
        <img src={aboutImg} alt="about" />
      </div>
      <p className={s.about_description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    </div>
  );
}
