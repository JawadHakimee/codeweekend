
import React from 'react'
import Home from "./Pages/Home/home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/AboutUs/about.jsx';



function App(){
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

    </Routes>
  </BrowserRouter>
  )
}


export default App;
