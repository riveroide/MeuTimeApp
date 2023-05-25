import {createSlice} from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        apiKeySession:false,
    },
    reducers: {
        setApiKey: (state, action) => {
            state.apiKeySession = action.payload;
        },
    
    }
})


export const {setApiKey} = sessionSlice.actions

export default sessionSlice.reducer