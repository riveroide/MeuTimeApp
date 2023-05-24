import {createSlice} from '@reduxjs/toolkit'

export const teamsSlice = createSlice({
    name: 'teams',
    initialState: {
        allTeams: [],
        team: {},
    },
    reducers: {
        setAllTeams: (state, action) => {
            state.allTeams = action.payload;
        },
        setTime: (state, action) => {
            state.team = action.payload;
        }
    }
})


export const {setAllTeams, setTime} = teamsSlice.actions

export default teamsSlice.reducer