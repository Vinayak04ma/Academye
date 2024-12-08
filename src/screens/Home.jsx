import React from "react";
import Carouser from "../components/Carouser";
import Person from "../components/Person";
import Footer from '../components/Footer'
import slide from "../data/Carousel";
import QuizSection from "../components/QuizSection";
import Fq from "../components/Fq";
import Goal from "../components/Goal";
import Topper from '../components/Topper';
import Offline from '../components/Offline';
import ServiceCards from '../components/ServiceCards'
import Refer from '../components/Refer'
import { useSelector } from "react-redux"; 


const Home=()=>{
    const theme = useSelector((state) => state.theme.theme);
    return(
        <div className={` ${theme==='light'? "bg-white text-black":"bg-black text-white"}`}>
         <Carouser data={slide.slides} />
         <Person/>
         <Goal/>
         <QuizSection/>
         <Topper/>
         <Offline/>
         <ServiceCards/>
         <Refer/>
         <Fq/>
         <Footer/>
        </div>

    );
}
export default Home;