import {createSlice} from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        apiKeySession:[],
    },
    reducers: {
        setApiKey: (state, action) => {
            state.apiKey = action.payload;
        },
    
    }
})


export const {setApiKey} = sessionSlice.actions

export default sessionSlice.reducer