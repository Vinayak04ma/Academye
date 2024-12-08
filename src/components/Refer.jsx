import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ReferSection = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className={`w-full h-screen {theme==='light'?'bg-white':'bg-black'}  flex items-center justify-center`}>
      <div className="w-full h-full flex items-center justify-between px-8 sm:px-20">
        {/* Left side: Heading and Paragraph */}
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <h2 className={`text-4xl font-bold {theme==='light'?'text-gray-800':'text-white'}  mb-4`}>
            Refer a Friend & Earn Rewards!
          </h2>
          <p className={`text-xl  {theme==='light'?'text-gray-600':'text-white'} mb-6`}>
            Share your referral link with friends and earn exciting rewards when they sign up.
          </p>
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
            Refer Now
          </button>
        </div>

        {/* Right side: Image */}
        <div className="w-1/2 hidden sm:block">
          <img
            src="https://img.freepik.com/premium-vector/social-media-networking-icon-vector-illustration_1120563-16906.jpg?w=740"  // Replace with your image URL
            alt="Refer Image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ReferSection;


