import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Info from './components/Info';
import Loading from './components/Loading';
import LocationError from './components/LocationError';


function App() {

  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temperature, setTemperature] = useState()
  const [isError, setIsError] = useState(false)


  useEffect(() => {
    if (coords) {
      const apiKey = '53e9c52ff9a18639f44e77ac403ba4cd';
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`;
      axios.get(URL)
        .then(res => {
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = (celsius * 9 / 5 + 32).toFixed(1)
          const feelsLikeC = (res.data.main.feels_like - 273.15).toFixed(1)
          const feelsLikeF = (feelsLikeC * 9 / 5 + 32).toFixed(1)
          setTemperature({celsius, farenheit, feelsLikeC, feelsLikeF})
          setWeather(res.data)
        })
        .catch(err => {
          
        })
    }
  }, [coords])

  console.log(weather)

  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
      setCoords(obj)
    };
    const error = () => setIsError(true)


    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  if(isError) {
    return <LocationError />
  }


  return (

    <div className="App">

      <h2 className='information'>{ weather ? <Info weather={weather} temperature={temperature}/> : <Loading /> }</h2>
      
    </div>
  )
}

export default App
