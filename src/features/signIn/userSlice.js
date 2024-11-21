// import { createSlice } from '@reduxjs/toolkit';

// // Initial state, check localStorage for stored data
// const initialState = {
//   name: localStorage.getItem('name') || '',
//   email: localStorage.getItem('email') || '',
//   number: localStorage.getItem('number') || '',
//   examType: localStorage.getItem('examType') || '',
//   goal: localStorage.getItem('goal') || '',
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUserData: (state, action) => {
//       const { name, email, number, examType, goal } = action.payload;
//       state.name = name;
//       state.email = email;
//       state.number = number;
//       state.examType = examType;
//       state.goal = goal;

//       // Persist data to localStorage
//       localStorage.setItem('name', name);
//       localStorage.setItem('email', email);
//       localStorage.setItem('number', number);
//       localStorage.setItem('examType', examType);
//       localStorage.setItem('goal', goal);
//     },
//   },
// });

// export const { setUserData } = userSlice.actions;
// export default userSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';

// // Initial state for user data
// const initialState = {
//   name: '',
//   email: '',
//   phone: '',
//   examType: '',
//   goal: ''
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUserData: (state, action) => {
//       state.name = action.payload.name;
//       state.email = action.payload.email;
//       state.phone = action.payload.phone;
//       state.examType = action.payload.examType;
//       state.goal = action.payload.goal;
//     },
//     logoutUser: (state) => {
//       state.name = '';
//       state.email = '';
//       state.phone = '';
//       state.examType = '';
//       state.goal = '';
//     }
//   }
// });

// // Export actions to be dispatched
// export const { setUserData, logoutUser } = userSlice.actions;

// export default userSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

// Initial state for user data
const initialState = {
  name: '',
  email: '',
  phone: '',
  age: '',
  examGoal: '',
  targetExamYear: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.age = action.payload.age;
      state.examGoal = action.payload.examGoal;
      state.targetExamYear = action.payload.targetExamYear;
    },
    logoutUser: (state) => {
      state.name = '';
      state.email = '';
      state.phone = '';
      state.age = '';
      state.examGoal = '';
      state.targetExamYear = '';
    }
  }
});

// Export actions to be dispatched
export const { setUserData, logoutUser } = userSlice.actions;

export default userSlice.reducer;

