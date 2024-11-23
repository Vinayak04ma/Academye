import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from "./screens/Home";
import About from "./screens/About";
import Header from "./components/Header";
import Quiz from './components/Quiz';
import SignUp from "./components/SignUp";
import { Provider } from 'react-redux';
import store from './app/store'; 
import Profile from "./components/Profile"; 
import Mentors from "./screens/Mentors"

function App() {
  return (
    <Provider store={store}>  
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/About" element={<About />} /> 
          <Route path="/Mentors" element={<Mentors />} /> 
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
