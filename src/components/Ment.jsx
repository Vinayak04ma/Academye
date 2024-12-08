// import React, { useState, useEffect } from 'react';
// import mentorsData from '../data/mentors.json';  
// import { useSelector } from 'react-redux';  

// const Ment = () => {
//   const [mentors, setMentors] = useState(mentorsData);  
//   const [favorites, setFavorites] = useState([]);  
//   const [viewFavorites, setViewFavorites] = useState(false);  

//   const user = useSelector((state) => state.user);  

//   // Handle adding/removing a mentor to/from favorites
//   const handleFavorite = (mentorId) => {
//     let updatedFavorites = [...favorites];
    
//     if (updatedFavorites.includes(mentorId)) {
//       // If the mentor is already in favorites, remove them
//       updatedFavorites = updatedFavorites.filter(id => id !== mentorId);
//     } else {
//       // If the mentor is not in favorites, add them
//       updatedFavorites.push(mentorId);
//     }
    
//     // Update the state and localStorage
//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));  // Save updated favorites to localStorage
//   };

//   // Handle toggle between showing all mentors and favorite mentors
//   const handleToggleView = (view) => {
//     setViewFavorites(view);
//   };

//   // Filter mentors based on the view (All or Favorite)
//   const displayedMentors = viewFavorites 
//     ? mentors.filter(mentor => favorites.includes(mentor.id))  // Show only favorites
//     : mentors;  // Show all mentors

//   // Load favorites from localStorage safely
//   useEffect(() => {
//     try {
//       const savedFavorites = localStorage.getItem("favorites");
//       if (savedFavorites) {
//         setFavorites(JSON.parse(savedFavorites));  // Set the favorites from localStorage
//       }
//     } catch (error) {
//       console.error("Error loading favorites from localStorage", error);
//       setFavorites([]);  // If parsing fails, reset favorites to an empty array
//     }
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
//       <div className="text-center mb-8">
//         {/* Toggle Buttons */}
//         <button
//           onClick={() => handleToggleView(false)}
//           className={`px-4 py-2 rounded-l-md border-2 ${!viewFavorites ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} `}
//         >
//           All Mentors
//         </button>
//         <button
//           onClick={() => handleToggleView(true)}
//           className={`px-4 py-2 rounded-r-md border-2 ${viewFavorites ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
//         >
//           Favorite Mentors
//         </button>
//       </div>

//       {/* Mentor Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {displayedMentors.map((mentor) => (
//           <div
//             key={mentor.id}
//             className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-2"
//           >
//             {/* Mentor Image */}
//             <div className="relative w-32 h-32 mx-auto mt-6 mb-4 overflow-hidden rounded-full border-4 border-gray-200">
//               <img
//                 src={mentor.photo}
//                 alt={mentor.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
//               <p className="text-sm text-gray-500">{mentor.field}</p>

//               {/* Favorite Button */}
//               {user.isSignedUp && (
//                 <button
//                   onClick={() => handleFavorite(mentor.id)}
//                   className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ${
//                     favorites.includes(mentor.id) ? "bg-blue-700" : ""
//                   }`}
//                 >
//                   {favorites.includes(mentor.id) ? "Remove from Favorites" : "Add to Favorites"}
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Ment;


// import React, { useState,useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { dedicateHat } from '../features/hatSlice';  // Import the dedicateHat action
// import mentorsData from '../data/mentors.json'; 

// const Ment = () => {
//   const [mentors, setMentors] = useState(mentorsData);
//   const [viewFavorites, setViewFavorites] = useState(false);
//   const [dedicatingHat, setDedicatingHat] = useState(null);  // Track which mentor is being dedicated a hat
//   const [hatType, setHatType] = useState('');
//   const [message, setMessage] = useState('');
//   const [favorites, setFavorites] = useState([]);  
//   // Handle adding/removing a mentor to/from favorites
//   const handleFavorite = (mentorId) => {
//     let updatedFavorites = [...favorites];
    
