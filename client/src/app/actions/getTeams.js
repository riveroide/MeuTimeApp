import { setAllTeams, setTime, setResults } from "../reducers/teamsSlice";

export const getAllTeams = (leagueId, seasonYear,apiKey) => async (dispatch) => {
    const res = await fetch(`https://v3.football.api-sports.io/teams?league=${leagueId}&season=${seasonYear}`, {
        method: "GET",
        headers: {
            "x-apisports-key": apiKey
        }
    })
    const data = await res.json();
    console.log('data',data)
    dispatch(setAllTeams(data.response))
}

export const getTeam = (leagueId, seasonYear, teamId,apiKey) => async (dispatch) => {
    const res = await fetch(`https://v3.football.api-sports.io/players?league=${leagueId}&season=${seasonYear}&team=${teamId}`, {
        method: "GET",
        headers: {
            "x-apisports-key":apiKey
        }
    })
    const data = await res.json();
    dispatch(setTime(data.response))
}

export const getResults = (leagueId, seasonYear, teamId,apiKey) => async (dispatch) => {
    const res = await fetch(`https://v3.football.api-sports.io/teams/statistics?league=${leagueId}&season=${seasonYear}&team=${teamId}`, {
        method: "GET",
        headers: {
            "x-apisports-key":apiKey
        }
    })
    const data = await res.json();
    dispatch(setResults(data.response))
}
