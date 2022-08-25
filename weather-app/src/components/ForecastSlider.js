import React, { Component } from "react";
import Forecast from "./Forecast"
import axios from 'axios';
import {useState, useEffect} from 'react';

const ForecastSlider = (props) => {
  const [foreData, setForeData] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);


  var today = new Date();
  var time = today.toLocaleTimeString();
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${props.Latitude}&lon=${props.Longitude}&appid=${props.API}&units=metric`).then((res)=>{
  
  setForeData(res.data);
    })
    .catch((err) =>{
  console.log(err);
    } )
  
  }, [props.Latitude])
  if (foreData.length != 0){

const sliderChange = event => {
  setSliderValue(event.target.value);
}

const forecast = foreData.list[sliderValue];

   return (
   <div className="ForecastSlider">
    <h1>{time}</h1>
   <input id="dayInput" type="range" min="0" max="39" step="1" onChange={sliderChange}/>
    
   <Forecast forecast={forecast}
   time={forecast.dt_txt}/>
   </div>
   );
   }
  }
export default ForecastSlider;