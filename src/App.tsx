import React from 'react';
import logo from './logo.svg';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Reminder from './pages/reminder/Reminder';
import Basket from './pages/shop/Basket';

function App() {
  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/shop" element={<Shop />}/>
            <Route path="/reminder" element={<Reminder />}/>
            <Route path="/basket/:itemId" element={<Basket />}/>
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
