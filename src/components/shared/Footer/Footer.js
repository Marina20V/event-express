import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Footer.css';
import logo from '../../../assets/images/logo3.png';

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
                    <small className="website-rights">City Events © 2021 by Marina V</small>
                    <div className="cosial-icons">
                        <Link className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
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