//     if (updatedFavorites.includes(mentorId)) {
//       // If the mentor is already in favorites, remove them
//       updatedFavorites = updatedFavorites.filter(id => id !== mentorId);
//     } else {
//       // If the mentor is not in favorites, add them
//       updatedFavorites.push(mentorId);
//     }
    
//     // Update the state and localStorage
//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));  // Save updated favorites to localStorage
//   };

//   // Handle toggle between showing all mentors and favorite mentors
//   const handleToggleView = (view) => {
//     setViewFavorites(view);
//   };

//   // Filter mentors based on the view (All or Favorite)
//   const displayedMentors = viewFavorites 
//     ? mentors.filter(mentor => favorites.includes(mentor.id))  // Show only favorites
//     : mentors;  // Show all mentors

//   // Load favorites from localStorage safely
//   useEffect(() => {
//     try {
//       const savedFavorites = localStorage.getItem("favorites");
//       if (savedFavorites) {
//         setFavorites(JSON.parse(savedFavorites));  // Set the favorites from localStorage
//       }
//     } catch (error) {
//       console.error("Error loading favorites from localStorage", error);
//       setFavorites([]);  // If parsing fails, reset favorites to an empty array
//     }
//   }, []);


//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   // Handle the dedication of hats
//   const handleDedicateHat = (mentorId) => {
//     dispatch(dedicateHat({ mentorId, hatType, message }));
//     setDedicatingHat(null);  // Close the modal after dedication
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
//       <div className="text-center mb-8">
//         <button onClick={() => setViewFavorites(false)} className="px-4 py-2 rounded-l-md border-2 bg-blue-500 text-white">All Mentors</button>
//         <button onClick={() => setViewFavorites(true)} className="px-4 py-2 rounded-r-md border-2 bg-white text-gray-700">Favorite Mentors</button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {mentors.map((mentor) => (
//           <div key={mentor.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="relative w-32 h-32 mx-auto mt-6 mb-4 overflow-hidden rounded-full border-4 border-gray-200">
//               <img src={mentor.photo} alt={mentor.name} className="w-full h-full object-cover" />
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
//               <p className="text-sm text-gray-500">{mentor.field}</p>

//               {/* Dedicate Hat Button */}
//               {user.isSignedUp && (
//                 <button
//                   onClick={() => setDedicatingHat(mentor.id)}
//                   className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
//                 >
//                   Dedicate a Hat
//                 </button>
//               )}

//                {/* Favorite Button */}
//               {user.isSignedUp && (
//                  <button
//                    onClick={() => handleFavorite(mentor.id)}
//                    className={`mt-4 ml-[12px] px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ${
//                     favorites.includes(mentor.id) ? "bg-blue-700" : ""
//                   }`}
//                 >
//                   {favorites.includes(mentor.id) ? "Remove Favorites" : "Add to Favorites"}
//                 </button>
//               )}
//             </div>

//           </div>
//         ))}
//       </div>

//       {/* Dedicate Hat Modal */}
//       {dedicatingHat && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg w-96">
//             <h3 className="text-xl font-semibold mb-4">Dedicate a Hat</h3>
//             <div className="mb-4">
//               <label className="block mb-2">Choose Hat Type</label>
//               <select
//                 value={hatType}
//                 onChange={(e) => setHatType(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               >
//                 <option value="">Select Hat</option>
//                 <option value="Gold">Gold</option>
//                 <option value="Yellow">Yellow</option>
//                 <option value="Diamond">Diamond</option>
//                 <option value="Silver">Silver</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2">Write a Message</label>
//               <textarea
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 rows="4"
//               />
//             </div>
//             <div className="flex justify-end ">
//               <button
//                 onClick={() => handleDedicateHat(dedicatingHat)}
//                 className="bg-blue-500 text-white px-4 py-2  rounded-lg mr-2"
//               >
//                 Dedicate
//               </button>
//               <button
//                 onClick={() => setDedicatingHat(null)}
//                 className="bg-gray-500 text-white px-4py-2 rounded-lg"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Ment;

// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { dedicateHat } from '../features/hatSlice';  // Import the dedicateHat action
// import mentorsData from '../data/mentors.json';

