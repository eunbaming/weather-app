import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const cities = ["Seoul", "Washington", "New York", "Paris"];
  const API_KEY = process.env.REACT_APP_API_KEY

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lng);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lng) => {
    try {
      let url = new URL(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`);
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  const getWeatherCity = async () => {
    try {
      let url = new URL(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  const handleCityChange = (city) => {
    if (city === "current") {
      setLoading(true);
      setCity("");
    } else {
      setCity(city);
    };
  };

  useEffect(() => {
    if(city == ""){
      getCurrentLocation();
    } else {
      getWeatherCity();
    };
  },[city]);

  return (
    <div>
      {loading ? (<div className='container'><ClipLoader
          color="#f88c6b"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
        /></div>) : !error ? (<div className='container'>
        <WeatherBox weather = {weather}></WeatherBox>
        <WeatherButton cities = {cities} selectedCity={city} handleCityChange = {handleCityChange}></WeatherButton>
      </div>)
      : (error)}
    </div>
  );
};

export default App;
