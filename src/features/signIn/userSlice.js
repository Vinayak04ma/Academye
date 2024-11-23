import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  name: '',
  email: '',
  phone: '',
  age: '',
  examGoal: '',
  targetExamYear: '',
  isSignedUp: false, 
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
      state.isSignedUp = true; 
    },
    clearUserData: (state) => {
      state.name = '';
      state.email = '';
      state.phone = '';
      state.age = '';
      state.examGoal = '';
      state.targetExamYear = '';
      state.isSignedUp = false; 
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
