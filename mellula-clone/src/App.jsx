import { Navbar } from "./components/navbar";
import { Footer } from "./components/Footer";
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { Shop } from "./Pages/Shop";

// import React from 'react'

 const App = () => {
  return (
    <div className="w-full h-full overflow-x-hidden" >
      <Router>
      <Navbar />
      <Routes >
        <Route path="/" element={<MainLayout />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer/>
      </Router>
       
    </div>
  )
}

export default App