import React from 'react';

import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";
import "./SliderCowerflow.css";
import event1 from'../../../../assets/images/slider/event1.jpg'
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

// configure Swiper to use modules
SwiperCore.use([Pagination, EffectCoverflow]);

function SliderCowerflow() {
	return (
		<div className="photo-container">
        <Swiper
          effect="coverflow"
          grabCursor="true"
          centeredSlides="true"
          spaceBetween={0}
          slidesPerView={4}
          loop="true"
          pagination={{ clickable: true, dynamicBullets: true }}
          coverflowEffect={{
            rotate: 20,
            stretch: 25,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            700: {
              spaceBetween: 0,
              slidesPerView: 4,
            },
            500: {
              spaceBetween: 100,
              slidesPerView: 2,
            },
            411: {
              spaceBetween: 100,
              slidesPerView: 2,
            },
            300: {
              spaceBetween: 0,
              slidesPerView: 1,
            },
          }}
		  >
			<SwiperSlide>
				<img className="photos" src={event1} alt="img" />
			</SwiperSlide>
			<SwiperSlide>
				<img className="photos" src={event1} alt="img" />
			</SwiperSlide>
			<SwiperSlide>
				<img className="photos" src={event1} alt="img"/>
			</SwiperSlide>
			<SwiperSlide>
				<img className="photos" src={event1} alt="img"/>
			</SwiperSlide>
			<SwiperSlide>
				<img className="photos"src={event1} alt="img"/>
			</SwiperSlide>
		</Swiper>
		</div>
	)
}

export default SliderCowerflow;