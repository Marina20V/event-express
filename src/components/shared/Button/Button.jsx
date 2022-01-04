import React from 'react';
import { Link } from 'react-router-dom';
import s from './Button.module.scss';

const STYLES = ['btn__primary', 'btn__outline', 'btn__test'];

const SIZES = ['btn__medium', 'btn__large'];
/* eslint-disable react/prop-types */

 const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/sign-up' className={s.btn_mobile}>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        // eslint-disable-next-line react/button-has-type
        type={type}
      >
        
        {children}
      </button>
    </Link>
  );
};

export default Button;