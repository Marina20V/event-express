import React from 'react'
import '../../App.css';
// import Categories from '../../components/Categories/Categories';
import Events from "../../components/Events/Events"
import Footer from '../../components/shared/Footer/Footer';
// import HeroImage from '../../components/shared/HeroImage/HeroImage';
// import SliderCowerflow from '../../components/shared/Modal/SliderCowerflaw/SliderCowerflow';
// import SliderComponent from '../.npm i -g json-server./components/shared/Modal/Slider/SliderComponent';

 function Home() {
    return (
        <>  
            {/* <SliderCowerflow /> */}
            {/* <SliderComponent /> */}
            {/* <HeroImage /> */}
            {/* <Categories /> */}
            <Events />
            <Footer />
        </>
    )
}

export default Home;