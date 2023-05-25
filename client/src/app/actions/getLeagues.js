import { setAllLeagues } from "../reducers/leaguesSlice";

const getLeagues = (name,apiKey) => async (dispatch) => {
    const res = await fetch(`https://v3.football.api-sports.io/leagues?country=${name}`, {
        method: "GET",
        headers: {
            "x-apisports-key": apiKey
        }
    })
    const data = await res.json();
    dispatch(setAllLeagues(data.response))
}

export default getLeagues;