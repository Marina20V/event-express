import React, { Fragment } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import { increment, decrement } from './actions';
import Navbar from './components/shared/Navbar/Navbar';
import Home from './components/Home/Home'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" exact component=
            {Home}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
