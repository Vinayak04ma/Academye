import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  name: '',
  email: '',
  phone: '',
  age: '',
  examGoal: '',
  targetExamYear: '',
  isSignedUp: false, // Add isSignedUp to track sign-up status
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
      state.isSignedUp = true; // Mark the user as signed up
    },
    clearUserData: (state) => {
      state.name = '';
      state.email = '';
      state.phone = '';
      state.age = '';
      state.examGoal = '';
      state.targetExamYear = '';
      state.isSignedUp = false; // Reset the signed-up status
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
