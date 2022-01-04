import React from 'react';

import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";
import "./SliderCowerflow.css";
import event1 from'../../../../assets/images/slider/event1.jpg'
import event2 from'../../../../assets/images/slider/event2.jpg'
import event3 from'../../../../assets/images/slider/event3.jpg'
import event4 from'../../../../assets/images/slider/event4.jpg'
import event5 from'../../../../assets/images/slider/event5.jpg'
import event6 from'../../../../assets/images/slider/event6.jpg'
import event7 from'../../../../assets/images/slider/event7.jpg'

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
				<img className="photos" src={event2} alt="img" />
			</SwiperSlide>
			<SwiperSlide>
				<img className="photos" src={event3} alt="img"/>
			</SwiperSlide>
			<SwiperSlide>
				<img className="photos" src={event4} alt="img"/>
			</SwiperSlide>
			<SwiperSlide>
				<img className="photos"src={event5} alt="img"/>
			</SwiperSlide>
			<SwiperSlide>
				<img className="photos"src={event6} alt="img"/>
			</SwiperSlide>
			<SwiperSlide>
				<img className="photos"src={event7} alt="img"/>
			</SwiperSlide>
		</Swiper>
		</div>
	)
}

export default SliderCowerflow;