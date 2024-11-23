// import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logoutUser } from '../features/signIn/userSlice'; // Action to logout user

// const Header = () => {
//   const [nav, setNav] = useState(false);
  
//   // Access username from Redux store
//   const username = useSelector((state) => state.user.name); // Assuming 'name' is stored in user state
//   const dispatch = useDispatch();

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   const handleLogout = () => {
//     dispatch(logoutUser()); // Dispatch action to reset username in Redux store
//   };

//   const links = [
//     { id: "1", name: "Home", link: "/" },
//     { id: "2", name: "About", link: "/About" },
//     { id: "3", name: 'Our Mentors', link: "/Mentors" },
//     { id: '4', name: "Quiz", link: "/quiz" },
//   ];

//   return (
//     <nav>
//       <div className='px-[20px] py-[15px] shadow-2xl bg-white text-black'>
//         <div className="flex items-center justify-between">
//           <div className="font-bold text-yellow-500 pl-[30px] text-[30px]">AcademyWallah</div>
//           <div className="hidden md:flex justify-evenly gap-[10px] w-[500px] mr-[5%]">
//             {links.map((link) => (
//               <li className="font-semibold list-none text-[19px] cursor-pointer" key={link.id}>
//                 <Link to={link.link}>{link.name}</Link>
//               </li>
//             ))}
//             {username ? (
//               <li className="font-semibold list-none text-[19px] cursor-pointer">
//                 <span>{username}</span>
//                 <button onClick={handleLogout} className="ml-2 text-red-600">Logout</button>
//               </li>
//             ) : (
//               <li className="font-semibold list-none text-[19px] cursor-pointer">
//                 <Link to='/SignUp'>Sign Up</Link>
//               </li>
//             )}
//           </div>

//           {/* Mobile */}
//           <div onClick={handleNav} className="block md:hidden absolute cursor-pointer right-[35px]">
//             {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
//           </div>

//           {/* Mobile Navigation Menu */}
//           <ul
//             className={
//               nav
//                 ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-50'
//                 : 'ease-in-out w-[60%] fixed duration-500 top-0 bottom-0 left-[-100%] z-50'
//             }
//           >
//             <h1 className='w-full text-3xl font-bold black m-4'>AcademyWallah</h1>
//             {links.map((item) => (
//               <li
//                 key={item.id}
//                 className='p-4 border-b rounded-xl hover:bg-[#04152d] duration-300 hover:text-[#576CBC] cursor-pointer border-gray-600'
//               >
//                 <Link to={item.link}>{item.name}</Link>
//               </li>
//             ))}
//             {username ? (
//               <li
//                 className='p-4 border-b rounded-xl hover:bg-[#04152d] duration-300 hover:text-[#576CBC] cursor-pointer border-gray-600'
//               >
//                 <span>{username}</span>
//                 <button onClick={handleLogout} className="ml-2 text-red-600">Logout</button>
//               </li>
//             ) : (
//               <li
//                 className='p-4 border-b rounded-xl hover:bg-[#04152d] duration-300 hover:text-[#576CBC] cursor-pointer border-gray-600'
//               >
//                 <Link to="/signUp">Sign Up</Link>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux"; // Use to get user data from Redux store

const Header = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  
  // Get the user data from Redux store
  const user = useSelector((state) => state.user);

  const handleNav = () => {
    setNav(!nav);
  };

  // Links array for navigation
  const links = [
    { id: "1", name: "Home", link: "/" },
    { id: "2", name: "About", link: "/about" },
    { id: "3", name: "Mentors", link: "/mentors" },
    { id: "4", name: "Quiz", link: "/quiz" }
  ];

  return (
    <nav>
      <div className="px-[20px] py-[15px] shadow-2xl bg-white text-black">
        <div className="flex items-center justify-between">
          <div className="font-bold text-yellow-500 pl-[30px] text-[30px]">
            AcademyWallah
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-evenly gap-[10px] w-[500px] mr-[5%]">
            {links.map((link) => (
              <li className="font-semibold list-none text-[19px] cursor-pointer" key={link.id}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}

            {/* If user is signed in, display their name, else show SignIn */}
            {user.name ? (
              <li className="font-semibold list-none text-[19px] cursor-pointer">
                <span onClick={() => navigate("/profile")}>{user.name}</span>
              </li>
            ) : (
              <li className="font-semibold list-none text-[19px] cursor-pointer">
                <Link to="/signUp">SignUp</Link>
              </li>
            )}
          </div>

          {/* Mobile Navigation */}
          <div onClick={handleNav} className="block md:hidden absolute cursor-pointer right-[35px]">
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>

          {/* Mobile Navigation Menu */}
          <ul
            className={
              nav
                ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-50"
                : "ease-in-out w-[60%] fixed duration-500 top-0 bottom-0 left-[-100%] z-50"
            }
          >
            {/* Mobile Logo */}
            <h1 className="w-full text-3xl font-bold black m-4">AcademyWallah</h1>

            {/* Mobile Navigation Items */}
            {links.map((item) => (
              <li
                key={item.id}
                className="p-4 border-b rounded-xl hover:bg-[#04152d] duration-300 hover:text-[#576CBC] cursor-pointer border-gray-600"
              >
                {item.name}
              </li>
            ))}

            {/* Mobile Username */}
            {user.name && (
              <li
                className="p-4 border-b rounded-xl hover:bg-[#04152d] duration-300 hover:text-[#576CBC] cursor-pointer border-gray-600"
                onClick={() => navigate("/profile")}
              >
                {user.name}
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
