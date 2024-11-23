import React, { useState, useEffect } from 'react';
import mentorsData from '../data/mentors.json';  
import { useSelector } from 'react-redux';  

const Ment = () => {
  const [mentors, setMentors] = useState(mentorsData);  
  const [favorites, setFavorites] = useState([]);  
  const [viewFavorites, setViewFavorites] = useState(false);  

  const user = useSelector((state) => state.user);  

  // Handle adding/removing a mentor to/from favorites
  const handleFavorite = (mentorId) => {
    let updatedFavorites = [...favorites];
    
    if (updatedFavorites.includes(mentorId)) {
      // If the mentor is already in favorites, remove them
      updatedFavorites = updatedFavorites.filter(id => id !== mentorId);
    } else {
      // If the mentor is not in favorites, add them
      updatedFavorites.push(mentorId);
    }
    
    // Update the state and localStorage
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));  // Save updated favorites to localStorage
  };

  // Handle toggle between showing all mentors and favorite mentors
  const handleToggleView = (view) => {
    setViewFavorites(view);
  };

  // Filter mentors based on the view (All or Favorite)
  const displayedMentors = viewFavorites 
    ? mentors.filter(mentor => favorites.includes(mentor.id))  // Show only favorites
    : mentors;  // Show all mentors

  // Load favorites from localStorage safely
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem("favorites");
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));  // Set the favorites from localStorage
      }
    } catch (error) {
      console.error("Error loading favorites from localStorage", error);
      setFavorites([]);  // If parsing fails, reset favorites to an empty array
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
      <div className="text-center mb-8">
        {/* Toggle Buttons */}
        <button
          onClick={() => handleToggleView(false)}
          className={`px-4 py-2 rounded-l-md border-2 ${!viewFavorites ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} `}
        >
          All Mentors
        </button>
        <button
          onClick={() => handleToggleView(true)}
          className={`px-4 py-2 rounded-r-md border-2 ${viewFavorites ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
        >
          Favorite Mentors
        </button>
      </div>

      {/* Mentor Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedMentors.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-2"
          >
            {/* Mentor Image */}
            <div className="relative w-32 h-32 mx-auto mt-6 mb-4 overflow-hidden rounded-full border-4 border-gray-200">
              <img
                src={mentor.photo}
                alt={mentor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
              <p className="text-sm text-gray-500">{mentor.field}</p>

              {/* Favorite Button */}
              {user.isSignedUp && (
                <button
                  onClick={() => handleFavorite(mentor.id)}
                  className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ${
                    favorites.includes(mentor.id) ? "bg-blue-700" : ""
                  }`}
                >
                  {favorites.includes(mentor.id) ? "Remove from Favorites" : "Add to Favorites"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ment;