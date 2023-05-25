import React, { useEffect } from 'react'
import AllCountries from '../components/AllCountries'
import { useNavigate } from 'react-router-dom';

function Countries({api}) {
  const navigate = useNavigate();
  useEffect(() => {
 if(api === "")navigate('/')
  }, [api])
  
  return (
    <div><AllCountries api={api}/></div>
  )
}

export default Countries