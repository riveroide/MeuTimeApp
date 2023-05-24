import React from "react"
import {Routes, Route} from "react-router-dom"
import Countries from "./pages/Coutries"
import NavBar from "./components/NavBar"
import AllLeagues from "./components/AllLeagues"
import Teams from "./pages/Teams"
import TeamInfo from "./pages/TeamInfo"
export default function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Countries/>} />
      <Route path="/leagues/:name" element={<AllLeagues/>}/>
      <Route path="/:leagueId/:seasonYear" element={<Teams/>}/>
      <Route path="/:leagueId/:seasonYear/:teamId" element={<TeamInfo/>}/>
    </Routes>
      
    </div>
    
  )
}
