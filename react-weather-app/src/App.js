
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

      axios.get(`${URL}?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly,daily&appid=${API_KEY}`)
      .then((WeatherData) => {
        console.log(WeatherData.data);
        setTemperature(WeatherData.data.main.temp);
        setSunrise(WeatherData.data.sys.sunrise);
        setSunset(WeatherData.data.sys.sunset);
        setHumidity(WeatherData.data.main.humidity);
        setCity(WeatherData.data.name);
        var theDate = new Date();
        setCurTime(theDate.toDateString().slice(0,-5)+','+ ' '+theDate.toTimeString().slice(0,8));
        setIcon(WeatherData.data.weather[0].icon)
        
      });

 
    }, [latitude, longitude])

    return (
      <div className="main">
    <Header />
<Forecast /></div>
    );
  }

  export default App;
