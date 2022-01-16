import React, { Fragment } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import SliderComponent from './components/shared/Modal/Slider/SliderComponent';
import Navbar from './components/shared/Navbar/Navbar';
import About from './pages/About/About';
// import ClosestEvents from './pages/ClosestEvents/ClosestEvents';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Event from './components/Event/Event'
import Events from './components/Events/Events';
import Footer from './components/shared/Footer/Footer';
// import FileUpload from './components/shared/FileUpload/FileUpload';
import AddItemForm from './components/AddItem/AddItemForm';

function App() {
  
  return (
    <>
      <Router> 
        <Navbar /> 
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/events" element={<Events />}/>
            <Route path="/add" element={<AddItemForm />}/>
            <Route path="/sign-up" element={<SignUp />}/>
            <Route path="/events/:id" element={<Event />}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
