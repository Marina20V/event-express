import React, {useState}  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo1.png';
import './Navbar.css';
// import Button  from '../Button/Button';
import ModalSignUp from '../Modal/ModalSignUp/ModalSignUp';
import constants from '../../../constants/constants';
// import  isClicked  from '../../../redux/'; 

export default function Navbar() {
       const isClicked = useSelector(state => state.isClicked);
       const button = useSelector(state => state.button);
       const dispatch = useDispatch();
       const [openModal, setOpenModal] = useState(false);

       const handleClick = () => 
       {
            dispatch({type:'test_action'})
       }
 
       const closeMobileMenu = () => 
       {
            dispatch(false)
       }


    return (
        <nav className="navbar">
            <div className="navbar-container">

                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                   <img src={logo} alt="Logo" />
                </Link>
                <div className="menu-icon" role = "button" tabIndex={0} onClick={handleClick} onKeyUp={handleClick} >
                {/* <div className="menu-icon"> */}

                    <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        {constants.HOME}
                    </Link>
                    </li>
                    {/* <li className="nav-item">
                    <Link to="/closestevents" className="nav-links" onClick={closeMobileMenu}>
                        Closest Events
                    </Link>
                    </li>                     */}
                    {/* <li className="nav-item">
                    <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                        Contact
                    </Link>
                    </li> */}
                    <li className="nav-item">
                    <Link to="/add" className="nav-links" onClick={closeMobileMenu}>
                        {constants.ADD_EVENT}
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                        {constants.ABOUT}
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                        {constants.SIGN_UP}
                    </Link>
                    </li>
                    <li className="nav-item">
                    <button type="button" onClick={() => setOpenModal(true)}  className="nav-links-mobile openModalBtn">
                    {constants.SIGN_UP}
                    {openModal && <ModalSignUp closeModal={setOpenModal} />}
                    </button>
                    </li>
                </ul>
                {button && <button type="button" buttonStyle='btn__outline' onClick={() => setOpenModal(true)}  className="openModal">
                <i className="fas fa-plus-circle" />
                {openModal && <ModalSignUp closeModal={setOpenModal} />}
                 </button>}
                {button && <button type="button" buttonStyle='btn__outline'>
                <i className="fa fa-sign-in-alt" /> </button>}
            </div>
        </nav>
    )
}
