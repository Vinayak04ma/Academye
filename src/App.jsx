import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from "./screens/Home";
import Header from "./components/Header";
import Quiz from './components/Quiz';
import SignUp from "./components/SignUp";
import { Provider } from 'react-redux';
import store from './app/store';  

function App() {
  return (
    <Provider store={store}>  {/* Wrap your app with the Redux provider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
