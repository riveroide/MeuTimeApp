import React from 'react'
import AllCountries from '../components/AllCountries'

function Countries({api}) {
  return (
    <div><AllCountries api={api}/></div>
  )
}

export default Countries