// import React,{useState


// } from "react";
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// const Header=()=>{
//     const [nav, setNav] = useState(false);
//     const handleNav = () => {
//         setNav(!nav);
//     };
  
//     const links=[
//         {
//             id:"1",
//             name:"Home",
//             link:"/"
//         },
//         {
//             id:"2",
//             name:"About",
//             link:"/About"
//         },
//         {
//             id:"3",
//             name:'Our Mentors',
//             link:"/Mentors"
//         },
//         {
//             id:'4',
//             name:"Courses",
//             link:"/Courses"
//         }
//     ]
//     return(
//         <nav>
//             <div className='px-[20px] py-[15px] shadow-2xl bg-white text-black'>
//                 <div className="flex items-center justify-between   ">
//                     <div className=" font-bold text-yellow-500 pl-[30px] text-[30px]">AcademyWallah</div>
//                     <div className="hidden md:flex justify-evenly  gap-[10px] w-[500px] mr-[5%]">
//                         {links.map((link)=>(
//                             <li className="font-semibold list-none text-[19px] cursor-pointer" key={link.key}>
//                                 {link.name}
//                             </li>

//                         ))}
//                     </div>

//                 </div>
//                 {/* mobile */}
//                 <div classname="block md:hidden absolute right-[35px]">
//                     {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
//                 </div>


//             </div>
//         </nav>
//     );

// }
// export default Header;