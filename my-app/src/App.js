import React from 'react';
import './App.css';
import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Work from './pages/Work'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
