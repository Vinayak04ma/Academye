import React, { useState, useEffect } from 'react';
import quizData from '../data/q.json'; 
import Footer from "./Footer"

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [attemptedQuizzes, setAttemptedQuizzes] = useState([]);
  const [favoriteQuizzes, setFavoriteQuizzes] = useState([]);
  const [activeTab, setActiveTab] = useState('all'); 

  // Load quizzes data from q.json
  useEffect(() => {
    setQuizzes(quizData);  
  }, []);

  // add quiz to attempted list
  const startQuiz = (quiz) => {
    if (!attemptedQuizzes.some((attempted) => attempted.id === quiz.id)) {
      setAttemptedQuizzes((prev) => [...prev, quiz]);
    }
  };
       
  // Handle favorite (toggle quiz in favorite list)
  const toggleFavorite = (quiz) => {
    if (favoriteQuizzes.some((fav) => fav.id === quiz.id)) {
      setFavoriteQuizzes(favoriteQuizzes.filter((fav) => fav.id !== quiz.id));
    } else {
      setFavoriteQuizzes((prev) => [...prev, quiz]);
    }
  };

  // Determine which quizzes to display based on the active tab
  const getQuizzesToDisplay = () => {
    switch (activeTab) {
      case 'attempted':
        return attemptedQuizzes.length > 0 ? attemptedQuizzes : [{ name: 'No Attempted Quizzes' }];
      case 'favorite':
        return favoriteQuizzes.length > 0 ? favoriteQuizzes : [{ name: 'No Favorite Quizzes' }];
      default:
        return quizzes; 
    }
  };

  return (
    <div>
    <section className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Choose Your Quiz
      </h1>

     
      <div className="flex justify-center space-x-6 mb-6">
        <button
          className={`text-lg ${activeTab === 'all' ? 'text-blue-500 font-semibold' : 'text-gray-600'}`}
          onClick={() => setActiveTab('all')}
        >
          All Quizzes
        </button>
        <button
          className={`text-lg ${activeTab === 'attempted' ? 'text-blue-500 font-semibold' : 'text-gray-600'}`}
          onClick={() => setActiveTab('attempted')}
        >
          Attempted
        </button>
        <button
          className={`text-lg ${activeTab === 'favorite' ? 'text-blue-500 font-semibold' : 'text-gray-600'}`}
          onClick={() => setActiveTab('favorite')}
        >
          Favorite
        </button>
      </div>

      {/* Quiz Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {getQuizzesToDisplay().map((quiz) => (
          <div
            key={quiz.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={quiz.image}
              alt={quiz.name}
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{quiz.name}</h2>
              <p className="text-sm text-gray-600">{quiz.subname}</p>
              <p className="text-sm text-gray-500 mt-2">Questions: {quiz.questions}</p>

              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => startQuiz(quiz)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition duration-300"
                >
                  Start Quiz
                </button>
                <button
                  onClick={() => toggleFavorite(quiz)}
                  className={`text-sm px-3 py-1 rounded-md text-white ${
                    favoriteQuizzes.some((fav) => fav.id === quiz.id)
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-yellow-500 hover:bg-yellow-600'
                  } transition duration-300`}
                >
                  {favoriteQuizzes.some((fav) => fav.id === quiz.id) ? 'Unfavorite' : 'Favorite'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </section>
    <Footer/>
    </div>
  );
};

export default Quiz;


