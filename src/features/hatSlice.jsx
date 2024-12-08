import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hats: [], // Store all the hats dedicated to mentors
};

const hatSlice = createSlice({
  name: 'hats',
  initialState,
  reducers: {
    dedicateHat: (state, action) => {
      const { mentorId, hatType, message } = action.payload;
      // Add a new hat dedication entry
      state.hats.push({ mentorId, hatType, message });
    },
  },
});

export const { dedicateHat } = hatSlice.actions;

export default hatSlice.reducer;
