import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../features/signIn/userSlice';
import themeReducer from '../features/Theme/Theme'; 
import hatReducer from '../features/hatSlice';

export const store=configureStore({
   
    reducer: {
        user: userReducer,
        theme:themeReducer,
        hats: hatReducer,

      },
});
export default store;
//single source of truth