// const Ment = () => {
//   const [mentors, setMentors] = useState(mentorsData);
//   const [viewFavorites, setViewFavorites] = useState(false);  // Toggle view for all or favorite mentors
//   const [dedicatingHat, setDedicatingHat] = useState(null);  // Track which mentor is being dedicated a hat
//   const [hatType, setHatType] = useState('');  // Hat type (e.g., Gold, Yellow)
//   const [message, setMessage] = useState('');  // Message for dedication
//   const [favorites, setFavorites] = useState([]);  // Track favorite mentors
  
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   // Handle adding/removing a mentor to/from favorites
//   const handleFavorite = (mentorId) => {
//     let updatedFavorites = [...favorites];
//     if (updatedFavorites.includes(mentorId)) {
//       // If the mentor is already in favorites, remove them
//       updatedFavorites = updatedFavorites.filter(id => id !== mentorId);
//     } else {
//       // If the mentor is not in favorites, add them
//       updatedFavorites.push(mentorId);
//     }
    
//     // Update the state and localStorage
//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));  // Save updated favorites to localStorage
//   };

//   // Handle toggle between showing all mentors and favorite mentors
//   const handleToggleView = (view) => {
//     setViewFavorites(view);
//   };

//   // Filter mentors based on the view (All or Favorite)
//   const displayedMentors = viewFavorites 
//     ? mentors.filter(mentor => favorites.includes(mentor.id))  // Show only favorites
//     : mentors;  // Show all mentors

//   // Load favorites from localStorage safely
//   useEffect(() => {
//     try {
//       const savedFavorites = localStorage.getItem("favorites");
//       if (savedFavorites) {
//         setFavorites(JSON.parse(savedFavorites));  // Set the favorites from localStorage
//       }
//     } catch (error) {
//       console.error("Error loading favorites from localStorage", error);
//       setFavorites([]);  // If parsing fails, reset favorites to an empty array
//     }
//   }, []);

