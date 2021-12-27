import React from "react";
import Swiper from "react-id-swiper";
// import "../../../../../node_modules/swiper/"
// import './SliderComponent.css';
import '../../../../../node_modules/swiper/swiper-bundle.min.css';



/* eslint-disable react/prop-types */

const Slider = ({ settings, children }) => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 30,
    ...settings
  };

  return <Swiper {...params}>{children}</Swiper>;
};

export default Slider;
