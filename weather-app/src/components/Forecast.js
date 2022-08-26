import {useState, useEffect} from 'react';
import axios from 'axios';
import Icon from './Icon'
import Wind from './Wind'
const Forecast = (props) => {

  let precipitation = 'There will be no precipitation'
if (props.forecast.rain !== undefined){
  precipitation = `There will be ${props.forecast.rain['3h']} mm of rain/3hr`
} else if (props.forecast.snow !== undefined){
  precipitation = `There will be ${props.forecast.snow['3h']} mm of snow`
}

const forecastDay = new Date(props.forecast.dt_txt);
let day = forecastDay.getDay();
let date = forecastDay.getDate();

  console.log(props.forecast);
   return (
   <div className="Forecast">
   <div className ="forecast-wrapper">
    <div className ="forecast-header">
      <h3>{props.time}</h3>
      <div className="flex-row center">
      <Wind wind={props.forecast.wind} />
    <Icon icon={props.forecast.weather[0].icon} text={props.forecast.weather[0].description}/>

    </div>
    </div>


   <div className="grid-2 forecast-wrapper">
    <div className="column-row">
    <div className ="forecast-container flex">

<p>Temperature: {props.forecast.main.temp} °C</p>
<p className='feelsLike'>Feels like: {props.forecast.main.feels_like} °C</p>
    </div>
    <div className ="forecast-container flex-row flex-center">
<p>Cloud Coverage: {props.forecast.clouds.all}%</p>
<progress className="vertical-prog" max="100" value={props.forecast.clouds.all}> </progress>    </div>
    <div className='forecast-container flex'>
      <p>Visibility {props.forecast.visibility / 1000} km</p>
    </div>
    </div>
    <div className="column-row">
    <div className ="forecast-container flex">
<p>{precipitation}</p>
    </div>
    <div className ="forecast-container flex-row flex-center">
<p>Humidity: {props.forecast.main.humidity}%</p>
<progress className="vertical-prog" max="100" value={props.forecast.main.humidity}> </progress>
    </div>

</div>
</div>
  </div>
   </div>
   );
}

export default Forecast;