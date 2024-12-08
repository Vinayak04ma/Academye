import React, { useEffect, useState } from 'react';
import topperData from '../data/topperData.json';  // Import the topper data from JSON file
import { useDispatch, useSelector } from 'react-redux'; 

const TopperList = () => {
  const [topperList, setTopperList] = useState([]);
  const theme = useSelector((state) => state.theme.theme);

  // Load topper data from JSON
  useEffect(() => {
    setTopperList(topperData);
  }, []);

  return (
    <section className={`p-8 {theme==='light'?'bg-gray-100 text-gray-700':'bg-white text-white'}`}>
      <h1 className="text-4xl font-bold mb-12">
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

