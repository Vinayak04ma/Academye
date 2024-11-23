import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../features/signIn/userSlice'; 

export const store=configureStore({
   
    reducer: {
        user: userReducer,
      },
});
export default store;
//single source of truth