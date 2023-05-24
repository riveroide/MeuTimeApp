import { setAllTeams, setTime, setResults } from "../reducers/teamsSlice";

export const getAllTeams = (leagueId, seasonYear) => async (dispatch) => {
    const res = await fetch(`https://v3.football.api-sports.io/teams?league=${leagueId}&season=${seasonYear}`, {
        method: "GET",
        headers: {
            "x-apisports-key": "02ae1238464c158f8dc35e332f628de4",
            "x-rapidapi-host": "v3.football.api-sports.io"
        }
    })
    const data = await res.json();
    dispatch(setAllTeams(data.response))
}

export const getTeam = (leagueId, seasonYear, teamId) => async (dispatch) => {
    const res = await fetch(`https://v3.football.api-sports.io/players?league=${leagueId}&season=${seasonYear}&team=${teamId}`, {
        method: "GET",
        headers: {
            "x-apisports-key": "02ae1238464c158f8dc35e332f628de4",
            "x-rapidapi-host": "v3.football.api-sports.io"
        }
    })
    const data = await res.json();
    dispatch(setTime(data.response))
}

export const getResults = (leagueId, seasonYear, teamId) => async (dispatch) => {
    const res = await fetch(`https://v3.football.api-sports.io/teams/statistics?league=${leagueId}&season=${seasonYear}&team=${teamId}`, {
        method: "GET",
        headers: {
            "x-apisports-key": "02ae1238464c158f8dc35e332f628de4",
            "x-rapidapi-host": "v3.football.api-sports.io"
        }
    })
    const data = await res.json();
    dispatch(setResults(data.response))
}
