import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { menuReducer } from "./slices/menuSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    menuu: menuReducer,
  },
});
