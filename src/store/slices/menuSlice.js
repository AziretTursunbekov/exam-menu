import { createSlice } from "@reduxjs/toolkit";
import { getAllMenu } from "../thunks/menuThunks";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: [],
    error: "",
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.menu = action.payload;
      })
      .addCase(getAllMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const menuReducer = menuSlice.reducer;