//   // Handle the dedication of hats
//   const handleDedicateHat = (mentorId) => {
//     dispatch(dedicateHat({ mentorId, hatType, message }));
//     setDedicatingHat(null);  // Close the modal after dedication
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
//       <div className="text-center mb-8">
//         <button
//           onClick={() => handleToggleView(false)}  // Show all mentors
//           className={`px-4 py-2 rounded-l-md border-2 ${!viewFavorites ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
//         >
//           All Mentors
//         </button>
//         <button
//           onClick={() => handleToggleView(true)}  // Show favorite mentors
//           className={`px-4 py-2 rounded-r-md border-2 ${viewFavorites ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
//         >
//           Favorite Mentors
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {displayedMentors.map((mentor) => (
//           <div key={mentor.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="relative w-32 h-32 mx-auto mt-6 mb-4 overflow-hidden rounded-full border-4 border-gray-200">
//               <img src={mentor.photo} alt={mentor.name} className="w-full h-full object-cover" />
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
//               <p className="text-sm text-gray-500">{mentor.field}</p>

//               {/* Dedicate Hat Button */}
//               {user.isSignedUp && (
//                 <button
//                   onClick={() => setDedicatingHat(mentor.id)}
//                   className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
//                 >
//                   Dedicate a Hat
//                 </button>
//               )}

//               {/* Favorite Button */}
//               {user.isSignedUp && (
//                 <button
//                   onClick={() => handleFavorite(mentor.id)}
//                   className={`mt-4 ml-[12px] px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ${favorites.includes(mentor.id) ? "bg-blue-700" : ""}`}
//                 >
//                   {favorites.includes(mentor.id) ? "Remove Favorites" : "Add to Favorites"}
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Dedicate Hat Modal */}
//       {dedicatingHat && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg w-96">
//             <h3 className="text-xl font-semibold mb-4">Dedicate a Hat</h3>
//             <div className="mb-4">
//               <label className="block mb-2">Choose Hat Type</label>
//               <select
//                 value={hatType}
//                 onChange={(e) => setHatType(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               >
//                 <option value="">Select Hat</option>
//                 <option value="Gold">Gold</option>
//                 <option value="Yellow">Yellow</option>
//                 <option value="Diamond">Diamond</option>
//                 <option value="Silver">Silver</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2">Write a Message</label>
//               <textarea
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 rows="4"
//               />
//             </div>
//             <div className="flex justify-end">
//               <button
//                 onClick={() => handleDedicateHat(dedicatingHat)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
//               >
//                 Dedicate
//               </button>
//               <button
//                 onClick={() => setDedicatingHat(null)}
//                 className="bg-gray-500 text-white px-4 py-2 rounded-lg"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Ment;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dedicateHat } from '../features/hatSlice';  // Import the dedicateHat action
import mentorsData from '../data/mentors.json';

const Ment = () => {
  const [mentors, setMentors] = useState(mentorsData);
  const [viewFavorites, setViewFavorites] = useState(false);  // Toggle view for all or favorite mentors
  const [dedicatingHat, setDedicatingHat] = useState(null);  // Track which mentor is being dedicated a hat
  const [hatType, setHatType] = useState('');  // Hat type (e.g., Gold, Yellow)
  const [message, setMessage] = useState('');  // Message for dedication
  const [favorites, setFavorites] = useState([]);  // Track favorite mentors
  
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme.theme);  // Get current theme
  const dispatch = useDispatch();

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

  // Handle the dedication of hats
  const handleDedicateHat = (mentorId) => {
    dispatch(dedicateHat({ mentorId, hatType, message }));
    setDedicatingHat(null);  // Close the modal after dedication
  };

  return (
    <div className={`w-full mx-auto px-6 py-16 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`}>
      <div className={`text-center mb-8 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
        <button
          onClick={() => handleToggleView(false)}  // Show all mentors
          className={`px-4 py-2 rounded-l-md border-2 ${!viewFavorites ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
        >
          All Mentors
        </button>
        <button
          onClick={() => handleToggleView(true)}  // Show favorite mentors
          className={`px-4 py-2 rounded-r-md border-2 ${viewFavorites ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
        >
          Favorite Mentors
        </button>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`}>
        {displayedMentors.map((mentor) => (
          <div key={mentor.id} className={`rounded-lg shadow-lg overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} hover:shadow-xl transition duration-300`}>
            <div className="relative w-32 h-32 mx-auto mt-6 mb-4 overflow-hidden rounded-full border-4 border-gray-200">
              <img src={mentor.photo} alt={mentor.name} className="w-full h-full object-cover" />
            </div>
            <div className={`p-6 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
              <h3 className="text-xl font-semibold">{mentor.name}</h3>
              <p className="text-sm text-gray-500">{mentor.field}</p>

              {/* Dedicate Hat Button */}
              {user.isSignedUp && (
                <button
                  onClick={() => setDedicatingHat(mentor.id)}
                  className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                >
                  Dedicate a Hat
                </button>
              )}

              {/* Favorite Button */}
              {user.isSignedUp && (
                <button
                  onClick={() => handleFavorite(mentor.id)}
                  className={`mt-4 ml-[12px] px-4 py-2 ${favorites.includes(mentor.id) ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded-lg hover:bg-blue-600 transition`}
                >
                  {favorites.includes(mentor.id) ? "Remove Favorites" : "Add to Favorites"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Dedicate Hat Modal */}
      {dedicatingHat && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className={`bg-white p-6 rounded-lg w-96 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <h3 className="text-xl font-semibold mb-4">Dedicate a Hat</h3>
            <div className="mb-4">
              <label className="block mb-2">Choose Hat Type</label>
              <select
                value={hatType}
                onChange={(e) => setHatType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Hat</option>
                <option value="Gold">Gold</option>
                <option value="Yellow">Yellow</option>
                <option value="Diamond">Diamond</option>
                <option value="Silver">Silver</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Write a Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                rows="4"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => handleDedicateHat(dedicatingHat)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Dedicate
              </button>
              <button
                onClick={() => setDedicatingHat(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ment;


