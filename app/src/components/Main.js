import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from '../views/Home.js';

const Main = () => {
return (
    <>
    <Navbar />
    
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default Main;