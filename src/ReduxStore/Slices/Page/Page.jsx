import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  currentPage: 'home',
}

export const PageSlice = createSlice({
  name: 'Page',
  initialState,
  reducers: {
    setPage:(state,givenPage)=>{
        state.currentPage = givenPage.payload;
        console.log(state.currentPage)

    }
  },
})

// Action creators are generated for each case reducer function
export const { setPage } = PageSlice.actions

export default PageSlice.reducer