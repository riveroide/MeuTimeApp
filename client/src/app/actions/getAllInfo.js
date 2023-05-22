import { setAllInfo } from "../reducers/infoSlice";


const getAllInfo = () => async (dispatch) => {
    const res = await fetch("https://v3.football.api-sports.io/countries",{
        method: "GET",
        headers: {
            "x-apisports-key":"a418de72759ec8bad08690488bfb8e95",
            "x-rapidapi-host": "v3.football.api-sports.io"
    }})
    const data = await res.json();
    dispatch(setAllInfo(data.response))

    
    }

export default getAllInfo;
