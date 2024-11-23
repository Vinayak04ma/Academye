// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import topperData from '../data/topperData.json'; // Import the topper data from JSON file

// const Quiz = () => {
//   const [topperList, setTopperList] = useState([]);
//   const navigate = useNavigate();

//   // Load topper data from JSON
//   useEffect(() => {
//     setTopperList(topperData);
//   }, []);

//   return (
//     <section className="p-8 bg-gray-100">
//       <h1 className="text-4xl font-bold text-gray-700 mb-12">
//         Our Top Performers
//       </h1>

//       {/* Topper Cards Slider (Mobile-first, responsive design) */}
//       <div className="overflow-x-auto pb-8">
//         <div className="flex space-x-6 overflow-x-scroll scrollbar-hide">
//           {topperList.map((topper, index) => (
//             <div
//               key={topper.id}
//               className="flex-none w-60 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
//             >
//               {/* Topper's Image */}
//               <img
//                 src={topper.image}
//                 alt={topper.name}
//                 className="w-full h-36 object-cover"
//               />
//               <div className="p-4">
//                 {/* Name and Rank */}
//                 <h2 className="text-xl font-semibold text-gray-800">{topper.name}</h2>
//                 <p className="text-lg font-bold text-indigo-600">Rank: {topper.rank}</p>
                
//                 {/* Exam Name */}
//                 <p className="text-sm text-gray-600 mt-2">{topper.examName}</p>

//                 {/* Highlighted Rank Badge */}
//                 <div className="mt-4">
//                   <span className="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
//                     Topper
//                   </span>
//                 </div>

//                 {/* Additional Details (Optional) */}
//                 <div className="flex justify-between items-center mt-4">
//                   <button
//                     className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition duration-300"
//                     onClick={() => alert(`Starting quiz for ${topper.name}`)}  // Simulate start quiz action
//                   >
//                     Start Quiz
//                   </button>
//                   <button
//                     className="bg-yellow-500 text-white px-3 py-1 rounded-md text-sm hover:bg-yellow-600 transition duration-300"
//                     onClick={() => alert(`Favorite clicked for ${topper.name}`)}  // Simulate favorite action
//                   >
//                     Favorite
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Quiz;


import React, { useEffect, useState } from 'react';
import topperData from '../data/topperData.json';  // Import the topper data from JSON file

const TopperList = () => {
  const [topperList, setTopperList] = useState([]);

  // Load topper data from JSON
  useEffect(() => {
    setTopperList(topperData);
  }, []);

  return (
    <section className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-700 mb-12">
        Our Top Performers of 2023
      </h1>

      {/* Topper Cards Slider (Mobile-first, responsive design) */}
      <div className="overflow-x-auto pb-8">
        <div className="flex space-x-6 overflow-x-scroll scrollbar-hide">
          {topperList.map((topper, index) => (
            <div
              key={index}
              className="flex-none w-60 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Topper's Photo */}
              <img
                src={topper.image}
                alt={topper.name}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                {/* Name and Rank */}
                <h2 className="text-xl font-semibold text-gray-800">{topper.name}</h2>
                <p className="text-lg font-bold text-indigo-600">Rank: {topper.rank}</p>

                {/* Exam and Year */}
                <p className="text-sm text-gray-600 mt-2">Exam: {topper.exam}</p>
                <p className="text-xs text-gray-500 mt-1">Year: {topper.year}</p>

                {/* Highlighted Score */}
                <div className="mt-4">
                  <span className="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                    Score: {topper.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopperList;

