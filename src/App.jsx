import { useState } from 'react'
import {BrowserRouter as Router ,Route,Routes,Link} from 'react-router-dom';
import './App.css'
import Home from "./screens/Home";
import Header from "./components/Header"
import Quiz from './components/Quiz';




function App() {
  

  return (
    <>
  
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz/>}/>
      </Routes>

    </Router>
    
    </>
  )
}

export default App
