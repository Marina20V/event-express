import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import s from './Footer.module.scss';
import logo from '../../../assets/images/logo1.png';

export default function Footer() {
    return (
        <div className={s.footer_container}>
            <section className={s.footer_subscription}>
                <p className={s.footer_subscription_heading}>
                    Get the freshest CityEvents news
                </p>
                <p className={s.footer_subscription_text}>
                    You can unsubscribe any time
                </p>
                <div className={s.input_areas}>
                    <form action="">
                        <input type="email" 
                               name="email" 
                               placehoklder="Your email" 
                               className={s.footer_input}
                        />
                        <Button buttonStyle={s.btn__putline}>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className={s.footer_links}>
                <div className={s.footer_link_wrapper}>
                    <div className={s.footer_links_items}>
                        <h2>About us</h2>
                        <Link to="/about">How it works</Link>
                        <Link to="/about">Testimonials</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/createevent">Create event</Link>

                    </div>
                </div>
            </div> 
            <section className={s.socia_media}>
                <div className={s.social_media_wrap}>
                    <div className={s.footer_logo}>
                    <Link to="/" className={s.social_logo}>
                    <img src={logo} alt="Logo" />
                    </Link>
                    </div>
                    <small className={s.website_rights}>City Events © 2021 by Marina V</small>
                    <div className={s.social_icons}>
                        <Link className={`${s.social_icon_link} ${s.facebook}`}
                        to="/"
                        target="_blank"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link className={`${s.social_icon_link} ${s.instagram}`}
                        to="/"
                        target="_blank"
                        aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className={`${s.social_icon_link} ${s.twitter}`}
                        to="/"
                        target="_blank"
                        aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>
            
        </div>
    )
}
