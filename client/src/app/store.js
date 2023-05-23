import { configureStore } from '@reduxjs/toolkit'
import countriesSlice from './reducers/countriesSlice'
import leaguesSlice from './reducers/leaguesSlice'


export const store = configureStore({
  reducer: {
    countries: countriesSlice,
    leagues: leaguesSlice,
  },
})