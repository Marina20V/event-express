import React, { Fragment } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import { increment, decrement } from './actions';
import Navbar from './components/shared/Navbar/Navbar';



function App() {
  // const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);
  // const dispatch = useDispatch()
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" exact />
        </Routes>
      </Router>
    </>

    // <div className="App">
      
    //   <h1>Counter {counter} </h1>
    //   <button type='button' onClick={() => dispatch(increment())}>+</button>
    //   <button type='button' onClick={() => dispatch(decrement())}>-</button>

    //  {isLogged ? <h3>Valuable info</h3> : ''}
    // </div>
  );
}

export default App;
