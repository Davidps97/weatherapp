import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Map from './Pages/Map/Map';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}/> 
          <Route path='/home' element = {<Home/>}/> 
          <Route path='/map' element = {<Map/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
