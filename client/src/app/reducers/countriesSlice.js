import { createSlice } from '@reduxjs/toolkit'

export const countriesSlice = createSlice({
  name: 'countries',
  initialState :{
    allCountries:[],
  },
  reducers: {
    setAllCountries: (state,action) => {
    state.allCountries = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAllCountries } = countriesSlice.actions

export default countriesSlice.reducer