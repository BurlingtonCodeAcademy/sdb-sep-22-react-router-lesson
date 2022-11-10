import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function AboutMe() {
  let navigate = useNavigate()
  let { username } = useParams()
  return (
    <div>
      <h1>
      This about me component is rendered using /about route, {username}
      </h1>
      <ul>
        <li>useParams is a hook that allows us to extrapolate params from an endpoint on the client side</li>
        <li>That's how we get our name inside the h1</li>
      </ul>
      <p>What if I want to go back home?!</p>
      <ul>
        <li>useNavigate allows us to render component from another route without full page re-render</li>
        <li>useNavigate is the same as useHistory in Router v5</li>
        <li>import useNavigate method to a variable</li>
        <li>specify navigate("/endpoint") where you need to go</li>
        <li>navigate() must be used in a callback fx inside of an event (onclick, onchange, etc)</li>
      </ul>
      <button onClick={ () => { navigate("/") }}>Go Home</button>
    </div>
  )
}

export default AboutMe