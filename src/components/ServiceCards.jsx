import React from 'react';

const ServiceCards = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-3 sm:p-6 lg:p-8 my-[70px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Live Classes */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
          <img 
            src="https://img.freepik.com/premium-vector/online-education-concept-design-ui-designer-website-banner_1278800-21363.jpg?w=360" 
            alt="Live Classes"
            className="w-full h-48 sm:h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-3xl font-bold text-gray-700 mb-5 ">Live Classes</h3>
            <p className="text-gray-600 text-base mb-5 ">
              Attend interactive live sessions with top educators, clear doubts in real-time, and learn directly from the best.
            </p>
          </div>
        </div>

        {/* Card 2: Tests */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
          <img 
            src="https://img.freepik.com/premium-photo/student-studying-exam-preparation-illustration-with-light-bulb-inspiration-concept_1191225-35340.jpg?w=360"  
            alt="Tests"
            className="w-full h-48 sm:h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-3xl font-bold text-gray-700 mb-5 ">Tests & practice</h3>
            <p className="text-gray-600 text-base mb-5">
              Take regular practice tests and mock exams to assess your progress and fine-tune your preparation for competitive exams.
            </p>
          </div>
        </div>

        {/* Card 3: One-on-One Mentorship */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
          <img 
            src="https://img.freepik.com/premium-vector/business-idea-solution-offering-mentor-give-advice_1134986-18244.jpg?w=360"  
            alt="One-on-One Mentorship"
            className="w-full h-48 sm:h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-3xl font-bold text-gray-700 mb-5"> Mentorship</h3>
            <p className="text-gray-600 text-base">
              Receive personalized guidance from mentors, focus on your weaknesses, and build a strong strategy for success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
