import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "entities/theme/model/state";

const initialState: ThemeState = {
  isThemeDark: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: state => {
      state.isThemeDark = !state.isThemeDark;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice;
