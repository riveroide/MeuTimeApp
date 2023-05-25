import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Countries from "./pages/Countries";
import NavBar from "./components/NavBar";

import Teams from "./pages/Teams";
import TeamInfo from "./pages/TeamInfo";
import Home from "./pages/Home";
import Leagues from "./pages/Leagues";

export default function App() {
  const [api, setApi] = useState("");
  return (
    <div>
      <NavBar api={api} setApi={setApi} />
      <Routes>
        <Route path="/" element={<Home setApi={setApi} />} />
        <Route path="/countries" element={<Countries api={api}/>} />
        <Route path="/leagues/:name" element={<Leagues api={api}/>} />
        <Route path="/:leagueId/:seasonYear" element={<Teams api={api}/>} />
        <Route path="/:leagueId/:seasonYear/:teamId" element={<TeamInfo api={api}/>} />
      </Routes>
    </div>
  );
}
