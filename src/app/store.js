import { configureStore, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    increment: (state) => {
      return state;
    },
  },
});
export const { increment } = userSlice.actions;

export const store = configureStore({
  reducer: userSlice.reducer,
});
