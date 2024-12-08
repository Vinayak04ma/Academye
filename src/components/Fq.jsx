import React, { useState } from "react";
import faqData from "../data/qa.json"; 
import { useDispatch, useSelector } from 'react-redux';

const Fq = () => {
  const [openIndex, setOpenIndex] = useState(null); 
  const [showAll, setShowAll] = useState(false); 
  const theme = useSelector((state) => state.theme.theme);
 
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };


  const toggleSeeMore = () => {
    setShowAll(!showAll); 
  };

 
  const displayedFAQs = showAll ? faqData : faqData.slice(0, 4); 

  return (
    <div className={`px-4 py-16 sm:px-6 lg:px-8 {theme==='light'?'bg-gray-100':'bg-black'} `}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-semibold text-center ${theme==='light'?'text-gray-900':'text-white'}  mb-8`}>
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {displayedFAQs.map((faq, index) => (
            <div key={faq.id} className="bg-white p-6 rounded-lg shadow-md">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-xl font-medium text-gray-800">{faq.question}</h3>
                <span className="text-gray-500">{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {faqData.length > 4 && (
          <div className="text-center mt-4">
            <button
              onClick={toggleSeeMore}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};





export default Fq;