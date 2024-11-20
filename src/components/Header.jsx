import React,{useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Header=()=>{
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
  
    const links=[
        {
            id:"1",
            name:"Home",
            link:"/"
        },
        {
            id:"2",
            name:"About",
            link:"/About"
        },
        {
            id:"3",
            name:'Our Mentors',
            link:"/Mentors"
        },
        {
            id:'4',
            name:"Courses",
            link:"/Courses"
        }
    ]
    return(
        <nav>
            <div className='px-[20px] py-[15px] shadow-2xl bg-white text-black'>
                <div className="flex items-center justify-between   ">
                    <div className=" font-bold text-yellow-500 pl-[30px] text-[30px]">AcademyWallah</div>
                    <div className="hidden md:flex justify-evenly  gap-[10px] w-[500px] mr-[5%]">
                        {links.map((link)=>(
                            <li className="font-semibold list-none text-[19px] cursor-pointer" key={link.key}>
                                {link.name}
                            </li>

                        ))}
                    </div>

                      {/* mobile */}
                <div onClick={handleNav} className="block md:hidden absolute cursor-pointer right-[35px] ">
                    {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                </div>

                 {/* Mobile Navigation Menu */}

                <ul
                 className={
                        nav
                           ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r  border-r-gray-900 bg-white ease-in-out duration-500 z-50'
                            : 'ease-in-out w-[60%] fixed duration-500  top-0 bottom-0 left-[-100%] z-50'
                       }
                 >
                     {/* Mobile Logo */}
                     <h1 className='w-full text-3xl font-bold black m-4'>AcademyWallah</h1>

                    {/* Mobile Navigation Items */}

                  {links.map((item) => (
                 <li
                   key={item.id}
                   className='p-4 border-b rounded-xl hover:bg-[#04152d] duration-300 hover:text-[#576CBC] cursor-pointer border-gray-600'
                 > 
                   {item.name}
                 </li>
                 ))}
               </ul>


            </div>
              

                




        </div>
        </nav>
    );

}
export default Header;