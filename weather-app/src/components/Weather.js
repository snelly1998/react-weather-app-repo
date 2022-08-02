import axios from 'axios';
import React, { useEffect, useState } from 'react';
import weatherImg from '../imgs/weatherArrow2.png'
const Weather = (props) => {
const [weatherData, setWeatherData] = useState([]);

console.log(props);

useEffect(() => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${props.Latitude}&lon=${props.Longitude}&appid=${props.API}&units=metric`).then((res)=>{

setWeatherData(res.data);
  })
  .catch((err) =>{
console.log(err);
  } )

}, [props.Latitude])

if (weatherData.length != 0){
  console.log(weatherData);
  const weatherIcon = {
    transform: 'rotate(' + weatherData.wind.deg + 'deg)',
    width:'50px',
  };



   return (
   <div className="Weather">
    <h1 className='weather-name'>{weatherData.name}</h1>
    <div className='weather-wrapper'>
    <div className='weather-header'>
    
    <h2 className='time'>{Date(weatherData.dt)}</h2>
    <p className='wind-speed'>Wind Speed: {weatherData.wind.speed} m/s </p>
    <div className='wind-container grid-container'>
      <div></div>
      <div><p>N</p></div><div></div>
    <div><p>W</p></div>
    <img src={weatherImg} style={weatherIcon}/>
    <div><p>E</p></div>
    <div></div><div><p>S</p></div>
    </div>
    </div>
    <div className='grid-2 weather-wrapper'>
      <div className='column-row'>
   <div className='weather-container flex half'>
  <p>Temperature: {weatherData.main.temp} °C</p>
  <p className='feelsLike'>Feels Like: {weatherData.main.feels_like} °C</p>
   </div>
   <div className='weather-container flex half'>
    <p>Humidity: {weatherData.main.humidity} %</p>
   </div>
   </div><div className='column-row'>
   <div className='weather-container flex half'>
    <p>Humidity: {weatherData.main.humidity} %</p>
   </div>
   <div className='weather-container flex half'>
    <p>Humidity: {weatherData.main.humidity} %</p>
   </div>
   </div>
   </div>
   </div>
   </div>
   );
   }
}

export default Weather;