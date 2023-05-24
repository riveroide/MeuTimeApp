import { setAllLeagues } from "../reducers/leaguesSlice";

const getLeagues = (name) => async (dispatch) => {
    const res = await fetch(`https://v3.football.api-sports.io/leagues?country=${name}`, {
        method: "GET",
        headers: {
            "x-apisports-key": "02ae1238464c158f8dc35e332f628de4",
            "x-rapidapi-host": "v3.football.api-sports.io"
        }
    })
    const data = await res.json();
    dispatch(setAllLeagues(data.response))
}

export default getLeagues;