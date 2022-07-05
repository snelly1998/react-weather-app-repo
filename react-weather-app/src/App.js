
  import axios from 'axios';
  import { useEffect, useState } from 'react';
  import './App.css';
  import Header from './components/Header'
  import WeatherCard from './components/WeatherCard';
  import Forecast from './components/Forecast'

  const URL = 'https://api.openweathermap.org/data/2.5/weather'
  const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast'
  const API_KEY = '087284ca65b595963c3c95afd8baff9d'

  function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [timezone, setTimeZone] = useState(null);
  const [curTime, setCurTime] = useState(null);
  const [icon, setIcon] = useState('');
  const [forecast, setForecast] = useState([]);
  const [isForecast, setIsForecast] = useState(false);



    useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position){
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });
    if (latitude != null){
      axios.get(`${URL}?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly,daily&appid=${API_KEY}`)
      .then((WeatherData) => {
        setTemperature(WeatherData.data.main.temp);
        setSunrise(WeatherData.data.sys.sunrise);
        setSunset(WeatherData.data.sys.sunset);
        setHumidity(WeatherData.data.main.humidity);
        setCity(WeatherData.data.name);
        var theDate = new Date();
        setCurTime(theDate.toDateString().slice(0,-5)+','+ ' '+theDate.toTimeString().slice(0,8));
        setIcon(WeatherData.data.weather[0].icon);
      });}
        
      axios.get(`${forecastURL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
      .then((forecastData) => {

        setForecast(forecastData.data.list.forecast);
      
      });
    }, [latitude, longitude])

    return (
      <div className="main">
    <Header />
    if ()
    <WeatherCard temperature={ temperature }
      humidity={humidity}
      sunrise={sunrise}
      sunset={sunset}
      city={city}
      timezone={timezone}
      icon={icon}
      curTime={curTime}
    />



      </div>
    );
  }

  export default App;
