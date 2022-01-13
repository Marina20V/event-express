import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import s from "./Footer.module.scss";
import logo from "../../../assets/images/logo1.png";
import constants from "../../../constants/constants";

export default function Footer() {
  return (
    <div className={s.main_footer_container}>
      <footer className={s.footer}>
        <div className={s.footer_container}>
          <div className={s.footer_row}>
            <div className={s.footer_col}>
              <h4>{constants.FRESHEST_NEWS}</h4>
              <p className={s.footer_subscription_text}>
                {constants.UNSUBSCRIBE}
              </p>
              <div className={s.input_areas}>
                <form action="">
                  <input
                    type="email"
                    name="email"
                    placehoklder="Your email"
                    className={s.footer_input}
                  />
                  <Button buttonStyle={s.btn__putline}>{constants.SUBSCRIBE}</Button>
                </form>
              </div>
            </div>
            <div className={s.footer_col}>
              <h4>{constants.CONTACT_US}</h4>
              <ul className={s.footer_list}>
                <li>
                  <a href="/">
                    <i className="fas fa-map-marker-alt" /> {constants.EVENTS_LOCATION}{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-envelope" /> {constants.EVENTS_SITE}{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-phone-alt" /> {constants.EVENTS_PHONE}{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className={s.footer_col}>
              <h4>{constants.FOLLOW_US}</h4>
              <div className={s.social_links}>
                <a href="/event">
                  <i
                    role="button"
                    aria-label="Facebook"
                    className="fab fa-facebook-f"
                  ></i>
                </a>
                <a href="/event">
                  <i
                    role="button"
                    aria-label="Twitter"
                    className="fab fa-twitter"
                  ></i>
                </a>
                <a href="/event">
                  <i
                    role="button"
                    aria-label="Instagram"
                    className="fab fa-instagram"
                  ></i>
                </a>
                <a href="/event">
                  <i
                    role="button"
                    aria-label="Linkedin"
                    className="fab fa-linkedin-in"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      <section className={s.socia_media}>
        <div className={s.social_media_wrap}>
            <ul className={s.footer_end} >
          <li className={s.footer_logo}>
            <Link to="/" className={s.social_logo}>
              <img src={logo} alt="Logo" />
            </Link>
          </li>
          <li>
          <small className={s.website_rights}>
            {constants.RIGHTS}
          </small>
          </li>
          </ul>
          </div>
          </section>
      </footer>
    </div>
  );
}