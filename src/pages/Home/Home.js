import React from 'react'
import '../../App.css';
import Events from "../../components/Events/Events"
import Footer from '../../components/shared/Footer/Footer';
import HeroImage from '../../components/shared/HeroImage/HeroImage';
// import SearchBar from '../../components/shared/SearchBar/SearchBar';

 function Home() {
    return (
        <>
            <HeroImage />
            <Events />
            <Footer />
        </>
    )
}

export default Home;