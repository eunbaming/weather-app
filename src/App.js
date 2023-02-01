import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("")

  const cities = ["Seoul", "Washington", "New York", "Paris"]

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lng = position.coords.longitude

      console.log("현재 위치는", lat, lng)
      getWeatherByCurrentLocation(lat, lng)
    })
  }

  const getWeatherByCurrentLocation = async (lat, lng) => {
    let url = new URL(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=720198143088e04d892298f2c82ddc73&units=metric`)
    let response = await fetch(url)
    let data = await response.json()
    console.log("data", data)
    setWeather(data)
  }

  const getWeatherCity = async () => {
    let url = new URL(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=720198143088e04d892298f2c82ddc73&units=metric`)
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
  }

  useEffect(() => {
    if(city == ""){
      getCurrentLocation()
    } else {
      getWeatherCity()
    }
  },[city])

  return (
    <div>
      <div className='container'>
        <WeatherBox weather = {weather}></WeatherBox>
        <WeatherButton cities = {cities} setCity = {setCity}></WeatherButton>
      </div>
    </div>
  );
}

export default App;
