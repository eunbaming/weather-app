import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lng = position.coords.longitude

      console.log("현재 위치는", lat, lng)
      getWeatherByCurrentLocation(lat, lng)
    })
  }

  const getWeatherByCurrentLocation = async (lat, lng) => {
    let url = new URL(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d382a276cc3388b86ad26bfbb4a0451c`)
    let response = await fetch(url)
    let data = await response.json()

    console.log("data", data)
  }

  useEffect(() => {
    getCurrentLocation()
  },[])
  return (
    <div>
      <div className='container'>
        <WeatherBox></WeatherBox>
        <WeatherButton></WeatherButton>
      </div>
    </div>
  );
}

export default App;
