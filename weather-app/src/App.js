
import './App.css';
import React, { useState } from 'react';
import Weather from './components/Weather';
import ForecastSlider from './components/ForecastSlider';
function App() {
  const [isForecast, setIsForecast] = useState(false);
  const API = "087284ca65b595963c3c95afd8baff9d"

  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }
  );


if (latitude != 0){
  if (isForecast == false ){
return(
  <div className='App'>
  <Weather Latitude={latitude} Longitude={longitude} API={API}/>
  <button className='changeButton' onClick={() => {setIsForecast(true)}}>
<p>See Forecast</p>
    </button>
    </div>
)
  }else{
  return (
    <div className='App'>
  <ForecastSlider Latitude={latitude} Longitude={longitude} API={API}/>
  <button className='changeButton' onClick={() => {setIsForecast(false)}}>
<p>See Weather</p>
    </button>
    </div>)}
}}

export default App;
