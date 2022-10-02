import React from 'react'
import './LocationError.css'
import { BsArrowDownSquare } from "react-icons/bs";


const LocationError = () => {
  return (
    <div className='error__container animate__animated animate__fadeIn'>
      <h1 className="error__title animate__animated animate__fadeInDown">(T-T) Error (T-T) <br></br>Location is not enabled</h1>
      <p className="error__info animate__animated animate__fadeInDown">You might unlock your Location for the App to get the info of the city that you are in.</p>
      <h2 className="error__solution animate__animated animate__fadeInDown">You may go to: </h2>
      <ul className="solution__list animate__animated animate__fadeIn">
        <li className="list__items">Options</li>
        <li className="list__items"><BsArrowDownSquare /></li>
        <li className="list__items">Configuration</li>
        <li className="list__items"><BsArrowDownSquare /></li>
        <li className="list__items">Privacy & Security</li>
        <li className="list__items"><BsArrowDownSquare /></li>
        <li className="list__items">Site config</li>
        <li className="list__items"><BsArrowDownSquare /></li>
        <li className="list__items">Location</li>
      </ul>
      <h2 className="error__solution animate__animated animate__fadeInDown">Enable the location to the site to ask it to you, then refresh the page and click "Allow".<br></br> (^-^)</h2>
    </div>
  )
}

export default LocationError