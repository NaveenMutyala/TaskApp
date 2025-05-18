import {Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import "./App.css";
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />  
      </Routes>
    </div>
  );
}

export default App;
