import { configureStore } from "@reduxjs/toolkit";
import homeSlide from "../pages/HomeTemplate/Home/Slice";

const store = configureStore({
    reducer :{
        homeSlide,
    }
});
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch