import { configureStore } from '@reduxjs/toolkit'

import navReducer from 'reducers/navigation'

export const store = configureStore({
  reducer: {
    nav: navReducer
  }
})