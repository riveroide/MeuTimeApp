import { setAllCountries } from "../reducers/countriesSlice";


const getAllCountries = () => async (dispatch) => {
    const res = await fetch("https://v3.football.api-sports.io/countries",{
        method: "GET",
        headers: {
            "x-apisports-key":"02ae1238464c158f8dc35e332f628de4",
            "x-rapidapi-host": "v3.football.api-sports.io"
    }})
    const data = await res.json();
    console.log(data, 'soy dat response')
    dispatch(setAllCountries(data.response))

    
    }

export default getAllCountries;
