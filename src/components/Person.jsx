import React from "react";

const Person=()=>{
return(
<div className="px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row items-center mt-10 lg:mt-20">
            {/* Text Section */}
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Crack your goal with India’s top educators
                </h1>
                <p className="text-base sm:text-lg font-medium text-gray-900 mb-6">
                    Over <span className="text-blue-700">10 crore</span> learners trust us for their preparation
                </p>
                <form>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-[400px] mb-4"
                        placeholder="Enter your number"
                    />
                </form>
                <p className="text-gray-700 mb-4">We will send an OTP for verification</p>
                <button className="bg-gray-800 text-white rounded w-full sm:w-[400px] py-2 hover:bg-gray-600">
                    Join for free
                </button>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 flex justify-center">
                <img
                    className="w-full max-w-md sm:max-w-lg lg:max-w-full h-auto"
                    src="https://img.freepik.com/free-vector/family-with-digital-devices-flat-vector-illustration_74855-4789.jpg?t=st=1731172097~exp=1731175697~hmac=3e14315a8cb6e422e0c7a5800c657441f486d6f3ed0b26df2b88d7c10c503145&w=360"
                    alt="Illustration"
                />
            </div>
        </div>
);
}
export default Person;