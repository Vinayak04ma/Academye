import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../features/signIn/userSlice'; 
import { useNavigate } from "react-router-dom"; 
import Footer from "./Footer";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [examGoal, setExamGoal] = useState("");
  const [targetExamYear, setTargetExamYear] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(""); 


  const handleSubmit = (e) => {
    e.preventDefault();

 
    if (phone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return;
    }

    if (!age || isNaN(age) || age < 10) {
      setErrorMessage("Please enter a valid age (10 or older).");
      return;
    }

    if (!examGoal || !targetExamYear) {
      setErrorMessage("Please provide both your exam goal and target exam year.");
      return;
    }

   
    dispatch(setUserData({ name, email, phone, age, examGoal, targetExamYear }));

    
    setIsSubmitted(true);

    // Redirect to home after a delay
    setTimeout(() => {
      navigate("/"); // Redirect to home or another page
    }, 1000); // Redirect after 3 seconds
  };

  return (
    <div>
      <div className="max-w-lg mx-auto p-6 mt-3 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number (10 digits)
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Age */}
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              min="18" // Age must be 18 or older
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Exam Goal */}
          <div className="mb-4">
            <label htmlFor="examGoal" className="block text-sm font-medium text-gray-700">
              Exam Goal
            </label>
            <input
              type="text"
              id="examGoal"
              value={examGoal}
              onChange={(e) => setExamGoal(e.target.value)}
              required
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Target Exam Year */}
          <div className="mb-4">
            <label htmlFor="targetExamYear" className="block text-sm font-medium text-gray-700">
              Target Exam Year
            </label>
            <input
              type="text"
              id="targetExamYear"
              value={targetExamYear}
              onChange={(e) => setTargetExamYear(e.target.value)}
              required
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-4 text-red-500 text-center">
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mt-4 text-green-500 text-center">
            <p>Signup Successful! Redirecting...</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
