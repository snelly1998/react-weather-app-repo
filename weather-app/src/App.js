
import './App.css';
import React, { useState } from 'react';
import Weather from './components/Weather';
import ForecastSlider from './components/ForecastSlider';
import Pollution from './components/Pollution'
function App() {
  const [isForecast, setIsForecast] = useState(0);
  const API = "087284ca65b595963c3c95afd8baff9d"
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }
  );


if (latitude != 0){
  if (isForecast == 0 ){
return(
  <div className='App'>
  <Weather Latitude={latitude} Longitude={longitude} API={API}/>
  <button className='changeButton' onClick={() => {setIsForecast(1)}}>
  
<p>See Forecast</p>
    </button>

    </div>
)
  }else if (isForecast == 1){
  return (
    <div className='App'>
  <ForecastSlider Latitude={latitude} Longitude={longitude} API={API}/>
  <button className='changeButton' onClick={() => {setIsForecast(2)}}>
<p>See Pollution</p>
    </button>
    </div>)}
    else if (isForecast == 2){
      return (
        <div className='App'>
          <Pollution Latitude={latitude} Longitude={longitude} API={API} />
          <button className='changeButton' onClick={() => {setIsForecast(0)}}>
<p>See Weather</p>
    </button>
        </div>
      )
    }
}

}

export default App;
