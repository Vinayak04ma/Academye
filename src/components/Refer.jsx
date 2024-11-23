import React from 'react';

const ReferSection = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-between px-8 sm:px-20">
        {/* Left side: Heading and Paragraph */}
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Refer a Friend & Earn Rewards!
          </h2>
          <p className="text-xl text-gray-600 mb-6">
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


