import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

function App() {
  const [weather, setWeather] = useState(null)

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lng = position.coords.longitude

      console.log("현재 위치는", lat, lng)
      getWeatherByCurrentLocation(lat, lng)
    })
  }

  const getWeatherByCurrentLocation = async (lat, lng) => {
    let url = new URL(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d382a276cc3388b86ad26bfbb4a0451c&units=metric`)
    let response = await fetch(url)
    let data = await response.json()
    console.log("data", data)
    setWeather(data)
  }

  useEffect(() => {
    getCurrentLocation()
  },[])
  return (
    <div>
      <div className='container'>
        <WeatherBox weather = {weather}></WeatherBox>
        <WeatherButton></WeatherButton>
      </div>
    </div>
  );
}

export default App;
