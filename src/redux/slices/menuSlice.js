import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: [],
  initialMenu: [],
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    setInitialMenu: (state, action) => {
      state.initialMenu = action.payload;
    },
  },
});

export const { setMenu, setInitialMenu } = menuSlice.actions;

export default menuSlice.reducer;
