import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import './Navbar.css';
import Button  from '../Button/Button';

export default function Navbar() {
       const isClicked = useSelector(state => state.isClicked);
       const button = useSelector(state => state.button);
       const dispatch = useDispatch();

       const handleClick = () => 
       {
            dispatch({type:'true'})
       }
 
       const closeMobileMenu = () => 
       {
            dispatch({type:'false'})
       }

       const showButton = () => {
           if(window.innerWidth <= 960) {
               dispatch({type:'false'})
           }else {
            dispatch({type:'true'})
           }

       };
       window.addEventListener('resize', showButton);
    return (
        <nav className="navbar">
            <div className="navbar-container">

                <Link to="/" className="navbar-logo">
                   <img src={logo} alt="Logo" />
                </Link>
                <div className="menu-icon" role = "button" tabIndex={0} onClick={handleClick} onKeyUp={handleClick} >
                {/* <div className="menu-icon"> */}

                    <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/closestevents" className="nav-links" onClick={closeMobileMenu}>
                        Closest Events
                    </Link>
                    </li>                    
                    <li className="nav-item">
                    <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                        Contact
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                        About
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                       Sign up
                    </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>
                    SIGN UP
                </Button>}
            </div>
        </nav>
    )
}
