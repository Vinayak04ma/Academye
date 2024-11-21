import React from "react";
import Carouser from "../components/Carouser";
import Person from "../components/Person";
import Footer from '../components/Footer'
import slide from "../data/Carousel";
import QuizSection from "../components/QuizSection";

const Home=()=>{
    return(
        <div>
         <Carouser data={slide.slides} />
         <Person/>
         <QuizSection/>
         <Footer/>
        </div>

    );
}
export default Home;