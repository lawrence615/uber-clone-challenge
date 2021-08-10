import { configureStore } from '@reduxjs/toolkit'

import navReducer from 'reducers/navSlice'

export const store = configureStore({
  reducer: {
    nav: navReducer
  }
})