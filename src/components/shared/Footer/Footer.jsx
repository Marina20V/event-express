import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import s from "./Footer.module.scss";
import logo from "../../../assets/images/logo1.png";

export default function Footer() {
  return (
    <div className={s.footer_container}>
      <footer className={s.footer}>
        <div className={s.container}>
          <div className={s.row}>
            <div className={s.footer_col}>
              <h4>Get the freshest news</h4>
              {/* <p className={s.footer_subscription_heading}>
                    Get the freshest CityEvents news
                </p> */}
              <p className={s.footer_subscription_text}>
                You can unsubscribe any time
              </p>
              <div className={s.input_areas}>
                <form action="">
                  <input
                    type="email"
                    name="email"
                    placehoklder="Your email"
                    className={s.footer_input}
                  />
                  <Button buttonStyle={s.btn__putline}>Subscribe</Button>
                </form>
              </div>
            </div>
            <div className={s.footer_col}>
              <h4>Contact us</h4>
              <ul>
                <li>
                  <a href="/">
                    <i className="fas fa-map-marker-alt" /> Chernivtsi, Ukraine{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-envelope" /> cityevents@gmail.com{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-phone-alt" /> +38 97 489 565{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className={s.footer_col}>
              <h4>Closest Events</h4>
              <ul>
                <li>
                  <a href="/">watch</a>
                </li>
                <li>
                  <a href="/">bag</a>
                </li>
                <li>
                  <a href="/">shoes</a>
                </li>
                <li>
                  <a href="/">dress</a>
                </li>
              </ul>
            </div>
            <div className={s.footer_col}>
              <h4>follow us</h4>
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
            City Events © 2021 by Marina V
          </small>
          </li>
          </ul>
          </div>
          </section>
      </footer>
    </div>
  );
}
