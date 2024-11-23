import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const Carousel = ({ data }) => {
   
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Adjust the time (3000 ms ) as needed

        return () => clearInterval(interval); // Cleanup on unmount or when a user interacts
    }, [slide]); // Dependency array ensures the effect runs when `slide` changes

    // Function to handle manual slide change and reset the timer
    const handleManualSlideChange = (index) => {
        setSlide(index);
        clearInterval(); // This resets any ongoing interval
    };

    return (
        <>
            <div className="flex justify-center items-center mx-[10px] h-[400px] relative z-10">
                <BsArrowLeftCircleFill 
                    onClick={() => {
                        prevSlide();
                        clearInterval(); // Reset interval on manual click
                    }} 
                    className="absolute w-[2rem] h-[2rem] left-[1rem] cursor-pointer"
                />
                {data.map((item, idx) => (
                    <img 
                        src={item.src} 
                        alt={item.alt} 
                        key={idx} 
                        className={slide === idx ? "w-full h-full" : "hidden"} 
                    />
                ))}
                <BsArrowRightCircleFill 
                    onClick={() => {
                        nextSlide();
                        clearInterval(); // Reset interval on manual click
                    }} 
                    className="absolute w-[2rem] h-[2rem] right-[1rem] cursor-pointer"
                />
            </div>
            <div className="flex justify-center items-center mt-2">
                {data.map((_, idx) => (
                    <button 
                        key={idx} 
                        onClick={() => handleManualSlideChange(idx)} 
                        className={slide === idx 
                            ? "bg-black h-[0.5rem] w-[0.5rem] rounded-full border-none outline-none cursor-pointer mx-1" 
                            : "bg-gray-500 h-[0.5rem] w-[0.5rem] rounded-full border-none outline-none cursor-pointer mx-1"}
                    ></button>
                ))}
            </div>
        </>
    );
};

export default Carousel;