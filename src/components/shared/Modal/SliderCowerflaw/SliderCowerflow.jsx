import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";
import s from "./SliderCowerflow.module.scss";

// import event1 from'../../../../assets/images/slider/event1.jpg'
// import event2 from'../../../../assets/images/slider/event2.jpg'
// import event3 from'../../../../assets/images/slider/event3.jpg'
// import event4 from'../../../../assets/images/slider/event4.jpg'
// import event5 from'../../../../assets/images/slider/event5.jpg'
// import event6 from'../../../../assets/images/slider/event6.jpg'
// import event7 from'../../../../assets/images/slider/event7.jpg'

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import getEvents from '../../../../api/EventApi';

// configure Swiper to use modules
// SwiperCore.use([Pagination, EffectCoverflow]);



const SliderCowerflow = () => {

  const [events, setEvent] = useState([]);

useEffect(async() => {
    setEvent( await getEvents());
}, []);

SwiperCore.use([Pagination, EffectCoverflow]);


	return (
		<div className={s.photo_container}>
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
         { events.map((event) => (
			<SwiperSlide key = {event.id}>
				<img className={s.photos} src={event.img_url} alt="img" />
			</SwiperSlide>
         ))}
		</Swiper>
		</div>
	)
}

export default SliderCowerflow;