import React from "react";
import Slider from "./swiper";
import event1 from'../../../../assets/images/slider/event1.jpg'

 function SliderComponent() {
  const settings = {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 0, // Slide rotate in degrees
      stretch: 40, // Stretch space between slides (in px)
      depth: 300, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: false // Enables slides shadows
    }
  };
  const data = [...Array(10).keys()];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Slider settings={settings}>
        {data.map(item => (
          <img src={event1} key={item} alt="swipe" />
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;