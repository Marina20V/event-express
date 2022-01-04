import React, { Fragment } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import SliderComponent from './components/shared/Modal/Slider/SliderComponent';
import Navbar from './components/shared/Navbar/Navbar';
import About from './pages/About/About';
import ClosestEvents from './pages/ClosestEvents/ClosestEvents';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/closestevents" element={<ClosestEvents />}/>
            <Route path="/sign-up" element={<SignUp />}/>
            {/* <Route path="/" exact><Redirect to="/main" /></Route> */}
            {/* <Route path="/event" element={<SliderComponent />}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
