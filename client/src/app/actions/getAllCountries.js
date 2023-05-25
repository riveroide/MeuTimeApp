import { useSelector } from "react-redux";
import { setAllCountries } from "../reducers/countriesSlice";


const getAllCountries = (apiKey) => async (dispatch) => {
    
    
    const res = await fetch("https://v3.football.api-sports.io/countries",{
        method: "GET",
        headers: {
            "x-apisports-key":apiKey,
    }})
    const data = await res.json();
    dispatch(setAllCountries(data.response))

    
    }

export default getAllCountries;
