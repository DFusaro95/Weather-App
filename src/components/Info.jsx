import React, { useState } from 'react'

import './Info.css'

const Info = ({weather, temperature}) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const changeTemp = () => setIsCelsius(!isCelsius)

  return (
    <article className='country__box animate__animated animate__fadeIn'>
      <h1 className='country__info'>{`${weather?.name}, ${weather?.sys.country}`}</h1>
      <section className="country__icon animate__animated animate__fadeInDown">
        <img src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="Icon" className='country__img'/>
        <h2 className="temperature__deg">
          <h2>{isCelsius ? `Temp: ${temperature?.celsius} °C` : `Temp: ${temperature?.farenheit} °F `}</h2>
          <h2>{isCelsius ? `Feels like: ${temperature?.feelsLikeC} °C` : `Feels like: ${temperature.feelsLikeF} °F`}</h2>
        </h2>
      </section>
        <button className='country__button animate__animated animate__fadeIn' onClick={changeTemp}>{isCelsius ? 'Change Value to °F' : 'Change Value to °C'}</button>
      <section className="country__list animate__animated animate__fadeIn">
        <h3 className="country__sky animate__animated animate__fadeInUp">"{`${weather?.weather[0].description}`}"</h3>
        <ul className="list__info animate__animated animate__fadeInUp">
          <li className="country__wind">🌀 <span>Wind Speed:</span> {`${weather?.wind.speed}`} meter/sec</li>
          <li className="country__humidity">🌊 <span>Humidity:</span> {`${weather?.main.humidity}`} %</li>
          <li className="country__pressure">⚓ <span>Pressure:</span> {`${weather?.main.pressure}`} hPa</li>
        </ul>
      </section>
    </article>
  )
}

export default Info