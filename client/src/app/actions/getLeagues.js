import { setAllLeagues } from "../reducers/leaguesSlice";

const getLeagues = (name) => async (dispatch) => {
    const res = await fetch(`https://v3.football.api-sports.io/leagues?country=${name}`, {
        method: "GET",
        headers: {
            "x-apisports-key": "fdc99ff341ad749d2e6fd8b856874059",
            "x-rapidapi-host": "v3.football.api-sports.io"
        }
    })
    const data = await res.json();
    console.log(data.response,'soydata')
    dispatch(setAllLeagues(data.response))
}

export default getLeagues;