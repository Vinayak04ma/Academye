import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizSection = () => {
  const navigate = useNavigate();
  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between p-8 bg-white">
      {/* Left Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src="https://img.freepik.com/premium-vector/quiz-symbol-questionnaire-icon-survey-sign-flat-speech-bubble-symbols_349999-1851.jpg?w=740"
          alt="Quiz Illustration"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Quiz 
        </h1>
        <p className="text-md md:text-lg text-gray-600 mb-4">
          Prepare and test your knowledge with our fun and interactive quizzes.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Enhance your exam preparation by answering a series of carefully crafted questions.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
          onClick={handleStartQuiz} >
          Start Quiz
        </button>
      </div>
    </section>
  );
};

export default QuizSection;
