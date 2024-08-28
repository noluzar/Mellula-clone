import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { TwoPics } from "./components/TwoPics";
import { About } from "./components/About";
import { PicGallery } from "./components/PicGallery";
import { Brands } from "./components/Brands";

// import React from 'react'

 const App = () => {
  return (
    <div >
        <Navbar />
        <Hero />
        <TwoPics />
        <About />
        <PicGallery />
        <Brands/>
    </div>
  )
}

export default App