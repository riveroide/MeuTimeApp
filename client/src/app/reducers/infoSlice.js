import { createSlice } from '@reduxjs/toolkit'

export const infoSlice = createSlice({
  name: 'info',
  initialState :{
    AllInfo:[],
  },
  reducers: {
    setAllInfo: (state,action) => {
    state.AllInfo = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAllInfo } = infoSlice.actions

export default infoSlice.reducer