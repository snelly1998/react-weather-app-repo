import {useState, useEffect} from 'react';
import axios from 'axios';
import Icon from './Icon'
const Forecast = (props) => {

  console.log(props.forecast);
   return (
   <div className="Forecast">
   <div className ="forecast-wrapper">
    <div className ="forecast-header">
      <h3>{props.time}</h3>
    </div>
    <Icon icon={props.forecast.weather[0].icon} />
   <div className="grid-2 forecast-wrapper">
    <div className="column-row">
    <div className ="forecast-container flex">
<p>test</p>
    </div>
    <div className ="forecast-container flex">
<p>test</p>
    </div>
    </div>
    <div className="column-row">
    <div className ="forecast-container flex">
<p>test</p>
    </div>
    <div className ="forecast-container flex">
<p>test</p>
    </div>
</div>
</div>
    </div>
   </div>
   );
}

export default Forecast;