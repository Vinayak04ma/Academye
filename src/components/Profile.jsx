import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUserData } from "../features/signIn/userSlice"; // Import action to clear user data

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Get the user data from Redux store
  const user = useSelector((state) => state.user);

  // Handle logout functionality
  const handleLogout = () => {
    // Clear user data from Redux store and localStorage
    dispatch(clearUserData());
    localStorage.removeItem("userData");

    // Redirect to Home page or SignIn page after logout
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Profile</h1>
      
      <div className="flex justify-center">
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full bg-gray-300 mb-6">
          <img src="https://img.freepik.com/premium-photo/3d-rendering-3d-illustration-people-avatar-icon-isolated-white-background_640106-100.jpg?w=740" alt="Profile" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>

      {/* Display User Information */}
      <div className="mb-4">
        <strong>Name:</strong> <span>{user.name}</span>
      </div>
      <div className="mb-4">
        <strong>Email:</strong> <span>{user.email}</span>
      </div>
      <div className="mb-4">
        <strong>Phone:</strong> <span>{user.phone}</span>
      </div>
      <div className="mb-4">
        <strong>Age:</strong> <span>{user.age}</span>
      </div>
      <div className="mb-4">
        <strong>Exam Goal:</strong> <span>{user.examGoal}</span>
      </div>
      <div className="mb-4">
        <strong>Target Exam Year:</strong> <span>{user.targetExamYear}</span>
      </div>

      {/* Logout Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
  
