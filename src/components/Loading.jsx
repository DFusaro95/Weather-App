import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div className="loader__container">
      <h3 className="loader__title">:: LOADING ::</h3>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Loading