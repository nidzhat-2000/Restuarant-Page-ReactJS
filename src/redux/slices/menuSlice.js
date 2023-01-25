import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: [],
  menuCategories: [],
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    setMenuCategories: (state, action) => {
      state.menuCategories = action.payload;
    },
  },
});

export const { setMenu, setMenuCategories } = menuSlice.actions;

export default menuSlice.reducer;
