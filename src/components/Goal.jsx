import React from "react";
import { FaRocket, FaHeartbeat, FaFlagCheckered, FaGraduationCap, FaDollarSign, FaClipboardList, FaBuilding, FaMoneyCheckAlt,FaUserTie } from "react-icons/fa"; 
import goalsData from "../data/goal.json"; 


const iconMap = {
  FaRocket: <FaRocket className="text-5xl text-gray-700" />,
  FaHeartbeat: <FaHeartbeat className="text-5xl text-gray-700" />,
  FaFlagCheckered: <FaFlagCheckered className="text-5xl text-gray-700" />,
  FaGraduationCap: <FaGraduationCap className="text-5xl text-gray-700" />,
  FaDollarSign: <FaDollarSign className="text-5xl text-gray-700" />,
  FaClipboardList: <FaClipboardList className="text-5xl text-gray-700" />,
  FaBuilding: <FaBuilding className="text-5xl text-gray-700" />,
  FaUserTie: <FaMoneyCheckAlt className="text-5xl text-gray-700" />,
};

const Goal = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-12">Select Your Goal</h2>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {goalsData.map((goal) => (
            <div
              key={goal.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 duration-300 cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                {iconMap[goal.icon]}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{goal.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goal;
