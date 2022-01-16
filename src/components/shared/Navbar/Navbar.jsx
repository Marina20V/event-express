import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import Button  from '../Button/Button';
import ModalSignUp from '../Modal/ModalSignUp/ModalSignUp';
import constants from '../../../constants/constants';
// import  isClicked  from '../../../redux/'; 

export default function Navbar() {
       const isClicked = useSelector(state => state.isClicked);
       const button = useSelector(state => state.button);
       const dispatch = useDispatch();

       const handleClick = () => 
       {
            dispatch({type:'click'})
       }
 
       const closeMenu = () => 
       {
            dispatch(false)
       }


    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="menu-icon" role = "button" tabIndex={0} onClick={handleClick} onKeyUp={handleClick} >
                {/* <div className="menu-icon"> */}

                    <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMenu}>
                        {constants.HOME}
                    </Link>
                    </li>
                    {/* <li className="nav-item">
                    <Link to="/closestevents" className="nav-links" onClick={closeMenu}>
                        Closest Events
                    </Link>
                    </li>                     */}
                    {/* <li className="nav-item">
                    <Link to="/contact" className="nav-links" onClick={closeMenu}>
                        Contact
                    </Link>
                    </li> */}
                    <li className="nav-item">
                    <Link to="/add" className="nav-links" onClick={closeMenu}>
                        {constants.ADD_EVENT}
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about" className="nav-links" onClick={closeMenu}>
                        {constants.ABOUT}
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/sign-up" className="nav-links-mobile" onClick={closeMenu}>
                        {constants.SIGN_UP}
                    </Link>
                    </li>
                </ul>
                {<button type="button" onClick={(handleClick)}  className="openModal">
                <i className="fas fa-plus-circle" />
                {isClicked && <ModalSignUp closeModal={closeMenu} />}
                 </button>}
                {button && <button type="button" >
                <i className="fa fa-sign-in-alt" /> </button>}
            </div>
        </nav>
    )
}
