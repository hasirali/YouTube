import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
    // REDUCER (consist of small Reducer from differnt Slices )
    reducer: {
        app: appSlice,
    },
});

export default store;
