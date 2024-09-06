import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const getAllMenu = createAsyncThunk(
  "menu/getAllMenu",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/menu");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postMenu = createAsyncThunk(
  "menu/postMenu",
  async (menuData, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.post("/menu", menuData);
      dispatch(getAllMenu());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteMenuRequest = createAsyncThunk(
  "menu/deleteMenuRequest",
  async (menuId, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.delete("/menu" + "/" + menuId);
      dispatch(getAllMenu());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const menuRequest = createAsyncThunk(
  "menu/meneRequest",
  async ({ foodId, isChecked }, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.patch(`/menu/${foodId}`, { isChecked });
      dispatch(getAllMenu());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
