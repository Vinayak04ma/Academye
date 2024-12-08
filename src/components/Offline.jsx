import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Offline = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className={`max-w-full mx-auto p-4 sm:p-6 lg:p-8 {theme==='light'?'bg-white':'text-black'}  shadow-xl rounded-lg flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8`}>
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/3">
        <img
          src="https://img.freepik.com/free-photo/seminar-designers_1098-13659.jpg?ga=GA1.1.1470743990.1732160957&semt=ais_hybrid" // Replace with your image URL
          alt="Academy"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-2/3 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
          Introducing Academy Wallah Offline
        </h2>
        <p className={`text-xl {theme==='light'?'text-gray-700':'text-white'} mb-4`}>
          Academy Wallah offers top-tier coaching for IIT JEE and NEET admission preparation in the best cities across India.
        </p>

        {/* Advantages */}
        <div className={`text-left {theme==='light'?'text-gray-700':'text-white'}  space-y-2 mb-6`}>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h3m-3 0l2.293-2.293a1 1 0 011.414 0L21 12m-7.293-2.293a1 1 0 010 1.414L9 12h3" />
            </svg>
            <span>Top educators for comprehensive preparation</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h3m-3 0l2.293-2.293a1 1 0 011.414 0L21 12m-7.293-2.293a1 1 0 010 1.414L9 12h3" />
            </svg>
            <span>Available in top cities for easy accessibility</span>
          </div>
        </div>

        {/* Find Centre Button */}
        <div className="flex">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition duration-300">
            Find Centre
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offline;
