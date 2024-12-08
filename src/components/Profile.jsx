

// import React from 'react';
// import { useSelector } from 'react-redux';
// import mentorsData from '../data/mentors.json';  // Import mentors data

// const Profile = () => {
//   const user = useSelector((state) => state.user);
//   const hats = useSelector((state) => state.hats.hats);  // Get hats data from Redux

//   // Function to get the mentor's name by their id
//   const getMentorNameById = (mentorId) => {
//     const mentor = mentorsData.find(mentor => mentor.id === mentorId);
//     return mentor ? mentor.name : 'Unknown Mentor';  // Return mentor name or fallback
//   };

//   return (
//     <div className="mx-auto p-6 m-9 rounded-lg shadow-lg w-full bg-white">
//       <div className="bg-[#EEEEEE] rounded py-[30px]">
//         <div className="flex justify-center gap-[15%] flex-col sm:flex-row sm:pl-[20px]">
//           {/* Profile Image */}
//           <div className="w-32 h-32 rounded-full bg-gray-300 mb-5 mt-10 left-2">
//             <img 
//               src="https://img.freepik.com/premium-photo/3d-rendering-3d-illustration-people-avatar-icon-isolated-white-background_640106-100.jpg?w=740" 
//               alt="Profile" 
//               className="w-full h-full object-cover rounded-full" 
//             />
//           </div>

//           <div>
//             <div className="mb-4 text-[40px]">
//               <strong><span>{user.name}</span></strong>
//             </div>
//             <div className="mb-2 text-[20px]">
//               <strong><span>{user.email}</span></strong>
//             </div>
//             <div className="mb-2 text-[20px]">
//               <strong><span>{user.phone}</span></strong>
//             </div>
//             <div className="mb-2  text-[15px]">
//               <strong>goal : </strong><span>{user.examGoal}</span>
//             </div>
//             <div className="mb-2 text-[15px]">
//               <strong>Age : </strong><span>{user.age}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mx-auto p-6 m-9 rounded-lg shadow-lg w-full bg-white">
//         <div className="mt-6">
//           <h4 className="text-lg font-semibold">Hats Dedicated to Mentors</h4>
//           {hats.length > 0 ? (
//             hats.map((hat, index) => (
//               <div key={index} className="mt-2">
//                 <div className="text-sm">
//                   <strong>Mentor: </strong>{getMentorNameById(hat.mentorId)} <br />
//                   <strong>Hat: </strong>{hat.hatType} <br />
//                   <strong>Message: </strong>{hat.message}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-sm">No hats dedicated yet.</div>
//           )}
//         </div>
//       </div>

//       {/* Logout Button */}
//       <div className="mt-6 flex justify-center">
//         <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React from 'react';
import { useSelector } from 'react-redux';
import mentorsData from '../data/mentors.json';  // Import mentors data

const Profile = () => {
  const user = useSelector((state) => state.user);
  const hats = useSelector((state) => state.hats.hats);  // Get hats data from Redux

  // Function to get the mentor's name by their id
  const getMentorNameById = (mentorId) => {
    const mentor = mentorsData.find(mentor => mentor.id === mentorId);
    return mentor ? mentor.name : 'Unknown Mentor';  // Return mentor name or fallback
  };

  return (
    <div className="mx-auto p-6 m-9 rounded-lg shadow-lg w-full bg-white">
      <div className="bg-[#EEEEEE] rounded py-[30px]">
        <div className="flex justify-center gap-[15%] flex-col sm:flex-row sm:pl-[20px]">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full bg-gray-300 mb-5 mt-10 left-2">
            <img 
              src="https://img.freepik.com/premium-photo/3d-rendering-3d-illustration-people-avatar-icon-isolated-white-background_640106-100.jpg?w=740" 
              alt="Profile" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>

          <div>
            <div className="mb-4 text-[40px]">
              <strong><span>{user.name}</span></strong>
            </div>
            <div className="mb-2 text-[20px]">
              <strong><span>{user.email}</span></strong>
            </div>
            <div className="mb-2 text-[20px]">
              <strong><span>{user.phone}</span></strong>
            </div>
            <div className="mb-2 text-[15px]">
              <strong>goal : </strong><span>{user.examGoal}</span>
            </div>
            <div className="mb-2 text-[15px]">
              <strong>Age : </strong><span>{user.age}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto p-6 m-9 rounded-lg shadow-lg w-full bg-white">
        <div className="mt-6">
          <h4 className="text-[30px] font-semibold mb-4">Hats Dedicated to Mentors</h4>
          {hats.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hats.map((hat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h5 className="text-xl font-semibold text-gray-800">
                    Mentor: {getMentorNameById(hat.mentorId)}
                  </h5>
                  <div className="mt-2 text-gray-600">
                    <strong>Hat: </strong>{hat.hatType}
                  </div>
                  <div className="mt-2 text-gray-600">
                    <strong>Message: </strong>{hat.message}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-gray-600">No hats dedicated yet.</div>
          )}
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-6 flex justify-center">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;


  
