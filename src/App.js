import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Map from './Pages/Map/Map';
import Form from './Pages/Form/Form';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}/> 
          <Route path='/home' element = {<Home/>}/> 
          <Route path='/map' element = {<Map/>}/>
          <Route path='/form' element = {<Form/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
