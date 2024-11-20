import { useState } from 'react'

import './App.css'
import slide from "./data/Carousel";
import Header from "./components/Header";
import Carousel from './components/Carouser';


function App() {
  

  return (
    <>
    <Header/>
    <Carousel data={slide.slides} />
    
    </>
  )
}

export default App
