import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */

const STYLES = ['btn-primary','btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) =>
 {
     const checkButtonStyles = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    
     const checkButtonSizes = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

     return (
         <Link to='/sign-up' className="btn-mobile">
      <button 
        className={`btn ${checkButtonStyles} ${checkButtonSizes}`}
        onClick={onClick} 
          // eslint-disable-next-line react/button-has-type
          type={type} >
        {children}
      </button>
         </Link>
     )
};

export default Button;
