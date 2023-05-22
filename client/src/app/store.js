import { configureStore } from '@reduxjs/toolkit'
import infoSlice from './reducers/infoSlice'


export const store = configureStore({
  reducer: {
    info: infoSlice
  },
})