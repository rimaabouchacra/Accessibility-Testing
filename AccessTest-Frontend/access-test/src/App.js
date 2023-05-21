import React, { useState } from 'react';
import {Navigate} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/home_page';

function App() {
  
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          
      </Routes>  
    </Router> 

  );
}


export default App;