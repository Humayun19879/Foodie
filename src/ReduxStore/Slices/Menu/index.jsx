import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react';

const initialState = {
  currentMenu: 'all',
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu:(state,gmenu)=>{
        state.currentMenu = gmenu.payload;

    }
  },
})

// Action creators are generated for each case reducer function
export const { setMenu } = menuSlice.actions

export default menuSlice.reducer