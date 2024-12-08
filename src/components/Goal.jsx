import React from "react";
import { FaRocket, FaHeartbeat, FaFlagCheckered, FaGraduationCap, FaDollarSign, FaClipboardList, FaBuilding, FaMoneyCheckAlt,FaUserTie } from "react-icons/fa"; 
import goalsData from "../data/goal.json"; 
import { useDispatch, useSelector } from 'react-redux';


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
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className={`py-16 ${theme==='light'?'bg-white':'bg-black'} `}>
      <div className={`max-w-6xl mx-auto ${theme==='light'?'text-gray-700':'text-white'}`}>
        <h1 className="text-4xl font-bold  mb-4 px-[13px]">Select Your Goal /exam</h1>
        <p className="mb-6 text-xl px-[13px]"><span className="text-blue-500">200+</span> exams available for your preparation</p>
        <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="   Type the exam/goal you are preparing for"
              className="mt-1 mb-12 mx-[15px] py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        <h2 className="text-3xl font-semibold  mb-12 px-[13px]">Popular Goal</h2>
        {/* Responsive Grid */}
        <div className=" text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {goalsData.map((goal) => (
            <div
              key={goal.id}
              className="bg-white m-2 px-[60px] py-[80px] rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 duration-300 cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                {iconMap[goal.icon]}
              </div>
              <h3 className="text-xl font-semibold text-gray-600">{goal.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goal;
