import React, { useState } from 'react';
import {Navigate} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/home_page';
import Register from './pages/register_page';
import Login from './pages/login_page';
import ImageTest from './pages/imageTest_page';
import HeadingTest from './pages/headingsTest_page';
import LinkButtonTest from './pages/linksButtonsTest_page';
function App() {
  
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/imagetest" element={<ImageTest/>} />
          <Route path="/headingtest" element={<HeadingTest/>} />
          <Route path="/linkbuttontest" element={<LinkButtonTest/>} />
      </Routes>  
    </Router> 

  );
}


export default App;