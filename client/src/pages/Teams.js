import React from 'react'
import AllTeams from '../components/AllTeams'

function Teams({api}) {
  return (
    <div><AllTeams api={api}/></div>
  )
}

export default Teams