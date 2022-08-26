import axios from 'axios';
import React, { useEffect, useState } from 'react';
import weatherImg from '../imgs/weatherArrow2.png'
import Icon from './Icon'
const Weather = (props) => {
const [weatherData, setWeatherData] = useState([]);
// This is messy as hell
useEffect(() => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${props.Latitude}&lon=${props.Longitude}&appid=${props.API}&units=metric`).then((res)=>{

setWeatherData(res.data);
  })
  .catch((err) =>{
console.log(err);
  } )

}, [props.Latitude])

if (weatherData.length !== 0){


  const weatherIcon = {
    transform: 'rotate(' + weatherData.wind.deg + 'deg)',
    width:'50px',
  };
    
  let date = new Date();
  let sunrise = new Date(weatherData.sys.sunrise * 1000);
  let sunset = new Date(weatherData.sys.sunset * 1000);
  let precipitation = "There is currently no precipitation";

  if (weatherData.rain !== undefined){
    precipitation = `${weatherData.rain['1h']} mm of rain in the past hour`;
  } else if (weatherData.snow !== undefined){
    precipitation = `${weatherData.snow['1h']} mm of snow in the past hour`;
  }

   return (
   <div className="Weather">
    <h1 className='weather-name'>{weatherData.name}</h1>
    <div className='weather-wrapper'>
    <div className='weather-header'>
    
    <h2 className='time'>{date.toLocaleString()}</h2>
  
    <div className="flex-row center">
      <div className="wind-wrapper">
    <p className='wind-speed'>Wind Speed: {weatherData.wind.speed} m/s </p>
    <div className='wind-container grid-container half'>
   
      <div></div>
      <div><p>N</p></div><div></div>
    <div><p>W</p></div>
    <img alt="Wind Direction" src={weatherImg} style={weatherIcon}/>
    <div><p>E</p></div>
    <div></div><div><p>S</p></div>
    </div>
    </div>
    <div className='weather-icon-container'>
<Icon icon={weatherData.weather[0].icon} text={weatherData.weather[0].description}/>

    </div>
    </div>
    </div>
    <div className='grid-2 weather-wrapper'>
      <div className='column-row'>
   <div className='weather-container flex'>
  <p>Temperature: {weatherData.main.temp} °C</p>
  <p className='feelsLike'>Feels Like: {weatherData.main.feels_like} °C</p>
   </div>
   <div className='weather-container flex-row flex-center'>
    <p>Cloud Coverage: {weatherData.clouds.all} %</p>
    <progress className="vertical-prog" max="100" value={weatherData.clouds.all}> </progress>
   </div>
   <div className='weather-container flex'>
    <p>Visibility: {weatherData.visibility / 1000} km</p>
   </div>
   </div><div className='column-row'>
   <div className='sunrise weather-container flex'>
    <p>Sunrise: {sunrise.toLocaleTimeString()}</p>
    <p>Sunset: {sunset.toLocaleTimeString()}</p>
   </div>
   <div className='weather-container flex-row flex-center'>
    <p>Humidity: {weatherData.main.humidity} %</p>
    <progress className="vertical-prog" max="100" value={weatherData.main.humidity}> </progress>
   </div>
   <div className='weather-container flex'>
    <p>{precipitation} </p>
   </div>
   </div>
   </div>
   </div>
   </div>
   );
   }
}

export default Weather;