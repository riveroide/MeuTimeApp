import { setApiKey } from "../reducers/sessionSlice";

export const getSession = (apiKey) => async (dispatch) => {
    const res = await fetch(`https://v3.football.api-sports.io/status`, {
        method: "GET",
        headers: {
            "x-apisports-key": apiKey,
        }
    })
    const data = await res.json();
    
    console.log('datadentrodesession',data)

    if(data.errors?.token){
        await dispatch(setApiKey(false))
    } else if(data.response.account){
        await dispatch(setApiKey(true))
    }
    
    
}
