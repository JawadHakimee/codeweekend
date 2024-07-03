
import React from 'react'
import Home from "./Pages/Home/home.jsx";
import { Routes, Route } from "react-router-dom";
import About from './Pages/AboutUs/about.jsx';
import Contact from './Pages/Contacts/contact.jsx';



function App(){
  return (
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

    </Routes>
 
  )
}


export default App;
