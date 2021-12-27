import React from 'react'
import '../../App.css';
import Events from "../../components/Events/Events"
import Footer from '../../components/shared/Footer/Footer';
// import HeroImage from '../../components/shared/HeroImage/HeroImage';
import SliderCowerflow from '../../components/shared/Modal/SliderCowerflaw/SliderCowerflow';
// import SliderComponent from '../../components/shared/Modal/Slider/SliderComponent';

 function Home() {
    return (
        <>  
            <SliderCowerflow />
            {/* <SliderComponent /> */}
            {/* <HeroImage /> */}
            <Events />
            <Footer />
        </>
    )
}

export default Home;