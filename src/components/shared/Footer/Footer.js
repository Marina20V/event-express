import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Footer.css';
import logo from '../../../assets/images/logo.png';

export default function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Get the freshest CityEvents news
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe any time
                </p>
                <div className="input-areas">
                    <form action="">
                        <input type="email" 
                               name="email" 
                               placehoklder="Your email" 
                               className="footer-input"
                        />
                        <Button buttonStyle="btn--putline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer links">
                <div className="footer-link-wrapper">
                    <div className="footer-links-items">
                        <h2>About us</h2>
                        <Link to="/about">How it works</Link>
                        <Link to="/about">Testimonials</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/createevent">Create event</Link>

                    </div>
                </div>
            </div>
            <section className="socia media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                    <Link to="/" className="social-logo">
                    <img src={logo} alt="Logo" />
                    </Link>
                    </div>
                </div>
            </section>
            
        </div>
    )
}
