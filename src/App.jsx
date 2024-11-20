import { useState } from 'react'

import './App.css'
import slide from "./data/Carousel";
import Header from "./components/Header";
import Carousel from './components/Carouser';
import Person from "./components/Person";


function App() {
  

  return (
    <>
    <Header/>
    <Carousel data={slide.slides} />
    <Person/>
    
    </>
  )
}

export default App
