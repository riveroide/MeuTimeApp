import {createSlice} from '@reduxjs/toolkit'

export const teamsSlice = createSlice({
    name: 'teams',
    initialState: {
        allTeams: [],
        team: {},
        teaminfo:{}
    },
    reducers: {
        setAllTeams: (state, action) => {
            state.allTeams = action.payload;
        },
        setTime: (state, action) => {
            state.team = action.payload;
        },
        setResults : (state, action) => {
            state.teaminfo = action.payload;
        }

    }
})


export const {setAllTeams, setTime , setResults} = teamsSlice.actions

export default teamsSlice.reducer