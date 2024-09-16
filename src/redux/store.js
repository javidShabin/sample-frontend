import { configureStore } from '@reduxjs/toolkit'
import useReducer from '../redux/features/userSlice'

export const store = configureStore({
  reducer: {
    user: useReducer
  },
})