import React from 'react'
import LoginForm from '../components/LoginForm'

function Home({setApi}) {
  return (
    <div><LoginForm setApi={setApi}/></div>
  )
}

export default Home