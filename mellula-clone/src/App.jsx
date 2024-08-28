import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { TwoPics } from "./components/TwoPics";
import { About } from "./components/About";
import { PicGallery } from "./components/PicGallery";
import { Brands } from "./components/Brands";
import { Subscribe } from "./components/Subscribe";
import { Footer } from "./components/Footer";

// import React from 'react'

 const App = () => {
  return (
    <div className="w-full h-full overflow-x-hidden" >
        <Navbar />
        <Hero />
        <TwoPics />
        <About />
        <PicGallery />
        <Brands/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default App