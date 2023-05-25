import React from 'react'
import AllLeagues from '../components/AllLeagues'

function Leagues({api}) {
  return (
    <div><AllLeagues api={api}/></div>
  )
}

export default Leagues