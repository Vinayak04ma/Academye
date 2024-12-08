// import React,{useState} from 'react'
// import {Data} from "./Data";
// import { useNavigate } from 'react-router-dom';

// const QuizSS = () => {
//     const [data, setData] = useState(Data);
//     const [index, setIndex] = useState(0);
//     const [score, setScore] = useState(0)
//     console.log(data);
  
//     const next = () =>{
//       if(index < data.length-1){
//         setIndex(index+1)
//       }else{
//         document.querySelector(".score").innerHTML=`<p>Your Score : ${score}/10</p>`
  
//         document.querySelector(".quiz").innerHTML=""
  
//         let nextBtn = document.querySelector("#next");
//         nextBtn.innerHTML="Retry";
//         nextBtn.classList.add("reset");
//         const reset = document.querySelector(".reset");
//         reset.addEventListener("click", ()=>{
//           window.location.reload()
//         })
  
  
  
//       }
      
//     const checked = document.querySelectorAll(".checkedValue");
//     checked.forEach((curVal)=>{
//       curVal.checked=false
//     })
       
//     }
   
  
//     const handleInput = (event) =>{
//       let chooseVal = event.target.value;
//       console.log(chooseVal);
//       if(chooseVal === data[index].ans){
//         setScore(score+1);
        
  
//       }
      
//     }
//     console.log(score);
//      return (
//         <div className="container mx-auto bg-white p-8 rounded-xl shadow-md mt-6">
//         <div className="quiz">
//           <div className="mb-6">
//             <h1 className="text-2xl font-bold">Q: {data[index].q}</h1>
//           </div>
  
//           <div className="option flex items-center mb-4">
//             <input
//               name="select"
//               type="radio"
//               onChange={handleInput}
//               className="checkedValue w-6 h-6 cursor-pointer"
//               value={data[index].a}
//             />
//             <p className="ml-3 text-lg">A: {data[index].a}</p>
//           </div>
  
//           <div className="option flex items-center mb-4">
//             <input
//               name="select"
//               type="radio"
//               onChange={handleInput}
//               className="checkedValue w-6 h-6 cursor-pointer"
//               value={data[index].b}
//             />
//             <p className="ml-3 text-lg">B: {data[index].b}</p>
//           </div>
  
//           <div className="option flex items-center mb-4">
//             <input
//               name="select"
//               type="radio"
//               onChange={handleInput}
//               className="checkedValue w-6 h-6 cursor-pointer"
//               value={data[index].c}
//             />
//             <p className="ml-3 text-lg">C: {data[index].c}</p>
//           </div>
  
//           <div className="option flex items-center mb-6">
//             <input
//               name="select"
//               type="radio"
//               onChange={handleInput}
//               className="checkedValue w-6 h-6 cursor-pointer"
//               value={data[index].d}
//             />
//             <p className="ml-3 text-lg">D: {data[index].d}</p>
//           </div>
//         </div>
  
//         <div className="score text-center"></div>
  
//         <div className="btns text-center mt-6">
//           <button
//             id="next"
//             onClick={next}
//             className="w-36 h-10 bg-blue-800 text-white text-lg rounded-lg hover:bg-blue-900 transition"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//      )
//    }
   
//    export default QuizSS;

import React, { useState } from 'react';
import { Data } from "./Data";
import { useSelector } from 'react-redux'; // Make sure you're accessing theme from Redux
import { useNavigate } from 'react-router-dom';

const QuizSS = () => {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const theme = useSelector((state) => state.theme.theme);  // Access the theme from Redux

  const next = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      document.querySelector(".score").innerHTML = `<p>Your Score: ${score}/10</p>`;

      document.querySelector(".quiz").innerHTML = "";

      let nextBtn = document.querySelector("#next");
      nextBtn.innerHTML = "Retry";
      nextBtn.classList.add("reset");
      const reset = document.querySelector(".reset");
      reset.addEventListener("click", () => {
        window.location.reload();
      });
    }

    const checked = document.querySelectorAll(".checkedValue");
    checked.forEach((curVal) => {
      curVal.checked = false;
    });
  };

  const handleInput = (event) => {
    let chooseVal = event.target.value;
    if (chooseVal === data[index].ans) {
      setScore(score + 1);
    }
  };

  return (
    <div className={`w-full h-[600px] pt-6  ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
    <div>
    <div className={`container mx-auto p-8 rounded-xl shadow-md  ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
      <div className={`quiz ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Q: {data[index].q}</h1>
        </div>

        <div className="option flex items-center mb-4">
          <input
            name="select"
            type="radio"
            onChange={handleInput}
            className="checkedValue w-6 h-6 cursor-pointer"
            value={data[index].a}
          />
          <p className="ml-3 text-lg">{`A: ${data[index].a}`}</p>
        </div>

        <div className="option flex items-center mb-4">
          <input
            name="select"
            type="radio"
            onChange={handleInput}
            className="checkedValue w-6 h-6 cursor-pointer"
            value={data[index].b}
          />
          <p className="ml-3 text-lg">{`B: ${data[index].b}`}</p>
        </div>

        <div className="option flex items-center mb-4">
          <input
            name="select"
            type="radio"
            onChange={handleInput}
            className="checkedValue w-6 h-6 cursor-pointer"
            value={data[index].c}
          />
          <p className="ml-3 text-lg">{`C: ${data[index].c}`}</p>
        </div>

        <div className="option flex items-center mb-6">
          <input
            name="select"
            type="radio"
            onChange={handleInput}
            className="checkedValue w-6 h-6 cursor-pointer"
            value={data[index].d}
          />
          <p className="ml-3 text-lg">{`D: ${data[index].d}`}</p>
        </div>
      </div>

      <div className="score text-center"></div>

      <div className="btns text-center mt-6">
        <button
          id="next"
          onClick={next}
          className={`w-36 h-10 text-white text-lg rounded-lg hover:bg-blue-900 transition ${theme === 'light' ? 'bg-blue-800' : 'bg-blue-600'}`}
        >
          Next
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default QuizSS;
