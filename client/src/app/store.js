import { configureStore } from '@reduxjs/toolkit'
import countriesSlice from './reducers/countriesSlice'
import leaguesSlice from './reducers/leaguesSlice'
import teamsSlice from './reducers/teamsSlice'
import sessionSlice from './reducers/sessionSlice'


export const store = configureStore({
  reducer: {
    countries: countriesSlice,
    leagues: leaguesSlice,
    teams: teamsSlice,
    session: sessionSlice,
  },
})