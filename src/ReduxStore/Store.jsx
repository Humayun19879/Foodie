import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './Slices/Menu/index.jsx'
import PageReducer from './Slices/Page/Page.jsx'



export const store = configureStore({
   reducer: {
    menu: menuReducer,
    Page:PageReducer,


  },
})