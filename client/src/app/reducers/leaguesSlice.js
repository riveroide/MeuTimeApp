import { createSlice } from "@reduxjs/toolkit";

export const leaguesSlice = createSlice({
    name: "leagues",
    initialState: {
        allLeagues: [],
    },
    reducers: {
        setAllLeagues: (state, action) => {
            state.allLeagues = action.payload;
        }
    }
})


export const { setAllLeagues } = leaguesSlice.actions

export default leaguesSlice.reducer