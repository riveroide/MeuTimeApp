import React from "react"
import {Routes, Route} from "react-router-dom"
import Countries from "./pages/Coutries"
import NavBar from "./components/NavBar"
import AllLeagues from "./components/AllLeagues"
export default function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Countries/>} />
      <Route path="/leagues/:name" element={<AllLeagues/>}/>
    </Routes>
      
    </div>
    
  )
}
